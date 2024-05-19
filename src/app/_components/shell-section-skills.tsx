import { FC } from "react";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { ShellSection } from "./shell-section";

export const ShellSectionSkills: FC = () => {
  const skills = useGoogleSheetData(DataType.skills);

  const items = skills.data.map((category) => {
    const skills = category.skills.split(",").map((skill) => (
      <li key={skill} className="after:content-[',']">
        {skill}
      </li>
    ));

    return (
      <ul key={category.category} className="flex flex-wrap gap-3 gap-y-0 mb-4">
        <li className="font-bold opacity-50">{category.category}</li>
        {skills}
      </ul>
    );
  });

  return (
    <ShellSection title="Tech Stack" state={skills}>
      {items}
    </ShellSection>
  );
};
