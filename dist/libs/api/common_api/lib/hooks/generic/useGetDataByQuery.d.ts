import { QueryKey, UseQueryResult } from '@tanstack/react-query';

export declare const useGetDataByQuery: <U, T>(url: string, id: string, qKey: QueryKey) => UseQueryResult<T, Error>;
