import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Crown, Users, Building2, Rocket, Cpu, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Recruitment Solutions | Plus Consultancy" },
      { name: "description", content: "Permanent hiring, leadership search, bulk hiring, RPO, startup hiring and IT recruitment solutions across India." },
      { property: "og:title", content: "Recruitment Services — Plus Consultancy" },
      { property: "og:description", content: "Premium recruitment solutions for modern Indian companies." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Briefcase, title: "Permanent Hiring", desc: "End-to-end recruitment for full-time roles across functions and seniority levels.", points: ["Role mapping & JD design", "Targeted sourcing", "Structured screening", "Offer & onboarding support"] },
  { icon: Crown, title: "Leadership Hiring", desc: "Confidential executive search for CXO, VP and Director-level mandates.", points: ["Mapped market research", "Discreet outreach", "Multi-stage evaluation", "Reference & background checks"] },
  { icon: Users, title: "Bulk Hiring", desc: "High-volume hiring drives with structured workflows and quick turnaround.", points: ["Walk-in & virtual drives", "Assessment centers", "Daily reporting", "SLA-driven delivery"] },
  { icon: Building2, title: "Recruitment Outsourcing (RPO)", desc: "Dedicated recruiter teams operating as your in-house talent function.", points: ["Embedded recruiter pods", "ATS & process integration", "Employer branding support", "Monthly hiring analytics"] },
  { icon: Rocket, title: "Startup Hiring", desc: "Founding-team and early-stage hiring tailored to fast-growth startups.", points: ["Founding team search", "ESOP-aware negotiation", "Founder-style interviews", "Speed-first delivery"] },
  { icon: Cpu, title: "IT Recruitment", desc: "Specialised tech hiring across engineering, data, product and cloud.", points: ["Engineering & DevOps", "Data, ML & analytics", "Product & design", "Cloud & cybersecurity"] },
];

function ServicesPage() {
  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Services</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">Recruitment solutions, end-to-end.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Whether you're closing a single critical hire or scaling teams of hundreds, we bring the right process, recruiters, and network to deliver.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="border-border">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeading eyebrow="Get Started" title="Tell us what you're hiring for" description="Share your role, and we'll come back with a sourcing plan within 24 hours." align="center" />
        <div className="text-center">
          <Button asChild size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
            <Link to="/employers">Submit Hiring Requirement <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
