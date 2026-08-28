export type ServiceId = 
  | 'social-media'
  | 'google-ads-maps'
  | 'website-design'
  | 'local-seo'
  | 'entity-seo';

export interface ServiceItem {
  id: ServiceId;
  code: string;
  title: string;
  subtitle: string;
  badge?: string;
  priceDisplay: string;
  priceNote?: string;
  period: string;
  description: string;
  inclusions: string[];
  ctaText: string;
  popular?: boolean;
  tagline: string;
  // 5 core consultant questions
  qaBreakdown: {
    problem: string;
    solution: string;
    benefit: string;
    cost: string;
    whyHireUs: string;
  };
  options?: { name: string; price: string }[];
}

export interface ComboPackage {
  id: string;
  title: string;
  priceDisplay: string;
  period: string;
  badge?: string;
  services: string[];
  description: string;
  suitableFor: string;
  ctaText: string;
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  salonName: string;
  category: 'Nail Salon' | 'Nail Spa' | 'Beauty Spa' | 'Lash & Brow' | 'PMU Studio';
  location: string;
  countryFlag: string;
  servicesUsed: string[];
  image: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  salonName: string;
  location: string;
  countryFlag: string;
  avatar: string;
  serviceUsed: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'pricing' | 'service' | 'technical' | 'guarantee';
}

export interface ConsultationFormData {
  fullName: string;
  salonName: string;
  email: string;
  phone: string;
  location: string;
  websiteUrl: string;
  selectedService: string;
  message: string;
}
