import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Find Your Next Role | Plus Consultancy" },
      { name: "description", content: "Explore curated job openings across IT, BFSI, SaaS and more. Submit your resume and join India's premium talent network." },
      { property: "og:title", content: "Careers — Plus Consultancy" },
      { property: "og:description", content: "Curated job openings across India's leading companies." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  { title: "Senior Backend Engineer", company: "Series-B SaaS", location: "Bangalore", exp: "5–8 yrs" },
  { title: "Engineering Manager", company: "Fintech Unicorn", location: "Mumbai", exp: "8–12 yrs" },
  { title: "Product Manager", company: "Healthtech Startup", location: "Remote", exp: "4–7 yrs" },
  { title: "Data Scientist", company: "BFSI Enterprise", location: "Hyderabad", exp: "3–6 yrs" },
  { title: "DevOps Engineer", company: "E-commerce", location: "Pune", exp: "4–7 yrs" },
  { title: "Head of Sales", company: "SaaS Startup", location: "Delhi NCR", exp: "10+ yrs" },
];

const benefits = [
  "Curated roles from quality companies",
  "Honest career conversations",
  "Interview preparation support",
  "Faster response times",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  exp: z.string().trim().min(1, "Experience is required").max(20),
  location: z.string().trim().min(1, "Current location is required").max(100),
  ctc: z.string().trim().min(1, "Current CTC is required").max(50),
  careerBreak: z.enum(["yes", "no"], { required_error: "Please select if you have a career break" }),
  notes: z.string().trim().max(1000).optional(),
});

function CareersPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const r = schema.safeParse(Object.fromEntries(form));
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    
    const file = form.get("resume") as File | null;
    if (!file || file.size === 0) {
      toast.error("Please upload your resume");
      return;
    }
    
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileName = file.name.toLowerCase();
    const isValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
    if (!isValidExtension) {
      toast.error("Please upload a PDF or Word document (.doc, .docx)");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! A recruiter will reach out shortly.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Careers</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">Find a role that moves your career forward.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Browse curated openings across India's leading companies, or join our talent network for first access to new mandates.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Featured Jobs" title="Open positions we're hiring for" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => (
            <Card key={j.title} className="group border-border transition-all hover:-translate-y-1 hover:shadow-card-soft">
              <CardContent className="p-7">
                <Briefcase className="h-6 w-6 text-brand" />
                <h3 className="mt-4 text-base font-semibold text-navy">{j.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{j.company}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span>{j.exp}</span>
                </div>
                <a href="#apply" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform group-hover:translate-x-0.5">
                  Apply now <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="apply" className="bg-secondary">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Join Talent Network</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">Submit your resume</h2>
            <p className="mt-4 text-muted-foreground">Get matched with relevant roles and personalised career support.</p>
            <ul className="mt-6 space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-orange" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-background p-7 shadow-card-soft">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required maxLength={20} className="mt-1.5" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="exp">Experience</Label>
                  <Input id="exp" name="exp" required maxLength={20} className="mt-1.5" placeholder="e.g. 5 yrs" />
                </div>
                <div>
                  <Label htmlFor="resume">Upload Resume (PDF, Word)</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="mt-1.5 file:mr-3 file:rounded-md file:border-0 file:bg-orange/10 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-orange hover:file:bg-orange/20 cursor-pointer file:transition-colors"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="location">Current location</Label>
                  <Input id="location" name="location" required maxLength={100} className="mt-1.5" placeholder="e.g. Mumbai" />
                </div>
                <div>
                  <Label htmlFor="ctc">Current CTC</Label>
                  <Input id="ctc" name="ctc" required maxLength={50} className="mt-1.5" placeholder="e.g. 12 LPA" />
                </div>
              </div>
              <div>
                <Label>Do you have a career break?</Label>
                <RadioGroup name="careerBreak" defaultValue="no" className="flex items-center gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="break-yes" />
                    <Label htmlFor="break-yes" className="cursor-pointer font-normal">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="break-no" />
                    <Label htmlFor="break-no" className="cursor-pointer font-normal">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="notes">Anything we should know?</Label>
                <Textarea id="notes" name="notes" maxLength={1000} rows={4} className="mt-1.5" />
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
                {submitting ? "Submitting..." : "Submit Resume"}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
