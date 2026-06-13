"use client";

const particles = [
  [8, 16, 3, 9],
  [17, 64, 2, 13],
  [26, 38, 4, 11],
  [34, 78, 2, 8],
  [42, 20, 3, 15],
  [51, 54, 2, 10],
  [59, 86, 3, 14],
  [68, 30, 2, 12],
  [76, 70, 4, 16],
  [85, 44, 2, 9],
  [92, 82, 3, 13],
  [14, 91, 2, 17],
] as const;

export function WarpParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map(([left, top, size, duration], index) => (
        <span
          key={`${left}-${top}`}
          className="warp-particle"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            animationDuration: `${duration}s`,
            animationDelay: `${index * -0.9}s`,
          }}
        />
      ))}
    </div>
  );
}
