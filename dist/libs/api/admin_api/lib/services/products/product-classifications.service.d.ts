import { GetProductClassification, PostProductClassification } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ProductClassificationService extends BaseService {
    private static _instance;
    static getInstance(): ProductClassificationService;
    createProductClassification(data: PostProductClassification): Promise<ResultModel>;
    getAllProductClassifications(queryParams?: QueryParams): Promise<ApiBaseState<GetProductClassification[]>>;
    getProductClassificationById(id: string): Promise<ApiBaseState<GetProductClassification>>;
    updateProductClassification(id: string, data: GetProductClassification): Promise<ResultModel>;
    deleteProductClassificationById(id: string): Promise<ResultModel>;
}
