"use client";
import { useGalerieById } from "@/app/hooks/useGalerieById";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const [isClient, setIsClient] = useState(false);

  const { loading, error, galerie } = useGalerieById(id);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onInit = () => {
    // LightGallery initialized
  };

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
          <Link href="/#galerie" className="text-primary hover:underline">
            ← Zpět na galerie
          </Link>
        </div>
      </div>
    );
  }

  if (!galerie) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-w-0 w-full">
        <div className="text-center text-red-500">Galerie nebyla nalezena</div>
        <div className="text-center mt-4">
          <Link href="/#galerie" className="text-primary hover:underline">
            ← Zpět na galerie
          </Link>
        </div>
      </div>
    );
  }

  if (!isClient) {
    return (
      <div className="mt-16 mx-8 lg:mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h1>{galerie.title}</h1>
          {galerie.text && <p>{galerie.text}</p>}
          {galerie.odkazText && galerie.odkaz && (
            <p>
              {galerie.odkazText}{" "}
              <a
                href={galerie.odkaz}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Zde
              </a>
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 mx-8 lg:mx-auto max-w-7xl">
      {/* Zpět odkaz */}
      <div className="mb-4">
        <Link href="/#galerie" className="text-primary hover:underline">
          ← Zpět na galerie
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1>{galerie.title}</h1>
        {galerie.text && <p>{galerie.text}</p>}
        {galerie.odkazText && galerie.odkaz && (
          <p>
            {galerie.odkazText}{" "}
            <a
              href={galerie.odkaz}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Zde
            </a>
          </p>
        )}
      </div>

      {galerie.images && galerie.images.length > 0 ? (
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
        >
          {galerie.images.map((image, index) => {
            if (!image || !image.asset || !image.asset._ref) {
              return null;
            }

            return (
              <a
                key={image._key || index}
                href={urlFor(image).url()}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={urlFor(image).url()}
                  alt={image.alt || `Fotka ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </a>
            );
          })}
        </LightGallery>
      ) : (
        <div className="text-center text-gray-500 py-16">
          Tato galerie zatím neobsahuje žádné fotky.
        </div>
      )}
    </div>
  );
}
