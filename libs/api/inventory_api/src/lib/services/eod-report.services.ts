import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { GetEODReport, PostEODReport } from "../models";
import { inventoryApiUrl } from "../constants";

export class EODReportServices extends BaseService {
    private static _instance: EODReportServices;

    public static getInstance(): EODReportServices {
        return this._instance || (this._instance = new this());
    }

    createEODReport(data: PostEODReport): Promise<ResultModel> {
        const url = inventoryApiUrl.CREATE_EOD_REPORT;
        return this.post(url, data);
    }

    getAllEODReports(queryParams?: QueryParams):Promise<ApiBaseState<GetEODReport[]>> {
        const url = inventoryApiUrl.GET_ALL_EOD_REPORT(queryParams);
        return this.get(url);
    }

    getEODReportById(id: string): Promise<ApiBaseState<GetEODReport>> {
        const url = `${inventoryApiUrl.GET_EOD_REPORT_BY_ID}/${id}`;
        return this.get(url);
    }

    updateEODReport(id: string, 
        data: GetEODReport): Promise<ResultModel> {
        const url = `${inventoryApiUrl.UPDATE_EOD_REPORT}/${id}`;
        return this.patch(url, data);
    }

    deleteEODReportById(id: string): Promise<ResultModel> {
        const url = `${inventoryApiUrl.DELETE_EOD_REPORT}/${id}`;
        return this.delete(url);
    }
}