export function Motif({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`system-motif ${compact ? 'compact' : ''}`}
      viewBox="0 0 500 420"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path
          opacity=".22"
          d="M42 24v372M456 24v372M18 80h464M18 210h464M18 340h464"
        />
        <path d="M84 80h146l40 40h146M84 210h146l40 40h146M84 340h146l40 40h146" />
        <path opacity=".4" d="M84 80v260M416 120v260M230 80v260M270 120v260" />
        <path
          className="motif-route"
          d="M84 80h146l40 40v130h146"
          stroke="#70DAE8"
          strokeWidth="2"
        />
        <path d="M36 24h12M42 18v12M450 396h12M456 390v12" />
      </g>
      <g fill="#70DAE8">
        <circle cx="84" cy="80" r="4" />
        <circle cx="416" cy="250" r="4" />
      </g>
      <g
        fill="currentColor"
        fontSize="11"
        fontFamily="monospace"
        letterSpacing="2"
      >
        <text x="84" y="61">
          01 / INTERFACE
        </text>
        <text x="84" y="191">
          02 / LOGIC
        </text>
        <text x="84" y="321">
          03 / DATA
        </text>
      </g>
    </svg>
  );
}
