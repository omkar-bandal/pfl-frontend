import React, { useState } from "react";
import { Box, Button, Drawer } from "@mui/material";
import { useDispatch } from "react-redux";
import { authRouteConstants, mobileOpenState, Navigations, setIsClosing, setMobileOpen, SidebarProps, useAppSelector } from '@prime-fresh/modules';
import Logo from "./Logo";
import SidebarList from "./SidebarList";
import { adminNavigations, inventoryNavigations, purchaseNavigations, salesNavigations } from "../navigations";
import { getAccessToken, getRefreshToken } from "@prime-fresh/common_api";
import { useNavigate } from "react-router-dom";
import { toast } from "@prime-fresh/ui_shared";
import { Logout } from "@mui/icons-material";
import { SignOutRequest, useSignOut } from "@prime-fresh/auth_api";

export const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mobileOpen = useAppSelector(mobileOpenState);
  const [selectedItem, setSelectedItem] = useState("");

  const navigationMap: { [key: string]: Navigations[] } = {
    "admin": adminNavigations,
    "purchase": purchaseNavigations,
    "inventory": inventoryNavigations,
    "sales": salesNavigations,
    "default": [],
  };

  const dept = localStorage.getItem("department");
  const navigations = navigationMap[dept ? dept : "Default"] || [];

  const tokens: SignOutRequest = {
    access_token: getAccessToken() || '',
    refresh_token: getRefreshToken() || '',
  }
  const { mutateAsync, isError, error } = useSignOut();

  const handleLogout = () => {
    if (tokens)
      mutateAsync(tokens).then(() => {
        localStorage.clear();
        navigate(authRouteConstants.SIGN_IN);
      }
      ).catch(() => {
        if (isError) {
          localStorage.clear();
          toast.error(error ? error.message : "Error while logout");
          navigate(authRouteConstants.SIGN_IN)
        }
      }
      )
  }
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
        <Box sx={{ width: drawerWidth, paddingX: 1, position: "fixed", bottom: 0, left: 0, padding: 1 }}>
          <Button fullWidth startIcon={<Logout fontSize="small" />} variant="text" sx={{ textTransform: "none" }} onClick={() => handleLogout()}>
            Logout
          </Button>
        </Box>
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
        <Box sx={{ width: drawerWidth, paddingX: 1, position: "fixed", bottom: 0, left: 0, padding: 1 }}>
          <Button fullWidth startIcon={<Logout fontSize="small" />} variant="contained" sx={{ textTransform: "none", backgroundColor: "#00cc66" }} onClick={() => handleLogout()}>
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

