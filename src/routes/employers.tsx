import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Clock, Users, TrendingDown, Search, Check } from "lucide-react";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Hire Talent — Employers | Plus Consultancy" },
      { name: "description", content: "Submit your hiring requirement. Get matched with pre-vetted candidates in 72 hours. Trusted by 300+ Indian companies." },
      { property: "og:title", content: "Hire Talent — Plus Consultancy" },
      { property: "og:description", content: "Submit your hiring requirement and get a sourcing plan within 24 hours." },
      { property: "og:url", content: "/employers" },
    ],
    links: [{ rel: "canonical", href: "/employers" }],
  }),
  component: EmployersPage,
});

const challenges = [
  { icon: Clock, title: "Slow hiring cycles", desc: "Roles open for months while business momentum stalls." },
  { icon: Search, title: "Poor candidate quality", desc: "Resumes that don't match the role or culture." },
  { icon: TrendingDown, title: "High attrition", desc: "Bad hires cost time, money and team morale." },
  { icon: Users, title: "Limited bandwidth", desc: "Internal HR teams stretched thin across roles." },
];

const solutions = [
  "Dedicated recruiter assigned to your account",
  "Pre-vetted shortlist within 72 hours",
  "Multi-stage screening for skill and culture fit",
  "Weekly hiring reports and market insight",
  "Offer and onboarding support",
  "Replacement guarantee for permanent placements",
];

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Required").max(20),
  role: z.string().trim().min(1, "Required").max(120),
  details: z.string().trim().max(1000).optional(),
});

function EmployersPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! Our team will reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">For Employers</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">Hire faster. Hire better. Hire with confidence.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Submit your hiring requirement and get matched with a dedicated recruiter pod and a quality shortlist within 72 hours.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Hiring Challenges" title="The hiring problems we solve every day" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {challenges.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-7">
              <c.icon className="h-7 w-7 text-orange" />
              <h3 className="mt-5 text-base font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy text-navy-foreground">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange">Our Solution</span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">A hiring partner that delivers outcomes.</h2>
            <p className="mt-5 text-white/70">We bring the recruiters, process, and network. You get the right hires — without the operational drag.</p>
          </div>
          <ul className="space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Inquiry Form</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">Submit your hiring requirement</h2>
            <p className="mt-4 text-muted-foreground">Our team will reach out within 24 hours with a sourcing plan tailored to your role.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required maxLength={120} className="mt-1.5" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required maxLength={20} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="role">Role to hire</Label>
                <Input id="role" name="role" required maxLength={120} className="mt-1.5" placeholder="e.g. Senior Backend Engineer" />
              </div>
              <div>
                <Label htmlFor="details">Additional details</Label>
                <Textarea id="details" name="details" maxLength={1000} className="mt-1.5" rows={4} placeholder="Skills, experience, location, urgency..." />
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
                {submitting ? "Sending..." : "Submit Requirement"}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
