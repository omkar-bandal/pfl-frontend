export interface ApiBaseState<T> {
    data: T | null;
    allRecords: number;
    totalPages: number;
    page: number;
}
export type ErrorModel = Error;
export type ResultModel = {
    status: string;
    message: string;
};
