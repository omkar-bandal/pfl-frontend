import { IEmployeePermissions } from "@prime-fresh/auth_api";
import { Navigations } from "../models";
import { hasPermission } from "./permission-check";

export const filterSidebarOptions = (
  sidebarConfig: Navigations[],
  userPermissions: IEmployeePermissions[],
  requiredAction: 'create' | 'view' | 'edit' | 'delete' | 'download' = 'create',
  showParentsWithAccessibleChildren: boolean
): Navigations[] => {
  const filterRecursive = (items: Navigations[]): Navigations[] => {
    return items
      .map((item) => {
        const filteredItem = { ...item };

        // Recursively filter children if they exist
        if (item.children && item.children.length > 0) {
          filteredItem.children = filterRecursive(item.children);
        }

        // Recursively filter grandChildren if they exist
        if (item.grandChildren && item.grandChildren.length > 0) {
          filteredItem.grandChildren = filterRecursive(item.grandChildren);
        }

        return filteredItem;
      })
      .filter((item) => {
        const hasDirectPermission = hasPermission(userPermissions, item.uniqueKey || '', requiredAction);
        const hasAccessibleChildren =
          (item.children && item.children.length > 0) || (item.grandChildren && item.grandChildren.length > 0);

        if (showParentsWithAccessibleChildren) {
          // Show item if it has direct permission OR has accessible children
          return hasDirectPermission || hasAccessibleChildren;
        } else {
          // Only show items with direct permission
          return hasDirectPermission;
        }
      });
  };

  return filterRecursive(sidebarConfig);
};
