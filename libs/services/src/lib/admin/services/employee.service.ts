import { QueryParams } from '../../shared';
import { adminApiUrlConstants } from '../constants';
import { EmployeeStatus, IEmployee } from '../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class EmployeesService extends BaseService {
  private static _instance: EmployeesService;

  public static getInstance(): EmployeesService {
    return this._instance || (this._instance = new this());
  }

  createEmployee(data: IEmployee): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_EMPLOYEE;
    return this.post(url, data);
  }

  getAllEmployees(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IEmployee[]>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_ALL_EMPLOYEES, null, queryParams, search);
    return this.get(url);
  }

  // getEmployeeById(id: string): Promise<ApiBaseState<IEmployee>> {
  //   const url = `${adminApiUrlConstants.GET_AN_EMPLOYEE}/${id}`;
  //   return this.get(url);
  // }

  getEmployeeForView(id: string): Promise<ApiBaseState<IEmployee>> {
    const url = adminApiUrlConstants.GET_AN_EMPLOYEE_FOR_VIEW(id);
    return this.get(url);
  }

  getEmployeeForUpdate(id: string): Promise<ApiBaseState<IEmployee>> {
    const url = adminApiUrlConstants.GET_AN_EMPLOYEE_FOR_UPDATE(id);
    return this.get(url);
  }

  updateEmployee(id: string, data: IEmployee): Promise<ResultModel> {
    const url = adminApiUrlConstants.UPDATE_AN_EMPLOYEE(id);
    return this.put(url, data);
  }

  updateEmployeeStatus(id: string, status: EmployeeStatus): Promise<ResultModel> {
    const url = adminApiUrlConstants.UPDATE_EMPLOYEE_STATUS(id, status);
    return this.patch(url, { status: status });
  }

  deleteEmployee(id: string): Promise<ResultModel> {
    const url = adminApiUrlConstants.DELETE_EMPLOYEE(id);
    return this.delete(url);
  }
}
