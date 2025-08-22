import React, { memo, useState } from 'react';
import { Box, Divider, Drawer, IconButton, styled, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  authState,
  filterSidebarOptions,
  mobileOpenState,
  setIsSidebarClosing,
  setMobileOpen,
  SidebarProps,
  useAppSelector,
} from '@prime-fresh/modules';
import { adminNavigations, commonNavigation, userSpecificNavigation } from '../../navigations';
import SidebarList from '../SidebarList';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { images } from "@prime-fresh/assets";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const NewSidebar: React.FC<SidebarProps> = memo(({ drawerWidth }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const mobileOpen = useAppSelector(mobileOpenState);
  const [selectedItem, setSelectedItem] = useState('');
  const { loggedInUserInfo, employeePermissions } = useAppSelector(authState);
  const userperms = employeePermissions !== null ? employeePermissions : [];
  const getNavigations = () => {
    if (loggedInUserInfo?.department === 'admin') return adminNavigations;
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

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        open={mobileOpen}
        variant="persistent"
        anchor="left"
        sx={{
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
        <DrawerHeader>
          <img
            src={images.sidebarlogo}
            style={{ width: "100px", height: "70px" }}
            alt="logo"
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <SidebarList
          navigations={navigations}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </Drawer>
    </Box>
  );
});
