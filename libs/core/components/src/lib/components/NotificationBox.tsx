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
          width: '90vw',
          maxWidth: 320,
          boxShadow: 3,
          mt: 1,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 400, width: 320 }}>
        <Box sx={{ p: 2, fontWeight: 500 }}>Notifications</Box>
        <Divider />
        {notifications.length === 0 ? (
          <Box sx={{ width: '100%', height: 280, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>No Notifications</Typography>
          </Box>
        ) : (
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              <List dense>
                {notifications.map((notif, index) => (
                  <ListItem key={index} divider>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <Typography variant='body2'>{notif.message}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant='caption' component='div' sx={{ color: '#666666', textAlign: 'start' }}>{notif.date}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant='caption' component='div' sx={{ color: '#666666', textAlign: 'end' }}>{notif.time}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Box>
        )}
      </Box>
      <Divider />
      <Box sx={{ p: 1, textAlign: 'center' }}>
        <Button
          size='small'
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
