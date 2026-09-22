import type { Watch } from "@/types/catalog";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WatchImageGallery from "@/components/ui/WatchImageGallery";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { encargoWatchInquiryUrl, watchInquiryUrl } from "@/lib/whatsapp";

interface WatchCardProps {
  watch: Watch;
}

export default function WatchCard({ watch }: WatchCardProps) {
  return (
    <article className="group flex flex-col border border-line bg-dark transition-colors duration-300 hover:border-silver-dim">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-dark-2">
        <WatchImageGallery images={watch.images} watchName={watch.name} />
        {watch.availability === "encargo" ? (
          <span className="absolute left-3 top-3 rounded-sm border border-silver-dim bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-silver">
            Por encargo
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-silver">
            {watch.brand}
          </p>
          <h3 className="mt-1.5 font-serif text-xl font-medium text-off-white">
            {watch.name}
          </h3>
        </div>

        {watch.reference || watch.caseSize ? (
          <p className="text-xs font-light text-gray">
            {[watch.reference, watch.caseSize].filter(Boolean).join(" · ")}
          </p>
        ) : null}

        {watch.description ? (
          <p className="text-sm font-light leading-relaxed text-gray">
            {watch.description}
          </p>
        ) : null}

        {watch.showPrice && watch.price ? (
          <div className="flex items-baseline gap-2">
            <p className="text-base font-semibold tracking-wide text-silver">
              {watch.price.toLocaleString("es-AR")} USD
            </p>
            {watch.originalPrice && watch.originalPrice > watch.price ? (
              <>
                <p className="text-xs font-light text-gray line-through">
                  {watch.originalPrice.toLocaleString("es-AR")} USD
                </p>
                <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-silver">
                  −{Math.round(
                    ((watch.originalPrice - watch.price) / watch.originalPrice) * 100
                  )}%
                </span>
              </>
            ) : null}
          </div>
        ) : null}

        <div className="mt-auto pt-2">
          <WhatsAppButton
            href={
              watch.availability === "encargo"
                ? encargoWatchInquiryUrl(watch.name)
                : watchInquiryUrl(watch.name)
            }
            label={
              watch.availability === "encargo"
                ? "Consultar precio y disponibilidad"
                : undefined
            }
            variant="outline"
            className="w-full"
          />

          {watch.instagramPostUrl ? (
            <a
              href={watch.instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray transition-colors hover:text-silver"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Ver en Instagram
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
