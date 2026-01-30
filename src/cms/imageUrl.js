// src/cms/imageUrl.js
import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanityClient";
const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);
