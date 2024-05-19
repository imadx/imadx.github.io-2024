import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";

export const ShellSectionWorkplaces: FC = () => {
  const workplaces = useGoogleSheetData(DataType.workplaces);

  const items = workplaces.data.map((workplace) => {
    return (
      <li key={workplace.title} className="flex gap-4">
        <p>{workplace.organization}</p>
        <p className="opacity-50">{workplace.title}</p>
      </li>
    );
  });

  return (
    <ShellSection title="Workplaces" state={workplaces}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
