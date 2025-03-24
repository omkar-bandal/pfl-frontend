import { GetEmployee } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class EmployeesService extends BaseService {
    private static _instance;
    static getInstance(): EmployeesService;
    createEmployee(data: FormData): Promise<ResultModel>;
    getAllEmployees({ page, limit, sort }: QueryParams): Promise<ApiBaseState<GetEmployee[]>>;
    getEmployeeById(id: string): Promise<ApiBaseState<GetEmployee>>;
    updateEmployee(id: string, data: FormData): Promise<ResultModel>;
    deleteEmployeeById(id: string): Promise<ResultModel>;
}
