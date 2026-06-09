import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { GroupActionCard } from "@/components/GroupActionCard";
import { groups } from "@/data/groups";

export const metadata: Metadata = {
  title: "Group Actions",
  description: "Six PYPx groups, their actions, and the evidence behind them.",
};

export default function GroupActionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Group Actions"
        title="Six groups, six actions"
        intro="Each group turned a topic into an action, then built a station for it. The teacher push is the one thing that had to stay clear while they built."
      />

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <GroupActionCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
