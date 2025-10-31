import { IEODReport } from "../models";
import { apiUrls } from "../constants";
import { buildApiUrl } from '../../base';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class EODReportServices extends BaseService {
    private static _instance: EODReportServices;

    public static getInstance(): EODReportServices {
        return this._instance || (this._instance = new this());
    }

    createEODReport(data: Omit<IEODReport, 'id'>): Promise<ResultModel> {
        const url = apiUrls.CREATE_EOD_REPORT;
        return this.post(url, data);
    }

    getAllEODReports(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IEODReport[]>> {
        const url = buildApiUrl(apiUrls.GET_ALL_EOD_REPORT, null, queryParams, search);
        return this.get(url);
    }

    getEODReportForViewById(id: string): Promise<ApiBaseState<IEODReport>> {
        const url = buildApiUrl(apiUrls.GET_EOD_REPORT_FOR_VIEW_BY_ID, id);
        return this.get(url);
    }

    getEODReportForUpdateById(id: string): Promise<ApiBaseState<IEODReport>> {
        const url = buildApiUrl(apiUrls.GET_EOD_REPORT_FOR_UPDATE_BY_ID, id);
        return this.get(url);
    }

    updateEODReport(id: string,
        data: IEODReport): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.UPDATE_EOD_REPORT, id);
        return this.patch(url, data);
    }

    deleteEODReportById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(apiUrls.DELETE_EOD_REPORT, id);
        return this.delete(url);
    }
}