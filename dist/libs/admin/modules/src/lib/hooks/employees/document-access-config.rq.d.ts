import { ApiBaseState, GetDocumentDetails, ErrorModel } from '@prime-fresh/common_api';
import { UseQueryResult } from '@tanstack/react-query';
export declare function useGetDocumentAccessConfig(): UseQueryResult<ApiBaseState<GetDocumentDetails[]>, ErrorModel>;
