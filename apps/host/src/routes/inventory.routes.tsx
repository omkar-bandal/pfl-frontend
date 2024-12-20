import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import {
    DashboardInventory,
    AQRCreateForm,
    DumpRegisterCreateForm,
    EODReportCreateForm,
    InwardRegisterCreateForm,
    LabourRegistrationCreateForm,
    SecondSaleRegisterCreateForm,
    InwardRegisterTable,
    DumpRegisterTable,
    SecondSaleRegisterTable,
    VehicleDispatchRegisterCreateForm,
    VehicleDispatchRegisterTable,
    LaborAttendanceForm,
    LaborRegisterTable,
    LaborAttendanceTable,
    LaborAttendanceUpdateForm,
    EODReportTable,
    AQRTable,
    DumpRegisterUpdateForm
} from "@prime-fresh/inventory/components";
import { Outlet } from "react-router-dom";
import { DeliveryChallanForm, DeliveryChallanTable, GRNForm, GRNTable } from "@prime-fresh/purchase/components";
export const InventoryRoutes = [
    {
        path: inventoryRouteConstants.DASHBOARD_INVENTORY,
        element: <DashboardInventory />
    },
    {
        path: inventoryRouteConstants.DELIVERY_CHALLAN,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.GET_ALL_DELIVERY_CHALLAN,
                element: <DeliveryChallanTable />
            },
            {
                path: inventoryRouteConstants.CREATE_DELIVERY_CHALLAN,
                element: <DeliveryChallanForm />
            }
        ]
    },
    {
        path: inventoryRouteConstants.INWARD_REGISTER,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_INWARD_REGISTER,
                element: <InwardRegisterCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_INWARD_REGISTERS,
                element: <InwardRegisterTable />
            },
        ]
    },
    {
        path: inventoryRouteConstants.AQR,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_AQR,
                element: <AQRCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_AQR,
                element: <AQRTable />
            },
        ]
    },
    {
        path: inventoryRouteConstants.LABOUR_REGISTER,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_LABOUR_REGISTER,
                element: <LabourRegistrationCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_LABOUR_REGISTER,
                element: <LaborRegisterTable />
            },
        ]
    },
    {
        path: inventoryRouteConstants.LABOUR_ATTENDANCE,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_LABOUR_ATTENDANCE,
                element: <LaborAttendanceForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE,
                element: <LaborAttendanceTable />
            },
            {
                path: `${inventoryRouteConstants.UPDATE_LABOUR_ATTENDANCE}/:id`,
                element: <LaborAttendanceUpdateForm />
            }
        ]
    },
    {
        path: inventoryRouteConstants.GRN,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.GET_ALL_GRN,
                element: <GRNTable />
            },
            {
                path: inventoryRouteConstants.CREATE_GRN,
                element: <GRNForm />
            }
        ]
    },
    {
        path: inventoryRouteConstants.DUMP_REGISTER,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_DUMP_REGISTER,
                element: <DumpRegisterCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_DUMP_REGISTERS,
                element: <DumpRegisterTable />
            },
            {
                path: `${inventoryRouteConstants.UPDATE_DUMP_REGISTER}/:id`,
                element: <DumpRegisterUpdateForm />
            },
        ]
    },
    {
        path: inventoryRouteConstants.SECOND_SALE_REGISTER,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER,
                element: <SecondSaleRegisterCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER,
                element: <SecondSaleRegisterTable />
            }
        ]
    },
    {
        path: inventoryRouteConstants.VEHICLE_DISPATCH_REGISTER,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_VEHILCE_DISPATCH_REGISTER,
                element: <VehicleDispatchRegisterCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER,
                element: <VehicleDispatchRegisterTable />
            }
        ]
    },
    {
        path: inventoryRouteConstants.EOD_REPORT,
        element: <Outlet />,
        children: [
            {
                path: inventoryRouteConstants.CREATE_EOD_REPORT,
                element: <EODReportCreateForm />
            },
            {
                path: inventoryRouteConstants.GET_ALL_EOD_REPORT,
                element: <EODReportTable />
            }
        ]
    },
]