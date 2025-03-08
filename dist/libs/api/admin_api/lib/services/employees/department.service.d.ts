import { GetDepartment } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class DepartmentService extends BaseService {
    private static _instance;
    static getInstance(): DepartmentService;
    createDepartment(data: FormData): Promise<ResultModel>;
    getAllDepartments(): Promise<ApiBaseState<GetDepartment[]>>;
    getDepartmentById(id: string): Promise<ApiBaseState<GetDepartment>>;
    updateDepartment(id: string, data: FormData): Promise<ResultModel>;
    deleteDepartmentById(id: string): Promise<ResultModel>;
}
