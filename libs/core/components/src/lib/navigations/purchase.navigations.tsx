import { Article, Assessment, FormatListBulleted, GridViewOutlined, Handshake, LocalShipping, Payment, Remove, Report } from "@mui/icons-material";
import { Navigations } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { stringConstants } from "@prime-fresh/modules";

export const purchaseNavigations: Navigations[] = [
    {
        name: "Dashboard",
        logo: <GridViewOutlined />,
        path: PURCHASE_ROUTES.DASHBOARD_PURCHASE,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
    },
    {
        name: "RFPA",
        logo: <Article />,
        path: PURCHASE_ROUTES.GET_ALL_RFPA,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
    },
    {
        name: "Deal Slip",
        logo: <Handshake />,
        path: PURCHASE_ROUTES.GET_ALL_DEAL_SLIP,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
    },
    {
        name: "GRN",
        logo: <FormatListBulleted />,
        path: PURCHASE_ROUTES.GET_ALL_GRN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
    },
    {
        name: "Vouchers",
        logo: <Payment />,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
        children: [
            {
                name: "Multiple Cash",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_PURCHASE],
            },
            {
                name: "Transports Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_PURCHASE],
            },
            {
                name: "Packing Material Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_PURCHASE],
            },
            {
                name: "Labour Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_PURCHASE],
            }
        ]
    },
    {
        name: "Delivery Challan",
        logo: <LocalShipping />,
        path: PURCHASE_ROUTES.GET_ALL_DELIVERY_CHALLAN,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE]
    },
    {
        name: "Reports",
        logo: <Assessment />,
        roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
        depts: [stringConstants.DEPT_PURCHASE],
        children: [
            {
                name: "Purchase Reports",
                logo: <Remove />,
                path: PURCHASE_ROUTES.PURCHASE_REPORTS,
                roles: [stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
                depts: [stringConstants.DEPT_PURCHASE],
            },
        ]
    },

]