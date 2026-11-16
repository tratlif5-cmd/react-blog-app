// Custom made logo: a simple pen nib inside a circle, drawn as an inline SVG.
function Logo() {
  return (
    <svg className="logo" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="#2f5d62" />
      <path d="M22 9 L30 23 L22 35 L14 23 Z" fill="#f4e9d8" />
      <circle cx="22" cy="23" r="2.5" fill="#2f5d62" />
      <line x1="22" y1="25" x2="22" y2="35" stroke="#2f5d62" strokeWidth="1.5" />
    </svg>
  );
}

export default Logo;
