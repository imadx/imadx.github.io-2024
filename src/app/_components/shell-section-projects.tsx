import { FC, useMemo } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";
import { getDisplayDate } from "@/utils/format";
import { ExternalLink } from "./shared-external-link";
import { LinkIcon, UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export const ShellSectionProjects: FC = () => {
  const projects = useGoogleSheetData(DataType.projects);

  const sortedData = projects.data.sort((a, b) => {
    return (
      new Date(b.dateTo).getTime() - new Date(a.dateTo).getTime() ||
      new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime()
    );
  });

  const animateClassNames: Record<number, string> = useMemo(() => {
    return {
      0: "animate-[pulse_1s_infinite_100ms]",
      1000: "animate-[pulse_1s_infinite_200ms]",
      2000: "animate-[pulse_1s_infinite_300ms]",
      3000: "animate-[pulse_1s_infinite_400ms]",
      4000: "animate-[pulse_1s_infinite_500ms]",
      5000: "animate-[pulse_1s_infinite_600ms]",
      6000: "animate-[pulse_1s_infinite_700ms]",
      7000: "animate-[pulse_1s_infinite_800ms]",
      8000: "animate-[pulse_1s_infinite_900ms]",
      9000: "animate-[pulse_1s_infinite_1000ms]",
      10000: "animate-[pulse_1s_infinite_1100ms]",
    };
  }, []);

  const loadingIndicator = Array.from({ length: 11 }, (_, i) => (
    <div
      key={i}
      className={`${animateClassNames[i * 1000]} duration-300 flex flex-wrap gap-4 gap-y-1 items-center my-6`}
    >
      <div className="flex gap-4 py-1 items-center w-full">
        <span className="bg-shark-500 w-[300px] h-[18px] rounded "></span>
        <span className="bg-shark-500/50 w-[300px] h-[18px] rounded "></span>
        <span className="flex-1" />
        <span className="bg-shark-500 w-[100px] h-[18px] rounded "></span>
      </div>
      <div className="flex flex-wrap gap-4 py-1 items-center w-full">
        <span className="bg-shark-500/50 w-[380px] h-[18px] rounded "></span>
        <span className="flex-1" />
        <span className="bg-shark-500/50 w-[200px] h-[18px] rounded "></span>
      </div>
    </div>
  ));

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
          <span>{project.techStack}</span>
          <span>
            <UserIcon className="h-4 inline" /> {project.devTeamSize} dev
            {project.devTeamSize > 1 ? "s" : ""}
          </span>
        </div>
      </li>
    );
  });

  return (
    <ShellSection
      title="Projects"
      state={projects}
      loadingIndicator={loadingIndicator}
    >
      <ul className="divide-y-2 divide-dashed divide-black/30">{items}</ul>
    </ShellSection>
  );
};
