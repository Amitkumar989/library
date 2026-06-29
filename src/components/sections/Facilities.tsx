"use client";

import {
  Snowflake,
  Wifi,
  Zap,
  Shield,
  Droplets,
  Armchair,
  VolumeX,
  Lock,
  Bath,
  Newspaper,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Snowflake,
  Wifi,
  Zap,
  Shield,
  Droplets,
  Armchair,
  VolumeX,
  Lock,
  Bath,
  Newspaper,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="World-Class Facilities"
          subtitle="Everything you need for a productive study session, all under one roof."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {siteConfig.facilities.map((facility, i) => {
            const Icon = iconMap[facility.icon] || Snowflake;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card className="text-center group h-full" padding="md">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors mb-3">
                    <Icon
                      size={24}
                      className="text-primary group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed hidden sm:block">
                    {facility.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
