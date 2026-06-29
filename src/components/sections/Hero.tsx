"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Phone, ArrowDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/study-hall-1.jpg"
          alt="RB Library study hall with students studying"
          fill
          className="object-cover"
          loading="eager"
          unoptimized
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(siteConfig.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-yellow-400/40"
                  }
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              {siteConfig.rating} • {siteConfig.totalReviews} Google Reviews
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
            {siteConfig.tagline}
          </p>

          {/* Address */}
          <div className="mt-6 flex items-start gap-2 text-white/60">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            <span className="text-sm">{siteConfig.address}</span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<Phone size={20} />}
              href={`tel:${siteConfig.phone}`}
            >
              Book a Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#plans"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
            >
              View Plans
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
