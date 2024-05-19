import { FC } from "react";
import { ShellMessage } from "./shell-message";

const lastUpdatedOn = "2024-06-19"; // TODO: read this from a file/google-sheet updated during build time

export const ShellSectionLastUpdatedAt: FC = () => {
  return <ShellMessage>last updated on {lastUpdatedOn}</ShellMessage>;
};
