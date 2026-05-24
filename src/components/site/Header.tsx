import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/employers", label: "Employers" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold text-navy">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
            <Plus className="h-5 w-5" strokeWidth={3} />
          </span>
          <span className="text-lg tracking-tight">Plus Consultancy</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="bg-navy text-navy-foreground hover:bg-navy/90">
            <Link to="/employers">Hire Talent</Link>
          </Button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-3 bg-navy text-navy-foreground hover:bg-navy/90">
              <Link to="/employers" onClick={() => setOpen(false)}>Hire Talent</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
