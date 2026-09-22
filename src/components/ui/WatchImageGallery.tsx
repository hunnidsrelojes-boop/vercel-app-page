"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Watch as WatchIcon } from "lucide-react";
import type { WatchImage } from "@/types/catalog";

interface WatchImageGalleryProps {
  images: WatchImage[];
  watchName: string;
}

export default function WatchImageGallery({ images, watchName }: WatchImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (images.length === 0) {
    return (
      <WatchIcon className="h-12 w-12 text-gray-2" strokeWidth={1} aria-hidden="true" />
    );
  }

  const current = images[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? 1 : -1);
  }

  return (
    <div
      className="relative h-full w-full"
      onTouchStart={images.length > 1 ? onTouchStart : undefined}
      onTouchEnd={images.length > 1 ? onTouchEnd : undefined}
    >
      <Image
        src={current.url}
        alt={current.alt || watchName}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(-1);
            }}
            aria-label={`Foto anterior de ${watchName}`}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-off-white opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(1);
            }}
            aria-label={`Foto siguiente de ${watchName}`}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-off-white opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.url + i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Ver foto ${i + 1} de ${watchName}`}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={
                    i === index
                      ? "h-1.5 w-4 rounded-full bg-silver"
                      : "h-1.5 w-1.5 rounded-full bg-silver-dim"
                  }
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
