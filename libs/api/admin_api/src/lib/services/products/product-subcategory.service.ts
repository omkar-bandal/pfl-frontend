import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
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

    getAllProductSubcategories(queryParams?: QueryParams):Promise<ApiBaseState<GetProductSubcategory[]>> {
        const url = adminApiUrlConstants.GET_ALL_PRODUCT_SUBCATEGORY(queryParams);
        return this.get(url);
    }

    getProductSubcategoryById(id: string): Promise<ApiBaseState<GetProductSubcategory>> {
        const url = `${adminApiUrlConstants.GET_A_PRODUCT_SUBCATEGORY}/${id}`;
        return this.get(url);
    }

    updateProductSubcategory(id: string, data: GetProductSubcategory): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_PRODUCT_SUBCATEGORY}/${id}`;
        return this.patch(url, data);
    }
    deleteProductSubcategoryById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_PRODUCT_SUBCATEGORY}/${id}`;
        return this.delete(url);
    }
}