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
      <li key={skill} className="inline after:content-[',']">
        {skill}
      </li>
    ));

    return (
      <ul key={category.category}>
        <li className="font-bold opacity-50">{category.category}</li>
        {skills}
      </ul>
    );
  });

  return (
    <ShellSection title="Skills" state={skills}>
      {items}
    </ShellSection>
  );
};
