import { EmployeePermissions } from '@prime-fresh/auth_api';
import { hasPermission } from '@prime-fresh/modules';
import { ReactNode } from 'react';

export const PermissionWrapper = ({
  permissions,
  documentUniqueKey,
  action,
  fallback = null,
  children,
}: {permissions: EmployeePermissions[], documentUniqueKey: string, action: 'create' | 'view' | 'edit' | 'delete' | 'download', fallback: ReactNode | null, children: ReactNode}) => {
  const allowed = hasPermission(permissions, documentUniqueKey, action);
  return allowed ? children : fallback;
};

