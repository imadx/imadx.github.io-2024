import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";

export const ShellSectionCompetitions: FC = () => {
  const competitions = useGoogleSheetData(DataType.competitions);

  const items = competitions.data.map((competition) => {
    return <li key={competition.title}>{competition.title}</li>;
  });

  return (
    <ShellSection title="Competitions" state={competitions}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
