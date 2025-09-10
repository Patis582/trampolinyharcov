import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

interface Aktualita {
  _id: string;
  title: string;
  text: string;
  image?: SanityImageObject;
  publishedAt: string;
}

export const useAktuality = () => {
  const [aktuality, setAktuality] = useState<Aktualita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAktuality = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(`*[_type == "aktualita"] | order(publishedAt desc)`);
        setAktuality(data);
        setError(null);
      } catch (err) {
        console.error('Chyba při načítání aktualit: ', err);
        setError('Nepodařilo se načíst aktuality: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchAktuality();
  }, []);

  return { aktuality, loading, error };
};