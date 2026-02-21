import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Stránka nenalezena</h2>
        <p className="text-gray-600 mb-8">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla
          přesunuta.
        </p>
        <Button href="/" filled>
          Zpět na úvod
        </Button>
      </div>
    </div>
  );
}
