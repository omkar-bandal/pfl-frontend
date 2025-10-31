import { IDumpRegister } from '../models';
import { apiUrls } from '../constants';
import { buildApiUrl } from '../../base';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class DumpRegisterServices extends BaseService {
  private static _instance: DumpRegisterServices;

  public static getInstance(): DumpRegisterServices {
    return this._instance || (this._instance = new this());
  }

  createDumpRegister(data: IDumpRegister): Promise<ResultModel> {
    const url = apiUrls.CREATE_DUMP_REGISTER;
    return this.post(url, data);
  }

  getAllDumpRegisters(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IDumpRegister[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_DUMP_REGISTERS, null, queryParams, search);
    return this.get(url);
  }

  getDumpRegisterForViewById(id: string): Promise<ApiBaseState<IDumpRegister>> {
    const url = buildApiUrl(apiUrls.GET_DUMP_REGISTER_FOR_VIEW_BY_ID, id);
    return this.get(url);
  }

  getDumpRegisterForUpdateById(id: string): Promise<ApiBaseState<IDumpRegister>> {
    const url = buildApiUrl(apiUrls.GET_DUMP_REGISTER_FOR_UPDATE_BY_ID, id);
    return this.get(url);
  }

  updateDumpRegister(id: string, data: IDumpRegister): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.UPDATE_DUMP_REGISTER, id);
    return this.patch(url, data);
  }

  deleteDumpRegisterById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.DELETE_DUMP_REGISTER, id);
    return this.delete(url);
  }
}
