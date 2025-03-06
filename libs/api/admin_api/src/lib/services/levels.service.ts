import { ApiBaseState, BaseService, Level, GetLevel, ResultModel } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../constants";

export class LevelsService extends BaseService {
    public static _instance: LevelsService;

    public static getInstance(): LevelsService {
        return this._instance || (this._instance == new this())
    }

    getAllLevels(): Promise<ApiBaseState<GetLevel[]>> {
        const url = adminApiUrlConstants.GET_ALL_LEVEL;
        return this.get(url);
    }

    getLevelById(levelId: string): Promise<ApiBaseState<GetLevel>> {
        const url = `${adminApiUrlConstants.GET_LEVEL_BY_ID}/${levelId}`;
        return this.get(url)
    }

    createLevel(data: Level): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_LEVEL;
        return this.post(url, data);
    }

    updateLevels(id: string, data: Level): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_LEVEL}/${id}`;
        return this.patch(url, data);
    }

    deleteLevel(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_LEVEL}/${id}`;
        return this.delete(url);
    }
}