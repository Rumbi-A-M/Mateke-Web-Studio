export function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function renderStars(rating, max = 5) {
  return Array.from({ length: max }, (_, i) => i < rating);
}
