import { GetLaborAttendance, PostLaborAttendance } from "../models";
import { apiUrls } from "../constants";
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class LaborAttendanceServices extends BaseService {
    private static _instance: LaborAttendanceServices;

    public static getInstance(): LaborAttendanceServices {
        return this._instance || (this._instance = new this());
    }

    createLaborAttendance(data: PostLaborAttendance): Promise<ResultModel> {
        const url = apiUrls.CREATE_LABOR_ATTENDANCE;
        return this.post(url, data);
    }

    getAllLaborAttendance(): Promise<ApiBaseState<GetLaborAttendance[]>> {
        const url = apiUrls.GET_ALL_LABOR_ATTENDANCE;
        return this.get(url);
    }

    getLaborAttendanceById(id: string): Promise<ApiBaseState<GetLaborAttendance>> {
        const url = `${apiUrls.GET_LABOR_ATTENDANCE_BY_ID}/${id}`;
        return this.get(url);
    }

    updateLaborAttendance(id: string, data: GetLaborAttendance): Promise<ResultModel> {
        const url = `${apiUrls.UPDATE_LABOR_ATTENDANCE}/${id}`;
        return this.patch(url, data);
    }

    deleteLaborAttendanceById(id: string): Promise<ResultModel> {
        const url = `${apiUrls.DELETE_LABOR_ATTENDANCE}/${id}`;
        return this.delete(url);
    }
}