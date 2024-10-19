import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { getDisplayDate } from "@/utils/format";
import { FC } from "react";
import { ShellSection } from "./shell-section";
import clsx from "clsx";

export const ShellSectionCompetitions: FC = () => {
  const competitions = useGoogleSheetData(DataType.competitions);

  const items = competitions.data.map((competition) => {
    const skills = competition.skills
      .split(",")
      .map((skill) => skill.trim())
      .map((skill, index, all) => {
        return (
          <span
            key={skill}
            className={clsx(
              "bg-shark-50 dark:bg-shark-950 py-1 text-sm",
              index !== all.length - 1 && "after:content-[',_']",
            )}
          >
            {skill}
          </span>
        );
      });

    return (
      <li
        key={competition.title}
        className="flex gap-8 relative"
        title={competition.description}
      >
        <span className="absolute w-full border-t border-dashed border-shark-600 top-[50%] z-0"></span>
        <span className="min-w-20"></span>
        <span className="bg-shark-50 dark:bg-shark-950 z-10 px-3 -mx-3 absolute">
          {getDisplayDate(competition.date)}
        </span>
        <span className="bg-shark-50 dark:bg-shark-950 z-10 px-3 -mx-3">
          {competition.title}
        </span>
        <span className="bg-shark-50 dark:bg-shark-950 z-10 px-3 -mx-3 text-sm text-shark-400">
          {skills}
        </span>
        <span className="flex-1"></span>
        <span className="bg-shark-50 dark:bg-shark-950 z-10 px-4 -mx-4 text-shark-400">
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
