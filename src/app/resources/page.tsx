import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Routines and templates other teachers can reuse.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Routines and templates to reuse"
        intro="The routines and templates behind the wall. Steal whatever's useful. The PDFs are on the way — for now the cards below are placeholders."
      />

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            // TO ENABLE A DOWNLOAD: add the file at public{resource.file}, then
            // wrap this card in <a href={resource.file} download> ... </a>.
            <article
              key={resource.id}
              className="flex flex-col rounded-xl border border-line bg-paper p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-teal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-teal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 3v5h5M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
                  </svg>
                  PDF
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">
                  Coming soon
                </span>
              </div>

              <h2 className="mt-4 font-serif text-xl text-ink">{resource.title}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
                {resource.description}
              </p>

              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                </svg>
                Download
              </span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
