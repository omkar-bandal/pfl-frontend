import { ApiBaseState, BaseService, Department, GetDepartment, ResultModel } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../constants";

export class DepartmentService extends BaseService {
    public static _instance: DepartmentService;

    public static getInstance(): DepartmentService {
        return this._instance || (this._instance == new this())
    }

    getAllDepartments(): Promise<ApiBaseState<GetDepartment[]>> {
        const url = adminApiUrlConstants.GET_ALL_DEPARTMENT;
        return this.get(url);
    }

    getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>> {
        const url = `${adminApiUrlConstants.GET_DEPARTMENT_BY_ID}/${deptId}`;
        return this.get(url)
    }

    createDepartment(data: Department): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_DEPARTMENT;
        return this.post(url, data);
    }

    updateDepartment(id: string, data: Department): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_DEPARTMENT}/${id}`;
        return this.patch(url, data);
    }

    deleteDepartment(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_DEPARTMENT}/${id}`;
        return this.delete(url);
    }
}