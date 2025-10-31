// eslint-disable-next-line @nx/enforce-module-boundaries
import { IVehicleDispatchRegister } from '@prime-fresh/services';
import { initValAddress } from '@prime-fresh/shared/modules';

export const vehicleDispatchRegisterInitialValues: Omit<IVehicleDispatchRegister, 'id'> = {
  companyName: null,
  date: null,
  vehicleType: null,
  vehicleNo: null,
  driverName: null,
  driverMobNo: null,
  paymentDiscussed: 0,
  transportationBillAmt: 0,
  advancePaid: 0,
  clientName: null,
  clientAddress: initValAddress,
  receivingPerson: null,
  outTime: null,
  reachingTime: null,
  accDeptVerification: null,
  remarksPFL: null,
  feedbackbyTransporterOwner: null,
  dcNumber: null,
  clientGRNNo: null,
  paymentTerms: null,
  netInwardQty: 0,
  rejection: 0,
  shrinkageDump: 0,
};
