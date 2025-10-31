/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// // Overload signatures
// function buildApiUrl(baseUrl: string): string;
// function buildApiUrl<T extends Record<string, any>>(baseUrl: string, queryParams: T): string;
// function buildApiUrl(baseUrl: string, searchQuery: string): string;

import { QueryParams } from "@prime-fresh/services";

// // Function implementation
// function buildApiUrl<T extends Record<string, any>>(
//   baseUrl: string,
//   arg?: T | string
// ): string {
//   // Ensure the baseUrl ends with a slash.
//   const normalizedBase = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";

//   if (!arg) {
//     // No query parameters or search query provided.
//     return normalizedBase;
//   }

//   const params = new URLSearchParams();

//   if (typeof arg === "string") {
//     // If a search query string is provided, build a query string with a single search parameter.
//     const trimmed = arg.trim();
//     if (trimmed.length > 0) {
//       params.append("search", trimmed);
//     }
//   } else {
//     // If an object is provided, iterate and append each key/value pair.
//     Object.entries(arg).forEach(([key, value]) => {
//       if (value !== undefined && value !== null) {
//         params.append(key, String(value));
//       }
//     });
//   }

//   const queryString = params.toString();
//   return queryString ? `${normalizedBase}?${queryString}` : normalizedBase;
// }

/**
 * Build an API URL.
 *
 * @param baseUrl - base endpoint (e.g. "/api/items")
 * @param id - optional resource id (when provided, returns `${baseUrl}/${id}`)
 * @param queryParams - pagination/sort/filter object
 * @param search - optional search text to include as query param
 * @param searchParamName - optional query key for search (default: "search")
 */
export const buildApiUrl = (
  baseUrl: string,
  id?: string | null,
  queryParams?:Partial<QueryParams>,
  search?: string | null,
  searchParamName = "search"
): string => {
  // If an ID is provided, return a detail URL immediately.
  if (id) {
    return `${baseUrl}/${id}`;
  }

  const queryParts: string[] = [];

  // Add search param first (so it's easy to spot in the URL)
  if (search && search.trim() !== "") {
    queryParts.push(
      `${encodeURIComponent(searchParamName)}=${encodeURIComponent(
        search.trim()
      )}`
    );
  }

  if (queryParams) {
    // Pagination
    if (queryParams.page !== undefined && queryParams.page !== null) {
      queryParts.push(`page=${encodeURIComponent(String(queryParams.page))}`);
    }
    if (queryParams.limit !== undefined && queryParams.limit !== null) {
      queryParts.push(`limit=${encodeURIComponent(String(queryParams.limit))}`);
    }

    // Sort
    if (queryParams.sort && queryParams.sort.length > 0) {
      queryParts.push(`sort=${encodeURIComponent(queryParams.sort)}`);
    }

    // Filter: support primitive, array, and object values
    if (queryParams.filter) {
      Object.entries(queryParams.filter)
        .filter(([_, value]) => value !== null && value !== undefined && value !== "")
        .forEach(([key, value]) => {
          const encodedKey = encodeURIComponent(key);

          if (Array.isArray(value)) {
            // for arrays -> repeated key=value pairs: ?tag=a&tag=b
            value.forEach((v) => {
              queryParts.push(`${encodedKey}=${encodeURIComponent(String(v))}`);
            });
          } else if (typeof value === "object") {
            // for nested objects -> JSON encode the object
            queryParts.push(
              `${encodedKey}=${encodeURIComponent(JSON.stringify(value))}`
            );
          } else {
            // primitive
            queryParts.push(`${encodedKey}=${encodeURIComponent(String(value))}`);
          }
        });
    }
  }

  if (queryParts.length === 0) return baseUrl;

  // If baseUrl already contains query params, append with & else use ?
  const connector = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${connector}${queryParts.join("&")}`;
};
