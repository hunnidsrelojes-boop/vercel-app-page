import { createClient } from "@sanity/client";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const isSanityConfigured = Boolean(sanityProjectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;
