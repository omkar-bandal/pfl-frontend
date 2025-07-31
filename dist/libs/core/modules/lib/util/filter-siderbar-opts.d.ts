import { Navigations } from '../models';
import { IEmployeePermissions } from '../../../../../api/auth_api/src/index.ts';

export declare const filterSidebarOptions: (sidebarConfig: Navigations[], userPermissions: IEmployeePermissions[], requiredAction: ("create" | "view" | "edit" | "delete" | "download") | undefined, showParentsWithAccessibleChildren: boolean) => Navigations[];
