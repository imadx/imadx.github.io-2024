import { FC } from "react";
import { ContentType, ShellSection } from "./shell-section";
import { userRoles } from "@/constants/user-roles";

export const ShellSectionUserRoles: FC = () => {
  return (
    <ShellSection title="User Roles" contentType={ContentType.ListItems}>
      <ul>
        {userRoles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </ShellSection>
  );
};
