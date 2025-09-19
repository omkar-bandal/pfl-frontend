import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../../constants";
import { ILaborPaymentVoucher } from "../../models";
import { buildApiUrl } from "@prime-fresh/shared/modules";

export class LaborPaymentVoucherServices extends BaseService {
    private static _instance: LaborPaymentVoucherServices;

    public static getInstance(): LaborPaymentVoucherServices {
        return this._instance || (this._instance = new this());
    }

    createLaborPaymentVoucher(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_LP_VOUCHER;
        return this.postFormData(url, data);
    }

    getAllLaborPaymentVouchers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<ILaborPaymentVoucher[]>> {
        const url = buildApiUrl(purchaseApiUrl.GET_ALL_LP_VOUCHER, null, queryParams, search);
        return this.get(url);
    }

    getLaborPaymentVoucherForViewById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>> {
        const url = purchaseApiUrl.GET_LP_VOUCHER_FOR_VIEW_BY_ID(id);
        return this.get(url);
    }

    getLaborPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>> {
        const url = purchaseApiUrl.GET_LP_VOUCHER_FOR_UPDATE_BY_ID(id);
        return this.get(url);
    }

    getLaborPaymentVoucherById(id: string): Promise<ApiBaseState<ILaborPaymentVoucher>> {
        const url = `${purchaseApiUrl.GET_LP_VOUCHER_BY_ID}/${id}`;
        return this.get(url);
    }

    updateLaborPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.UPDATE_LP_VOUCHER(id);
        return this.patchFormData(url, data);
    }

    deleteLaborPaymentVoucherById(id: string): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_LP_VOUCHER(id);
        return this.delete(url);
    }

    deleteMultipleLaborPaymentVouchers(data: Array<string>): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_MULTIPLE_LP_VOUCHER;
        return this.deleteMultiple(url, data);
    }
}