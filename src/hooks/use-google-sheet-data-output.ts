import {
  LocalStorageKey,
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "@/utils/local-storage";
import { isBefore, parseISO, subHours } from "date-fns";
import Papa from "papaparse";
import { useState, useEffect } from "react";

// #region Types
export enum DataType {
  projects = 1,
  workplaces,
  competitions,
  skills,
  highlights,
  metadata,
}

export interface Highlight {
  date: string;
  title: string;
}

export interface Skill {
  category: string;
  skills: string;
}

export interface Competition {
  date: string;
  title: string;
  placement: string;
  description: string;
  skills: string;
}

export interface Project {
  title: string;
  dateFrom: string;
  dateTo: string;
  url: string;
  description: string;
  techStack: string;
  client: string;
  clientLogoUrl: string;
  devTeamSize: number;
}

export interface Workplaces {
  title: string;
  organization: string;
  organizationLogoUrl: string;
  organizationUrl: string;
  extraUrls: string;
  dateFrom: string;
  dateTo: string;
  description: string;
  techStack: string;
}

export interface Metadata {
  lastUpdated: string;
}

export interface GoogleSheetDataOutputType {
  [DataType.projects]: Project[];
  [DataType.workplaces]: Workplaces[];
  [DataType.competitions]: Competition[];
  [DataType.skills]: Skill[];
  [DataType.highlights]: Highlight[];
  [DataType.metadata]: Metadata[];
}
// #endregion

const GoogleSheetUrls = {
  [DataType.projects]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=0&single=true&output=csv",
  [DataType.workplaces]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=1788597116&single=true&output=csv",
  [DataType.competitions]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=1079686123&single=true&output=csv",
  [DataType.skills]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=11477177&single=true&output=csv",
  [DataType.highlights]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=919901926&single=true&output=csv",
  [DataType.metadata]:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAq5jmf5abBe_Z8P6xBu5c0RFDF4T-RstO0G1R2MU9enxdtv_jSYh30Z7j2wQL6YG-tSSU-8m4c9jM/pub?gid=477859758&single=true&output=csv",
};

let cacheInitialState = {
  projects: null,
  workplaces: null,
  competitions: null,
  skills: null,
  highlights: null,
};

let cache: Record<DataType, GoogleSheetDataOutputType[DataType] | null> =
  cacheInitialState;

const updateCache = <T extends DataType>(
  dataType: T,
  data: GoogleSheetDataOutputType[T],
) => {
  setLocalStorage(LocalStorageKey.FetchedData, cache);
  setLocalStorage(LocalStorageKey.FetchedDataTime, new Date().toISOString());
  cache[dataType] = data;
};

const resetCache = () => {
  cache = cacheInitialState;
  deleteLocalStorage(LocalStorageKey.FetchedData);
  deleteLocalStorage(LocalStorageKey.FetchedDataTime);
};

const isCacheToBeInvalidated = (): boolean => {
  const fetchedDataTime = getLocalStorage<string>(
    LocalStorageKey.FetchedDataTime,
  );

  if (!fetchedDataTime) {
    resetCache();
    return true;
  }

  const dateOneHourAgo = subHours(new Date(), 1);
  if (isBefore(parseISO(fetchedDataTime), dateOneHourAgo)) {
    resetCache();
    return true;
  }

  return false;
};

const cachedData = getLocalStorage<typeof cache>(LocalStorageKey.FetchedData);
if (cachedData && !isCacheToBeInvalidated()) {
  cache = cachedData;
}

export const fetchData = <T extends DataType>(dataType: T) => {
  if (cache[dataType]) {
    return Promise.resolve(cache[dataType]);
  }

  const url = GoogleSheetUrls[dataType];
  return new Promise<GoogleSheetDataOutputType[T]>((resolve, error) => {
    Papa.parse(url, {
      download: true,
      header: true,
      error,
      complete: (results) => {
        const data = results.data as GoogleSheetDataOutputType[T];
        updateCache(dataType, data as GoogleSheetDataOutputType[T]);

        resolve(data);
      },
    });
  });
};

export const useGoogleSheetData = <T extends DataType>(dataType: T) => {
  const [data, setData] = useState<GoogleSheetDataOutputType[T]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isUninitialized, setIsUninitialized] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetchData(dataType)
      .then((data) => {
        setData(data as GoogleSheetDataOutputType[T]);
        setIsUninitialized(false);
        setIsFetching(false);
      })
      .catch(() => {
        setIsError(true);
        setIsFetching(false);
      });
  }, [dataType]);

  return { data, isFetching, isUninitialized, isError };
};
