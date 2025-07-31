declare function buildApiUrl(baseUrl: string): string;
declare function buildApiUrl<T extends Record<string, any>>(baseUrl: string, queryParams: T): string;
declare function buildApiUrl(baseUrl: string, searchQuery: string): string;
