"use client";

import { BookOpen, Users, Clock, Award, GraduationCap, Target } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  { icon: BookOpen, label: "Premium Study Hall" },
  { icon: Users, label: "100+ Members" },
  { icon: Clock, label: "Open 15 Hrs Daily" },
  { icon: Award, label: "4.9★ Rated" },
];

const exams = [
  "UPSC", "SSC CGL", "JEE", "NEET", "CA", "CLAT", "GATE", "Bank PO",
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
                <strong className="text-dark">RB Library</strong> — Sagar Pur&apos;s
                most loved study space. AC, Wi-Fi, power backup, personal lockers &
                zero distractions. Whether you&apos;re preparing for UPSC, SSC CGL, JEE,
                NEET, CA, or any competitive exam — this is where toppers study.
              </p>
              <p>
                Walk in once and feel the difference. Affordable plans, a motivated
                community of 100+ students, and a silent, focused environment that
                makes you <em>want</em> to study. Your success story starts here.
              </p>
            </div>

            {/* Exam Badges */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={18} className="text-primary" />
                <span className="text-sm font-bold text-dark">Exams We Support</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exams.map((exam) => (
                  <span
                    key={exam}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/8 text-primary text-xs font-semibold rounded-full border border-primary/15 hover:bg-primary/15 transition-colors"
                  >
                    <Target size={10} />
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
