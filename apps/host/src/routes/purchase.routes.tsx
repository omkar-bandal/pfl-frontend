import {
  DashboardPurchase,
  DealSlipForm,
  DealSlipTable,
  DealSlipView,
  // DeliveryChallanTable,
  // DeliveryChallanView,
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
  PurchaseReports,
  DCTypeCustomerForm,
  DCTypeStockTransferForm,
  DCTypeCustomerTable,
  DCTypeStockTransferTable,
  DCTypeCustomerView,
  DCTypeStockTransferView,
  GRNForm,
} from '@prime-fresh/purchase/components';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { Outlet } from 'react-router-dom';

export const PurchaseRoutes = [
  {
    path: PURCHASE_ROUTES.DASHBOARD_PURCHASE,
    element: <DashboardPurchase />,
  },
  {
    path: PURCHASE_ROUTES.RFPA,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.GET_ALL_RFPA,
        element: <RFPATable />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_RFPA,
        element: <RFPAForm />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_RFPA}/:id`,
        element: <RFPAView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_RFPA}/:id`,
        element: <RFPAForm />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.DEAL_SLIP,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.GET_ALL_DEAL_SLIP,
        element: <DealSlipTable />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_DEAL_SLIP,
        element: <DealSlipForm />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_DEAL_SLIP}/:id`,
        element: <DealSlipView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_DEAL_SLIP}/:id`,
        element: <DealSlipForm />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.GRN,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.GET_ALL_GRN,
        element: <GRNTable />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_GRN,
        element: <GRNForm />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_GRN}/:id`,
        element: <GRNView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_GRN}/:id`,
        element: <GRNForm />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.PAYMENT_REQ,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.GET_ALL_PAYMENT_REQ,
        element: <GRNTable />,
      },
      {
        path: `${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/:grnid`,
        element: <PaymentRequestForm />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_PAYMENT_REQ}/:payreqid`,
        element: <GRNView />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.VOUCHER,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER,
        element: <MultipleCashVoucherTable />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_MULT_CASH_VOUCHER,
        element: <MultipleCashVoucherForm />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_MULT_CASH_VOUCHER}/:voucherid`,
        element: <MultipleCashVoucherView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_MULT_CASH_VOUCHER}/:voucherid`,
        element: <MultipleCashVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_LABOUR_CASH_VOUCHER,
        element: <LabourPaymentVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER,
        element: <LabourPaymentVoucherTable />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_LABOUR_CASH_VOUCHER}/:voucherid`,
        element: <LabourPaymentVoucherView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_LABOUR_CASH_VOUCHER}/:voucherid`,
        element: <LabourPaymentVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_PACKING_MATERIAL_VOUCHER,
        element: <PackingMaterialPaymentVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER,
        element: <PackingMaterialPaymentVoucherTable />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_PACKING_MATERIAL_VOUCHER}/:voucherid`,
        element: <PackingMaterialPaymentVoucherView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_PACKING_MATERIAL_VOUCHER}/:voucherid`,
        element: <PackingMaterialPaymentVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_TRANSPORT_CASH_VOUCHER,
        element: <TransportPaymentVoucherForm />,
      },
      {
        path: PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER,
        element: <TransportPaymentVoucherTable />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_TRANSPORT_CASH_VOUCHER}/:voucherid`,
        element: <TransportPaymentVoucherView />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_TRANSPORT_CASH_VOUCHER}/:voucherid`,
        element: <TransportPaymentVoucherForm />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.DELIVERY_CHALLAN,
    element: <Outlet />,
    children: [
      //Get All
      // {
      //   path: PURCHASE_ROUTES.GET_ALL_DELIVERY_CHALLAN,
      //   element: <DeliveryChallanTable />,
      // },
      {
        path: PURCHASE_ROUTES.GET_ALL_DC_TYPE_CUSTOMER,
        element: <DCTypeCustomerTable />,
      },
      {
        path: PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER,
        element: <DCTypeStockTransferTable />,
      },
      //Create
      {
        path: PURCHASE_ROUTES.CREATE_DC_TYPE_CUSTOMER,
        element: <DCTypeCustomerForm />,
      },
      {
        path: PURCHASE_ROUTES.CREATE_DC_TYPE_STOCK_TRANSFER,
        element: <DCTypeStockTransferForm />,
      },
      //View
      // {
      //   path: `${PURCHASE_ROUTES.VIEW_DELIVERY_CHALLAN}/:id`,
      //   element: <DeliveryChallanView />,
      // },
      {
        path: `${PURCHASE_ROUTES.VIEW_DC_TYPE_CUSTOMER}/:id`,
        element: <DCTypeCustomerView />,
      },
      {
        path: `${PURCHASE_ROUTES.VIEW_DC_TYPE_STOCK_TRANSFER}/:id`,
        element: <DCTypeStockTransferView />,
      },
      //Update
      {
        path: `${PURCHASE_ROUTES.UPDATE_DC_TYPE_CUSTOMER}/:id`,
        element: <DCTypeCustomerForm />,
      },
      {
        path: `${PURCHASE_ROUTES.UPDATE_DC_TYPE_STOCK_TRANSFER}/:id`,
        element: <DCTypeStockTransferForm />,
      },
    ],
  },
  {
    path: PURCHASE_ROUTES.REPORTS,
    element: <Outlet />,
    children: [
      {
        path: PURCHASE_ROUTES.PURCHASE_REPORTS,
        element: <PurchaseReports />,
      },
    ],
  },
];
