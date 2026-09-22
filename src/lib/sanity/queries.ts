import { cache } from "react";
import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";
import { BRANDS, PAYMENT_METHODS, WATCHES } from "@/lib/mock-data";
import type { Brand, SiteSettings, Watch } from "@/types/catalog";

const WATCHES_QUERY = `*[_type == "watch"] | order(featured desc, price desc){
  "slug": slug.current,
  name,
  "brand": brand->name,
  reference,
  caseSize,
  movement,
  crystal,
  instagramPostUrl,
  description,
  price,
  originalPrice,
  showPrice,
  availability,
  featured,
  images[]{
    "url": asset->url,
    alt
  }
}`;

const BRANDS_QUERY = `*[_type == "brand"] | order(order asc, name asc){
  "slug": slug.current,
  name,
  "logoUrl": logo.asset->url
}`;

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  paymentMethods
}`;

export const getWatches = cache(async (): Promise<Watch[]> => {
  if (!isSanityConfigured || !sanityClient) return WATCHES;
  const watches = await sanityClient.fetch<Watch[]>(WATCHES_QUERY);
  return watches.length > 0 ? watches : WATCHES;
});

export const getBrands = cache(async (): Promise<Brand[]> => {
  if (!isSanityConfigured || !sanityClient) return BRANDS;
  const brands = await sanityClient.fetch<Brand[]>(BRANDS_QUERY);
  return brands.length > 0 ? brands : BRANDS;
});

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const fallback: SiteSettings = { paymentMethods: PAYMENT_METHODS };
  if (!isSanityConfigured || !sanityClient) return fallback;
  const settings = await sanityClient.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
  if (!settings) return fallback;
  return {
    ...settings,
    paymentMethods:
      settings.paymentMethods && settings.paymentMethods.length > 0
        ? settings.paymentMethods
        : PAYMENT_METHODS,
  };
});
