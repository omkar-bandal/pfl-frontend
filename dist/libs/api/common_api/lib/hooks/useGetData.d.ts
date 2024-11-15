import { QueryKey, UseQueryResult } from '@tanstack/react-query';

export declare const useGetData: <U, T>(url: string, id: string, qKey: QueryKey) => UseQueryResult<T, Error>;
