import { GetUOMConversionMatrix, PostUOMConversionMatrix } from '../../models';
import { ApiBaseState, BaseService, QueryParams, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class UOMConversionMatrixService extends BaseService {
    private static _instance;
    static getInstance(): UOMConversionMatrixService;
    createUOMConversionMatrix(data: PostUOMConversionMatrix): Promise<ResultModel>;
    getAllUOMConversionMatrix({ page, limit, sort }: QueryParams): Promise<ApiBaseState<GetUOMConversionMatrix[]>>;
    getUOMConversionMatrixById(id: string): Promise<ApiBaseState<GetUOMConversionMatrix>>;
    updateUOMConversionMatrix(id: string, data: GetUOMConversionMatrix): Promise<ResultModel>;
    deleteUOMConversionMatrixById(id: string): Promise<ResultModel>;
}
