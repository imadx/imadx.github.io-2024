import { FC, ReactNode } from "react";

interface ShellMessageProps {
  children: ReactNode;
}

export const ShellMessage: FC<ShellMessageProps> = ({ children }) => {
  return (
    <span className="block text-gray-600 dark:text-gray-400 mb-12 dark:opacity-50 w-max">
      {children}
    </span>
  );
};
