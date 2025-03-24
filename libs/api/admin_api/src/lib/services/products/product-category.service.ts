import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetProductCategory, PostProductCategory } from "../../models";

export class ProductCategoryService extends BaseService {
    private static _instance: ProductCategoryService;

    public static getInstance(): ProductCategoryService {
        return this._instance || (this._instance = new this());
    }

    createProductCategory(data: PostProductCategory): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_PRODUCT_CATEGORY;
        return this.post(url, data);
    }

    getAllProductCategories(queryParams?: QueryParams): Promise<ApiBaseState<GetProductCategory[]>> {
        const url = adminApiUrlConstants.GET_ALL_PRODUCT_CATEGORY(queryParams);
        return this.get(url);
    }

    getProductCategoryById(id: string): Promise<ApiBaseState<GetProductCategory>> {
        const url = `${adminApiUrlConstants.GET_A_PRODUCT_CATEGORY}/${id}`;
        return this.get(url);
    }

    updateProductCategory(id: string, data: GetProductCategory): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_PRODUCT_CATEGORY}/${id}`;
        return this.patch(url, data);
    }

    deleteProductCategoryById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_PRODUCT_CATEGORY}/${id}`;
        return this.delete(url);
    }
}