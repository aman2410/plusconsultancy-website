import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Building2, Banknote, Factory, Cloud, Radio, HeartPulse, Rocket, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Plus Consultancy" },
      { name: "description", content: "Specialist recruiters across IT Services, BFSI, Manufacturing, SaaS, Telecom, Healthcare, Startups and more." },
      { property: "og:title", content: "Industries — Plus Consultancy" },
      { property: "og:description", content: "Domain-aligned recruiter pods across India's high-growth sectors." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Building2, name: "IT Services", desc: "Engineering, services delivery, and large-scale tech operations." },
  { icon: Banknote, name: "BFSI", desc: "Banking, financial services, NBFCs, fintech and insurance." },
  { icon: Factory, name: "Manufacturing", desc: "Plant operations, supply chain, quality and engineering leadership." },
  { icon: Cloud, name: "SaaS", desc: "Product, engineering, growth and customer success talent." },
  { icon: Radio, name: "Telecom", desc: "Network, infrastructure, and telecom product roles." },
  { icon: HeartPulse, name: "Healthcare", desc: "Hospital ops, pharma commercial, and healthtech roles." },
  { icon: Rocket, name: "Startups", desc: "Founding teams, early stage and growth-stage hiring." },
  { icon: ShoppingBag, name: "E-commerce", desc: "Category, operations, supply chain and tech roles." },
];

function IndustriesPage() {
  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Industries</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">Specialist recruiters across high-growth sectors.</h1>
          <p className="mt-6 text-lg text-muted-foreground">We organise our recruiters into domain-aligned pods so you get partners who already understand your roles, skills, and market benchmarks.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.name} className="rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-card-soft">
              <i.icon className="h-7 w-7 text-brand" />
              <h3 className="mt-5 text-base font-semibold text-navy">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="rounded-3xl bg-hero-gradient px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">Don't see your industry?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">We work across most sectors. Tell us about your role and we'll match the right recruiter pod.</p>
          <div className="mt-7">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
