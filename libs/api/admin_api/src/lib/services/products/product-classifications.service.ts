import {ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { adminApiUrlConstants } from "../../constants";
import { GetProductClassification, PostProductClassification } from "../../models";

export class ProductClassificationService extends BaseService {
    private static _instance: ProductClassificationService;

    public static getInstance(): ProductClassificationService {
        return this._instance || (this._instance = new this());
    }

    createProductClassification(data: PostProductClassification): Promise<ResultModel> {
        const url = adminApiUrlConstants.CREATE_PRODUCT_CLASSIFICATION;
        return this.post(url, data);
    }

    getAllProductClassifications(queryParams?: QueryParams):Promise<ApiBaseState<GetProductClassification[]>> {
        const url = adminApiUrlConstants.GET_ALL_PRODUCT_CLASSIFICATION(queryParams);
        return this.get(url);
    }

    getProductClassificationById(id: string): Promise<ApiBaseState<GetProductClassification>> {
        const url = `${adminApiUrlConstants.GET_A_PRODUCT_CLASSIFICATION}/${id}`;
        return this.get(url);
    }

    updateProductClassification(id: string, data: GetProductClassification): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.UPDATE_PRODUCT_CLASSIFICATION}/${id}`;
        return this.patch(url, data);
    }

    deleteProductClassificationById(id: string): Promise<ResultModel> {
        const url = `${adminApiUrlConstants.DELETE_PRODUCT_CLASSIFICATION}/${id}`;
        return this.delete(url);
    }
}