import clsx from "clsx";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}

export default function WhatsAppButton({
  href,
  label = "Consultar por WhatsApp",
  variant = "solid",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300",
        variant === "solid"
          ? "bg-silver text-black hover:bg-silver-light"
          : "border border-silver-dim text-off-white hover:border-silver hover:text-silver",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      {label}
    </a>
  );
}
