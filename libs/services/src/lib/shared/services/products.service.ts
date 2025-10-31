import { sharedApiUrls } from '../constants';
import { IProduct, ProductPartialData, QueryParams } from '../models';
import { ApiBaseState, BaseService, buildApiUrl, ResultModel } from '../../base';

export class ProductsService extends BaseService {
  private static _instance: ProductsService;

  public static getInstance(): ProductsService {
    return this._instance || (this._instance = new this());
  }

  createProduct(data: FormData): Promise<ResultModel> {
    const url = sharedApiUrls.CREATE_PRODUCTS;
    return this.postFormData(url, data);
  }

  getAllProducts(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IProduct[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_PRODUCTS, null, queryParams, search);
    return this.get(url);
  }

  getProductById(id: string): Promise<ApiBaseState<IProduct>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_PRODUCTS, id);
    return this.get(url);
  }

  updateProduct(id: string, data: FormData): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.UPDATE_PRODUCTS, id);
    return this.putFormData(url, data);
  }

  deleteProductById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.DELETE_PRODUCT, id);
    return this.delete(url);
  }

  getProductsPatrialData(): Promise<ApiBaseState<ProductPartialData[]>> {
    const url = sharedApiUrls.GET_PRODUCTS_PARTIAL;
    return this.get(url);
  }

  getAllProductVariants(productId: string | null): Promise<ApiBaseState<Pick<IProduct, 'id' | 'name' | 'variant'>>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_PRODUCT_VARIANTS, productId);
    return this.get(url);
  }
}
