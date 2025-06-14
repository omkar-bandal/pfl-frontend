import { DocumentAccessConfigService } from '@prime-fresh/admin_api';
import { ApiBaseState, GetDocumentDetails, ErrorModel } from '@prime-fresh/common_api';
import {
    useQuery,
    UseQueryResult,
  } from '@tanstack/react-query';

export function useGetDocumentAccessConfig():
    UseQueryResult<ApiBaseState<GetDocumentDetails[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetDocumentDetails[]>, ErrorModel>({
        queryKey: ['get-all-data-access-config'],
        queryFn: () => DocumentAccessConfigService.getInstance().getDocumentAccessConfig(),
    });
}