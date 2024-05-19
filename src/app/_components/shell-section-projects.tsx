import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";

export const ShellSectionProjects: FC = () => {
  const projects = useGoogleSheetData(DataType.projects);

  const items = projects.data.map((project) => {
    return <li key={project.title}>{project.title}</li>;
  });

  return (
    <ShellSection title="Projects" state={projects}>
      <ul>{items}</ul>
    </ShellSection>
  );
};
