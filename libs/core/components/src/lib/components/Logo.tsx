import React from 'react';
import { Box } from '@mui/material';
import { images } from '@prime-fresh/assets';

const Logo: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, marginY: 1 }}>
    <img src={images.sidebarlogo} style={{ width: '100px', height: '70px' }} alt="logo" />
  </Box>
);

export default Logo;
