export function formatNumberWithSuffix(num: number | string): string {
  // Define the thresholds and suffixes
  const CRORE = 10000000;
  const LAKH = 100000;
  const THOUSAND = 1000;

  // 1. Handle Crores (>= 1 Crore)
  if (Math.abs(Number(num)) >= CRORE) {
    const value = Number(num) / CRORE;
    // Format to two decimal places and ensure a leading zero if the integer part is single-digit
    const formattedValue = value.toFixed(2);
    const parts = formattedValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    // Add leading zero if the integer part is less than 10 (e.g., 1.20 -> 01.20)
    const paddedInteger = integerPart.length < 2 ? `0${integerPart}` : integerPart;

    return `${paddedInteger}.${decimalPart} Cr`;
  }

  // 2. Handle Lakhs (>= 1 Lakh)
  if (Math.abs(Number(num)) >= LAKH) {
    const value = Number(num) / LAKH;
    // Format to two decimal places
    const formattedValue = value.toFixed(2);
    const parts = formattedValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    // Add leading zero if the integer part is less than 10 (e.g., 3.29 -> 03.29)
    const paddedInteger = integerPart.length < 2 ? `0${integerPart}` : integerPart;

    return `${paddedInteger}.${decimalPart} L`;
  }

  // 3. Handle Thousands (>= 1 Thousand)
  if (Math.abs(Number(num)) >= THOUSAND) {
    const value = Number(num) / THOUSAND;
    // Format to two decimal places (e.g., 12.89)
    return `${value.toFixed(2)} K`;
  }

  // 4. Handle all other numbers (less than 1000)
  // If you need specific formatting for small numbers, adjust this part.
  // Otherwise, return the number itself, perhaps rounded.
  return num.toString();
}