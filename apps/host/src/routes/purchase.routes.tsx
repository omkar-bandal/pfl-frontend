import {
    DashboardPurchase,
    DealSlipForm,
    DealSlipTable,
    DealSlipView,
    DealSlipUpdate,
    DeliveryChallanForm,
    DeliveryChallanTable,
    DeliveryChallanUpdate,
    DeliveryChallanView,
    GRNForm,
    GRNTable,
    GRNUpdate,
    GRNView,
    LabourPaymentVoucherForm,
    LabourPaymentVoucherTable,
    LabourPaymentVoucherUpdate,
    LabourPaymentVoucherView,
    MultipleCashVoucherForm,
    MultipleCashVoucherTable,
    MultipleCashVoucherUpdate,
    MultipleCashVoucherView,
    PackingMaterialPaymentVoucherForm,
    PackingMaterialPaymentVoucherTable,
    PackingMaterialPaymentVoucherUpdate,
    PackingMaterialPaymentVoucherView,
    PaymentRequestForm,
    RFPAForm,
    RFPATable,
    RFPAView,
    TransportPaymentVoucherForm,
    TransportPaymentVoucherTable,
    TransportPaymentVoucherUpdate,
    TransportPaymentVoucherView,
    RFPAUpdate,
} from "@prime-fresh/purchase/components";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { Outlet } from "react-router-dom";

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
                element: <RFPATable />
            },
            {
                path: PURCHASE_ROUTES.CREATE_RFPA,
                element: <RFPAForm />
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_RFPA}/:id`,
                element: <RFPAView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_RFPA}/:id`,
                element: <RFPAUpdate />
            },
        ]
    },
    {
        path: PURCHASE_ROUTES.DEAL_SLIP,
        element: <Outlet />,
        children: [
            {
                path: PURCHASE_ROUTES.GET_ALL_DEAL_SLIP,
                element: <DealSlipTable />
            },
            {
                path: PURCHASE_ROUTES.CREATE_DEAL_SLIP,
                element: <DealSlipForm />
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_DEAL_SLIP}/:id`,
                element: <DealSlipView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_DEAL_SLIP}/:id`,
                element: <DealSlipUpdate />
            },
        ]
    },
    {
        path: PURCHASE_ROUTES.GRN,
        element: <Outlet />,
        children: [
            {
                path: PURCHASE_ROUTES.GET_ALL_GRN,
                element: <GRNTable />
            },
            {
                path: PURCHASE_ROUTES.CREATE_GRN,
                element: <GRNForm />
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_GRN}/:id`,
                element: <GRNView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_GRN}/:grnid`,
                element: <GRNUpdate />
            },
        ]
    },
    {
        path: PURCHASE_ROUTES.PAYMENT_REQ,
        element: <Outlet />,
        children: [
            {
                path: PURCHASE_ROUTES.GET_ALL_PAYMENT_REQ,
                element: <GRNTable />
            },
            {
                path: `${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/:grnid`,
                element: <PaymentRequestForm />
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_PAYMENT_REQ}/:payreqid`,
                element: <GRNView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_PAYMENT_REQ}/:payreqid`,
                element: <GRNUpdate />
            },
        ]
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
                element: <MultipleCashVoucherView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_MULT_CASH_VOUCHER}/:voucherid`,
                element: <MultipleCashVoucherUpdate />
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
                element: <LabourPaymentVoucherView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_LABOUR_CASH_VOUCHER}/:voucherid`,
                element: <LabourPaymentVoucherUpdate />
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
                element: <PackingMaterialPaymentVoucherView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_PACKING_MATERIAL_VOUCHER}/:voucherid`,
                element: <PackingMaterialPaymentVoucherUpdate />
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
                element: <TransportPaymentVoucherView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_TRANSPORT_CASH_VOUCHER}/:voucherid`,
                element: <TransportPaymentVoucherUpdate />
            },
        ]
    },
    {
        path: PURCHASE_ROUTES.DELIVERY_CHALLAN,
        element: <Outlet />,
        children: [
            {
                path: PURCHASE_ROUTES.GET_ALL_DELIVERY_CHALLAN,
                element: <DeliveryChallanTable />,
            },
            {
                path: PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN,
                element: <DeliveryChallanForm />,
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_DELIVERY_CHALLAN}/:id`,
                element: <DeliveryChallanView />
            },
            {
                path: `${PURCHASE_ROUTES.UPDATE_DELIVERY_CHALLAN}/:id`,
                element: <DeliveryChallanUpdate />
            },
        ]
    },
]