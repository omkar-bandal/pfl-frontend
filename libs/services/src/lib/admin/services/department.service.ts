import { GetDepartment } from '../models';
import { adminApiUrlConstants } from '../constants';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class DepartmentService extends BaseService {
  private static _instance: DepartmentService;

  public static getInstance(): DepartmentService {
    return this._instance || (this._instance = new this());
  }

  createDepartment(data: FormData): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_DEPARTMENT;
    return this.postFormData(url, data);
  }

  getAllDepartments(): Promise<ApiBaseState<GetDepartment[]>> {
    const url = adminApiUrlConstants.GET_ALL_DEPARTMENT;
    return this.get(url);
  }

  getDepartmentById(id: string): Promise<ApiBaseState<GetDepartment>> {
    const url = `${adminApiUrlConstants.GET_DEPARTMENT_BY_ID}/${id}`;
    return this.get(url);
  }

  updateDepartment(id: string, data: FormData): Promise<ResultModel> {
    const url = `${adminApiUrlConstants.UPDATE_DEPARTMENT}/${id}`;
    return this.patchFormData(url, data);
  }

  deleteDepartmentById(id: string): Promise<ResultModel> {
    const url = `${adminApiUrlConstants.DELETE_DEPARTMENT}/${id}`;
    return this.delete(url);
  }
}
