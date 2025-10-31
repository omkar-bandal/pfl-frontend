/* eslint-disable @typescript-eslint/no-explicit-any */
export const getLightColor = (hex: string, perc?: number) => {
  const percent = perc ?? 60;
  // 1. Clean and normalize the hex input
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  
  // Handle shorthand hex codes (e.g., #F00 -> #FF0000)
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  
  // 2. Convert percentage (0-100) to a factor (0-255)
  // 2.55 is 255 / 100, which scales the percentage to the 8-bit color range.
  const factor = Math.round(2.55 * percent);

  // 3. Extract R, G, B components and convert them to decimal (0-255)
  let R = parseInt(color.substring(0, 2), 16);
  let G = parseInt(color.substring(2, 4), 16);
  let B = parseInt(color.substring(4, 6), 16);

  // 4. Increase each component and clamp the result at 255 (pure white)
  R = Math.min(255, R + factor);
  G = Math.min(255, G + factor);
  B = Math.min(255, B + factor);

  // 5. Convert the new decimal values back to two-digit hexadecimal strings
  // .toString(16) converts to hex; .padStart(2, '0') ensures two digits.
  const RR = R.toString(16).padStart(2, '0');
  const GG = G.toString(16).padStart(2, '0');
  const BB = B.toString(16).padStart(2, '0');

  // 6. Return the final hex code
  return `#${RR}${GG}${BB}`;
};