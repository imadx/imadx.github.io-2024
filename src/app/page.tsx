"use client";

import { ShellSectionCompetitions } from "./_components/shell-section-competitions";
import { ShellSectionHighlights } from "./_components/shell-section-highlights";
import { ShellSectionKeywords } from "./_components/shell-section-keywords";
import { ShellSectionLastUpdatedAt } from "./_components/shell-section-last-updated";
import { ShellSectionProjects } from "./_components/shell-section-projects";
import { ShellSectionSkills } from "./_components/shell-section-skills";
import { ShellSectionUserRoles } from "./_components/shell-section-user-roles";
import { ShellSectionWorkplaces } from "./_components/shell-section-workplaces";

export default function Home() {
  return (
    <main className="container font-mono mx-auto width-md leading-7 px-4 py-[100px]">
      <ShellSectionLastUpdatedAt />
      <ShellSectionUserRoles />
      <ShellSectionUserRoles />
      <ShellSectionKeywords />
      <ShellSectionSkills />
      <ShellSectionProjects />
      <ShellSectionWorkplaces />
      <ShellSectionCompetitions />
      <ShellSectionHighlights />
    </main>
  );
}
