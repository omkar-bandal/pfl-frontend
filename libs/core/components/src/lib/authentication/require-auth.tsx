import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {stringConstants, useActions, useAppSelector } from "@prime-fresh/modules";

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
                    navigate("/admin/dashboard");
                    break;
                case stringConstants.DEPT_PURCHASE:
                    navigate('/purchase/dashboard');
                    break;
                case stringConstants.DEPT_INVENTORY:
                    navigate('/inventory/dashboard');
                    break;
                default:
                    navigate('/');
            }
        }
    }, [checkAuth, isLoggedIn, navigate]);
  
      return isLoggedIn ? <WrappedComponent {...props} /> : null;
    };
  };
  