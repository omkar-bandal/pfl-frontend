/* eslint-disable @typescript-eslint/no-explicit-any */
export const getLightColor = (hexColor: string) => {
  // Remove the '#' if present
  const cleanHex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

  // Validate hex code length
  if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    console.error("Invalid hex color code provided.");
    return hexColor; // Return original if invalid
  }

  // Convert hex to RGB components
  let r = parseInt(cleanHex.substring(0, 2), 16);
  let g = parseInt(cleanHex.substring(2, 4), 16);
  let b = parseInt(cleanHex.substring(4, 6), 16);

  // Define the lightening factor (how much to blend with white)
  // A higher factor (closer to 1) means a lighter shade.
  const lightenFactor = 0.85; // Blends 85% towards white

  // Blend each RGB component with white (255)
  r = Math.min(255, r + (255 - r) * lightenFactor);
  g = Math.min(255, g + (255 - g) * lightenFactor);
  b = Math.min(255, b + (255 - b) * lightenFactor);

  // Convert RGB components back to a 2-digit hex string
  const toHex = (c: any) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Return the new hex color code
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

