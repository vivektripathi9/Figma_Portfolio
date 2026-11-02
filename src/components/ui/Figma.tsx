import type { CSSProperties, ReactNode } from "react";

/** Figma-style selection box: blue outline, four corner handles, and a size tag. */
export function SelectionFrame({ children, tag, className = "" }: { children: ReactNode; tag?: string; className?: string }) {
  const handle = "absolute z-10 h-2 w-2 border border-figma-blue bg-white";

  return (
    <div className={`frame-handles relative ${className}`}>
      {children}
      <span aria-hidden="true" className={`${handle} -left-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -right-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -left-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -right-1`} />
      {tag ? (
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded bg-figma-blue px-1.5 py-0.5 font-mono text-[0.65rem] whitespace-nowrap text-[#09090c]">
          {tag}
        </span>
      ) : null}
    </div>
  );
}

/** Multiplayer cursor with a name tag, drifting on a CSS loop. */
export function MultiplayerCursor({
  name,
  color,
  dx,
  dy,
  duration = 14,
  className = "",
}: {
  name: string;
  color: string;
  dx: string;
  dy: string;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`cursor-drift pointer-events-none absolute z-30 flex items-start ${className}`}
      style={{ "--dx": dx, "--dy": dy, "--drift": `${duration}s` } as CSSProperties}
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill={color}>
        <path d="M1 1l6.2 18.5 2.9-7.6 7.9-2.6L1 1z" stroke="#09090c" strokeWidth="1" />
      </svg>
      <span
        className="mt-4 -ml-1 rounded-full px-2.5 py-1 text-[0.7rem] font-medium whitespace-nowrap text-[#09090c]"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}
