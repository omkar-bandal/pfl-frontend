import { IApprovalFlow, IDocumentType, IEmployeeReplacementReq } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ApprovalFlowService extends BaseService {
    private static _instance;
    static getInstance(): ApprovalFlowService;
    createApprovalFlow(data: IApprovalFlow): Promise<ResultModel>;
    getAllApprovalFlows(documentType: IDocumentType | null, queryParams?: QueryParams): Promise<ApiBaseState<IApprovalFlow[]>>;
    getApprovalFlowById(id: string): Promise<ApiBaseState<IApprovalFlow>>;
    updateApprovalFlow(id: string, data: IApprovalFlow): Promise<ResultModel>;
    deleteApprovalFlow(id: string): Promise<ResultModel>;
    replaceEmployee(data: IEmployeeReplacementReq): Promise<ResultModel>;
}
