'use client'
import React from "react";
import { useAktuality } from "@/app/hooks/useAktuality";
import { useParams } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

export default function page() {
  const params = useParams();
  const id = params.id as string;

  const { aktuality, error, loading } = useAktuality();

  const aktualita = aktuality.find(item => id === item._id)

   if (loading) {
    return (
      <div className="mx-auto">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="px-8 max-w-5xl mx-auto mt-16">
      <h1>{aktualita?.title}</h1>
      <p className="mt-4 mb-16">{aktualita?.text}</p>
      <Image src={urlFor(aktualita?.image).url()} alt="Obrázek aktuality" width={800} height={500} className="w-full object-cover bg-center" />
    </div>
  );
};
