"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Check, Sparkles, X, Calendar, User, Clock, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { usePlanCalculator } from "@/hooks/usePlanCalculator";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function PlanCustomizer() {
  const {
    selectedTimeSlot,
    setSelectedTimeSlot,
    selectedDuration,
    setSelectedDuration,
    selectedAddOns,
    toggleAddOn,
    calculation,
  } = usePlanCalculator(siteConfig.planCustomizer);

  const config = siteConfig.planCustomizer;

  // Modal & form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [shift, setShift] = useState("Flexible");
  const [visitDate, setVisitDate] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    },
    []
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, handleKeyDown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const timeSlot = config.timeSlots[selectedTimeSlot];
    const duration = config.durations[selectedDuration];
    const addOns = config.addOns
      .filter((a) => selectedAddOns.has(a.id))
      .map((a) => a.name)
      .join(", ");

    const text = 
      `Hi! I'd like to book a customized RB Library membership:\n\n` +
      `👤 Name: ${name}\n` +
      `⏰ Time Slot: ${timeSlot.label} (${timeSlot.hours})\n` +
      `📅 Duration: ${duration.label}\n` +
      `🌅 Shift Preference: ${shift}\n` +
      `${visitDate ? `📆 Visit Date: ${visitDate}\n` : ""}` +
      `${addOns ? `✅ Add-ons: ${addOns}\n` : ""}` +
      `💰 Estimated Total: ₹${calculation.totalPrice.toLocaleString("en-IN")}\n\n` +
      `Can you please confirm this slot for me?`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 md:py-24 bg-bg-warm border-y border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative bg-white rounded-3xl border border-primary/10 shadow-xl overflow-hidden p-8 md:p-12">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Settings size={12} className="animate-spin-slow" />
                  Tailor-Made Timings
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark font-[family-name:var(--font-heading)] leading-tight">
                  Need a Customized Study Slot?
                </h2>
                <p className="mt-4 text-base text-secondary leading-relaxed">
                  Design a flexible plan that matches your exact timings, duration, and optional locker choices. See price changes instantly and secure your custom seat inside the hall.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Sparkles size={20} />}
                  onClick={handleOpenModal}
                  className="w-full md:w-auto text-base shadow-xl shadow-primary/20"
                >
                  Build Your Custom Plan
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Pricing Builder Overlay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden border border-border z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-bg-light shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-primary" size={20} />
                  <h3 className="text-lg md:text-xl font-bold text-dark font-[family-name:var(--font-heading)]">
                    Customize Your Membership Plan
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl text-secondary hover:text-dark hover:bg-border transition-colors cursor-pointer"
                  aria-label="Close builder"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Left Column: Option Configuration */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Step 1: Study Time */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                          1
                        </span>
                        Choose Study Time
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {config.timeSlots.map((slot, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setSelectedTimeSlot(i)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                              selectedTimeSlot === i
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-bg-light text-secondary border border-border hover:border-primary/20 hover:text-dark"
                            }`}
                          >
                            {slot.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Duration */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                          2
                        </span>
                        Choose Duration
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {config.durations.map((dur, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setSelectedDuration(i)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer relative ${
                              selectedDuration === i
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-bg-light text-secondary border border-border hover:border-primary/20 hover:text-dark"
                            }`}
                          >
                            {dur.label}
                            {dur.discount > 0 && (
                              <span
                                className={`absolute -top-2 -right-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                                  selectedDuration === i
                                    ? "bg-accent text-white"
                                    : "bg-accent/10 text-accent"
                                }`}
                              >
                                -{dur.discount}%
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Add Extras */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                          3
                        </span>
                        Add Extras (Optional)
                      </label>
                      <div className="space-y-2">
                        {config.addOns.map((addOn) => (
                          <button
                            type="button"
                            key={addOn.id}
                            onClick={() => toggleAddOn(addOn.id)}
                            className={`w-full flex items-center gap-3.5 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left ${
                              selectedAddOns.has(addOn.id)
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/20"
                            }`}
                          >
                            <div
                              className={`w-4.5 h-4.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                selectedAddOns.has(addOn.id)
                                  ? "bg-primary border-primary"
                                  : "border-secondary-light"
                              }`}
                            >
                              {selectedAddOns.has(addOn.id) && (
                                <Check size={10} className="text-white" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-dark">
                                {addOn.name}
                              </div>
                              <div className="text-[10px] text-secondary">
                                {addOn.description}
                              </div>
                            </div>
                            <div className="text-xs font-extrabold text-primary shrink-0">
                              +₹{addOn.price}/mo
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 4: Your Details */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-3 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                          4
                        </span>
                        Your Contact Information
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div>
                          <label className="block text-[10px] font-bold text-secondary mb-1 flex items-center gap-1">
                            <User size={11} />
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-dark transition-all"
                          />
                        </div>

                        {/* Shift Choice */}
                        <div>
                          <label className="block text-[10px] font-bold text-secondary mb-1 flex items-center gap-1">
                            <Clock size={11} />
                            Shift Preference
                          </label>
                          <select
                            value={shift}
                            onChange={(e) => setShift(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-dark transition-all bg-white"
                          >
                            <option value="Flexible">Flexible / Not Sure</option>
                            <option value="Morning Shift (6:00 AM – 2:00 PM)">Morning Shift (6:00 AM – 2:00 PM)</option>
                            <option value="Evening Shift (2:00 PM – 10:00 PM)">Evening Shift (2:00 PM – 10:00 PM)</option>
                            <option value="Full Day Shift (6:00 AM – 11:00 PM)">Full Day Shift (6:00 AM – 11:00 PM)</option>
                          </select>
                        </div>

                        {/* Visit Date Input */}
                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-bold text-secondary mb-1 flex items-center gap-1">
                            <Calendar size={11} />
                            Visit / Join Date
                          </label>
                          <input
                            type="date"
                            value={visitDate}
                            onChange={(e) => setVisitDate(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs text-dark transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pricing Recap Box */}
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div className="bg-bg-light rounded-2xl border-2 border-primary/10 p-5 space-y-4">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={16} className="text-primary" />
                        <h4 className="text-sm font-bold text-dark">
                          Live Summary
                        </h4>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-secondary">Study Time</span>
                          <span className="font-semibold text-dark">
                            {calculation.timeSlot.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Duration</span>
                          <span className="font-semibold text-dark">
                            {calculation.duration.label}
                          </span>
                        </div>
                        {calculation.addOnTotal > 0 && (
                          <div className="flex justify-between">
                            <span className="text-secondary">Add-ons</span>
                            <span className="font-semibold text-dark">
                              +₹{calculation.addOnTotal}/mo
                            </span>
                          </div>
                        )}

                        <div className="border-t border-border pt-2.5">
                          <div className="flex justify-between text-secondary">
                            <span>Monthly Rate</span>
                            <span>
                              ₹{calculation.monthlyBeforeDiscount.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>

                        {calculation.discountPercent > 0 && (
                          <div className="flex justify-between text-accent font-medium">
                            <span>Duration Discount ({calculation.discountPercent}%)</span>
                            <span>
                              -₹{calculation.discountAmount.toLocaleString("en-IN")}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Total */}
                      <div className="pt-3 border-t-2 border-primary/10">
                        <div className="flex justify-between items-baseline">
                          <span className="text-xs text-secondary font-bold">Total Price:</span>
                          <span className="text-2xl font-black text-primary">
                            ₹{calculation.totalPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="text-[10px] text-secondary mt-0.5">
                          billed for {calculation.duration.label.toLowerCase()}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Action Button */}
                    <div className="mt-6 shrink-0">
                      <Button
                        type="submit"
                        variant="accent"
                        className="w-full text-sm font-bold py-3 shadow-lg shadow-accent/25"
                        icon={<MessageCircle size={18} />}
                      >
                        Book & Send via WhatsApp
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
