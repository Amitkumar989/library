"use client";

import { Check, Crown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function MembershipPlans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Membership Plans"
          subtitle="Choose a plan that fits your schedule and budget. All plans include core facilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {siteConfig.membershipPlans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative bg-white rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col ${
                  plan.isPopular
                    ? "border-primary shadow-lg shadow-primary/10 scale-[1.02] md:scale-105"
                    : "border-border"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg shadow-primary/25">
                      <Crown size={14} />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-dark font-[family-name:var(--font-heading)]">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-dark">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-secondary text-sm ml-1">
                    /{plan.duration}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full"
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hi! I'm interested in the ${plan.name} plan at ₹${plan.price}/month. Can you share more details?`
                    )}`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
