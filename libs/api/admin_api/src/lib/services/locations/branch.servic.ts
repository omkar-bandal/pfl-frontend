import { ApiBaseState, BaseService, QueryParams, ResultModel, buildApiUrl } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetBranches, PostBranches } from "../../models";

export class BranchService extends BaseService {
    private static _instance: BranchService;

    public static getInstance(): BranchService {
        return this._instance || (this._instance = new this());
    }

    createBranch(data: PostBranches, branchType: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.CREATE_BRANCH}/${branchType}`;
        return this.post(url, data);
    }

    getAllBranches(branchType: string, queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetBranches[]>> {
        const url = buildApiUrl(`${adminApiUrlConstants.GET_ALL_BRANCHES}/${branchType}`, null, queryParams, search);
        return this.get(url);
    }

    getBranchById(id: string): Promise<ApiBaseState<GetBranches>> {
        const url = `${adminApiUrlConstants.GET_A_BRANCH}/${id}`;
        return this.get(url);
    }

    updateBranch(id: string, branchType: string, data: PostBranches): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_BRANCH}/${branchType}/${id}`;
        return this.patch(url, data);
    }

    deleteBranchById(id: string, branchType: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_BRANCH}/${branchType}/${id}`;
        return this.delete(url);
    }
}