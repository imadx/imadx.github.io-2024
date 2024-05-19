import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";
import { getDisplayDate } from "@/utils/format";
import { ExternalLink } from "./shared-external-link";
import { LinkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export const ShellSectionProjects: FC = () => {
  const projects = useGoogleSheetData(DataType.projects);

  const sortedData = projects.data.sort((a, b) => {
    return (
      new Date(b.dateTo).getTime() - new Date(a.dateTo).getTime() ||
      new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime()
    );
  });

  const items = sortedData.map((project) => {
    return (
      <li key={project.title} className="py-2">
        <div className={clsx("flex flex-wrap gap-4 gap-y-1 items-center")}>
          <span>{project.title}</span>{" "}
          <span className="text-shark-500 flex-1">
            {getDisplayDate(project.dateFrom)} -{" "}
            {getDisplayDate(project.dateTo)}
          </span>{" "}
          <span className="">{project.client}</span>
        </div>
        <div
          className={clsx(
            "flex flex-wrap gap-4 gap-y-1 items-center text-sm text-shark-600",
          )}
        >
          <span className="flex-1">
            {project.url ? (
              <ExternalLink
                href={project.url}
                label={project.url}
                icon={<LinkIcon className="h-4" />}
              />
            ) : (
              <span className="pointer-events-none">
                [no URL available for this project]
              </span>
            )}
          </span>
          <span>Team{project.techStack}</span>

          <span>Team{project.devTeamSize}</span>
        </div>
      </li>
    );
  });

  return (
    <ShellSection title="Projects" state={projects}>
      <ul className="divide-y-2 divide-dashed divide-shark-900">{items}</ul>
    </ShellSection>
  );
};
