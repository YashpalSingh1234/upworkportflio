interface AnimatedFlowProps {
  d: string;
  dur: number;
  count?: number;
}

/** Particles travelling along an SVG path. */
export function AnimatedFlow({ d, dur, count = 1 }: AnimatedFlowProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <circle key={`${dur}-${i}`} r={2.5} fill="#7cc4ff">
          <animateMotion dur={`${dur}s`} begin={`${-(dur * i) / count}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
    </>
  );
}

interface ArchitectureConnectionProps {
  d: string;
  active: boolean;
  dimmed: boolean;
  ambient: boolean;
  reduced: boolean;
}

export function ArchitectureConnection({ d, active, dimmed, ambient, reduced }: ArchitectureConnectionProps) {
  return (
    <g style={{ opacity: dimmed ? 0.15 : 1, transition: "opacity .25s" }}>
      <path d={d} fill="none" stroke={active ? "#7cc4ff" : "#232c38"} strokeWidth={active ? 1.6 : 1} style={{ transition: "stroke .25s" }} />
      {!reduced && active && <AnimatedFlow d={d} dur={1.3} count={2} />}
      {!reduced && !active && ambient && <AnimatedFlow d={d} dur={9} />}
    </g>
  );
}
