export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  tone = "light",
  className = "",
}) {
  const centered = align === "center";
  const mutedText = tone === "dark" ? "text-mist/65" : "text-ink/70 dark:text-mist/65";
  const titleText = tone === "dark" ? "text-mist" : "text-ink dark:text-mist";
  const eyebrowText =
    tone === "dark" ? "text-mint-300" : "text-mint-700 dark:text-mint-300";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`font-mono text-[0.62rem] font-medium uppercase tracking-[0.24em] ${eyebrowText}`}
        >
          [{" "}
          <span className={centered ? "inline" : "inline"}>
            {eyebrow}
          </span>{" "}
          ]
        </p>
      )}
      <h2
        id={id}
        className={`mt-5 font-body text-[1.9rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[2.7rem] ${titleText}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-5 max-w-2xl text-[0.95rem] leading-[2] sm:text-base ${mutedText} ${centered ? "" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
