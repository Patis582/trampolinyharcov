import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface Aktualita {
  _id: string;
  title: string;
  text: string;
  image?: SanityImageObject;
  publishedAt: string;
}

export interface GalerieImage {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

export interface Galerie {
  _id: string;
  title: string;
  text?: string;
  thumbnail: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  images: GalerieImage[];
  odkaz?: string;
  publishedAt: string;
  odkazText?: string;
}

export interface NavItem {
  href: string;
  label: string;
}
