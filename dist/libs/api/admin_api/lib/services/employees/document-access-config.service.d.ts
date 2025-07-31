import { ApiBaseState, BaseService, GetDocumentDetails } from '../../../../../common_api/src/index.ts';

export declare class DocumentAccessConfigService extends BaseService {
    private static _instance;
    static getInstance(): DocumentAccessConfigService;
    getDocumentAccessConfig(): Promise<ApiBaseState<GetDocumentDetails[]>>;
}
