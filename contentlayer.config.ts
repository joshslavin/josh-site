import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    cover: { type: "string" },
    location: { type: "json" },
    seo: { type: "json" },
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/articles/${doc._raw.flattenedPath}` },
  },
}));

export const RamenStyle = defineDocumentType(() => ({
  name: "RamenStyle",
  filePathPattern: `ramen/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    aka: { type: "list", of: { type: "string" } },
    origin_story: { type: "string" },
    flavor_profile: { type: "list", of: { type: "string" } },
    region: { type: "string" },
    country: { type: "string", default: "Japan" },
    notable_shops: { type: "json" },
    resources: { type: "json" },
    cover: { type: "string" },
    seo: { type: "json" },
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/ramen/${doc.slug}` },
  },
}));

export const RouteGuide = defineDocumentType(() => ({
  name: "RouteGuide",
  filePathPattern: `routes/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    region: { type: "string" },
    country: { type: "string" },
    distance_km: { type: "number" },
    climb_m: { type: "number" },
    best_months: { type: "list", of: { type: "string" } },
    gpx_url: { type: "string" },
    summary: { type: "string" },
    seo: { type: "json" },
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/cycling/${doc.slug}` },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Article, RamenStyle, RouteGuide],
});
