import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";

export const ShellSectionHighlights: FC = () => {
  const highlights = useGoogleSheetData(DataType.highlights);

  const items = highlights.data.map((highlight) => {
    return <li key={highlight.title}>{highlight.title}</li>;
  });

  return (
    <ShellSection title="Highlights" state={highlights}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
