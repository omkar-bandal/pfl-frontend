import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

type UserDetailCardProps = {
  userName: string;
  userContactNo: string;
  userEmail: string;
};
export const UserDetailCard: FC<UserDetailCardProps> = ({ userName, userEmail, userContactNo }) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: 1,
        border: '1px solid #E0E0E0',
        borderRadius: 3,
      }}
    >
      <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600, my: 0.5 }}>
        Name: {userName}
      </Typography>
      <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600, my: 0.5 }}>
        Contact No: {userContactNo}
      </Typography>
      <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600, my: 0.5 }}>
        Email: {userEmail}
      </Typography>
    </Box>
  );
};
