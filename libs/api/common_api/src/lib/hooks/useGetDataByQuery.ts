import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';
import ApiServices from '../configuration/ApiServices';

export const useGetDataByQuery = <U, T>(url: string, id: string, qKey: QueryKey): UseQueryResult<T, Error> => {
  const service = new ApiServices<U, T>();
  return useQuery<T, Error>({queryKey: qKey, queryFn: () => service.getDataByQuery(url, id), enabled: !!id});
};
