import { BaseService, ResultModel } from '../../base';
import { sharedApiUrls } from '../constants';
import { ApprovalRequest } from '../models';

export class DocumentApprovalService extends BaseService {
  public static _instance: DocumentApprovalService;

  public static getInstance(): DocumentApprovalService {
    return this._instance || (this._instance = new this());
  }

  updateDocStatusWithThreeApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id);
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }

  updateDocStatusWithTwoApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id);
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }

  updateDocStatusWithOneApproval(id: string, data: ApprovalRequest): Promise<ResultModel> {
    console.log('Document Id:', id);
    const url = sharedApiUrls.UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL(id);
    return this.patch(url, data);
  }
}
