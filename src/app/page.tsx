"use client";

import { useState } from "react";
import { ShellSectionCompetitions } from "./_components/shell-section-competitions";
import { ShellSectionCopyright } from "./_components/shell-section-copyright";
import { ShellSectionHighlights } from "./_components/shell-section-highlights";
import { ShellSectionKeywords } from "./_components/shell-section-keywords";
import { ShellSectionLastUpdatedAt } from "./_components/shell-section-last-updated";
import { ShellSectionProjects } from "./_components/shell-section-projects";
import { ShellSectionSkills } from "./_components/shell-section-skills";
import { ShellSectionUserRoles } from "./_components/shell-section-user-roles";
import { ShellSectionWhoAmI } from "./_components/shell-section-who-am-i";
import { ShellSectionWorkplaces } from "./_components/shell-section-workplaces";
import { HiResBrand } from "./_components/hi-res-brand";
import { HiResKeywords } from "./_components/hi-res-keywords";
import { ToggleModeContent } from "./_components/toggle-mode-content";
import { HiResWorkplaces } from "./_components/hi-res-workplaces";
import { useAtomValue } from "jotai";
import { ContentMode, contentModeAtom } from "@/atoms/contentMode";

export default function Home() {
  const contentMode = useAtomValue(contentModeAtom);

  const shellContent = (
    <main className="container font-mono mx-auto width-md leading-7 px-4 py-[100px]">
      <ToggleModeContent />
      <ShellSectionLastUpdatedAt />
      <ShellSectionWhoAmI />
      <ShellSectionUserRoles />
      <ShellSectionKeywords />
      <ShellSectionProjects />
      <ShellSectionWorkplaces />
      <ShellSectionCompetitions />
      <ShellSectionHighlights />
      <ShellSectionSkills />
      <ShellSectionCopyright />
    </main>
  );

  const highResContent = (
    <main className="container font-sans mx-auto width-md leading-7 px-4 py-[100px]">
      <ToggleModeContent />
      <HiResBrand />
      <HiResKeywords />
      <HiResWorkplaces />
      <ShellSectionProjects />
      <ShellSectionWorkplaces />
      <ShellSectionCompetitions />
      <ShellSectionHighlights />
      <ShellSectionSkills />
      <ShellSectionCopyright />
    </main>
  );

  const content = {
    [ContentMode.ShellMode]: shellContent,
    [ContentMode.HiResMode]: highResContent,
  };

  return (
    <main className="container font-mono mx-auto width-md leading-7 px-4 py-[100px]">
      {content[contentMode]}
    </main>
  );
}
