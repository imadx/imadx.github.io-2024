import { FC } from "react";

interface ExternalLinkProps {
  icon?: JSX.Element;
  href: string;
  label: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ icon, href, label }) => {
  const sanitizedHref = href.startsWith("http") ? href : `https://${href}`;

  return (
    <a
      href={sanitizedHref}
      className="hover:text-lime-600 dark:hover:text-lime-300 py-2 inline-flex gap-2 items-center transition-colors w-max"
      target="_blank"
      rel="nofollow"
    >
      {icon} {label}
    </a>
  );
};
