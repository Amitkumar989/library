"use client";

import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Visit Us Today"
          subtitle="Drop by for a tour or reach out to us. We'd love to help you find your perfect study space."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    {siteConfig.phone.replace("+91", "+91 ")}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    Hours
                  </h3>
                  <p className="text-sm text-secondary">
                    Mon–Fri: {siteConfig.hours.weekdays}
                  </p>
                  <p className="text-sm text-secondary">
                    Sat–Sun: {siteConfig.hours.weekends}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="accent"
                  icon={<MessageCircle size={18} />}
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Hi! I'd like to visit RB Library. When can I come for a tour?"
                  )}`}
                  className="flex-1"
                >
                  WhatsApp Us
                </Button>
                <Button
                  variant="primary"
                  icon={<Phone size={18} />}
                  href={`tel:${siteConfig.phone}`}
                  className="flex-1"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  icon={<Navigation size={18} />}
                  href={siteConfig.googleMapsUrl}
                  className="flex-1"
                >
                  Directions
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Map & Entrance Photo */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4 h-full">
              {/* Entrance photo */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src="/images/entrance.png"
                  alt="RB Library Hall entrance on Hudson Lane"
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Map */}
              <div className="min-h-[350px] rounded-2xl overflow-hidden border border-border shadow-lg flex-1">
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 350 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RB Library Location on Google Maps"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
