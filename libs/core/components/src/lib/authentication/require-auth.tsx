import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { authRouteConstants, stringConstants, useActions, useAppSelector } from "@prime-fresh/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";

export const requireAuth = <P extends ComponentType>(WrappedComponent: ComponentType<P>) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props: any) => {
      const { checkAuth } = useActions();
      const navigate = useNavigate();
      const { isLoggedIn } = useAppSelector((state) => state.auth);
  
      useEffect(() => {
        checkAuth();
        const dept = localStorage.getItem('department');
        if (isLoggedIn && dept) {
            switch (dept) {
                case stringConstants.DEPT_ADMIN:
                    navigate(ADMIN_ROUTES.DASHBOARD_ADMIN);
                    break;
                case stringConstants.DEPT_PURCHASE:
                    navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
                    break;
                case stringConstants.DEPT_INVENTORY:
                    navigate(inventoryRouteConstants.DASHBOARD_INVENTORY);
                    break;
                case stringConstants.DEPT_SALES:
                    navigate(SALES_ROUTES.DASHBOARD_SALES);
                    break;
                default:
                    navigate(authRouteConstants.SIGN_IN);
            }
        }
    }, [checkAuth, isLoggedIn, navigate]);
  
      return isLoggedIn ? <WrappedComponent {...props} /> : null;
    };
  };
  