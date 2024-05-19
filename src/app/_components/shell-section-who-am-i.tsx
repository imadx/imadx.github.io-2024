import { FC } from "react";
import { ShellSection } from "./shell-section";

const contactDetails = {
  name: "Ishan Madhusanka",
  email: "ahtimadhusanka@gmail.com",
  phone: "+94 71 645 1456",
  githubHandle: "imadx",
};

export const ShellSectionUserRoles: FC = () => {
  return (
    <ShellSection command="whoami">
      <h1>{contactDetails.name}</h1>
      <address>
        Email:{" "}
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
      </address>
      <address>
        Phone:{" "}
        <a href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}>
          ${contactDetails.phone}
        </a>
      </address>
      <a href={`https://github.com/${contactDetails.githubHandle}`}>
        GitHub Profile: github.com/{contactDetails.githubHandle}
      </a>
    </ShellSection>
  );
};
