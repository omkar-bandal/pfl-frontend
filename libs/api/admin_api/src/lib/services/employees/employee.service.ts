import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetEmployee } from '../../models';
import { adminApiUrlConstants } from '../../constants';

export class EmployeesService extends BaseService {
  private static _instance: EmployeesService;

  public static getInstance(): EmployeesService {
    return this._instance || (this._instance = new this());
  }

  createEmployee(data: FormData): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_EMPLOYEE;
    return this.post(url, data);
  }

  getAllEmployees(queryParams?: QueryParams): Promise<ApiBaseState<GetEmployee[]>> {
    const url = adminApiUrlConstants.GET_ALL_EMPLOYEES(queryParams);
    return this.get(url);
  }

  getEmployeeById(id: string): Promise<ApiBaseState<GetEmployee>> {
    const url = `${adminApiUrlConstants.GET_AN_EMPLOYEE}/${id}`;
    return this.get(url);
  }

  updateEmployee(id: string, data: FormData): Promise<ResultModel> {
    const url = `${adminApiUrlConstants.UPDATE_AN_EMPLOYEE}/${id}`;
    return this.patch(url, data);
  }

  updateEmployeeStatus(id: string, status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'): Promise<ResultModel> {
    const url = adminApiUrlConstants.UPDATE_EMPLOYEE_STATUS(id, status);
    return this.patch(url, { status: status });
  }

  deleteEmployeeById(id: string): Promise<ResultModel> {
    const url = `${adminApiUrlConstants.DELETE_EMPLOYEE}/${id}`;
    return this.delete(url);
  }
}
