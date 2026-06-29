"use client";

import {
  MapPin,
  IndianRupee,
  Users,
  Clock,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  IndianRupee,
  Users,
  Clock,
  Building2,
  ShieldCheck,
};

const gradients = [
  "from-blue-500/10 to-blue-500/5",
  "from-emerald-500/10 to-emerald-500/5",
  "from-purple-500/10 to-purple-500/5",
  "from-amber-500/10 to-amber-500/5",
  "from-rose-500/10 to-rose-500/5",
  "from-cyan-500/10 to-cyan-500/5",
];

const iconColors = [
  "text-blue-600",
  "text-emerald-600",
  "text-purple-600",
  "text-amber-600",
  "text-rose-600",
  "text-cyan-600",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Students Choose Us"
          subtitle="Here's what sets RB Library apart from the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-border p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      size={26}
                      className={iconColors[i % iconColors.length]}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
