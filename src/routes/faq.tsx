import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Plus Consultancy" },
      { name: "description", content: "Answers to common questions about our recruitment process, timelines, industries, and hiring models." },
      { property: "og:title", content: "FAQ — Plus Consultancy" },
      { property: "og:description", content: "Common questions about working with Plus Consultancy." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How fast can you close positions?", a: "For most roles, we deliver a quality shortlist within 72 hours. Closing timelines depend on role complexity, but average 3–6 weeks for permanent hires." },
  { q: "What industries do you specialize in?", a: "We work across IT Services, BFSI, Manufacturing, SaaS, Telecom, Healthcare, E-commerce and the broader startup ecosystem in India." },
  { q: "What hiring models do you support?", a: "Permanent hiring, leadership search, bulk hiring, recruitment outsourcing (RPO), startup hiring and specialised IT recruitment." },
  { q: "Do you help startups hire talent?", a: "Yes — startup hiring is a core specialty. We support founding-team search, early-stage hiring, and growth-stage scaling." },
  { q: "Do you offer a replacement guarantee?", a: "Yes. Our permanent placements come with a replacement guarantee — terms are agreed upfront in the engagement." },
  { q: "How do you screen candidates?", a: "Multi-stage screening: profile mapping, recruiter interview, structured skill evaluation, and culture-fit assessment before sharing a shortlist." },
];

function FAQPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">FAQ</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-5xl">Frequently asked questions</h1>
        <p className="mt-5 text-lg text-muted-foreground">Everything you need to know about working with us.</p>
      </div>
      <div className="mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
