import { GetLaborAttendance, PostLaborAttendance } from '../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../common_api/src/index.ts';

export declare class LaborAttendanceServices extends BaseService {
    private static _instance;
    static getInstance(): LaborAttendanceServices;
    createLaborAttendance(data: PostLaborAttendance): Promise<ResultModel>;
    getAllLaborAttendance(): Promise<ApiBaseState<GetLaborAttendance[]>>;
    getLaborAttendanceById(id: string): Promise<ApiBaseState<GetLaborAttendance>>;
    updateLaborAttendance(id: string, data: GetLaborAttendance): Promise<ResultModel>;
    deleteLaborAttendanceById(id: string): Promise<ResultModel>;
}
