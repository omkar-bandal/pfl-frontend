import { QueryParams } from '../../shared';
import { adminApiUrlConstants } from '../constants';
import { GetUOMConversionMatrix, PostUOMConversionMatrix } from '../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class UOMConversionMatrixService extends BaseService {
  private static _instance: UOMConversionMatrixService;

  public static getInstance(): UOMConversionMatrixService {
    return this._instance || (this._instance = new this());
  }

  createUOMConversionMatrix(data: PostUOMConversionMatrix): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_UOM_CONVERSION;
    return this.post(url, data);
  }

  getAllUOMConversionMatrix(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<GetUOMConversionMatrix[]>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_ALL_UOM_CONVERSION, null, queryParams, search);
    return this.get(url);
  }

  getUOMConversionMatrixById(id: string): Promise<ApiBaseState<GetUOMConversionMatrix>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_A_UOM_CONVERSION, id);
    return this.get(url);
  }

  updateUOMConversionMatrix(id: string, data: GetUOMConversionMatrix): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.UPDATE_UOM_CONVERSION, id);
    return this.patch(url, data);
  }

  deleteUOMConversionMatrixById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.DELETE_UOM_CONVERSION, id);
    return this.delete(url);
  }
}
