"use client";
import React from "react";
import {
  TextRevealCard,
} from "../../ui/text-reveal-card";

export function Heading({heading}:{heading:string}) {
  return (
  
      <TextRevealCard
      className="border-0 bg-black text-center"
        text="ABDUL REHMAN KHAN"
        revealText={heading}
      >
      </TextRevealCard>
  );
}
