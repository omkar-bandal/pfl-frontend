import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { FinalInvoiceServices, GetFinalInvoice, ApiBaseState, ErrorModel } from '@prime-fresh/services';

export function useCreateFinalInvoice(
  id: string
): UseMutationResult<{ invoiceurl: string }, ErrorModel, unknown, unknown> {
  return useMutation<{ invoiceurl: string }, ErrorModel, unknown, unknown>({
    mutationKey: ['create-final-invoice'],
    mutationFn: () => FinalInvoiceServices.getInstance().createFinalInvoice(id),
  });
}

export function useGetAllFinalInvoices(): UseQueryResult<ApiBaseState<GetFinalInvoice[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetFinalInvoice[]>, ErrorModel>({
    queryKey: ['get-all-final-invoice'],
    queryFn: () => FinalInvoiceServices.getInstance().getAllFinalInvoices(),
  });
}
