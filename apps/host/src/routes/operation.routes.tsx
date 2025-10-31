import { operationsRoutes } from '@prime-fresh/operations/modules';
import {
  DealSlipForm,
  DealSlipTable,
  DealSlipView,
  GRNTable,
  GRNView,
  LabourPaymentVoucherForm,
  LabourPaymentVoucherTable,
  LabourPaymentVoucherView,
  MultipleCashVoucherForm,
  MultipleCashVoucherTable,
  MultipleCashVoucherView,
  PackingMaterialPaymentVoucherForm,
  PackingMaterialPaymentVoucherTable,
  PackingMaterialPaymentVoucherView,
  PaymentRequestForm,
  RFPAForm,
  RFPATable,
  RFPAView,
  TransportPaymentVoucherForm,
  TransportPaymentVoucherTable,
  TransportPaymentVoucherView,
  DCTypeCustomerForm,
  DCTypeStockTransferForm,
  DCTypeCustomerTable,
  DCTypeStockTransferTable,
  DCTypeCustomerView,
  DCTypeStockTransferView,
  GRNForm,
  AQRForm,
  AQRView,
  EODReportForm,
  LabourRegistrationForm,
  InwardRegisterTable,
  DumpRegisterTable,
  DumpRegisterView,
  SecondSaleRegisterTable,
  VehicleDispatchRegisterForm,
  VehicleDispatchRegisterTable,
  VehicleDispatchRegisterView,
  LaborAttendanceForm,
  LaborRegisterTable,
  LaborAttendanceTable,
  LaborAttendanceUpdateForm,
  EODReportTable,
  AQRTable,
  DumpRegisterForm,
  InwardRegisterForm,
  SecondSaleRegisterForm,
  FinalInvoicesTable,
  InwardRegisterView,
  SecondSaleRegisterView,
  EODReportView,
  ReturnedByCustomerForm,
  ReturnedByCustomerTable,
  ReturnedByCustomerView,
} from '@prime-fresh/operations/components';

export const OperationRoutes = [
  {
    path: operationsRoutes.RFPA,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_RFPA,
        element: <RFPATable />,
      },
      {
        path: operationsRoutes.CREATE_RFPA,
        element: <RFPAForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_RFPA}/:id`,
        element: <RFPAView />,
      },
      {
        path: `${operationsRoutes.UPDATE_RFPA}/:id`,
        element: <RFPAForm />,
      },
    ],
  },
  {
    path: operationsRoutes.DEAL_SLIP,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_DEAL_SLIP,
        element: <DealSlipTable />,
      },
      {
        path: operationsRoutes.CREATE_DEAL_SLIP,
        element: <DealSlipForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_DEAL_SLIP}/:id`,
        element: <DealSlipView />,
      },
      {
        path: `${operationsRoutes.UPDATE_DEAL_SLIP}/:id`,
        element: <DealSlipForm />,
      },
    ],
  },
  {
    path: operationsRoutes.GRN,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_GRN,
        element: <GRNTable />,
      },
      {
        path: operationsRoutes.CREATE_GRN,
        element: <GRNForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_GRN}/:id`,
        element: <GRNView />,
      },
      {
        path: `${operationsRoutes.UPDATE_GRN}/:id`,
        element: <GRNForm />,
      },
    ],
  },
  {
    path: operationsRoutes.PAYMENT_REQ,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_PAYMENT_REQ,
        element: <GRNTable />,
      },
      {
        path: `${operationsRoutes.CREATE_PAYMENT_REQ}/:grnid`,
        element: <PaymentRequestForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_PAYMENT_REQ}/:payreqid`,
        element: <GRNView />,
      },
    ],
  },
  {
    path: operationsRoutes.VOUCHER,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_MULT_CASH_VOUCHER,
        element: <MultipleCashVoucherTable />,
      },
      {
        path: operationsRoutes.CREATE_MULT_CASH_VOUCHER,
        element: <MultipleCashVoucherForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_MULT_CASH_VOUCHER}/:voucherid`,
        element: <MultipleCashVoucherView />,
      },
      {
        path: `${operationsRoutes.UPDATE_MULT_CASH_VOUCHER}/:voucherid`,
        element: <MultipleCashVoucherForm />,
      },
      {
        path: operationsRoutes.CREATE_LABOUR_CASH_VOUCHER,
        element: <LabourPaymentVoucherForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_LABOUR_CASH_VOUCHER,
        element: <LabourPaymentVoucherTable />,
      },
      {
        path: `${operationsRoutes.VIEW_A_LABOUR_CASH_VOUCHER}/:voucherid`,
        element: <LabourPaymentVoucherView />,
      },
      {
        path: `${operationsRoutes.UPDATE_LABOUR_CASH_VOUCHER}/:voucherid`,
        element: <LabourPaymentVoucherForm />,
      },
      {
        path: operationsRoutes.CREATE_PACKING_MATERIAL_VOUCHER,
        element: <PackingMaterialPaymentVoucherForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_PACKING_MATERIAL_VOUCHER,
        element: <PackingMaterialPaymentVoucherTable />,
      },
      {
        path: `${operationsRoutes.VIEW_A_PACKING_MATERIAL_VOUCHER}/:voucherid`,
        element: <PackingMaterialPaymentVoucherView />,
      },
      {
        path: `${operationsRoutes.UPDATE_PACKING_MATERIAL_VOUCHER}/:voucherid`,
        element: <PackingMaterialPaymentVoucherForm />,
      },
      {
        path: operationsRoutes.CREATE_TRANSPORT_CASH_VOUCHER,
        element: <TransportPaymentVoucherForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_TRANSPORT_CASH_VOUCHER,
        element: <TransportPaymentVoucherTable />,
      },
      {
        path: `${operationsRoutes.VIEW_A_TRANSPORT_CASH_VOUCHER}/:voucherid`,
        element: <TransportPaymentVoucherView />,
      },
      {
        path: `${operationsRoutes.UPDATE_TRANSPORT_CASH_VOUCHER}/:voucherid`,
        element: <TransportPaymentVoucherForm />,
      },
    ],
  },
  {
    path: operationsRoutes.DELIVERY_CHALLAN,
    children: [
      //VIEW All
      // {
      //   path: operationsRoutes.VIEW_ALL_DELIVERY_CHALLAN,
      //   element: <DeliveryChallanTable />,
      // },
      {
        path: operationsRoutes.VIEW_ALL_DC_TYPE_CUSTOMER,
        element: <DCTypeCustomerTable />,
      },
      {
        path: operationsRoutes.VIEW_ALL_DC_TYPE_STOCK_TRANSFER,
        element: <DCTypeStockTransferTable />,
      },
      //Create
      {
        path: operationsRoutes.CREATE_DC_TYPE_CUSTOMER,
        element: <DCTypeCustomerForm />,
      },
      {
        path: operationsRoutes.CREATE_DC_TYPE_STOCK_TRANSFER,
        element: <DCTypeStockTransferForm />,
      },
      //View
      // {
      //   path: `${operationsRoutes.VIEW_DELIVERY_CHALLAN}/:id`,
      //   element: <DeliveryChallanView />,
      // },
      {
        path: `${operationsRoutes.VIEW_A_DC_TYPE_CUSTOMER}/:id`,
        element: <DCTypeCustomerView />,
      },
      {
        path: `${operationsRoutes.VIEW_A_DC_TYPE_STOCK_TRANSFER}/:id`,
        element: <DCTypeStockTransferView />,
      },
      //Update
      {
        path: `${operationsRoutes.UPDATE_DC_TYPE_CUSTOMER}/:id`,
        element: <DCTypeCustomerForm />,
      },
      {
        path: `${operationsRoutes.UPDATE_DC_TYPE_STOCK_TRANSFER}/:id`,
        element: <DCTypeStockTransferForm />,
      },
    ],
  },
  {
    path: operationsRoutes.INWARD_REGISTER,
    children: [
      {
        path: operationsRoutes.CREATE_INWARD_REGISTER,
        element: <InwardRegisterForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_INWARD_REGISTERS,
        element: <InwardRegisterTable />,
      },
      {
        path: `${operationsRoutes.UPDATE_INWARD_REGISTER}/:id`,
        element: <InwardRegisterForm />,
      },
      {
        path: `${operationsRoutes.VIEW_AN_INWARD_REGISTER}/:id`,
        element: <InwardRegisterView />,
      },
    ],
  },
  {
    path: operationsRoutes.AQR,
    children: [
      {
        path: operationsRoutes.CREATE_AQR,
        element: <AQRForm />,
      },
      {
        path: `${operationsRoutes.UPDATE_AQR}/:id`,
        element: <AQRForm />,
      },
      {
        path: `${operationsRoutes.VIEW_AN_AQR}/:id`,
        element: <AQRView />,
      },
      {
        path: operationsRoutes.VIEW_ALL_AQR,
        element: <AQRTable />,
      },
    ],
  },
  {
    path: operationsRoutes.LABOUR_REGISTER,

    children: [
      {
        path: operationsRoutes.CREATE_LABOUR_REGISTER,
        element: <LabourRegistrationForm />,
      },
      {
        path: `${operationsRoutes.UPDATE_LABOUR_REGISTER}/:id`,
        element: <LabourRegistrationForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_LABOUR_REGISTER,
        element: <LaborRegisterTable />,
      },
    ],
  },
  {
    path: operationsRoutes.LABOUR_ATTENDANCE,

    children: [
      {
        path: operationsRoutes.CREATE_LABOUR_ATTENDANCE,
        element: <LaborAttendanceForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_LABOUR_ATTENDANCE,
        element: <LaborAttendanceTable />,
      },
      {
        path: `${operationsRoutes.UPDATE_LABOUR_ATTENDANCE}/:id`,
        element: <LaborAttendanceUpdateForm />,
      },
    ],
  },
  {
    path: operationsRoutes.DUMP_REGISTER,
    children: [
      {
        path: operationsRoutes.CREATE_DUMP_REGISTER,
        element: <DumpRegisterForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_DUMP_REGISTERS,
        element: <DumpRegisterTable />,
      },
      {
        path: `${operationsRoutes.UPDATE_DUMP_REGISTER}/:id`,
        element: <DumpRegisterForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_DUMP_REGISTER}/:id`,
        element: <DumpRegisterView />,
      },
    ],
  },
  {
    path: operationsRoutes.SECOND_SALE_REGISTER,

    children: [
      {
        path: operationsRoutes.CREATE_SECOND_SALE_REGISTER,
        element: <SecondSaleRegisterForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_SECOND_SALE_REGISTER,
        element: <SecondSaleRegisterTable />,
      },
      {
        path: `${operationsRoutes.UPDATE_SECOND_SALE_REGISTER}/:id`,
        element: <SecondSaleRegisterForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_SECOND_SALE_REGISTER}/:id`,
        element: <SecondSaleRegisterView />,
      },
    ],
  },
  {
    path: operationsRoutes.VEHICLE_DISPATCH_REGISTER,
    children: [
      {
        path: operationsRoutes.CREATE_VEHILCE_DISPATCH_REGISTER,
        element: <VehicleDispatchRegisterForm />,
      },
      {
        path: operationsRoutes.VIEW_ALL_VEHILCE_DISPATCH_REGISTER,
        element: <VehicleDispatchRegisterTable />,
      },
      {
        path: `${operationsRoutes.UPDATE_VEHILCE_DISPATCH_REGISTER}/:id`,
        element: <VehicleDispatchRegisterForm />,
      },
      {
        path: `${operationsRoutes.VIEW_A_VEHILCE_DISPATCH_REGISTER}/:id`,
        element: <VehicleDispatchRegisterView />,
      },
    ],
  },
  {
    path: operationsRoutes.EOD_REPORT,
    children: [
      {
        path: operationsRoutes.CREATE_EOD_REPORT,
        element: <EODReportForm />,
      },
      {
        path: `${operationsRoutes.UPDATE_EOD_REPORT}/:id`,
        element: <EODReportForm />,
      },
      {
        path: `${operationsRoutes.VIEW_AN_EOD_REPORT}/:id`,
        element: <EODReportView />,
      },
      {
        path: operationsRoutes.VIEW_ALL_EOD_REPORT,
        element: <EODReportTable />,
      },
    ],
  },
  {
    path: operationsRoutes.FINAL_INVOICES,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_FINAL_INVOICES,
        element: <FinalInvoicesTable />,
      },
    ],
  },
  {
    path: operationsRoutes.RBC,
    children: [
      {
        path: operationsRoutes.VIEW_ALL_RBC,
        element: <ReturnedByCustomerTable />
      },
      {
        path: operationsRoutes.CREATE_RBC,
        element: <ReturnedByCustomerForm />
      },
      {
        path: `${operationsRoutes.VIEW_A_RBC}/:id`,
        element: <ReturnedByCustomerView />
      },
      {
        path: `${operationsRoutes.UPDATE_RBC}/:id`,
        element: <ReturnedByCustomerForm />
      },
    ]
  },
]
// export const OperationRoutes = () => {
//   return (
//     <>
//       {/* RFPA Routes */}
//       <Route path={operationsRoutes.RFPA}>
//         <Route path="view/all" element={<RFPATable />} />
//         <Route path="create" element={<RFPAForm />} />
//         <Route path="view/:id" element={<RFPAView />} />
//         <Route path="update/:id" element={<RFPAForm />} />
//       </Route>

//       {/* Deal Slip Routes */}
//       <Route path={operationsRoutes.DEAL_SLIP}>
//         <Route path="view/all" element={<DealSlipTable />} />
//         <Route path="create" element={<DealSlipForm />} />
//         <Route path="view/:id" element={<DealSlipView />} />
//         <Route path="update/:id" element={<DealSlipForm />} />
//       </Route>

//       {/* GRN Routes */}
//       <Route path={operationsRoutes.GRN}>
//         <Route path="view/all" element={<GRNTable />} />
//         <Route path="create" element={<GRNForm />} />
//         <Route path="view/:id" element={<GRNView />} />
//         <Route path="update/:id" element={<GRNForm />} />
//       </Route>

//       {/* Payment Request Routes */}
//       <Route path={operationsRoutes.PAYMENT_REQ}>
//         <Route path="view/all" element={<GRNTable />} />
//         <Route path="create/:grnid" element={<PaymentRequestForm />} />
//         <Route path="view/:payreqid" element={<GRNView />} />
//       </Route>

//       {/* Voucher Routes */}
//       <Route path={operationsRoutes.VOUCHER}>
//         {/* Multiple Cash Voucher */}
//         <Route path={operationsRoutes.MULT_CASH_VOUCHER}>
//           <Route path="view/all" element={<MultipleCashVoucherTable />} />
//           <Route path="create" element={<MultipleCashVoucherForm />} />
//           <Route path="view/:voucherid" element={<MultipleCashVoucherView />} />
//           <Route path="update/:voucherid" element={<MultipleCashVoucherForm />} />
//         </Route>

//         {/* Labour Cash Voucher */}
//         <Route path={operationsRoutes.LABOUR_CASH_VOUCHER}>
//           <Route path="view/all" element={<LabourPaymentVoucherTable />} />
//           <Route path="create" element={<LabourPaymentVoucherForm />} />
//           <Route path="view/:voucherid" element={<LabourPaymentVoucherView />} />
//           <Route path="update/:voucherid" element={<LabourPaymentVoucherForm />} />
//         </Route>

//         {/* Packing Material Voucher */}
//         <Route path={operationsRoutes.PACKING_MATERIAL_VOUCHER}>
//           <Route path="view/all" element={<PackingMaterialPaymentVoucherTable />} />
//           <Route path="create" element={<PackingMaterialPaymentVoucherForm />} />
//           <Route path="view/:voucherid" element={<PackingMaterialPaymentVoucherView />} />
//           <Route path="update/:voucherid" element={<PackingMaterialPaymentVoucherForm />} />
//         </Route>

//         {/* Transport Cash Voucher */}
//         <Route path={operationsRoutes.TRANSPORT_CASH_VOUCHER}>
//           <Route path="view/all" element={<TransportPaymentVoucherTable />} />
//           <Route path="create" element={<TransportPaymentVoucherForm />} />
//           <Route path="view/:voucherid" element={<TransportPaymentVoucherView />} />
//           <Route path="update/:voucherid" element={<TransportPaymentVoucherForm />} />
//         </Route>
//       </Route>

//       {/* Delivery Challan Routes */}
//       <Route path={operationsRoutes.DELIVERY_CHALLAN}>
//         {/* DC Type Customer */}
//         <Route path={operationsRoutes.DC_TYPE_CUSTOMER}>
//           <Route path="view/all" element={<DCTypeCustomerTable />} />
//           <Route path="create" element={<DCTypeCustomerForm />} />
//           <Route path="view/:id" element={<DCTypeCustomerView />} />
//           <Route path="update/:id" element={<DCTypeCustomerForm />} />
//         </Route>

//         {/* DC Type Stock Transfer */}
//         <Route path={operationsRoutes.DC_TYPE_STOCK_TRANSFER}>
//           <Route path="view/all" element={<DCTypeStockTransferTable />} />
//           <Route path="create" element={<DCTypeStockTransferForm />} />
//           <Route path="view/:id" element={<DCTypeStockTransferView />} />
//           <Route path="update/:id" element={<DCTypeStockTransferForm />} />
//         </Route>
//       </Route>

//       {/* Inward Register Routes */}
//       <Route path={operationsRoutes.INWARD_REGISTER}>
//         <Route path="view/all" element={<InwardRegisterTable />} />
//         <Route path="create" element={<InwardRegisterForm />} />
//         <Route path="view/:id" element={<InwardRegisterView />} />
//         <Route path="update/:id" element={<InwardRegisterForm />} />
//       </Route>

//       {/* AQR Routes */}
//       <Route path={operationsRoutes.AQR}>
//         <Route path="view/all" element={<AQRTable />} />
//         <Route path="create" element={<AQRForm />} />
//         <Route path="view/:id" element={<AQRView />} />
//         <Route path="update/:id" element={<AQRForm />} />
//       </Route>

//       {/* Labour Register Routes */}
//       <Route path={operationsRoutes.LABOUR_REGISTER}>
//         <Route path="view/all" element={<LaborRegisterTable />} />
//         <Route path="create" element={<LabourRegistrationForm />} />
//         <Route path="update/:id" element={<LabourRegistrationForm />} />
//       </Route>

//       {/* Labour Attendance Routes */}
//       <Route path={operationsRoutes.LABOUR_ATTENDANCE}>
//         <Route path="view/all" element={<LaborAttendanceTable />} />
//         <Route path="create" element={<LaborAttendanceForm />} />
//         <Route path="update/:id" element={<LaborAttendanceUpdateForm />} />
//       </Route>

//       {/* Dump Register Routes */}
//       <Route path={operationsRoutes.DUMP_REGISTER}>
//         <Route path="view/all" element={<DumpRegisterTable />} />
//         <Route path="create" element={<DumpRegisterForm />} />
//         <Route path="view/:id" element={<DumpRegisterView />} />
//         <Route path="update/:id" element={<DumpRegisterForm />} />
//       </Route>

//       {/* Second Sale Register Routes */}
//       <Route path={operationsRoutes.SECOND_SALE_REGISTER}>
//         <Route path="view/all" element={<SecondSaleRegisterTable />} />
//         <Route path="create" element={<SecondSaleRegisterForm />} />
//         <Route path="view/:id" element={<SecondSaleRegisterView />} />
//         <Route path="update/:id" element={<SecondSaleRegisterForm />} />
//       </Route>

//       {/* Vehicle Dispatch Register Routes */}
//       <Route path={operationsRoutes.VEHICLE_DISPATCH_REGISTER}>
//         <Route path="view/all" element={<VehicleDispatchRegisterTable />} />
//         <Route path="create" element={<VehicleDispatchRegisterForm />} />
//         <Route path="view/:id" element={<VehicleDispatchRegisterView />} />
//         <Route path="update/:id" element={<VehicleDispatchRegisterForm />} />
//       </Route>

//       {/* EOD Report Routes */}
//       <Route path={operationsRoutes.EOD_REPORT}>
//         <Route path="view/all" element={<EODReportTable />} />
//         <Route path="create" element={<EODReportForm />} />
//         <Route path="view/:id" element={<EODReportView />} />
//         <Route path="update/:id" element={<EODReportForm />} />
//       </Route>

//       {/* Final Invoices Routes */}
//       <Route path={operationsRoutes.FINAL_INVOICES}>
//         <Route path="view/all" element={<FinalInvoicesTable />} />
//       </Route>

//       {/* RBC (Returned By Customer) Routes */}
//       <Route path={operationsRoutes.RBC}>
//         <Route path="view/all" element={<ReturnedByCustomerTable />} />
//         <Route path="create" element={<ReturnedByCustomerForm />} />
//         <Route path="view/:id" element={<ReturnedByCustomerView />} />
//         <Route path="update/:id" element={<ReturnedByCustomerForm />} />
//       </Route>
//     </>
//   );
// };


