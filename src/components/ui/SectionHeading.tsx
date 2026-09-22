interface SectionHeadingProps {
  headingId?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  headingId,
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label ? (
        <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.3em] text-silver">
          {label}
        </span>
      ) : null}
      <h2
        id={headingId}
        className="font-serif text-4xl font-light leading-tight text-off-white sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm font-light leading-relaxed text-gray sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
