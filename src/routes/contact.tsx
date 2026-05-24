import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plus Consultancy" },
      { name: "description", content: "Get in touch with Plus Consultancy. Schedule a hiring consultation or talk to a recruiter today." },
      { property: "og:title", content: "Contact Plus Consultancy" },
      { property: "og:description", content: "Schedule a hiring consultation with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid work email address").max(255),
  company: z.string().trim().min(1, "Company name is required").max(100),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const file = fd.get("jd") as File;
    if (!file || file.size === 0) {
      toast.error("Please upload the job description or requirements document");
      return;
    }
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext !== 'pdf' && ext !== 'doc' && ext !== 'docx') {
      toast.error("Job description must be in PDF or Word format (.pdf, .doc, .docx)");
      return;
    }

    const r = schema.safeParse(Object.fromEntries(fd));
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message received. We'll respond within one business day.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <Section className="bg-secondary pb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Contact</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-6xl">Let's talk hiring.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Whether you have a single role to close or a team to scale, we're a quick conversation away.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <Mail className="h-6 w-6 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-navy">Email</h3>
              <div className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                <a href="mailto:info@plusconsultancy.in" className="block hover:text-navy">info@plusconsultancy.in</a>
                <a href="mailto:aditi@plusconsultancy.in" className="block hover:text-navy">aditi@plusconsultancy.in</a>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Phone className="h-6 w-6 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-navy">Phone</h3>
              <div className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                <a href="tel:+918815239731" className="block hover:text-navy">+91 88152 39731</a>
                <a href="tel:+918982000676" className="block hover:text-navy">+91 89820 00676</a>
                <span className="block">+91 76948 08965 / 52</span>
                <a href="tel:07554700306" className="block hover:text-navy">Landline: 0755-4700306</a>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-navy">Office</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                4/6, Top Floor, Aamer Complex,<br />
                M.P. Nagar, Zone II,<br />
                Plus Consultancy Bhopal - 462001
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Linkedin className="h-6 w-6 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-navy">LinkedIn</h3>
              <a href="https://in.linkedin.com/company/plusconsultancy123" target="_blank" rel="noopener noreferrer" className="mt-1.5 block text-sm text-muted-foreground hover:text-navy">Plus Consultancy on LinkedIn</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
            <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We respond within one business day.</p>
            <div className="mt-6 grid gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-1.5" placeholder="e.g. John Doe" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" placeholder="e.g. john@company.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" required maxLength={10} className="mt-1.5" placeholder="e.g. 9876543210" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" name="company" required maxLength={100} className="mt-1.5" placeholder="e.g. Acme Corp" />
                </div>
                <div>
                  <Label htmlFor="jd">Job description / Requirements</Label>
                  <Input
                    id="jd"
                    name="jd"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="mt-1.5 file:mr-3 file:rounded-md file:border-0 file:bg-orange/10 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-orange hover:file:bg-orange/20 cursor-pointer file:transition-colors"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required maxLength={1000} rows={4} className="mt-1.5" placeholder="Tell us more about your hiring needs..." />
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
