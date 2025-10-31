/* eslint-disable @typescript-eslint/no-explicit-any */
import { LevelsService } from '@prime-fresh/services';
import {
  ApiBaseState,
  ErrorModel,
  ResultModel,
  Level,
  GetLevel,
  // GetDocumentDetails,
  DocumentDetails,
} from '@prime-fresh/services';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

export function useGetAllLevels(): UseQueryResult<ApiBaseState<GetLevel[]>,
  ErrorModel
> {
  return useQuery<ApiBaseState<GetLevel[]>, ErrorModel>({
    queryKey: ['get-all-levels'],
    queryFn: () => LevelsService.getInstance().getAllLevels(),
  });
}

export function useGetAllDocumentDetails():
    UseQueryResult<any, ErrorModel> {
    return useQuery<any, ErrorModel>({
        queryKey: ['get-all-document-details'],
        queryFn: () => LevelsService.getInstance().getAllDocumentDetails(),
    });
}
export function useCreateLevel(): UseMutationResult<
  ResultModel,
  ErrorModel,
  Level,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, Level, unknown>({
    mutationKey: ['create-level'],
    mutationFn: (data) => LevelsService.getInstance().createLevel(data),
  });
}

export function useCreateDocumentDetails(): UseMutationResult<
  ResultModel,
  ErrorModel,
  DocumentDetails,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, DocumentDetails, unknown>({
    mutationKey: ['create-document-detail'],
    mutationFn: (data) =>
      LevelsService.getInstance().createDocumentDetail(data),
  });
}
