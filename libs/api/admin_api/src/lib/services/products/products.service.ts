import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { GetProduct, ProductPartialData } from "../../models";
import { adminApiUrlConstants } from "../../constants";

export class ProductsService extends BaseService {
    private static _instance: ProductsService;

    public static getInstance(): ProductsService {
        return this._instance || (this._instance = new this());
    }

    createProduct(data: FormData): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_PRODUCTS;
        return this.postFormData(url, data);
    }

    getAllProducts({page, limit, sort}: QueryParams):Promise<ApiBaseState<GetProduct[]>> {
        const url = adminApiUrlConstants.GET_ALL_PRODUCTS({page, limit, sort});
        return this.get(url);
    }

    getProductsPatrialData():Promise<ApiBaseState<ProductPartialData[]>> {
        const url = adminApiUrlConstants.GET_PRODUCTS_PARTIAL;
        return this.get(url);
    }

    getProductById(id: string): Promise<ApiBaseState<GetProduct>> {
        const url = `${adminApiUrlConstants.GET_A_PRODUCTS}/${id}`;
        return this.get(url);
    }

    updateProduct(id: string, data: FormData): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_PRODUCTS}/${id}`;
        return this.patchFormData(url, data);
    }

    deleteProductById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_PRODUCT}/${id}`;
        return this.delete(url);
    }
}