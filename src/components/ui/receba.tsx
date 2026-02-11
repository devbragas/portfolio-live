export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Blob 1 */}
      <div
        className="
          absolute -left-24 -top-24
          h-[340px] w-[340px]
          rounded-full
          bg-[radial-gradient(circle_at_30%_30%,rgba(39,195,159,0.35),transparent_60%)]
          blur-3xl opacity-70
          animate-floatA
        "
      />

      {/* Blob 2 */}
      <div
        className="
          absolute -right-32 top-24
          h-[380px] w-[380px]
          rounded-full
          bg-[radial-gradient(circle_at_60%_40%,rgba(39,97,195,0.28),transparent_62%)]
          blur-3xl opacity-60
          animate-floatB
        "
      />

      {/* Quadradinho “pixelado” (opcional) */}
      <div
        className="
          absolute right-24 top-20
          h-16 w-16
          opacity-20 blur-[0.5px]
          bg-[linear-gradient(90deg,rgba(39,195,159,0.6)_0%,rgba(39,97,195,0.6)_100%)]
          [mask-image:radial-gradient(circle,black_55%,transparent_70%)]
          animate-drift
        "
      />
    </div>
  );
}
