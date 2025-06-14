import { Navigations } from '@prime-fresh/modules';
import {
  Analytics,
  Article,
  Assessment,
  DeleteSweep,
  FormatIndentDecrease,
  FormatIndentIncrease,
  FormatListBulleted,
  GridViewOutlined,
  Group,
  Handshake,
  LocalShipping,
  Payment,
  Remove,
} from '@mui/icons-material';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { salesRoutes } from '@prime-fresh/sales/modules';

export const userSpecificNavigation: Navigations[] = [
  {
    name: 'RFPA',
    uniqueKey: 'rfpa',
    logo: <Article />,
    path: PURCHASE_ROUTES.GET_ALL_RFPA,
  },
  {
    name: 'Deal Slip',
    uniqueKey: 'deal-slip',
    logo: <Handshake />,
    path: PURCHASE_ROUTES.GET_ALL_DEAL_SLIP,
  },
  {
    name: 'GRN',
    uniqueKey: 'grn',
    logo: <FormatListBulleted />,
    path: PURCHASE_ROUTES.GET_ALL_GRN,
  },
  {
    name: 'Vouchers',
    uniqueKey: 'vouchers',
    logo: <Payment />,
    children: [
      {
        name: 'Multiple Cash',
        uniqueKey: 'multi-cash-voucher',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER,
      },
      {
        name: 'Transports Payment',
        uniqueKey: 'transport-payment-voucher',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER,
      },
      {
        name: 'Packing Material Payment',
        uniqueKey: 'packaging-material-voucher',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER,
      },
      {
        name: 'Labour Payment',
        uniqueKey: 'labor-payment-voucher',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER,
      },
    ],
  },
  {
    name: 'Delivery Challan',
    uniqueKey: 'delivery-challan',
    logo: <LocalShipping />,
    children: [
      {
        name: 'For Customer',
        uniqueKey: 'delivery-challan',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_DC_TYPE_CUSTOMER,
      },
      {
        name: 'For Stock Transfer',
        uniqueKey: 'delivery-challan',
        logo: <Remove />,
        path: PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER,
      },
    ]
  },
  {
    name: 'Inward Register',
    uniqueKey: 'inward-register',
    logo: <FormatIndentIncrease />,
    path: inventoryRouteConstants.GET_ALL_INWARD_REGISTERS,
  },
  {
    name: 'AQR',
    uniqueKey: 'aqr',
    logo: <Analytics />,
    path: inventoryRouteConstants.GET_ALL_AQR,
  },
  {
    name: 'Labor Register',
    uniqueKey: 'labor-registration',
    logo: <Group />,
    path: inventoryRouteConstants.GET_ALL_LABOUR_REGISTER,
  },
  // {
  //     name: "Labor Register",
  //     logo: <Group />,
  //
  //
  //     children: [
  //         {
  //             name: "Permanent Labors",
  // uniqueKey: '',
  //             logo: <Remove />,
  //             path: inventoryRouteConstants.GET_ALL_LABOUR_REGISTER,
  //
  //
  //         },
  //         {
  //             name: "Labor Attendance",
  // uniqueKey: 'labor-attendance',
  //             logo: <Remove />,
  //             path: inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE,
  //
  //
  //         },
  //     ]
  // },
  {
    name: 'Dump Register',
    uniqueKey: 'dump-register',
    logo: <DeleteSweep />,
    path: inventoryRouteConstants.GET_ALL_DUMP_REGISTERS,
  },
  {
    name: 'Dispatch Register',
    uniqueKey: 'vehicle-dispatch-register',
    logo: <FormatIndentDecrease />,
    path: inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER,
  },
  {
    name: 'Second Sale',
    uniqueKey: 'second-sale',
    logo: <GridViewOutlined />,
    path: inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER,
  },
  {
    name: 'EOD Report',
    uniqueKey: 'eod-report',
    logo: <Assessment />,
    path: inventoryRouteConstants.GET_ALL_EOD_REPORT,
  },
  // {
  //     name: "Sales Orders",
  // uniqueKey: '',
  //     logo: <Article />,
  //     path: salesRoutes.GET_ALL_SALES_ORDER,
  //     roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
  //     depts: [stringConstants.DEPT_INVENTORY]
  // },
  {
    name: 'Return By Customer',
    uniqueKey: 'return-by-customer',
    logo: <FormatListBulleted />,
    path: salesRoutes.GET_ALL_RBC,
  },
  {
    name: 'Final Invoices',
    uniqueKey: 'final-invoice',
    logo: <Analytics />,
    path: inventoryRouteConstants.GET_ALL_FINAL_INVOICES,
  },
];
