import { sharedApiUrls } from '../constants';
import { IFarmer, QueryParams, StatusType } from '../models';
import { ApiBaseState, BaseService, buildApiUrl, ResultModel } from '../../base';

export class FarmersService extends BaseService {
  private static _instance: FarmersService;

  public static getInstance(): FarmersService {
    return this._instance || (this._instance = new this());
  }

  createFarmer(data: FormData): Promise<ResultModel> {
    const url = sharedApiUrls.CREATE_FARMER;
    return this.postFormData(url, data);
  }

  getAllFarmers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IFarmer[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_FARMERS, null, queryParams, search);
    return this.get(url);
  }

  getFarmerByIdForUpdate(id: string): Promise<ApiBaseState<IFarmer>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_FARMER_FOR_UPDATE, id);
    return this.get(url);
  }

  getFarmerByIdForView(id: string): Promise<ApiBaseState<IFarmer>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_FARMER_FOR_VIEW, id);
    return this.get(url);
  }

  updateFarmer(id: string, data: FormData): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.UPDATE_FARMER, id);
    return this.putFormData(url, data);
  }

  deleteFarmerById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.DELETE_FARMER, id);
    return this.delete(url);
  }

  changeStatusOfFarmer(id: string, status: StatusType): Promise<ResultModel> {
      const url = `${sharedApiUrls.CHANGE_STATUS_FARMER}/${id}?status=${status}`;
      return this.patch(url)
    }
}
