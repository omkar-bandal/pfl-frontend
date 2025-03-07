import { GetEODReport, PostEODReport } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class EODReportServices extends BaseService {
    private static _instance;
    static getInstance(): EODReportServices;
    createEODReport(data: PostEODReport): Promise<ResultModel>;
    getAllEODReports(): Promise<ApiBaseState<GetEODReport[]>>;
    getEODReportById(id: string): Promise<ApiBaseState<GetEODReport>>;
    updateEODReport(id: string, data: GetEODReport): Promise<ResultModel>;
    deleteEODReportById(id: string): Promise<ResultModel>;
}
