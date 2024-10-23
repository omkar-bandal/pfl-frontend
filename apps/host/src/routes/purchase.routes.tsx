import { DashboardPurchase, DealSlipForm, DealSlipTable, DeliveryChallanForm, GRNForm, GRNTable, GRNView, LabourPaymentVoucherForm, LabourPaymentVoucherTable, LPVoucherView, MCVoucherView, MultipleCashVoucherForm, MultipleCashVoucherTable, PackingMaterialPaymentVoucherForm, PackingMaterialPaymentVoucherTable, PMPVoucherView, RFPAForm, RFPAPreview, RFPATable, RFPAView, TPVoucherView, TransportPaymentVoucherForm, TransportPaymentVoucherTable, } from "@prime-fresh/purchase/components";
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
                path: PURCHASE_ROUTES.PREVIEW_RFPA,
                element: <RFPAPreview />
            }
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
        ]
    },
    {
        path: PURCHASE_ROUTES.VOUCHER,
        element: <Outlet />,
        children: [
            {
                path: PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER,
                element: <MultipleCashVoucherTable/>,
            },
            {
                path: PURCHASE_ROUTES.CREATE_MULT_CASH_VOUCHER,
                element: <MultipleCashVoucherForm/>,
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_MULT_CASH_VOUCHER}/:id`,
                element: <MCVoucherView />
            },
            {
                path: PURCHASE_ROUTES.CREATE_LABOUR_CASH_VOUCHER,
                element: <LabourPaymentVoucherForm/>,
            },
            {
                path: PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER,
                element: <LabourPaymentVoucherTable/>,
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_LABOUR_CASH_VOUCHER}/:id`,
                element: <LPVoucherView />
            },
            {
                path: PURCHASE_ROUTES.CREATE_PACKING_MATERIAL_VOUCHER,
                element: <PackingMaterialPaymentVoucherForm/>,
            },
            {
                path: PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER,
                element: <PackingMaterialPaymentVoucherTable/>,
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_PACKING_MATERIAL_VOUCHER}/:id`,
                element: <PMPVoucherView />
            },
            {
                path: PURCHASE_ROUTES.CREATE_TRANSPORT_CASH_VOUCHER,
                element: <TransportPaymentVoucherForm/>,
            },
            {
                path: PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER,
                element: <TransportPaymentVoucherTable/>,
            },
            {
                path: `${PURCHASE_ROUTES.VIEW_TRANSPORT_CASH_VOUCHER}/:id`,
                element: <TPVoucherView />
            },
        ]
    },
    {
        path: PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN,
        element: <DeliveryChallanForm />,
    },
]