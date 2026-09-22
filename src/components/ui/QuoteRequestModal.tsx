"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { encargoPhotoInquiryUrl, quoteRequestUrl } from "@/lib/whatsapp";

interface QuoteRequestModalProps {
  triggerClassName?: string;
  triggerLabel?: string;
  defaultBrand?: string;
  defaultModel?: string;
}

export default function QuoteRequestModal({
  triggerClassName,
  triggerLabel = "Solicitar cotización",
  defaultBrand,
  defaultModel,
}: QuoteRequestModalProps) {
  const [open, setOpen] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = quoteRequestUrl({
      brand: String(formData.get("brand") ?? "").trim(),
      model: String(formData.get("model") ?? "").trim(),
      reference: String(formData.get("reference") ?? "").trim(),
      size: String(formData.get("size") ?? "").trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center justify-center rounded-sm bg-silver px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-silver-light"
        }
      >
        {triggerLabel}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-line bg-dark p-8"
          >
            <div className="flex items-start justify-between">
              <h3
                id="quote-modal-title"
                className="font-serif text-2xl font-medium text-off-white"
              >
                Solicitar cotización
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="text-gray transition-colors hover:text-off-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm font-light text-gray">
              Contanos qué reloj estás buscando y te respondemos por WhatsApp.
            </p>
            <p className="mt-2 text-xs font-light text-gray">
              ¿No tenés la marca, referencia o medida a mano? No hay problema — completá
              lo que sepas (aunque sea la descripción o de dónde lo viste) y charlamos el
              resto por WhatsApp. También podés{" "}
              <a
                href={encargoPhotoInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver underline underline-offset-2 hover:text-silver-light"
              >
                escribirnos directo y mandarnos una foto
              </a>
              .
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <Field
                ref={firstFieldRef}
                name="model"
                label="Modelo del reloj (o mandanos la foto por WhatsApp)"
                defaultValue={defaultModel}
                required
              />
              <Field name="brand" label="Marca (si la sabés)" defaultValue={defaultBrand} />
              <Field name="reference" label="Número de referencia (si lo sabés)" />
              <Field name="size" label="Medida (si la sabés)" />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-silver px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-silver-light"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

interface FieldProps {
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
}

function Field({
  name,
  label,
  required,
  defaultValue,
  ref,
}: FieldProps & { ref?: React.Ref<HTMLInputElement> }) {
  const id = `quote-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-gray"
      >
        {label}
        {required ? <span className="text-silver"> *</span> : null}
      </label>
      <input
        ref={ref}
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
        type="text"
        className="w-full border border-line bg-black px-4 py-3 text-sm font-light text-off-white outline-none transition-colors placeholder:text-gray-2 focus:border-silver"
      />
    </div>
  );
}
