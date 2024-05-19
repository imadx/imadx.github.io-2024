import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";
import { getDisplayDate } from "@/utils/format";

export const ShellSectionCompetitions: FC = () => {
  const competitions = useGoogleSheetData(DataType.competitions);

  const items = competitions.data.map((competition) => {
    return (
      <li key={competition.title} className="flex gap-8 relative">
        <span className="absolute w-full border-t border-dashed border-shark-600 top-[50%] z-0"></span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">
          {getDisplayDate(competition.date)}
        </span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">
          {competition.title}
        </span>
        <span className="flex-1"></span>
        <span className="bg-shark-950 z-10 px-4 -mx-4 text-shark-400">
          {competition.placement}
        </span>
      </li>
    );
  });

  return (
    <ShellSection title="Competitions" state={competitions}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
