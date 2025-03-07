export interface ApiBaseState<T> {
    data: T | null;
}
export type ErrorModel = Error;
export type ResultModel = {
    status: string;
    message: string;
};
