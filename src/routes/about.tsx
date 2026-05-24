import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Sparkles, ShieldCheck } from "lucide-react";

import teamAditi from "@/assets/team_aditi.png";
import teamPriyanka from "@/assets/team_priyanka.png";
import teamShubhada from "@/assets/team_shubhada.png";
import teamPriyankaM from "@/assets/team_priyanka_m.png";
import teamArya from "@/assets/team_arya.png";
import teamKhushi from "@/assets/team_khushi.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Plus Consultancy" },
      { name: "description", content: "Plus Consultancy is a premium Indian recruitment consultancy helping companies hire faster and smarter with structured, process-driven talent acquisition." },
      { property: "og:title", content: "About Plus Consultancy" },
      { property: "og:description", content: "Premium recruitment & talent acquisition partner in India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "We earn trust through transparency, accuracy, and follow-through." },
  { icon: Sparkles, title: "Quality", desc: "We obsess over candidate quality, not resume volume." },
  { icon: Users, title: "Partnership", desc: "We operate as an extension of your team, not a vendor." },
  { icon: Heart, title: "Care", desc: "We treat every candidate and client interaction with respect." },
];

const team = [
  { name: "Aditi Grover", role: "Founder", exp: "15+ years of experience", image: teamAditi },
  { name: "Priyanka Singh", role: "Team Lead", exp: "8+ years of experience", image: teamPriyanka },
  { name: "Shubhada Londhe", role: "HR and Recruiter", exp: "3+ years of experience", image: teamShubhada },
  { name: "Priyanka Mishra", role: "Recruiter", exp: "1+ year of experience", image: teamPriyankaM },
  { name: "Arya Verma", role: "Talent Acquisition Specialist", exp: "3+ years of experience", image: teamArya },
  { name: "Khushi", role: "Recruiter & Intern", exp: "Recently joined", image: teamKhushi },
];

function AboutPage() {
  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">About Plus Consultancy</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">A modern recruitment partner built for India's growing companies.</h1>
          <p className="mt-6 text-lg text-muted-foreground">We are an Indian recruitment and talent acquisition company helping businesses hire the right people, faster — across functions, industries, and seniority levels.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card-soft">
            <Target className="h-8 w-8 text-brand" />
            <h2 className="mt-4 text-2xl font-bold text-navy">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">To help Indian companies hire faster, smarter, and with higher-quality talent — through process, expertise, and intelligent sourcing.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card-soft">
            <Eye className="h-8 w-8 text-brand" />
            <h2 className="mt-4 text-2xl font-bold text-navy">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">To become one of the most trusted and recognised recruitment brands in India — known for outcomes, not promises.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeading eyebrow="Our Values" title="What we stand for" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-background p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Team" title="Meet the minds behind our success" description="A dedicated team of recruitment experts helping you scale with precision." align="center" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name} className="overflow-hidden border-border bg-background transition-all hover:-translate-y-1 hover:shadow-card-soft">
              <div className="aspect-[4/3] w-full bg-muted relative overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange">{m.role}</span>
                <h3 className="mt-2 text-xl font-bold text-navy">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.exp}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-hero-gradient px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to build your next great team?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Let's discuss your hiring goals and design a plan that delivers.</p>
          <div className="mt-7">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
              <Link to="/contact">Talk to a Hiring Expert</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
