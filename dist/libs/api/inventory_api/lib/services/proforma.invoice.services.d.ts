import { GetFinalInvoice } from '../models';
import { ApiBaseState, BaseService } from '../../../../common_api/src/index.ts';

export declare class FinalInvoiceServices extends BaseService {
    private static _instance;
    static getInstance(): FinalInvoiceServices;
    createFinalInvoice(id: string): Promise<{
        invoiceurl: string;
    }>;
    getAllFinalInvoices(): Promise<ApiBaseState<GetFinalInvoice[]>>;
}
