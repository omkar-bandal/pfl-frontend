import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { GetProduct, IProduct, ProductPartialData } from "../../models";
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

    getAllProducts(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetProduct[]>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_PRODUCTS, null, queryParams, search);
        return this.get(url);
    }

    getProductById(id: string): Promise<ApiBaseState<GetProduct>> {
        const url = buildApiUrl(adminApiUrlConstants.GET_A_PRODUCTS, id);
        return this.get(url);
    }

    updateProduct(id: string, data: FormData): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.UPDATE_PRODUCTS, id);
        return this.patchFormData(url, data);
    }

    deleteProductById(id: string): Promise<ResultModel> {
        const url = buildApiUrl(adminApiUrlConstants.DELETE_PRODUCT, id);
        return this.delete(url);
    }

     getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>> {
        const url = adminApiUrlConstants.GET_PRODUCTS_PARTIAL;
        return this.get(url);
    }

    getAllProductVariants(productId: string | null): Promise<ApiBaseState<Pick<IProduct, 'id' | 'name' | 'variant'>>>{
        const url = buildApiUrl(adminApiUrlConstants.GET_ALL_PRODUCT_VARIANTS, productId);
        return this.get(url);
    }
}