import { FC } from "react";
import { ContentType, ShellSection } from "./shell-section";
import clsx from "clsx";

const keywords = [
  "ishan madhusanka",
  "ishan",
  "imadhusanka",
  "ahtimadhusanka",
  "i.mad",
  "imadx",
  "tech lead",
  "fintech",
  "software engineer",
  "full-stack developer",
  "ui/ux enthusiast",
];

export const ShellSectionKeywords: FC = () => {
  return (
    <ShellSection title="Keywords" contentType={ContentType.Tags}>
      <ul className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <li
            key={keyword}
            className={clsx(
              "bg-shark-700 rounded-md px-3 text-white transition-colors",
              "hover:bg-lime-500 hover:text-shark-950",
            )}
          >
            {keyword}
          </li>
        ))}
      </ul>
    </ShellSection>
  );
};
