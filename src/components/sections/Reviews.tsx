"use client";

import { Star, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Members Say"
          subtitle="Trusted by hundreds of students across Delhi. Here's what they think."
        />

        {/* Google Rating Banner */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(siteConfig.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-yellow-400/40"
                    }
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-dark ml-2">
                {siteConfig.rating}
              </span>
              <span className="text-secondary text-sm">
                ({siteConfig.totalReviews} reviews)
              </span>
            </div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
            >
              View on Google
              <ExternalLink size={14} />
            </a>
          </div>
        </AnimatedSection>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Card className="h-full" padding="lg">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={
                        j < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark">
                        {review.name}
                      </div>
                      <div className="text-xs text-secondary-light">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary-light uppercase tracking-wider font-medium px-2 py-1 bg-bg-light rounded-full">
                    Google
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
