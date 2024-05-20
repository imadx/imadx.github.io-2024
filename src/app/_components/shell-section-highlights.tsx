import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ContentType, ShellSection } from "./shell-section";
import { getDisplayDate } from "@/utils/format";

export const ShellSectionHighlights: FC = () => {
  const highlights = useGoogleSheetData(DataType.highlights);

  const sortedHighlights = highlights.data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const items = sortedHighlights.map((highlight) => {
    return (
      <li key={highlight.title} className="flex gap-8 relative">
        <span className="absolute w-full border-t border-dashed border-shark-600 top-[50%] z-0"></span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">
          {getDisplayDate(highlight.date)}
        </span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">{highlight.title}</span>
      </li>
    );
  });

  return (
    <ShellSection title="Highlights" state={highlights}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
