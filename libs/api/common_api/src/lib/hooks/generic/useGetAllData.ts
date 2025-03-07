import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';
import ApiServices from '../../configuration/ApiServices';

export const useGetAllData = <T, U>(url: string, qKey: QueryKey): UseQueryResult<U, Error> => {
  const service = new ApiServices<T, U>();
  return useQuery<U, Error>({queryKey: qKey, queryFn: () => service.getData(url)});
};

