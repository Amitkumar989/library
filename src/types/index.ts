export interface NavLink {
  label: string;
  href: string;
}

export interface Facility {
  name: string;
  icon: string;
  description: string;
}

export interface MembershipPlan {
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface TimeSlot {
  label: string;
  hours: string;
  priceMultiplier: number;
}

export interface DurationOption {
  months: number;
  label: string;
  discount: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface PlanCustomizerConfig {
  basePrice: number;
  timeSlots: TimeSlot[];
  durations: DurationOption[];
  addOns: AddOn[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  phone2: string;
  whatsapp: string;
  whatsappDefaultMessage: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  rating: number;
  totalReviews: number;
  heroImage: string;
  navLinks: NavLink[];
  facilities: Facility[];
  membershipPlans: MembershipPlan[];
  planCustomizer: PlanCustomizerConfig;
  reviews: Review[];
  faq: FAQItem[];
  whyChooseUs: WhyChooseUsItem[];
  hours: {
    weekdays: string;
    weekends: string;
  };
}
