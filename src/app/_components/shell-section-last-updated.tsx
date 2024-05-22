import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { FC } from "react";
import { ShellMessage } from "./shell-message";
import { getDisplayDate } from "@/utils/format";

export const ShellSectionLastUpdatedAt: FC = () => {
  const lastUpdated = useGoogleSheetData(DataType.metadata);
  if (lastUpdated.isFetching) return <ShellMessage>loading...</ShellMessage>;
  if (lastUpdated.isError) return null;
  if (!lastUpdated.data.length) return null;

  return (
    <ShellMessage>
      last updated on {getDisplayDate(lastUpdated.data[0].lastUpdated)}
    </ShellMessage>
  );
};
