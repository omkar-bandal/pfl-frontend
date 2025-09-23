import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetProductSubcategory, PostProductSubcategory } from "../../models";

export class ProductSubcategoryService extends BaseService {
    private static _instance: ProductSubcategoryService;

    public static getInstance(): ProductSubcategoryService {
        return this._instance || (this._instance = new this());
    }

    createProductSubcategory(data: PostProductSubcategory): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_PRODUCT_SUBCATEGORY;
        return this.post(url, data);
    }

    getAllProductSubcategories(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetProductSubcategory[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_PRODUCT_SUBCATEGORY, null, queryParams, search);
        return this.get(url);
    }

    getProductSubcategoryById(id: string): Promise<ApiBaseState<GetProductSubcategory>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_PRODUCT_SUBCATEGORY, id);
        return this.get(url);
    }

    updateProductSubcategory(id: string, data: GetProductSubcategory): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_PRODUCT_SUBCATEGORY, id);
        return this.patch(url, data);
    }

    deleteProductSubcategoryById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_PRODUCT_SUBCATEGORY, id);
        return this.delete(url);
    }
}