import { IEmployeePermissions } from '../../../../../api/auth_api/src/index.ts';

export declare const hasPermission: (permissions: IEmployeePermissions[], documentUniqueKey: string, action: "create" | "view" | "edit" | "delete" | "download") => boolean;
