import { FC } from "react";
import { ShellSection } from "./shell-section";

const userRoles = [
  "full-stack developer",
  "ui/ux enthusiast",
  "open-source contributor",
  "designer",
  "animator",
];

export const ShellSectionUserRoles: FC = () => {
  return (
    <ShellSection title="User Roles">
      <ul>
        {userRoles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </ShellSection>
  );
};
