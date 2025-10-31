import { NavigationConfig } from '../navigations';

export const isNavItemActive = (item: NavigationConfig): boolean => {
  const pathname = location.pathname;
  if (item.path) {
    // exact match or deeper route under the same base path
    if (item.path === '/') {
      if (pathname === '/') return true;
    } else {
      if (pathname === item.path || pathname.startsWith(`${item.path}/`)) return true;
    }
  }
  const children = item.children ?? [];
  const grandChildren = item.grandChildren ?? [];
  for (const c of children) {
    if (isNavItemActive(c)) return true;
  }
  for (const gc of grandChildren) {
    if (isNavItemActive(gc)) return true;
  }
  return false;
};
