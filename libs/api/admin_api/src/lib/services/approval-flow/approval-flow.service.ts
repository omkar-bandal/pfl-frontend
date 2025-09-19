import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IApprovalFlow, IDocumentType, IEmployeeReplacementReq } from '../../models';
import { adminApiUrlConstants } from '../../constants';
import { buildApiUrl } from '@prime-fresh/shared/modules';

export class ApprovalFlowService extends BaseService {
  private static _instance: ApprovalFlowService;

  public static getInstance(): ApprovalFlowService {
    return this._instance || (this._instance = new this());
  }

  createApprovalFlow(data: IApprovalFlow): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_APPROVAL_FLOW;
    return this.post(url, data);
  }

  getAllApprovalFlows(documentType: IDocumentType | null, queryParams?: QueryParams): Promise<ApiBaseState<IApprovalFlow[]>> {
    const url = adminApiUrlConstants.GET_ALL_APPROVAL_FLOWS(documentType, queryParams);
    return this.get(url);
  }

  getApprovalFlowById(id: string): Promise<ApiBaseState<IApprovalFlow>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_APPROVAL_FLOW_BY_ID, id);
    return this.get(url);
  }

  updateApprovalFlow(id: string, data: IApprovalFlow): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.UPDATE_APPROVAL_FLOW, id);
    return this.patch(url, data);
  }

  deleteApprovalFlow(id: string): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.DELETE_APPROVAL_FLOW, id);
    return this.delete(url);
  }

  replaceEmployee(data: IEmployeeReplacementReq): Promise<ResultModel> {
    const url = adminApiUrlConstants.REPLACE_EMPLOYEE;
    return this.post(url, data);
  }
}
