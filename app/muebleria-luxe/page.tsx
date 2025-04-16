"use client";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";
import ProductGrid from "@/components/ProductGrid";
import { SearchFilters } from "@/components/SearchFilters";
import { ShoppingCartProvider } from "@/components/ShoppingCartProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <ShoppingCartProvider>
      <BackgroundCarousel />
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Catálogo de Productos
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <SearchFilters />
          </aside>
          <main>
            <Suspense
              fallback={
                <div className="text-center py-10 text-white">
                  Cargando productos...
                </div>
              }
            >
              <ProductGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}
