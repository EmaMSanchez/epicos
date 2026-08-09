import type { Product } from "../../data";

export type CollectionChapter = {
  title: string[];
  description: string;
};

export type CollectionConfig = {
  relaxedTitles?: boolean;
  heroTitle: string[];
  heroTagline: string;
  heroAlt: string;
  introTitle: string;
  introDescription: string;
  storyLabel: string;
  storyChapters: [CollectionChapter, CollectionChapter];
  collectionTitle: string[];
  collectionDescription: string;
  closingTitle: string;
  closingDescription: string;
  products: Product[];
};
