import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "RB Library",
  tagline: "Your Peaceful Study Space in the Heart of Delhi",
  description:
    "Premium reading hall & study library in New Delhi. Air-conditioned, Wi-Fi enabled, quiet study environment with flexible membership plans.",
  address: "Wz 61A/20, Vashist Park, Gandhi Market Rd, Block T, Gandhi Market, Sagar Pur, New Delhi, Delhi 110046",
  phone: "+919213503063",
  phone2: "+918750322228",
  whatsapp: "919213503063",
  whatsappDefaultMessage: "Hi! I'm interested in RB Library Hall membership. Can you share the details about plans and timings?",
  googleMapsUrl:
    "https://www.google.com/maps/place/Rb.Library/@28.5963,77.1146,17z",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.1146!3d28.5963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRb.Library!5e0!3m2!1sen!2sin!4v1",
  rating: 4.9,
  totalReviews: 32,
  heroImage:
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHFXYzjFwHe6GdWoJxsjOQbtOev0BLiOe7_q-ucvGkTIvBKkclux8ww9VJLn1X1JDdj7jqFoFbJpuvmauqrFuXR-CtMq8Sp_VrATGdick0m7u7-ieNrUQ4K8w6ECaAHSZCt-05u=w1920-h1080-k-no",
  hours: {
    weekdays: "6:00 AM – 11:00 PM",
    weekends: "7:00 AM – 10:00 PM",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Plans", href: "#plans" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  facilities: [
    {
      name: "Air Conditioning",
      icon: "Snowflake",
      description: "Comfortable temperature maintained year-round",
    },
    {
      name: "High-Speed Wi-Fi",
      icon: "Wifi",
      description: "Uninterrupted internet for research & study",
    },
    {
      name: "Power Backup",
      icon: "Zap",
      description: "24/7 inverter backup ensures no interruptions",
    },
    {
      name: "CCTV Security",
      icon: "Shield",
      description: "Round-the-clock surveillance for your safety",
    },
    {
      name: "Purified Water",
      icon: "Droplets",
      description: "RO purified drinking water always available",
    },
    {
      name: "Comfortable Seating",
      icon: "Armchair",
      description: "Ergonomic chairs & spacious desks",
    },
    {
      name: "Quiet Environment",
      icon: "VolumeX",
      description: "Strict silence policy for focused studying",
    },
    {
      name: "Personal Lockers",
      icon: "Lock",
      description: "Secure storage for your belongings",
    },
    {
      name: "Clean Washrooms",
      icon: "Bath",
      description: "Well-maintained & hygienic facilities",
    },
    {
      name: "Newspaper & Magazines",
      icon: "Newspaper",
      description: "Daily newspapers & current affairs magazines",
    },
  ],

  membershipPlans: [
    {
      name: "Basic",
      price: 800,
      duration: "month",
      features: [
        "4 Hours Daily Access",
        "Air Conditioned Hall",
        "Wi-Fi Access",
        "Purified Water",
        "Power Backup",
      ],
    },
    {
      name: "Standard",
      price: 1500,
      duration: "month",
      isPopular: true,
      badge: "Most Popular",
      features: [
        "8 Hours Daily Access",
        "Air Conditioned Hall",
        "Wi-Fi Access",
        "Purified Water",
        "Power Backup",
        "Personal Locker",
        "Reserved Seat",
      ],
    },
    {
      name: "Premium",
      price: 2500,
      duration: "month",
      features: [
        "Full Day Access (6 AM–11 PM)",
        "Air Conditioned Hall",
        "Wi-Fi Access",
        "Purified Water",
        "Power Backup",
        "Personal Locker",
        "Reserved Seat",
        "Newspaper & Magazines",
        "Priority Support",
      ],
    },
  ],

  planCustomizer: {
    basePrice: 800,
    timeSlots: [
      { label: "4 Hours", hours: "4h", priceMultiplier: 1 },
      { label: "6 Hours", hours: "6h", priceMultiplier: 1.4 },
      { label: "8 Hours", hours: "8h", priceMultiplier: 1.8 },
      { label: "Full Day", hours: "17h", priceMultiplier: 2.8 },
    ],
    durations: [
      { months: 1, label: "1 Month", discount: 0 },
      { months: 2, label: "2 Months", discount: 5 },
      { months: 3, label: "3 Months", discount: 10 },
      { months: 6, label: "6 Months", discount: 20 },
    ],
    addOns: [
      {
        id: "locker",
        name: "Personal Locker",
        price: 200,
        description: "Secure storage for your belongings",
      },
      {
        id: "reserved-seat",
        name: "Reserved Seat",
        price: 300,
        description: "Same seat every day, guaranteed",
      },
    ],
  },

  reviews: [
    {
      name: "Rohan Sharma",
      rating: 5,
      text: "If you're looking for a library in Sagarpur, this one stands out as one of the best. It offers a wide range of facilities, including high-speed, uninterrupted internet, and comfortable seating. The calm and quiet environment is perfect for focused studying and reading.",
      timeAgo: "a year ago",
    },
    {
      name: "Rishabh Raj",
      rating: 5,
      text: "The library has a calm and inviting atmosphere, with spacious seating areas and plenty of natural light, making it a perfect spot for reading and studying.",
      timeAgo: "a year ago",
    },
    {
      name: "Deepak Gurjar",
      rating: 5,
      text: "RB Library is a place that plays an important role in my life. The library helps in motivating me and exhibits a positive impact on achievement of my success. Highly recommended for serious students.",
      timeAgo: "a year ago",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      text: "Best library in Sagarpur area. AC works great, Wi-Fi is fast, and the staff is very cooperative. I've been studying here for my competitive exam preparation and the environment really helps me focus.",
      timeAgo: "8 months ago",
    },
    {
      name: "Priya Verma",
      rating: 5,
      text: "Very clean and well-maintained library. The seating is comfortable with proper desk partitions. Power backup is a big plus — no interruptions during load shedding. Perfect for long study hours.",
      timeAgo: "6 months ago",
    },
    {
      name: "Rahul Singh",
      rating: 4,
      text: "Good library with all necessary facilities. The locker system is very useful — I don't have to carry heavy books daily. Affordable pricing compared to other libraries in the area.",
      timeAgo: "5 months ago",
    },
  ],

  faq: [
    {
      question: "What are the library timings?",
      answer:
        "We are open from 6:00 AM to 11:00 PM on weekdays and 7:00 AM to 10:00 PM on weekends. We are open 365 days a year.",
    },
    {
      question: "Can I visit before taking a membership?",
      answer:
        "Absolutely! You are welcome to visit and see our facilities before deciding. Just walk in during operating hours or contact us on WhatsApp to schedule a tour.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "We charge a one-time registration fee of ₹200 which covers your ID card and initial setup. This is separate from the monthly membership fee.",
    },
    {
      question: "Can I change my time slot later?",
      answer:
        "Yes, you can change your time slot at the beginning of your next billing cycle. Just inform the staff or contact us on WhatsApp.",
    },
    {
      question: "Are there separate sections for boys and girls?",
      answer:
        "We have a co-ed study hall with comfortable seating. The environment is professional and respectful. CCTV surveillance ensures safety for everyone.",
    },
    {
      question: "What if I miss a day? Do I get a refund?",
      answer:
        "Monthly memberships are not refundable for individual missed days. However, in case of medical emergencies with documentation, we offer extensions on a case-by-case basis.",
    },
    {
      question: "Is food allowed inside the library?",
      answer:
        "Light snacks are allowed in the designated eating area only. Meals and strong-smelling food are not permitted inside the study hall to maintain a clean environment.",
    },
    {
      question: "Do you have parking facilities?",
      answer:
        "We have limited two-wheeler parking space. For four-wheelers, public parking is available nearby on Hudson Lane.",
    },
  ],

  whyChooseUs: [
    {
      title: "Prime Location",
      description:
        "Located at Vashist Park, Sagarpur — near Gandhi Market. Easily accessible from Palam and surrounding areas.",
      icon: "MapPin",
    },
    {
      title: "Affordable Plans",
      description:
        "Flexible pricing starting at just ₹800/month. Choose a plan that fits your budget.",
      icon: "IndianRupee",
    },
    {
      title: "Serious Community",
      description:
        "Join 200+ focused students preparing for UPSC, CA, JEE, NEET, and more.",
      icon: "Users",
    },
    {
      title: "Extended Hours",
      description:
        "Open 6 AM to 11 PM daily. Study at your own pace, at your own time.",
      icon: "Clock",
    },
    {
      title: "Modern Infrastructure",
      description:
        "AC, Wi-Fi, power backup, ergonomic furniture — everything you need.",
      icon: "Building2",
    },
    {
      title: "Safe & Secure",
      description:
        "24/7 CCTV, personal lockers, and a well-managed environment for peace of mind.",
      icon: "ShieldCheck",
    },
  ],
};
