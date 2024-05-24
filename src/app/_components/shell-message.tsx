import { FC, ReactNode } from "react";

interface ShellMessageProps {
  children: ReactNode;
}

export const ShellMessage: FC<ShellMessageProps> = ({ children }) => {
  return (
    <span className="block text-gray-400 mb-12 opacity-50 w-max">
      {children}
    </span>
  );
};
