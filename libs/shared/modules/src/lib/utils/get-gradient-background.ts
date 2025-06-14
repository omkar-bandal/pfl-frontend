export function getGrandientBackground(gradientAngle = 135, primaryColorHex: string, lightToPercent = 20): string {
  // Remove '#' if present
  const cleanedHex = primaryColorHex.startsWith('#') ? primaryColorHex.slice(1) : primaryColorHex;
  // Ensure valid hex code length
  if (cleanedHex.length > 6 && cleanedHex.length < 3) {
    throw new Error('Invalid hex color code. Must be 3 or 6 characters.');
  }

  // Handle 3-digit hex codes (e.g., #F00 becomes #FF0000)
  let fullHex = cleanedHex;
  if (cleanedHex.length === 3) {
    fullHex = cleanedHex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Parse R, G, B components
  let r = parseInt(fullHex.substring(0, 2), 16);
  let g = parseInt(fullHex.substring(2, 4), 16);
  let b = parseInt(fullHex.substring(4, 6), 16);

  // Calculate the lighten amount for each component
  const amount = Math.round(2.55 * lightToPercent); // 2.55 (255 / 100) ensures scaling from 0-100 to 0-255

  // Lighten each component, capping at 255
  r = Math.min(255, r + amount);
  g = Math.min(255, g + amount);
  b = Math.min(255, b + amount);

  // Convert back to hex and pad with leading zeros if necessary
  const toHex = (c: number): string => `0${c.toString(16)}`.slice(-2);

  const lighterShade = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return `linear-gradient(${gradientAngle}deg, ${primaryColorHex} 40%, ${lighterShade})`;
}
