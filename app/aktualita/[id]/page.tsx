"use client";
import React from "react";
import { useAktualitaById } from "@/app/hooks/useAktualitaById";
import { useParams } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const { aktualita, error, loading } = useAktualitaById(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
        <div className="text-center text-red-500">{error}</div>
        <div className="text-center mt-4">
          <Link href="/#aktuality" className="text-primary hover:underline">
            ← Zpět na aktuality
          </Link>
        </div>
      </div>
    );
  }

  if (!aktualita) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
        <div className="text-center text-red-500">
          Aktualita nebyla nalezena
        </div>
        <div className="text-center mt-4">
          <Link href="/#aktuality" className="text-primary hover:underline">
            ← Zpět na aktuality
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 max-w-5xl mx-auto mt-16">
      {/* Zpět odkaz */}
      <div className="mb-4">
        <Link href="/#aktuality" className="text-primary hover:underline">
          ← Zpět na aktuality
        </Link>
      </div>

      <h1>{aktualita.title}</h1>
      <p className="mt-4 mb-16">{aktualita.text}</p>
      {aktualita.image && (
        <Image
          src={urlFor(aktualita.image).url()}
          alt={aktualita.title || "Obrázek aktuality"}
          width={800}
          height={500}
          className="w-full object-cover bg-center rounded-lg"
        />
      )}
    </div>
  );
}
