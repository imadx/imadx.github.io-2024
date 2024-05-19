import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";
import { getDisplayDate } from "@/utils/format";

export const ShellSectionWorkplaces: FC = () => {
  const workplaces = useGoogleSheetData(DataType.workplaces);

  const workplacesSorted = workplaces.data.sort((a, b) => {
    return new Date(b.dateTo).getTime() - new Date(a.dateTo).getTime();
  });

  const items = workplacesSorted.map((workplace) => {
    return (
      <li key={workplace.title} className="flex gap-8 relative items-center">
        <span className="absolute w-full border-t border-dashed border-shark-600 top-[50%] z-0"></span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">
          {workplace.organization}
        </span>
        <span className="bg-shark-950 z-10 px-3 -mx-3 text-sm text-shark-400">
          {getDisplayDate(workplace.dateFrom)} -{" "}
          {getDisplayDate(workplace.dateTo)}
        </span>
        <span className="flex-1"></span>
        <span className="bg-shark-950 z-10 px-3 -mx-3">{workplace.title}</span>
      </li>
    );
  });

  return (
    <ShellSection title="Workplaces" state={workplaces}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
