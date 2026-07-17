// src/cms/imageUrl.js
import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanityClient";

const defaultBuilder = imageUrlBuilder(sanity);

/** @deprecated Prefer createImageUrlBuilder(client) in hooks */
export const urlFor = (source) => defaultBuilder.image(source);

export function createImageUrlBuilder(client) {
  return imageUrlBuilder(client);
}
