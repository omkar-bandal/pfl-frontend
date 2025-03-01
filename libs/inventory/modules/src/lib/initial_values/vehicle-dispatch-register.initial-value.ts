// eslint-disable-next-line @nx/enforce-module-boundaries
import { PostVehicleDispatchRegister } from "@prime-fresh/inventory_api";
import {initValAddress} from "@prime-fresh/shared/modules";

export const vehicleDispatchRegisterInitialValues: PostVehicleDispatchRegister = {
    date: "",
    vehicleType: "",
    vehicleNo: "",
    driverName: "",
    driverMobNo: "",
    paymentDiscussed: 0,
    transportationBillAmt: 0,
    advancePaid: 0,
    clientName: "",
    clientAddress: initValAddress,
    receivingPerson: "",
    outTime: "",
    reachingTime: "",
    accDeptVerification: "",
    remarksPFL: "",
    feedbackbyTransporterOwner: "",
    dcNumber: "",
    netInwardQty: 0,
    clientGRNNo: "",
    paymentTerms: "",
    rejection: "",
    shrinkageDump: ""
}