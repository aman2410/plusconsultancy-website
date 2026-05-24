import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Plus } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="text-lg">Plus Consultancy</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Helping companies hire faster, smarter, and with higher-quality talent across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">For You</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/employers" className="hover:text-white">Hire Talent</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@plusconsultancy.in" className="hover:text-white">info@plusconsultancy.in</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+918815239731" className="hover:text-white">+91 88152 39731</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a href="https://in.linkedin.com/company/plusconsultancy123" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Plus Consultancy. All rights reserved.</p>
          <p>Premium recruitment & talent acquisition · India</p>
        </div>
      </div>
    </footer>
  );
}
