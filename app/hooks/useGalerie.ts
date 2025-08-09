import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface GalerieImage {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

interface Galerie {
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

export const useGalerie = () => {
  const [galerie, setGalerie] = useState<Galerie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalerie = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(`
          *[_type == "galerie"] | order(publishedAt desc) {
            _id,
            title,
            text,
            thumbnail,
            images[] {
              _key,
              asset,
              alt
            },
            odkaz,
            publishedAt
          }
        `);
        setGalerie(data);
        setError(null);
      } catch (err) {
        console.error('Chyba při načítání galerií: ', err);
        setError('Nepodařilo se načíst galerie: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalerie();
  }, []);

  return { galerie, loading, error };
};