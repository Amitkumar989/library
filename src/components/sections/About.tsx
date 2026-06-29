"use client";

import { BookOpen, Users, Clock, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  { icon: BookOpen, label: "Premium Study Hall" },
  { icon: Users, label: "200+ Members" },
  { icon: Clock, label: "17 Hrs Daily" },
  { icon: Award, label: "4.9★ Rated" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection direction="left">
            <SectionHeading
              title="Your Second Home for Studying"
              centered={false}
            />
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                RB Library is more than just a reading hall — it&apos;s a sanctuary for
                focused minds. Nestled in the heart of GTB Nagar on the vibrant
                Hudson Lane, we provide the perfect environment for students
                preparing for competitive exams, college studies, or personal growth.
              </p>
              <p>
                Our air-conditioned, Wi-Fi-enabled space is designed for
                distraction-free studying. With ergonomic furniture, power backup,
                and a strict silence policy, every detail is crafted to help you
                achieve your academic goals.
              </p>
              <p>
                Join a community of 200+ dedicated learners who trust RB Library as
                their daily study partner. Whether you&apos;re preparing for UPSC, CA,
                JEE, NEET, or any other exam — we&apos;ve got the space and support you
                need.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-border shadow-sm"
                >
                  <item.icon size={24} className="text-primary" />
                  <span className="text-xs font-semibold text-dark text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image / Visual */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/5 rounded-3xl -z-10" />

              {/* Main image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="/images/banner.png"
                  alt="RB Library Hall - The Brand of Success"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-border">
                <div className="text-2xl font-bold text-dark">365</div>
                <div className="text-xs text-secondary">Days Open</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
