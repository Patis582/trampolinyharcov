import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Aktualita } from "@/app/types";

export const useAktualitaById = (id: string) => {
  const [aktualita, setAktualita] = useState<Aktualita | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAktualita = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "aktualita" && _id == $id][0]`,
          { id }
        );
        setAktualita(data);
        setError(null);
      } catch (err) {
        console.error("Chyba při načítání aktuality: ", err);
        setError("Nepodařilo se načíst aktualitu");
      } finally {
        setLoading(false);
      }
    };

    fetchAktualita();
  }, [id]);

  return { aktualita, loading, error };
};
