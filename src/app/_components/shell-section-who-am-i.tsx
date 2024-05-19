import { FC } from "react";
import { ShellSection } from "./shell-section";
import { AtSymbolIcon, PhoneIcon, LinkIcon } from "@heroicons/react/24/outline";

const contactDetails = {
  name: "Ishan Madhusanka",
  email: "ahtimadhusanka@gmail.com",
  phone: "+94 71 645 1456",
  githubHandle: "imadx",
};

interface ExternalLinkProps {
  icon: JSX.Element;
  href: string;
  label: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      className="hover:text-lime-300 py-2 flex gap-2 items-center transition-colors"
      target="_blank"
      rel="nofollow"
    >
      {icon} {label}
    </a>
  );
};

export const ShellSectionWhoAmI: FC = () => {
  return (
    <ShellSection command="whoami">
      <div className="flex flex-col">
        <h1 className="text-4xl my-3">{contactDetails.name}</h1>
        <address>
          <ExternalLink
            icon={<AtSymbolIcon className="h-5" />}
            href={`mailto:${contactDetails.email}`}
            label={contactDetails.email}
          />
        </address>
        <address>
          <ExternalLink
            icon={<PhoneIcon className="h-5" />}
            href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
            label={contactDetails.phone}
          />
        </address>
        <ExternalLink
          icon={<LinkIcon className="h-5" />}
          href={`https://github.com/${contactDetails.githubHandle}`}
          label={`github.com/${contactDetails.githubHandle}`}
        />
      </div>
    </ShellSection>
  );
};
