import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Briefcase, Users, Crown, Building2, Rocket, Cpu,
  Search, ClipboardCheck, MessageSquare, Handshake, Trophy, Target,
  Zap, ShieldCheck, BadgeCheck, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plus Consultancy — Premium Recruitment Partner in India" },
      { name: "description", content: "Hire faster and smarter with India's premium recruitment consultancy. Leadership hiring, IT recruitment, RPO, and bulk hiring solutions." },
      { property: "og:title", content: "Plus Consultancy — Premium Recruitment Partner" },
      { property: "og:description", content: "Helping companies hire faster, smarter, and with higher-quality talent." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Briefcase, title: "Permanent Hiring", desc: "End-to-end permanent recruitment across functions and seniority levels." },
  { icon: Crown, title: "Leadership Hiring", desc: "CXO, VP and Director-level executive search with rigorous evaluation." },
  { icon: Users, title: "Bulk Hiring", desc: "High-volume hiring drives with structured screening and quick turnaround." },
  { icon: Building2, title: "Recruitment Outsourcing", desc: "Dedicated RPO teams that operate as your in-house talent function." },
  { icon: Rocket, title: "Startup Hiring", desc: "Founding-team and early-stage hiring tailored to fast-growth startups." },
  { icon: Cpu, title: "IT Recruitment", desc: "Specialised tech hiring across engineering, data, product and cloud." },
];

const stats = [
  { value: "5,000+", label: "Successful placements" },
  { value: "300+", label: "Client companies" },
  { value: "15+", label: "Industries served" },
  { value: "10+", label: "Years of expertise" },
];

const why = [
  { icon: Zap, title: "Faster Hiring", desc: "Shortlist within 72 hours with our specialist recruiter pods." },
  { icon: Target, title: "Sharper Screening", desc: "Multi-stage evaluation focused on skill fit and longevity." },
  { icon: ShieldCheck, title: "Reliable Process", desc: "Transparent communication and structured weekly reporting." },
  { icon: BadgeCheck, title: "Quality Talent", desc: "Pre-vetted candidates from a curated pan-India talent network." },
];

const industries = ["IT Services", "BFSI", "Manufacturing", "SaaS", "Telecom", "Healthcare", "Startups", "E-commerce"];

const process = [
  { step: "01", icon: MessageSquare, title: "Requirement Understanding", desc: "Deep dive into your role, team and culture." },
  { step: "02", icon: Search, title: "Candidate Sourcing", desc: "Targeted sourcing across active and passive talent pools." },
  { step: "03", icon: ClipboardCheck, title: "Screening & Evaluation", desc: "Structured assessment of skill, intent and fit." },
  { step: "04", icon: Handshake, title: "Interview Coordination", desc: "Seamless scheduling and feedback management." },
  { step: "05", icon: BadgeCheck, title: "Offer Support", desc: "Negotiation guidance and offer acceptance support." },
  { step: "06", icon: Trophy, title: "Successful Hiring", desc: "Onboarding handover and post-join engagement." },
];

const testimonials = [
  { quote: "Plus Consultancy closed three senior engineering roles in under a month. Their screening quality is exceptional.", name: "VP Engineering", company: "SaaS Company" },
  { quote: "They genuinely operate as an extension of our HR team. Communication is sharp, candidates are sharper.", name: "Head of HR", company: "BFSI Enterprise" },
  { quote: "From a founding team of 4 to 40 — Plus has been our hiring partner through every stage.", name: "Founder", company: "Series-A Startup" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--orange) 0, transparent 35%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center md:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              India's Premium Recruitment Partner
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Your Trusted <span className="text-gradient-accent">Hiring Partner</span> for Growing Companies
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
              We help Indian companies hire faster, smarter, and with higher-quality talent — from leadership search to specialist tech recruitment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
                <Link to="/employers">Hire Talent <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/careers">Submit Resume</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-orange" /> 72-hour shortlists</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-orange" /> Pan-India network</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-orange" /> Dedicated recruiters</span>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal/20 to-white/5 blur-2xl" />
            <img
              src={heroImg}
              alt="Plus Consultancy recruitment team in a corporate meeting"
              width={1600}
              height={1100}
              className="relative w-full rounded-2xl shadow-elegant ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-navy md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Recruitment solutions built for modern companies"
          description="From a single critical hire to scaling teams of hundreds — we cover the full spectrum of corporate hiring."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group border-border transition-all hover:-translate-y-1 hover:shadow-card-soft">
              <CardContent className="p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground transition-colors group-hover:bg-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-secondary">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A hiring partner that actually moves the needle"
          description="We combine recruiter expertise, structured process, and intelligent sourcing to deliver outcomes — not just resumes."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-background p-7 shadow-card-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Specialist recruiters across high-growth sectors"
          description="Domain-aligned recruiter pods that understand your industry's roles, skills, and benchmarks."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card px-5 py-4 text-sm font-medium text-navy transition-colors hover:border-brand hover:bg-brand/5">
              {i}
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-navy text-navy-foreground">
        <div className="mb-12 max-w-3xl">
          <Eyebrow>Hiring Process</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">A six-step process built for outcomes</h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">A structured workflow that ensures speed without compromising on candidate quality.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-orange">{p.step}</span>
                <p.icon className="h-5 w-5 text-white/60" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by founders, HR leaders and executives"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border">
              <CardContent className="p-7">
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-secondary">
        <div className="overflow-hidden rounded-3xl bg-hero-gradient px-8 py-16 text-center text-white md:px-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">Need skilled talent fast? Let's build your team.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">Schedule a 30-minute consultation. Walk away with a hiring plan, market insight, and a clear path to your next great hire.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
              <Link to="/contact">Schedule Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
