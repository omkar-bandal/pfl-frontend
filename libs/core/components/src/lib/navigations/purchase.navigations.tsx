import { Article, FormatListBulleted, GridViewOutlined, Handshake, LocalShipping, Payment, Remove } from "@mui/icons-material";
import { Navigations } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { STRINGS } from "@prime-fresh/modules";

export const purchaseNavigations: Navigations[] = [
    {
        name: "Dashboard",
        logo: <GridViewOutlined />,
        path: PURCHASE_ROUTES.DASHBOARD_PURCHASE,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE],
    },
    {
        name: "RFPA",
        logo: <Article />,
        path: PURCHASE_ROUTES.GET_ALL_RFPA,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE],
    },
    {
        name: "Deal Slip",
        logo: <Handshake />,
        path: PURCHASE_ROUTES.GET_ALL_DEAL_SLIP,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE],
    },
    {
        name: "GRN",
        logo: <FormatListBulleted />,
        path: PURCHASE_ROUTES.GET_ALL_GRN,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE],
    },
    {
        name: "Vouchers",
        logo: <Payment />,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE],
        children: [
            {
                name: "Multiple Cash",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER,
                roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
                depts: [STRINGS.DEPT_PURCHASE],
            },
            {
                name: "Transports Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER,
                roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
                depts: [STRINGS.DEPT_PURCHASE],
            },
            {
                name: "Packing Material Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER,
                roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
                depts: [STRINGS.DEPT_PURCHASE],
            },
            {
                name: "Labour Payment",
                logo: <Remove />,
                path: PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER,
                roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
                depts: [STRINGS.DEPT_PURCHASE],
            }
        ]
    },
    {
        name: "Delivery Challan",
        logo: <LocalShipping />,
        path: PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN,
        roles: [STRINGS.ROLE_MANAGER, STRINGS.ROLE_EMPLOYEE],
        depts: [STRINGS.DEPT_PURCHASE]
    },

]