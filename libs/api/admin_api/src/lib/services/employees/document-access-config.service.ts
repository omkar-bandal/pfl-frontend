import { ApiBaseState, BaseService, GetDocumentDetails } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";

export class DocumentAccessConfigService extends BaseService {
    private static _instance: DocumentAccessConfigService;

    public static getInstance(): DocumentAccessConfigService {
        return this._instance || (this._instance = new this());
    }

    getDocumentAccessConfig(): Promise<ApiBaseState<GetDocumentDetails[]>> {
        const url = adminApiUrlConstants.GET_ALL_DOCUMENT_DETAILS;
        return this.get(url);
    }
}