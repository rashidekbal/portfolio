export default function BackgroundVisuals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* ─── Dotted Grid Mesh Overlay ─── */}
      <div className="absolute inset-0 grid-mesh opacity-[0.5] dark:opacity-[0.3]" />

      {/* ─── Moving Glowing Blobs ─── */}
      <div className="absolute -top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent-muted blur-[80px] md:blur-[120px] animate-blob-1" />
      <div className="absolute top-[40%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-accent-muted blur-[90px] md:blur-[140px] animate-blob-2" />
      <div className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-accent-muted blur-[70px] md:blur-[110px] animate-blob-3" />

      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-gradient-to-b from-accent-muted to-transparent blur-[60px] opacity-[0.3] dark:opacity-[0.1]" />
    </div>
  );
}
