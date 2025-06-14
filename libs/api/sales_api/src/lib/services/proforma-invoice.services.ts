import {  BaseService } from "@prime-fresh/common_api";

export class ProformaInvoiceServices extends BaseService {
    private static _instance: ProformaInvoiceServices;

    public static getInstance(): ProformaInvoiceServices {
        return this._instance || (this._instance = new this());
    }

}