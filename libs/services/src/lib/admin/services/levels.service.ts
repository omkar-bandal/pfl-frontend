import { GetLevel, Level, DocumentDetails, GetDocumentDetails } from '../models';
import { adminApiUrlConstants } from '../constants';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class LevelsService extends BaseService {
  public static _instance: LevelsService;

  public static getInstance(): LevelsService {
    return this._instance || (this._instance = new this());
  }

  getAllLevels(): Promise<ApiBaseState<GetLevel[]>> {
    const url = adminApiUrlConstants.GET_ALL_LEVEL;
    console.log('Level Url:', url);
    return this.get(url);
  }

  getAllDocumentDetails(): Promise<ApiBaseState<GetDocumentDetails[]>> {
    const url = adminApiUrlConstants.GET_ALL_DOCUMENT_DETAILS;
    return this.get(url);
  }

  getLevelById(levelId: string): Promise<ApiBaseState<GetLevel>> {
    const url = `${adminApiUrlConstants.GET_LEVEL_BY_ID}/${levelId}`;
    return this.get(url);
  }

  createLevel(data: Level): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_LEVEL;
    return this.post(url, data);
  }

  createDocumentDetail(data: DocumentDetails): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_DOCUMENT_DETAILS;
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
