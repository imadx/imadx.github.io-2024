import { FC } from "react";
import { ShellMessage } from "./shell-message";

export const ShellSectionCopyright: FC = () => {
  return (
    <ShellMessage>
      copyright &copy; {new Date().getFullYear()}. Ishan Madhusanka.
    </ShellMessage>
  );
};
