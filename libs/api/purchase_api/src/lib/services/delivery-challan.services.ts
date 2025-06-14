import { ApiBaseState, BaseService, QueryParams, ResultModel } from "@prime-fresh/common_api";
import { purchaseApiUrl } from "../constants";
import { GetDeliveryChallan } from "../models";

export class DeliveryChallanServices extends BaseService {
    private static _instance: DeliveryChallanServices;

    public static getInstance(): DeliveryChallanServices {
        return this._instance || (this._instance = new this());
    }

    createDeliveryChallan(data: FormData): Promise<ResultModel> {
        const url = purchaseApiUrl.CREATE_DELIVERY_CHALLAN;
        return this.postFormData(url, data);
    }

    getAllDeliveryChallans(queryParams?: QueryParams): Promise<ApiBaseState<GetDeliveryChallan[]>> {
        const url = purchaseApiUrl.GET_ALL_DELIVERY_CHALLAN(queryParams);
        return this.get(url);
    }

    getDeliveryChallanById(id: string): Promise<ApiBaseState<GetDeliveryChallan>> {
        const url = `${purchaseApiUrl.GET_DELIVERY_CHALLAN_BY_ID}/${id}`;
        return this.get(url);
    }

    updateDeliveryChallan(id: string, data: FormData): Promise<ResultModel> {
        const url = `${purchaseApiUrl.UPDATE_DELIVERY_CHALLAN}/${id}`;
        return this.patchFormData(url, data);
    }

    deleteDeliveryChallanById(id: string): Promise<ResultModel> {
        const url = `${purchaseApiUrl.DELETE_DELIVERY_CHALLAN}/${id}`;
        return this.delete(url);
    }

    createProformaInvoice(id: string): Promise<{invoiceurl: string}>{
        const url = `${purchaseApiUrl.CREATE_PROFORMA_INVOICE}/${id}`;
        return this.post(url);
    }
}