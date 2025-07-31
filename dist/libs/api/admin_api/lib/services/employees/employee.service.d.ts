import { EmployeeStatus, IEmployee } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class EmployeesService extends BaseService {
    private static _instance;
    static getInstance(): EmployeesService;
    createEmployee(data: IEmployee): Promise<ResultModel>;
    getAllEmployees(queryParams?: QueryParams): Promise<ApiBaseState<IEmployee[]>>;
    getEmployeeForView(id: string): Promise<ApiBaseState<IEmployee>>;
    getEmployeeForUpdate(id: string): Promise<ApiBaseState<IEmployee>>;
    updateEmployee(id: string, data: IEmployee): Promise<ResultModel>;
    updateEmployeeStatus(id: string, status: EmployeeStatus): Promise<ResultModel>;
    deleteEmployee(id: string): Promise<ResultModel>;
}
