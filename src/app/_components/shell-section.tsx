import { FC, ReactNode } from "react";

interface ShellSectionProps {
  title?: string;
  command?: string;
  children: ReactNode;
  state?: { isFetching: boolean; isError: boolean; isUninitialized: boolean };
}

export const ShellSection: FC<ShellSectionProps> = ({
  title,
  command,
  children,
  state,
}) => {
  if (state?.isFetching) {
    return <div className="mb-12">Loading...</div>;
  }

  if (state?.isError) {
    return <div className="mb-12">Failed to load data</div>;
  }

  if (state?.isUninitialized) {
    return <div className="mb-12">Fetching...</div>;
  }

  return (
    <div className="mb-12">
      {command && (
        <h2
          className="
          opacity-50
          before:content-[attr(data-before)] before:opacity-30
          truncate
        "
          data-before="~$ "
          title={command}
        >
          {command}
        </h2>
      )}

      {title && (
        <h2
          className="
          opacity-50
        before:content-[attr(data-before)] before:opacity-30
        after:content-[attr(data-after)] after:opacity-30
        truncate
        "
          data-before="~$ (cd '"
          data-after="' && find . -maxdepth 1 -type f -exec awk 'NR==1 {print FILENAME, $0}' {} \;)"
          title={title}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
