/* eslint-disable @typescript-eslint/no-explicit-any */
import { authState } from "../store";
import { hasPermission } from "../util/permission-check";
import { useAppSelector } from "./useAppSelector";

export const usePermission = (documentUniqueKey: string) => { 
  const {employeePermissions} = useAppSelector(authState) 
  return {
    canCreate: hasPermission(employeePermissions || [], documentUniqueKey, 'create'),
    canView: hasPermission(employeePermissions || [],documentUniqueKey, 'view'),
    canEdit: hasPermission(employeePermissions || [],documentUniqueKey, 'edit'),
    canDelete: hasPermission(employeePermissions || [],documentUniqueKey, 'delete'),
    canDownload: hasPermission(employeePermissions || [],documentUniqueKey, 'download'),
    checkPermission: (action: any) => hasPermission(employeePermissions || [],documentUniqueKey, action)
  };
};