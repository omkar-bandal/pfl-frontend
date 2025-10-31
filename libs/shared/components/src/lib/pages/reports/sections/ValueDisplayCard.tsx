import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
type ValueDisplayCardProps = {
  title: string;
  value: number | string;
  unit: string;
};
export const ValueDisplayCard: FC<ValueDisplayCardProps> = ({ title, value, unit }) => {
  return (
    <Box minWidth="sm" sx={{ border: `1px solid #BDBDBD`, borderRadius: 3, textAlign: 'center' }}>
      <Typography color="text.secondary" variant="caption" sx={{ mb: 0.5, textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Typography variant="h5" component="div" color="text.primary" sx={{ fontWeight: 700 }}>
        {value}
        <Typography variant="subtitle1" component="span" color="text.primary" sx={{ fontWeight: 700, marginLeft: 1 }}>
          {unit}
        </Typography>
      </Typography>
    </Box>
  );
};
