export type WatchAvailability = "stock" | "encargo";

export interface WatchImage {
  url: string;
  alt: string;
}

export interface Watch {
  slug: string;
  name: string;
  brand: string;
  reference?: string;
  caseSize?: string;
  movement?: string;
  crystal?: string;
  instagramPostUrl?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  showPrice?: boolean;
  availability: WatchAvailability;
  featured?: boolean;
  images: WatchImage[];
}

export interface Brand {
  slug: string;
  name: string;
  logoUrl?: string;
}

export interface PaymentMethod {
  title: string;
  description: string;
}

export interface SiteSettings {
  paymentMethods?: PaymentMethod[];
}
