import { IEODReport } from '../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../common_api/src/index.ts';

export declare class EODReportServices extends BaseService {
    private static _instance;
    static getInstance(): EODReportServices;
    createEODReport(data: Omit<IEODReport, 'id'>): Promise<ResultModel>;
    getAllEODReports(queryParams?: QueryParams): Promise<ApiBaseState<IEODReport[]>>;
    getEODReportForViewById(id: string): Promise<ApiBaseState<IEODReport>>;
    getEODReportForUpdateById(id: string): Promise<ApiBaseState<IEODReport>>;
    updateEODReport(id: string, data: IEODReport): Promise<ResultModel>;
    deleteEODReportById(id: string): Promise<ResultModel>;
}
