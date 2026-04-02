import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;


export const client = createClient({
  projectId,
  dataset: "production",
  useCdn: true, // Use the edge cache for faster response times
  apiVersion: "2024-01-01",
});


const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}