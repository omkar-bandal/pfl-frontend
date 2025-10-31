import { ReactNode } from 'react';
import { hasPermission } from '@prime-fresh/modules';
import { IEmployeePermissions } from '@prime-fresh/services';

export const PermissionWrapper = ({
  permissions,
  documentUniqueKey,
  action,
  fallback = null,
  children,
}: {
  permissions: IEmployeePermissions[];
  documentUniqueKey: string;
  action: 'create' | 'view' | 'edit' | 'delete' | 'download';
  fallback: ReactNode | null;
  children: ReactNode;
}) => {
  const allowed = hasPermission(permissions, documentUniqueKey, action);
  return allowed ? children : fallback;
};
