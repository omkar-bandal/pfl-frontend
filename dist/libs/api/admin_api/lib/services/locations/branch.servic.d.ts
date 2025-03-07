import { GetBranches, PostBranches } from '../../models';
import { ApiBaseState, BaseService, ResultModel } from '../../../../../common_api/src/index.ts';

export declare class BranchService extends BaseService {
    private static _instance;
    static getInstance(): BranchService;
    createBranch(data: PostBranches, branchType: string): Promise<ResultModel>;
    getAllBranches(branchType: string): Promise<ApiBaseState<GetBranches[]>>;
    getBranchById(id: string): Promise<ApiBaseState<GetBranches>>;
    updateBranch(id: string, branchType: string, data: PostBranches): Promise<ResultModel>;
    deleteBranchById(id: string, branchType: string): Promise<ResultModel>;
}
