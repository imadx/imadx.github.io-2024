import { ContentMode, contentModeAtom } from "@/atoms/contentMode";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { FC, ReactNode, useMemo } from "react";
import { HiResSectionTitle } from "./hi-res-section-title";

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
  loadingIndicator?: ReactNode;
  contentType?: ContentType;
}

export const ShellSection: FC<ShellSectionProps> = ({
  title,
  command,
  children,
  state,
  loadingIndicator,
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

  const contentMode = useAtomValue(contentModeAtom);

  const isHighResMode = contentMode === ContentMode.HiResMode;

  const divClassNames = clsx(
    "mb-12 group p-4 py-6 -m-4 transition-background rounded-md",
    !isHighResMode && "hover:ring-1 hover:ring-black/30",
  );

  const titleContent = useMemo(() => {
    if (isHighResMode) {
      return <HiResSectionTitle>{command || title}</HiResSectionTitle>;
    }

    return (
      <>
        {command && (
          <h2
            className={clsx(
              "truncate mb-3",
              "opacity-100",
              "dark:opacity-50",
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
              "opacity-90 truncate mb-3 transition-opacity",
              "dark:opacity-50",
              "before:content-[attr(data-before)] before:opacity-30",
              "after:content-[attr(data-after)] after:opacity-30",
              "group-hover:text-black group-hover:opacity-100",
              "dark:group-hover:text-white dark:group-hover:opacity-100",
            )}
            data-before="~$ (cd '"
            data-after={titleSuffix}
            title={title}
          >
            {title}
          </h2>
        )}
      </>
    );
  }, [command, title, titleSuffix, isHighResMode]);

  if (state?.isFetching) {
    return (
      <div className={divClassNames}>
        {titleContent}
        {loadingIndicator || "Loading..."}
      </div>
    );
  }

  if (state?.isError) {
    return (
      <div className={divClassNames}>
        {titleContent}
        Failed to load data
      </div>
    );
  }

  if (state?.isUninitialized) {
    return (
      <div className={divClassNames}>
        {titleContent}
        {loadingIndicator || "Fetching..."}
      </div>
    );
  }

  return (
    <div className={divClassNames}>
      {titleContent}
      {children}
    </div>
  );
};
