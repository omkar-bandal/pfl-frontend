import { ApiBaseState, BaseService, Level, GetLevel, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class LevelsService extends BaseService {
    static _instance: LevelsService;
    static getInstance(): LevelsService;
    getAllLevels(): Promise<ApiBaseState<GetLevel[]>>;
    getLevelById(levelId: string): Promise<ApiBaseState<GetLevel>>;
    createLevel(data: Level): Promise<ResultModel>;
    updateLevels(id: string, data: Level): Promise<ResultModel>;
    deleteLevel(id: string): Promise<ResultModel>;
}
