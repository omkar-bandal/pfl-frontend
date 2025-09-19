import { Address, ApprovalSummany, DocumentStatus } from "@prime-fresh/common_api";

export interface IVehicleDispatchRegister {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string | null;
    createdTime?: string | null;
    companyName: string | null;
    date: string | null;
    vehicleType: string | null;
    vehicleNo: string | null;
    driverName: string | null;
    paymentDiscussed: number | null;
    driverMobNo: string | null;
    outTime: string | null;
    clientName: string | null;
    clientAddress: Address;
    receivingPerson: string | null;
    reachingTime: string | null;
    accDeptVerification: string | null;
    transportationBillAmt: number | null;
    advancePaid: number | null;
    remarksPFL: string | null;
    feedbackbyTransporterOwner: string | null;
    dcNumber: string | null;
    netInwardQty: number | null;
    clientGRNNo: string | null;
    paymentTerms: string | null;
    rejection: number | null;
    shrinkageDump: number | null;
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}

// export type PostVehicleDispatchRegister = {
//     companyName: string | null,
//     date: string | null,
//     vehicleType: string | null,
//     vehicleNo: string | null,
//     driverName: string | null,
//     paymentDiscussed: number| null,
//     driverMobNo: string | null,
//     outTime: string | null,
//     clientName: string | null,
//     clientAddress: Address,
//     receivingPerson: string | null,
//     reachingTime: string | null,
//     accDeptVerification: string | null,
//     transportationBillAmt: number| null,
//     advancePaid: number| null,
//     remarksPFL: string | null,
//     feedbackbyTransporterOwner: string | null,
//     dcNumber: string | null,
//     netInwardQty: number| null,
//     clientGRNNo: string | null,
//     paymentTerms: string | null,
//     rejection: number | null,
//     shrinkageDump: number | null
// }

// export type GetVehicleDispatchRegister = {
//     id: string,
//     companyName: string,
//     date: string,
//     vehicleType: string,
//     vehicleNo: string,
//     driverName: string,
//     paymentDiscussed: number,
//     driverMobNo: string,
//     outTime: string,
//     clientName: string,
//     clientAddress: Address,
//     receivingPerson: string,
//     reachingTime: string,
//     accDeptVerification: string,
//     transportationBillAmt: number,
//     advancePaid: number,
//     remarksPFL: string,
//     feedbackbyTransporterOwner: string,
//     dcNumber: string,
//     netInwardQty: number,
//     clientGRNNo: string,
//     paymentTerms: string,
//     rejection: number,
//     shrinkageDump: number
// }