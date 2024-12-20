import { PostVehicleDispatchRegister } from "@prime-fresh/inventory_api";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { addressInitialValue } from "@prime-fresh/shared/utils";

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
    clientLocationAddress: addressInitialValue,
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