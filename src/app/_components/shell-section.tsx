import clsx from "clsx";
import { FC, ReactNode, useMemo } from "react";

export enum ContentType {
  Tags = "tags",
  ListItems = "listItems",
  ListItemsWithDetails = "listItemsWithDetails",
}

interface ShellSectionProps {
  title?: string;
  command?: string;
  children: ReactNode;
  state?: { isFetching: boolean; isError: boolean; isUninitialized: boolean };
  contentType?: ContentType;
}

export const ShellSection: FC<ShellSectionProps> = ({
  title,
  command,
  children,
  state,
  contentType,
}) => {
  const titleSuffix = useMemo(() => {
    if (!title) return null;

    switch (contentType) {
      case ContentType.Tags:
        return "' && ls)";
      case ContentType.ListItems:
        return "' && ls -1)";
      case ContentType.ListItemsWithDetails:
      default:
        return "' && find . -maxdepth 1 -type f -exec awk 'NR==1 {print FILENAME, $0}' {} ;)";
    }
  }, [title, contentType]);

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
    <div
      className={clsx(
        "mb-12 group p-4 py-6 -m-4 transition-background rounded-md",
        "hover:ring-1 hover:ring-black/30",
      )}
    >
      {command && (
        <h2
          className={clsx(
            "opacity-50 truncate mb-3",
            "before:content-[attr(data-before)] before:opacity-30",
          )}
          data-before="~$ "
          title={command}
        >
          {command}
        </h2>
      )}

      {title && (
        <h2
          className={clsx(
            "opacity-50 truncate mb-3 transition-opacity",
            "before:content-[attr(data-before)] before:opacity-30",
            "after:content-[attr(data-after)] after:opacity-30",
            "group-hover:text-white group-hover:opacity-100",
          )}
          data-before="~$ (cd '"
          data-after={titleSuffix}
          title={title}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
