import { EmployeePermissions } from "@prime-fresh/auth_api";

export const hasPermission = (permissions: EmployeePermissions[] ,documentUniqueKey: string, action: 'create' | 'view' | 'edit' | 'delete' | 'download') => {
    const documentPermission = permissions?.find(
      perm => perm.documentDefinition.uniqueKey === documentUniqueKey
    );
    
    if (!documentPermission) return false;
    
    switch (action) {
      case 'create': return documentPermission.canCreate;
      case 'view': return documentPermission.canView;
      case 'edit': return documentPermission.canEdit;
      case 'delete': return documentPermission.canDelete;
      case 'download': return documentPermission.canDownload;
      default: return false;
    }
  };