import { FC } from "react";
import { ShellSection } from "./shell-section";

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
    <ShellSection title="Keywords">
      <ul>
        {keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </ShellSection>
  );
};
