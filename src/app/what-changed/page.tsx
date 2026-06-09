import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ReflectionBlock } from "@/components/ReflectionBlock";
import { PullQuote } from "@/components/PullQuote";
import { reflections } from "@/data/reflections";

export const metadata: Metadata = {
  title: "What Changed",
  description: "Honest course corrections — what did not work, and the fix.",
};

export default function WhatChangedPage() {
  return (
    <>
      <PageHeader
        eyebrow="What Worked / What Changed"
        title="What did not work, and the fix"
        intro="Plenty did not work the first time. These are the course corrections that mattered — kept here because the next round goes better when the friction is written down."
      />

      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-2">
          {reflections.map((reflection) => (
            <ReflectionBlock key={reflection.id} reflection={reflection} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <PullQuote light>Feedback should lead to change.</PullQuote>
      </Section>
    </>
  );
}
