import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetOffices, PostOffices } from "../../models";

export class OfficeService extends BaseService {
    private static _instance: OfficeService;

    public static getInstance(): OfficeService {
        return this._instance || (this._instance = new this());
    }

    createOffice(data: PostOffices, officeType: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.CREATE_OFFICE}/${officeType}`;
        return this.post(url, data);
    }

    getAllOffice(officeType: string, queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetOffices[]>> {
        const url = buildApiUrl(`${adminApiUrlConstants.GET_ALL_OFFICES}/${officeType}`, null, queryParams, search);
        return this.get(url);
    }

    getOfficeById(id: string, officeType: string): Promise<ApiBaseState<GetOffices>> {
        const url = `${adminApiUrlConstants.GET_A_OFFICE}/${officeType}/${id}`;
        return this.get(url);
    }

    updateOffice(id: string, officeType: string, data: PostOffices): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_OFFICE}/${officeType}/${id}`;
        return this.patch(url, data);
    }

    deleteOfficeById(id: string, officeType: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_OFFICE}/${officeType}/${id}`;
        return this.delete(url);
    }
}