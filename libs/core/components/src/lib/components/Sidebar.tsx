import React, { memo, useState } from "react";
import { Box, Drawer } from "@mui/material";
import { useDispatch } from "react-redux";
import { mobileOpenState, Navigations, setIsClosing, setMobileOpen, SidebarProps, useAppSelector } from '@prime-fresh/modules';
import Logo from "./Logo";
import SidebarList from "./SidebarList";
import { adminNavigations, inventoryNavigations, purchaseNavigations, salesNavigations } from "../navigations";
import { useGetDepartmentById } from "@prime-fresh/shared/modules";


export const Sidebar: React.FC<SidebarProps> = memo(({ drawerWidth }) => {
  const dispatch = useDispatch();

  const mobileOpen = useAppSelector(mobileOpenState);
  const [selectedItem, setSelectedItem] = useState("");

  const navigationMap: { [key: string]: Navigations[] } = {
    "admin": adminNavigations,
    "purchase": purchaseNavigations,
    "inventory": inventoryNavigations,
    "sales": salesNavigations,
    "default": [],
  };

  const deptId = localStorage.getItem("department");
  const { data } = useGetDepartmentById(deptId || '')
  const dept = data?.data ? data.data.name.toLowerCase() : "";
  const navigations = navigationMap[dept ? dept : "Default"] || [];

  const handleDrawerClose = () => {
    dispatch(setIsClosing(true));
    dispatch(setMobileOpen(false));
  };

  const handleDrawerTransitionEnd = () => {
    dispatch(setIsClosing(false));
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            paddingX: 1,
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F6FFF7",
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}>
        <Logo />
        <SidebarList
          dept={dept ? dept : "Default"}
          navigations={navigations}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem} />
      </Drawer>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            paddingX: 1,
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F6FFF7",
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        }}>
        <Logo />
        <SidebarList
          dept={dept ? dept : "Default"}
          navigations={navigations}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem} />
      </Drawer>
    </Box>
  );
});

