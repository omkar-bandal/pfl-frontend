import { sharedApiUrls } from '../constants';
import { IUserDocumentReport, IUserRegistrations, IUserReportPurchaseData, IUserReportSalesData } from '../models';
import { ApiBaseState, BaseService, buildUrlForFilters } from '../../base';

export class UserReportService extends BaseService {
  private static _instance: UserReportService;

  public static getInstance(): UserReportService {
    return this._instance || (this._instance = new this());
  }

  getUserRegistrationCounts(filterParams?: Record<string, any> | null): Promise<ApiBaseState<IUserRegistrations>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REGISTRATION_COUNT, filterParams);
    return this.get(url);
  }

  getUserDocumentReportCounts(filterParams: Record<string, any> | null): Promise<ApiBaseState<IUserDocumentReport>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_DOCUMENT_REPORT_COUNT, filterParams);
    return this.get(url);
  }

  getUserReportPurchaseData(filterParams: Record<string, any> | null): Promise<ApiBaseState<IUserReportPurchaseData>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REPORT_PURCHASE_DATA, filterParams);
    return this.get(url);
  }

  getUserReportSalesData(filterParams: Record<string, any> | null): Promise<ApiBaseState<IUserReportSalesData>> {
    const url = buildUrlForFilters(sharedApiUrls.GET_USER_REPORT_SALES_DATA, filterParams);
    return this.get(url);
  }
}
