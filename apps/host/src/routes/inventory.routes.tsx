import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import {
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
} from '@prime-fresh/inventory/components';
import { Outlet } from 'react-router-dom';
import {
  DashboardPurchase,
} from '@prime-fresh/purchase/components';

export const InventoryRoutes = [
  {
    path: inventoryRouteConstants.DASHBOARD_INVENTORY,
    element: <DashboardPurchase />,
  },
  
  {
    path: inventoryRouteConstants.INWARD_REGISTER,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_INWARD_REGISTER,
        element: <InwardRegisterForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_INWARD_REGISTERS,
        element: <InwardRegisterTable />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_INWARD_REGISTER}/:id`,
        element: <InwardRegisterForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_INWARD_REGISTER}/:id`,
        element: <InwardRegisterView />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.AQR,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_AQR,
        element: <AQRForm />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_AQR}/:id`,
        element: <AQRForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_AQR}/:id`,
        element: <AQRView />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_AQR,
        element: <AQRTable />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.LABOUR_REGISTER,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_LABOUR_REGISTER,
        element: <LabourRegistrationForm />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_LABOUR_REGISTER}/:id`,
        element: <LabourRegistrationForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_LABOUR_REGISTER,
        element: <LaborRegisterTable />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.LABOUR_ATTENDANCE,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_LABOUR_ATTENDANCE,
        element: <LaborAttendanceForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE,
        element: <LaborAttendanceTable />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_LABOUR_ATTENDANCE}/:id`,
        element: <LaborAttendanceUpdateForm />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.DUMP_REGISTER,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_DUMP_REGISTER,
        element: <DumpRegisterForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_DUMP_REGISTERS,
        element: <DumpRegisterTable />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_DUMP_REGISTER}/:id`,
        element: <DumpRegisterForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_DUMP_REGISTER}/:id`,
        element: <DumpRegisterView />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.SECOND_SALE_REGISTER,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER,
        element: <SecondSaleRegisterForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER,
        element: <SecondSaleRegisterTable />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_SECOND_SALE_REGISTER}/:id`,
        element: <SecondSaleRegisterForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_SECOND_SALE_REGISTER}/:id`,
        element: <SecondSaleRegisterView />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.VEHICLE_DISPATCH_REGISTER,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_VEHILCE_DISPATCH_REGISTER,
        element: <VehicleDispatchRegisterForm />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER,
        element: <VehicleDispatchRegisterTable />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_VEHILCE_DISPATCH_REGISTER}/:id`,
        element: <VehicleDispatchRegisterForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_VEHILCE_DISPATCH_REGISTER}/:id`,
        element: <VehicleDispatchRegisterView />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.EOD_REPORT,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.CREATE_EOD_REPORT,
        element: <EODReportForm />,
      },
      {
        path: `${inventoryRouteConstants.UPDATE_EOD_REPORT}/:id`,
        element: <EODReportForm />,
      },
      {
        path: `${inventoryRouteConstants.VIEW_EOD_REPORT}/:id`,
        element: <EODReportView />,
      },
      {
        path: inventoryRouteConstants.GET_ALL_EOD_REPORT,
        element: <EODReportTable />,
      },
    ],
  },
  {
    path: inventoryRouteConstants.FINAL_INVOICES,
    element: <Outlet />,
    children: [
      {
        path: inventoryRouteConstants.GET_ALL_FINAL_INVOICES,
        element: <FinalInvoicesTable />,
      },
    ],
  },
];
