import * as React from 'react';
import { AppBar, IconButton, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  authRouteConstants,
  authState,
  layoutStates,
  notificationsState,
  setMobileOpen,
  useActions,
  useAppDispatch,
  useAppSelector,
} from '@prime-fresh/modules';
import { AccountCircle, Logout, Notifications } from '@mui/icons-material';
import { ISignOutRequest, useSignOut } from '@prime-fresh/auth_api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { convertInTitleCase, useGetUserNotifications } from '@prime-fresh/shared/modules';
import { ProfileMenu } from './ProfileMenu';
import { NotificationBox } from './NotificationBox';

export function Appbar({ drawerWidth }: { drawerWidth: number }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setNotifications, addNotification } = useActions();
  const { mobileOpen, isSidebarClosing } = useAppSelector(layoutStates);
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  const { setLoggedInUserInfo, setEmployeePermissions, setIsLoggedIn } = useActions();
  const { data } = useGetUserNotifications();
  const noti = React.useMemo(() => data?.data ? data.data.map(noti => noti.message) : [], [data]);

  React.useEffect(() => {
    // socket.on('newNotification', ({ message, userId }) => {
    //   console.log(`Notification received for user id ${userId}:`, message);
    //   addNotification(message);
    // });
    setNotifications(noti);
  }, [addNotification, noti, setNotifications]);

  const notifications = useAppSelector(notificationsState);
  console.log("Notifications: ", notifications);

  const handleDrawerToggle = () => {
    if (!isSidebarClosing) {
      dispatch(setMobileOpen(!mobileOpen));
    }
  };

  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const openProfileMenu = Boolean(profileMenuAnchorEl);

  const [notificationBoxAnchorEl, setNotificationBoxAnchorEl] = React.useState<null | HTMLElement>(null);
  const openNotificationBox = Boolean(notificationBoxAnchorEl);

  const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleOpenNotificationBox = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationBoxAnchorEl(event.currentTarget);
  };

  const handleCloseNotificationBox = () => {
    setNotificationBoxAnchorEl(null);
  };

  const { mutateAsync, isError, error } = useSignOut();

  const handleLogout = () => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      const tokens: ISignOutRequest = {
        access_token: accessToken,
        refresh_token: refreshToken,
      };

      mutateAsync(tokens)
        .then(() => {
          localStorage.clear();
          setIsLoggedIn(false);
          setLoggedInUserInfo(null);
          setEmployeePermissions(null);
          handleCloseProfileMenu();
          navigate(authRouteConstants.SIGN_IN);
        })
        .catch(() => {
          if (isError) {
            localStorage.clear();
            setIsLoggedIn(false);
            setLoggedInUserInfo(null);
            setEmployeePermissions(null);
            toast.error(error ? error.message : 'Error while logout');
            navigate(authRouteConstants.SIGN_IN);
          }
        });
    } else {
      throw new Error('Unable to logout please refresh the page.');
    }
  };
  const profileMenuOptions = [
    {
      label: 'Logout',
      icon: <Logout />,
      onClickFn: handleLogout,
    },
  ];
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: 40,
        ml: { sm: `${drawerWidth}px` },
        bgcolor: '#FFFFFF',
        boxShadow: 'none',
        boxSizing: 'border-box',
      }}
    >
      <Box
        width="100%"
        height="100%"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 2, paddingY: 1 }}
      >
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center' }}>
          <IconButton color="primary" size="medium" aria-label="notification" onClick={handleOpenNotificationBox}>
            <Badge badgeContent={notifications.length} color="error">
              <Notifications fontSize="medium" />
            </Badge>
          </IconButton>
          <IconButton
            onClick={handleOpenProfileMenu}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={openProfileMenu ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProfileMenu ? 'true' : undefined}
          >
            <AccountCircle fontSize="medium" />
          </IconButton>
        </Box>
        <ProfileMenu
          open={openProfileMenu}
          anchorEl={profileMenuAnchorEl}
          onClick={handleCloseProfileMenu}
          onClose={handleCloseProfileMenu}
          loggedInUsername={username}
          menuoptions={profileMenuOptions}
        />
        <NotificationBox
          open={openNotificationBox}
          anchorEl={notificationBoxAnchorEl}
          onClose={handleCloseNotificationBox}
          notifications={notifications}
        />
      </Box>
    </AppBar>
  );
}
