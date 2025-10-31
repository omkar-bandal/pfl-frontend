/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryParams } from '../../shared';

export const buildApiUrl = (
  baseUrl: string,
  id?: string | null,
  queryParams?: Partial<QueryParams>,
  search?: string | null,
  searchParamName = 'search'
): string => {
  // If an ID is provided, return a detail URL immediately.
  if (id) {
    return `${baseUrl}/${id}`;
  }

  const queryParts: string[] = [];

  // Add search param first (so it's easy to spot in the URL)
  if (search && search.trim() !== '') {
    queryParts.push(`${encodeURIComponent(searchParamName)}=${encodeURIComponent(search.trim())}`);
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
        .filter(([_, value]) => value !== null && value !== undefined && value !== '')
        .forEach(([key, value]) => {
          const encodedKey = encodeURIComponent(key);

          if (Array.isArray(value)) {
            // for arrays -> repeated key=value pairs: ?tag=a&tag=b
            value.forEach((v) => {
              queryParts.push(`${encodedKey}=${encodeURIComponent(String(v))}`);
            });
          } else if (typeof value === 'object') {
            // for nested objects -> JSON encode the object
            queryParts.push(`${encodedKey}=${encodeURIComponent(JSON.stringify(value))}`);
          } else {
            // primitive
            queryParts.push(`${encodedKey}=${encodeURIComponent(String(value))}`);
          }
        });
    }
  }

  if (queryParts.length === 0) return baseUrl;

  // If baseUrl already contains query params, append with & else use ?
  const connector = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${connector}${queryParts.join('&')}`;
};

export function buildUrlForFilters(baseUrl: string, filter: Record<string, any> | null): string {
  if (filter) {
    const queryString = Object.entries(filter)
      .filter(([_, value]) => value !== null && value !== undefined && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  } else {
    return '';
  }
}
