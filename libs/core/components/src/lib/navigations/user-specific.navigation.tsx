import { operationsRoutes } from '@prime-fresh/operations/modules';
import { NavigationConfig } from './navigation.type';
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

export const userSpecificNavigation: NavigationConfig[] = [
  {
    name: 'RFPA',
    uniqueKey: 'rfpa',
    logo: <Article />,
    path: operationsRoutes.VIEW_ALL_RFPA,
  },
  {
    name: 'Deal Slip',
    uniqueKey: 'deal-slip',
    logo: <Handshake />,
    path: operationsRoutes.VIEW_ALL_DEAL_SLIP,
  },
  {
    name: 'GRN',
    uniqueKey: 'grn',
    logo: <FormatListBulleted />,
    path: operationsRoutes.VIEW_ALL_GRN,
  },
  {
    name: 'Vouchers',
    // uniqueKey: 'vouchers',
    logo: <Payment />,
    children: [
      {
        name: 'Multiple',
        uniqueKey: 'multi-cash-voucher',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_MULT_CASH_VOUCHER,
      },
      {
        name: 'Transports Payment',
        uniqueKey: 'transport-payment-voucher',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_TRANSPORT_CASH_VOUCHER,
      },
      {
        name: 'Packing Material Payment',
        uniqueKey: 'packaging-material-voucher',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_PACKING_MATERIAL_VOUCHER,
      },
      {
        name: 'Labour Payment',
        uniqueKey: 'labor-payment-voucher',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_LABOUR_CASH_VOUCHER,
      },
    ],
  },
  {
    name: 'Delivery Challan',
    // uniqueKey: 'delivery-challan',
    logo: <LocalShipping />,
    children: [
      {
        name: 'For Customer',
        uniqueKey: 'delivery-challan',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_DC_TYPE_CUSTOMER,
      },
      {
        name: 'For Stock Transfer',
        uniqueKey: 'delivery-challan',
        logo: <Remove />,
        path: operationsRoutes.VIEW_ALL_DC_TYPE_STOCK_TRANSFER,
      },
    ],
  },
  {
    name: 'AQR',
    uniqueKey: 'aqr',
    logo: <Analytics />,
    path: operationsRoutes.VIEW_ALL_AQR,
  },
  {
    name: 'Inward Register',
    uniqueKey: 'inward-register',
    logo: <FormatIndentIncrease />,
    path: operationsRoutes.VIEW_ALL_INWARD_REGISTERS,
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
        //             path: operationsRoutes.VIEW_ALL_LABOUR_REGISTER,
        //
        //
        //         },
        //         {
          //             name: "Labor Attendance",
          // uniqueKey: 'labor-attendance',
          //             logo: <Remove />,
          //             path: operationsRoutes.VIEW_ALL_LABOUR_ATTENDANCE,
          //
          //
          //         },
          //     ]
          // },
          {
            name: 'Dump Register',
            uniqueKey: 'dump-register',
            logo: <DeleteSweep />,
            path: operationsRoutes.VIEW_ALL_DUMP_REGISTERS,
          },
          {
            name: 'Dispatch Register',
            uniqueKey: 'vehicle-dispatch-register',
            logo: <FormatIndentDecrease />,
            path: operationsRoutes.VIEW_ALL_VEHILCE_DISPATCH_REGISTER,
          },
          {
            name: 'Second Sale',
            uniqueKey: 'second-sale',
            logo: <GridViewOutlined />,
            path: operationsRoutes.VIEW_ALL_SECOND_SALE_REGISTER,
          },
          {
            name: 'EOD Report',
            uniqueKey: 'eod-report',
            logo: <Assessment />,
            path: operationsRoutes.VIEW_ALL_EOD_REPORT,
          },
          // {
            //     name: "Sales Orders",
            // uniqueKey: '',
  //     logo: <Article />,
  //     path: salesRoutes.VIEW_ALL_SALES_ORDER,
  //     roles: [stringConstants.ROLE_ADMIN, stringConstants.ROLE_MANAGER, stringConstants.ROLE_EMPLOYEE],
  //     depts: [stringConstants.DEPT_INVENTORY]
  // },
  {
    name: 'Return By Customer',
    uniqueKey: 'return-by-customer',
    logo: <FormatListBulleted />,
    path: operationsRoutes.VIEW_ALL_RBC,
  },
  {
    name: 'Final Invoices',
    uniqueKey: 'final-invoice',
    logo: <Analytics />,
    path: operationsRoutes.VIEW_ALL_FINAL_INVOICES,
  },
  {
    name: 'Labor Register',
    uniqueKey: 'labor-registration',
    logo: <Group />,
    path: operationsRoutes.VIEW_ALL_LABOUR_REGISTER,
  },
];
