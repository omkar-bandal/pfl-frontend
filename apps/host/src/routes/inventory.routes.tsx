import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import {
    DashboardInventory, 
    AQRCreateForm, 
    DispatchRegisterCreateForm, 
    DumpRegisterCreateForm, 
    EODReportCreateForm, 
    InwardRegisterCreateForm, 
    LabourRegisterCreateForm, 
    SecondSaleRegisterCreateForm, 
    StockRegisterCreateForm
} from "@prime-fresh/inventory/components";
import { Outlet } from "react-router-dom";
export const InventoryRoutes = [
    {
        path: inventoryRouteConstants.DASHBOARD_INVENTORY,
        element: <DashboardInventory />
    },
    {
        path: inventoryRouteConstants.INWARD_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_INWARD_REGISTER,
                element: <InwardRegisterCreateForm/>
            },
        ]
    },
    {
        path: inventoryRouteConstants.AQR,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_AQR,
                element: <AQRCreateForm/>
            },
        ]
    },
    {
        path: inventoryRouteConstants.LABOUR_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_LABOUR_REGISTER,
                element: <LabourRegisterCreateForm/>
            },
        ]
    },
    {
        path: inventoryRouteConstants.DUMP_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_DUMP_REGISTER,
                element: <DumpRegisterCreateForm/>
            }
        ]
    },
    {
        path: inventoryRouteConstants.SECOND_SALE_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER,
                element: <SecondSaleRegisterCreateForm/>
            }
        ]
    },
    {
        path: inventoryRouteConstants.SECOND_SALE_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER,
                element: <SecondSaleRegisterCreateForm/>
            }
        ]
    },
    {
        path: inventoryRouteConstants.STOCK_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_STOCK_REGISTER,
                element: <StockRegisterCreateForm/>
            }
        ]
    },
    {
        path: inventoryRouteConstants.DISPATCH_REGISTER,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_DISPATCH_REGISTER,
                element: <DispatchRegisterCreateForm/>
            }
        ]
    },
    {
        path: inventoryRouteConstants.EOD,
        element: <Outlet/>,
        children:[
            {
                path: inventoryRouteConstants.CREATE_EOD,
                element: <EODReportCreateForm/>
            }
        ]
    },
]