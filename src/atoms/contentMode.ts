import { atom } from "jotai";

export enum ContentMode {
  ShellMode,
  HiResMode,
}

export const contentModeAtom = atom(ContentMode.ShellMode);
