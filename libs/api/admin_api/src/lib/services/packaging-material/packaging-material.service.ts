import {
  ApiBaseState,
  BaseService,
  QueryParams,
  ResultModel,
} from '@prime-fresh/common_api';
import { adminApiUrlConstants } from '../../constants';
import { GetPackagingMaterial, PostPackagingMaterial } from '../../models';
import { buildApiUrl } from '@prime-fresh/shared/modules';

export class PackagingMaterialService extends BaseService {
  private static _instance: PackagingMaterialService;

  public static getInstance(): PackagingMaterialService {
    return this._instance || (this._instance = new this());
  }

  createPackagingMaterial(data: PostPackagingMaterial): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_PACKAGING_MATERIAL;
    return this.post(url, data);
  }

  getAllPackagingMaterials(queryParams?: QueryParams, search?: string | null): 
  Promise<ApiBaseState<GetPackagingMaterial[]>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_ALL_PACKAGING_MATERIAL, null, queryParams, search);
    console.log(url);
    return this.get(url);
  }

  getPackagingMaterialById( id: string): Promise<ApiBaseState<GetPackagingMaterial>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_A_PACKAGING_MATERIAL, id);
    return this.get(url);
  }

  updatePackagingMaterial( id: string, data: GetPackagingMaterial): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.UPDATE_PACKAGING_MATERIAL, id);
    return this.patch(url, data);
  }

  deletePackagingMaterialById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.DELETE_PACKAGING_MATERIAL, id);
    return this.delete(url);
  }
}
