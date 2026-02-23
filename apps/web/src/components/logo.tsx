export function Logo(): JSX.Element {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="post pilot logo">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="48" height="46" rx="12" stroke="url(#logo-gradient)" strokeWidth="4" />
      <path d="M20 24H44M20 34H44M20 44H36" stroke="url(#logo-gradient)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="44" r="8" fill="url(#logo-gradient)" />
    </svg>
  );
}
