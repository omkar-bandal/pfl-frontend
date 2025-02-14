import { QueryKey, UseQueryResult } from '@tanstack/react-query';

export declare const useGetAllData: <T, U>(url: string, qKey: QueryKey) => UseQueryResult<U, Error>;
