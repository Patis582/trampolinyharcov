"use client";

import { useEffect } from "react";
import Button from "./components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logování chyby do konzole (můžete nahradit externím logováním)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">Chyba</h1>
        <h2 className="text-2xl font-semibold mb-4">Něco se pokazilo</h2>
        <p className="text-gray-600 mb-8">
          Omlouváme se, ale došlo k neočekávané chybě. Zkuste to prosím znovu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="border-2 border-primary bg-primary text-white px-8 py-2 rounded-lg hover:bg-transparent hover:text-black transition-all"
          >
            Zkusit znovu
          </button>
          <Button href="/" filled={false}>
            Zpět na úvod
          </Button>
        </div>
      </div>
    </div>
  );
}
