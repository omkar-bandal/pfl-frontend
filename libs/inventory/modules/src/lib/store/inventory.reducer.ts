import {
  aqrReducer,
  dumpRegisterReducer,
  inwardRegisterReducer,
  secondSaleRegisterReducer,
  vehicleDispatchRegisterReducer,
  eodReportReducer,
  returnedByCustomerReducer,
} from './slices';

export const inventoryReducer = {
  inwardRegister: inwardRegisterReducer,
  dumpRegister: dumpRegisterReducer,
  aqr: aqrReducer,
  secondSaleRegister: secondSaleRegisterReducer,
  vehicleDispatchRegister: vehicleDispatchRegisterReducer,
  eodReport: eodReportReducer,
  rbc: returnedByCustomerReducer
};
