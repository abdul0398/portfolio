'use client'
import Bio from "../components/Bio/Main";
import Skill from "@/components/Skill/Main";

export default function Home() {
  return (
    <main className="overflow-auto flex-col h-full w-full dark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex">
      <Bio></Bio>
      <Skill></Skill>
    </main>
  );
}