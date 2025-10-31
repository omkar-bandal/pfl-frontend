import { memo, useState } from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authState, mobileOpenState, setIsSidebarClosing, setMobileOpen, useAppSelector } from '@prime-fresh/modules';
import Logo from './Logo';
import SidebarList from './SidebarList';
import { adminNavigations, commonNavigation, userSpecificNavigation } from '../navigations';
import { filterSidebarOptions } from './filter-siderbar-opts';

export const Sidebar = memo(({ drawerWidth }: { drawerWidth: number }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const mobileOpen = useAppSelector(mobileOpenState);
  const [selectedItem, setSelectedItem] = useState('');
  const { loggedInUserInfo, employeePermissions } = useAppSelector(authState);
  const userperms = employeePermissions !== null ? employeePermissions : [];
  const getNavigations = () => {
    if (loggedInUserInfo?.roles?.includes('admin')) return adminNavigations;
    else {
      const filteredNavigation = filterSidebarOptions(userSpecificNavigation, userperms, 'create', true);
      return [...commonNavigation, ...filteredNavigation];
    }
  };
  const navigations = getNavigations();
  const handleDrawerClose = () => {
    dispatch(setIsSidebarClosing(true));
    dispatch(setMobileOpen(false));
  };

  const handleDrawerTransitionEnd = () => {
    dispatch(setIsSidebarClosing(false));
  };
  const drawerStyle = {
    '& .MuiDrawer-paper': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingX: 1,
      boxSizing: 'border-box',
      width: drawerWidth,
      backgroundColor: theme.palette.background.default,
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  };
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
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
          ...drawerStyle,
        }}
      >
        <Logo />
        <SidebarList navigations={navigations} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </Drawer>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          ...drawerStyle,
        }}
      >
        <Logo />
        <SidebarList navigations={navigations} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </Drawer>
    </Box>
  );
});
