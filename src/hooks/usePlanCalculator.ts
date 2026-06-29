"use client";

import { useState, useMemo } from "react";
import type { PlanCustomizerConfig } from "@/types";

export function usePlanCalculator(config: PlanCustomizerConfig) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const calculation = useMemo(() => {
    const timeSlot = config.timeSlots[selectedTimeSlot];
    const duration = config.durations[selectedDuration];

    const baseMonthly = config.basePrice * timeSlot.priceMultiplier;
    const addOnTotal = config.addOns
      .filter((a) => selectedAddOns.has(a.id))
      .reduce((sum, a) => sum + a.price, 0);

    const monthlyBeforeDiscount = baseMonthly + addOnTotal;
    const discountAmount =
      (monthlyBeforeDiscount * duration.discount) / 100;
    const monthlyAfterDiscount = monthlyBeforeDiscount - discountAmount;
    const totalPrice = monthlyAfterDiscount * duration.months;

    return {
      timeSlot,
      duration,
      monthlyBeforeDiscount: Math.round(monthlyBeforeDiscount),
      discountPercent: duration.discount,
      discountAmount: Math.round(discountAmount * duration.months),
      monthlyAfterDiscount: Math.round(monthlyAfterDiscount),
      totalPrice: Math.round(totalPrice),
      addOnTotal,
    };
  }, [config, selectedTimeSlot, selectedDuration, selectedAddOns]);

  const whatsappMessage = useMemo(() => {
    const timeSlot = config.timeSlots[selectedTimeSlot];
    const duration = config.durations[selectedDuration];
    const addOns = config.addOns
      .filter((a) => selectedAddOns.has(a.id))
      .map((a) => a.name)
      .join(", ");

    return encodeURIComponent(
      `Hi! I'd like to customize my RB Library membership:\n\n` +
        `⏰ Time Slot: ${timeSlot.label} (${timeSlot.hours})\n` +
        `📅 Duration: ${duration.label}\n` +
        `${addOns ? `✅ Add-ons: ${addOns}\n` : ""}` +
        `💰 Estimated Total: ₹${calculation.totalPrice.toLocaleString("en-IN")}\n\n` +
        `Can you confirm this plan?`
    );
  }, [config, selectedTimeSlot, selectedDuration, selectedAddOns, calculation]);

  return {
    selectedTimeSlot,
    setSelectedTimeSlot,
    selectedDuration,
    setSelectedDuration,
    selectedAddOns,
    toggleAddOn,
    calculation,
    whatsappMessage,
  };
}
