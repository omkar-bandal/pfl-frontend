import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';
import ApiServices from '../configuration/ApiServices';

export const useGetData = <U, T>(url: string, id: string, qKey: QueryKey): UseQueryResult<T, Error> => {
  const service = new ApiServices<U, T>();
  return useQuery<T, Error>({queryKey: qKey, queryFn: () => service.getDataById(url, id)});
};

