/* eslint-disable @typescript-eslint/no-explicit-any */
export type QueryParams = {
    page: number;
    limit: number;
    sort: string;
    filter?: Record<string, any> | null;
}