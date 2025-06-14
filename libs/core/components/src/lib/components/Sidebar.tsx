import React, { memo, useState } from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  authState,
  hasPermission,
  mobileOpenState,
  setIsSidebarClosing,
  setMobileOpen,
  SidebarProps,
  useAppSelector,
} from '@prime-fresh/modules';
import Logo from './Logo';
import SidebarList from './SidebarList';
import { adminNavigations, commonNavigation, userSpecificNavigation } from '../navigations';

export const Sidebar: React.FC<SidebarProps> = memo(({ drawerWidth }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const mobileOpen = useAppSelector(mobileOpenState);
  const [selectedItem, setSelectedItem] = useState('');
  const { employeeLevel, employeePermissions } = useAppSelector(authState);
const getNavigations = () => {
  if(employeeLevel?.name === 'admin')
    return adminNavigations;
  else{
    const filteredNavigation = userSpecificNavigation.filter((nav) =>
      nav.children
        ? nav.children.filter((subnav) =>
            hasPermission(
              employeePermissions || [],
              subnav.uniqueKey,
              'create'
            )
          )
        : hasPermission(
            employeePermissions || [],
            nav.uniqueKey,
            'create'
          )
    )
    return [...commonNavigation, ...filteredNavigation]
  }
}
  // const navigations = useMemo(
  //   () =>
  //     employeeLevel?.name === 'admin'
  //       ? adminNavigations
  //       : purchaseNavigations.filter((nav) =>
  //           nav.children
  //             ? nav.children.filter((subnav) =>
  //                 hasPermission(
  //                   employeePermissions || [],
  //                   subnav.uniqueKey,
  //                   'create'
  //                 )
  //               )
  //             : hasPermission(
  //                 employeePermissions || [],
  //                 nav.uniqueKey,
  //                 'create'
  //               )
  //         ),
  //   [employeeLevel?.name, employeePermissions]
  // );
  const navigations = getNavigations();
  const handleDrawerClose = () => {
    dispatch(setIsSidebarClosing(true));
    dispatch(setMobileOpen(false));
  };

  const handleDrawerTransitionEnd = () => {
    dispatch(setIsSidebarClosing(false));
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            paddingX: 1,
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.primary.light,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}
      >
        <Logo />
        <SidebarList
          navigations={navigations}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </Drawer>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            paddingX: 1,
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.primary.light,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}
      >
        <Logo />
        <SidebarList
          // dept={dept ? dept : "Default"}
          navigations={navigations}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </Drawer>
    </Box>
  );
});
