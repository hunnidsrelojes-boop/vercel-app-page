"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import WatchCard from "@/components/ui/WatchCard";
import Reveal from "@/components/ui/Reveal";
import type { Watch } from "@/types/catalog";

interface WatchGridProps {
  watches: Watch[];
}

export default function WatchGrid({ watches }: WatchGridProps) {
  const brands = useMemo(
    () => Array.from(new Set(watches.map((w) => w.brand))).sort(),
    [watches]
  );
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = selected ? watches.filter((w) => w.brand === selected) : watches;

  if (watches.length === 0) return null;

  return (
    <div>
      {brands.length > 1 ? (
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar por marca">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors",
              selected === null
                ? "border-silver bg-silver text-black"
                : "border-line text-gray hover:border-silver-dim hover:text-silver"
            )}
          >
            Todas
          </button>
          {brands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => setSelected(brand)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors",
                selected === brand
                  ? "border-silver bg-silver text-black"
                  : "border-line text-gray hover:border-silver-dim hover:text-silver"
              )}
            >
              {brand}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((watch, i) => (
          <Reveal key={watch.slug} delay={Math.min(i * 0.06, 0.3)}>
            <WatchCard watch={watch} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
