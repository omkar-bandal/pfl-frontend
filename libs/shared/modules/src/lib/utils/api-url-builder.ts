/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Overload signatures
function buildApiUrl(baseUrl: string): string;
function buildApiUrl<T extends Record<string, any>>(baseUrl: string, queryParams: T): string;
function buildApiUrl(baseUrl: string, searchQuery: string): string;

// Function implementation
function buildApiUrl<T extends Record<string, any>>(
  baseUrl: string,
  arg?: T | string
): string {
  // Ensure the baseUrl ends with a slash.
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";

  if (!arg) {
    // No query parameters or search query provided.
    return normalizedBase;
  }

  const params = new URLSearchParams();

  if (typeof arg === "string") {
    // If a search query string is provided, build a query string with a single search parameter.
    const trimmed = arg.trim();
    if (trimmed.length > 0) {
      params.append("search", trimmed);
    }
  } else {
    // If an object is provided, iterate and append each key/value pair.
    Object.entries(arg).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
  }

  const queryString = params.toString();
  return queryString ? `${normalizedBase}?${queryString}` : normalizedBase;
}
