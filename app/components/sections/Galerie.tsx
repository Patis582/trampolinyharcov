"use client";
import { useGalerie } from "@/app/hooks/useGalerie";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Galerie = () => {
  const { loading, error, galerie } = useGalerie();

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
    <div className="px-8 md:px-16 lg:mx-auto max-w-6xl py-16">
      <h2 className="text-center mb-8">Galerie</h2>
      <div className="flex flex-wrap gap-4">
        {galerie.map((item, index) => (
          <Link href={"#"}
            key={item._id}
            className="bg-gray-300 rounded-xl overflow-hidden relative h-[200px] w-full min-w-[250px] max-w-96 mx-auto hover:scale-102 hover:shadow-2xl transition-all"
          >
            <Image
              src={urlFor(item.thumbnail).url()}
              alt={item.title}
              width={250}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galerie;
