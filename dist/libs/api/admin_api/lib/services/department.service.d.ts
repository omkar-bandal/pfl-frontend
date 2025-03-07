import { ApiBaseState, BaseService, Department, GetDepartment, ResultModel } from '../../../../common_api/src/index.ts';

export declare class DepartmentService extends BaseService {
    static _instance: DepartmentService;
    static getInstance(): DepartmentService;
    getAllDepartments(): Promise<ApiBaseState<GetDepartment[]>>;
    getDepartmentById(deptId: string): Promise<ApiBaseState<GetDepartment>>;
    createDepartment(data: Department): Promise<ResultModel>;
    updateDepartment(id: string, data: Department): Promise<ResultModel>;
    deleteDepartment(id: string): Promise<ResultModel>;
}
