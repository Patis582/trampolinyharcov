"use client";
import { useGalerie } from "@/app/hooks/useGalerie";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
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

  const getColSpan = (index: number) => {
    const patterns = [4, 4, 4, 3, 4, 5]; 
    const patternIndex = index % patterns.length;
    return patterns[patternIndex];
  };

  return (
    <div className="px-8 md:px-16 lg:mx-auto max-w-6xl py-16">
      <h2 className="text-center mb-8">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        {galerie.map((item, index) => (
          <div
            key={item._id}
            className={`bg-gray-300 rounded-xl overflow-hidden relative col-span-${getColSpan(
              index
            )}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerie;
