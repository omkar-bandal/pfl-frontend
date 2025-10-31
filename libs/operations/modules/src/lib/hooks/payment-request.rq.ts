import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  PaymentRequestServices,
  GetPaymentRequest,
  PostPaymentRequest,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreatePaymentRequest(
  grnid: string
): UseMutationResult<ResultModel, ErrorModel, PostPaymentRequest, unknown> {
  return useMutation<ResultModel, ErrorModel, PostPaymentRequest, unknown>({
    mutationKey: ['create-payment-request'],
    mutationFn: (data) => PaymentRequestServices.getInstance().createPaymentRequest(grnid, data),
  });
}

export function useUpdatePaymentRequestById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, GetPaymentRequest, unknown> {
  return useMutation<ResultModel, ErrorModel, GetPaymentRequest, unknown>({
    mutationKey: ['update-payment-request-by-id'],
    mutationFn: (data) => PaymentRequestServices.getInstance().updatePaymentRequest(id, data),
  });
}

export function useDeletePaymentRequestById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-payment-request-by-id'],
    mutationFn: () => PaymentRequestServices.getInstance().deletePaymentRequestById(id),
  });
}

export function useGetAllPaymentRequests(): UseQueryResult<ApiBaseState<GetPaymentRequest[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetPaymentRequest[]>, ErrorModel>({
    queryKey: ['get-all-payment-request'],
    queryFn: () => PaymentRequestServices.getInstance().getAllPaymentRequests(),
  });
}

export function useGetPaymentRequestById(id: string): UseQueryResult<ApiBaseState<GetPaymentRequest>, ErrorModel> {
  return useQuery<ApiBaseState<GetPaymentRequest>, ErrorModel>({
    queryKey: ['get-payment-request-by-id'],
    queryFn: () => PaymentRequestServices.getInstance().getPaymentRequestById(id),
    enabled: !!id,
  });
}
