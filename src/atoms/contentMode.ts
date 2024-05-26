import { atomWithStorage } from "jotai/utils";

export enum ContentMode {
  ShellMode,
  HiResMode,
}

export const contentModeAtom = atomWithStorage(
  "imadhusanka-content-mode",
  ContentMode.ShellMode,
);
