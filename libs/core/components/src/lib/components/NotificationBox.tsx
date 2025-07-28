import { FC } from 'react';
import { Popover, Box, Typography, List, ListItem, PopoverProps, Grid, Button, Divider } from '@mui/material';
import { INotification } from '@prime-fresh/modules';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { useNavigate } from 'react-router-dom';

type NotificationBoxPropsType = PopoverProps & {
  notifications: INotification[];
};

export const NotificationBox: FC<NotificationBoxPropsType> = (props) => {
  const { notifications, ...rest } = props;
  const navigate = useNavigate();
  return (
    <Popover
      {...rest}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          width: '90vw',       // Responsive width for mobile
          maxWidth: 320,        // Cap it on larger screens
          boxShadow: 3,
          mt: 1,
        },
      }}
    >
      <Box sx={{ width: 300, height: 300 }}>
        {notifications.length === 0 ? (
          <Box sx={{ width: '100%', height: 280, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>No Notifications</Typography>
          </Box>
        ) : (
          <List dense disablePadding>
            {notifications.map((notif, index) => (
              <ListItem key={index} divider>
                <Grid container padding={1}>
                  <Grid item xs={12}>
                    <Typography variant='caption' sx={{ fontWeight: 700 }}>{notif.message}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='caption' sx={{ fontWeight: 700 }}>{notif.date}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='caption' sx={{ fontWeight: 700 }}>{notif.time}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant='text'
          onClick={() => navigate(sharedRoutes.ALL_NOTIFICATIONS)}
          sx={{
            textTransform: 'none',
            fontSize: 12,
            fontWeight: 600
          }}>
          See All Notifications
        </Button>
      </Box>
    </Popover>
  );
};
