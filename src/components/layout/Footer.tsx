import {
  BookOpen,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-secondary-light text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-light mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-light shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.phone.replace("+91", "+91 ")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary-light shrink-0" />
                <span className="text-sm text-gray-300">
                  {siteConfig.hours.weekdays}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  "Hi! I'm interested in RB Library membership. Can you share more details?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-accent/10 text-accent rounded-xl hover:bg-accent/20 transition-colors text-sm font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 px-4 py-3 bg-primary/10 text-primary-light rounded-xl hover:bg-primary/20 transition-colors text-sm font-medium"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-light">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-secondary-light">
            Made with ❤️ for serious learners
          </p>
        </div>
      </div>
    </footer>
  );
}
