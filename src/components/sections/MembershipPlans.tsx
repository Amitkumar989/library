"use client";

import { Check, Crown, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const planAccents = [
  {
    border: "border-border",
    bg: "bg-white",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    tag: null,
  },
  {
    border: "border-border",
    bg: "bg-white",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: null,
  },
  {
    border: "border-primary",
    bg: "bg-white",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    tag: "Best Value",
  },
];

export default function MembershipPlans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-bg-light relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Membership Plans"
          subtitle="Simple, transparent pricing. Choose the plan that fits your schedule — all plans include AC, Wi-Fi, power backup & purified water."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {siteConfig.membershipPlans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col ${
                  plan.isPopular
                    ? "border-primary shadow-xl shadow-primary/10 bg-gradient-to-b from-primary/2 to-white scale-[1.02] md:scale-105"
                    : `${planAccents[i]?.border || "border-border"} bg-white`
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold rounded-full shadow-lg shadow-primary/30">
                      <Crown size={14} />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className={`mb-6 ${plan.badge ? "mt-2" : ""}`}>
                  <h3 className="text-xl font-bold text-dark font-[family-name:var(--font-heading)]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-secondary mt-1">
                    {i === 0
                      ? "For light study sessions"
                      : i === 1
                      ? "For regular students"
                      : "Full day, full access"}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-dark tracking-tight">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-secondary text-sm font-medium">
                      /{plan.duration}
                    </span>
                  </div>
                  {plan.isPopular && (
                    <div className="mt-2 inline-flex items-center gap-1 text-xs text-primary font-semibold">
                      <Sparkles size={12} />
                      Full day access included
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        }`}
                      >
                        <Check
                          size={12}
                          className={plan.isPopular ? "text-primary" : "text-accent"}
                        />
                      </div>
                      <span className="text-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant={plan.isPopular ? "primary" : "outline"}
                    className={`w-full group ${
                      plan.isPopular
                        ? "shadow-lg shadow-primary/20"
                        : ""
                    }`}
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hi! I'm interested in the ${plan.name} plan at ₹${plan.price}/month. Can you share more details?`
                    )}`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm text-secondary mt-10 max-w-xl mx-auto">
            All plans include a one-time registration fee of ₹200. Prices are inclusive of all taxes.
            Need a custom slot?{" "}
            <a href="#customizer" className="text-primary font-semibold hover:underline">
              Build your own plan →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
