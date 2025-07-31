import { GetProduct, ProductPartialData } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ProductsService extends BaseService {
    private static _instance;
    static getInstance(): ProductsService;
    createProduct(data: FormData): Promise<ResultModel>;
    getAllProducts(queryParams?: QueryParams): Promise<ApiBaseState<GetProduct[]>>;
    getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>>;
    getProductById(id: string): Promise<ApiBaseState<GetProduct>>;
    updateProduct(id: string, data: FormData): Promise<ResultModel>;
    deleteProductById(id: string): Promise<ResultModel>;
}
