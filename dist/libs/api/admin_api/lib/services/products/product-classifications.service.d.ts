import { GetProductClassification, PostProductClassification } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class ProductClassificationService extends BaseService {
    private static _instance;
    static getInstance(): ProductClassificationService;
    createProductClassification(data: PostProductClassification): Promise<ResultModel>;
    getAllProductClassifications(): Promise<ApiBaseState<GetProductClassification[]>>;
    getProductClassificationById(id: string): Promise<ApiBaseState<GetProductClassification>>;
    updateProductClassification(id: string, data: GetProductClassification): Promise<ResultModel>;
    deleteProdctClassificationById(id: string): Promise<ResultModel>;
}
