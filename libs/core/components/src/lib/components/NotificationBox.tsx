import { FC } from 'react';
import { Popover, Box, Typography, List, ListItem, ListItemText, PopoverProps } from '@mui/material';

type NotificationBoxPropsType = PopoverProps & {
  notifications: string[];
};

export const NotificationBox: FC<NotificationBoxPropsType> = (props) => {
  const { notifications, ...rest } = props;
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
          <Typography variant="body2">No notifications</Typography>
        ) : (
          <List dense disablePadding>
            {notifications.map((notif, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={notif} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Popover>
  );
};
