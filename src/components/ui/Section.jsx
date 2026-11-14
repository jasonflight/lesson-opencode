export default function Section({
  id,
  labelledBy,
  className = "",
  contentClassName = "",
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 py-20 sm:py-24 lg:py-28 ${className}`}
      {...rest}
    >
      <div
        className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
