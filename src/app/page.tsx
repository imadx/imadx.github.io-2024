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

enum ContentMode {
  ShellMode,
  HiResMode,
}

export default function Home() {
  const [contentMode, setContentMode] = useState(ContentMode.ShellMode);

  const handleOnChangeToggleMode = (isOn: boolean) => {
    setContentMode(isOn ? ContentMode.HiResMode : ContentMode.ShellMode);
  };

  const shellContent = (
    <main className="container font-mono mx-auto width-md leading-7 px-4 py-[100px]">
      <ToggleModeContent onChange={handleOnChangeToggleMode} />
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
      <ToggleModeContent onChange={handleOnChangeToggleMode} />
      <HiResBrand />
      <HiResKeywords />
      <HiResWorkplaces />
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
