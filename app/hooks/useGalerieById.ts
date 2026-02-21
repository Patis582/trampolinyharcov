import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Galerie } from "@/app/types";

export const useGalerieById = (id: string) => {
  const [galerie, setGalerie] = useState<Galerie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalerie = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "galerie" && _id == $id][0] {
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
            odkazText,
            publishedAt
          }`,
          { id }
        );
        setGalerie(data);
        setError(null);
      } catch (err) {
        console.error("Chyba při načítání galerie: ", err);
        setError("Nepodařilo se načíst galerii");
      } finally {
        setLoading(false);
      }
    };

    fetchGalerie();
  }, [id]);

  return { galerie, loading, error };
};
