import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { GetFinalInvoice } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateFinalInvoice(id: string): UseMutationResult<{
    invoiceurl: string;
}, ErrorModel, unknown, unknown>;
export declare function useGetAllFinalInvoices(): UseQueryResult<ApiBaseState<GetFinalInvoice[]>, ErrorModel>;
