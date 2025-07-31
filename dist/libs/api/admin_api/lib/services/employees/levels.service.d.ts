import { ApiBaseState, BaseService, Level, GetLevel, ResultModel, GetDocumentDetails, DocumentDetails } from '../../../../../common_api/src/index.ts';

export declare class LevelsService extends BaseService {
    static _instance: LevelsService;
    static getInstance(): LevelsService;
    getAllLevels(): Promise<ApiBaseState<GetLevel[]>>;
    getAllDocumentDetails(): Promise<ApiBaseState<GetDocumentDetails[]>>;
    getLevelById(levelId: string): Promise<ApiBaseState<GetLevel>>;
    createLevel(data: Level): Promise<ResultModel>;
    createDocumentDetail(data: DocumentDetails): Promise<ResultModel>;
    updateLevels(id: string, data: Level): Promise<ResultModel>;
    deleteLevel(id: string): Promise<ResultModel>;
}
