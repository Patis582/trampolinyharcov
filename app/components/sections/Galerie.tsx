"use client";
import { useGalerie } from "@/app/hooks/useGalerie";
import { urlFor } from "@/sanity/lib/image";
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
      <div className="grid grid-cols-2 md:grid-cols-9 gap-4">
        {galerie.map((item) => (
          <Link
            href={`/galerie/${item._id}`}
            key={item._id}
            className="bg-gray-300 rounded-xl overflow-hidden relative h-[200px] w-full mx-auto hover:scale-102 hover:shadow-2xl transition-transform transition-shadow duration-300 ease-in-out gallery-item bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.1)),
                            url(${urlFor(item.thumbnail).url()})`,
            }}
          >
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
