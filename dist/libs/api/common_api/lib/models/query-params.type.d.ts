export type QueryParams = {
    page: number;
    limit: number;
    sort: string;
    filter?: Record<string, any> | null;
};
