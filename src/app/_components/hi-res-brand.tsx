import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { getDisplayDate } from "@/utils/format";

export const HiResBrand = () => {
  const metadata = useGoogleSheetData(DataType.metadata);
  const lastUpdatedOn = metadata.data?.[0]?.lastUpdated;

  return (
    <>
      <div className="flex place-items-baseline">
        <h1 className="font-black text-9xl">Ishan.</h1>
        <h3 className="font-black text-4xl text-lime-400">
          full-stack developer
        </h3>
      </div>
      <div>
        <span className="text-shark-500">
          Last updated on {getDisplayDate(lastUpdatedOn)}
        </span>
      </div>
    </>
  );
};
