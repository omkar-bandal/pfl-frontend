import React, { FC } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { formatNumberWithSuffix } from '@prime-fresh/shared/modules';
type ValueDisplayCardProps = {
  title: string;
  value: number | string;
  unit?: string;
  height?: number;
  boxSx?: SxProps<Theme>;
  textColor?: any;
};
export const ValueDisplayCard: FC<ValueDisplayCardProps> = ({ title, value, unit, height, boxSx, textColor }) => {
  return (
    <Box
      minWidth="sm"
      height={height ?? 80}
      sx={{
        border: `1px solid #BDBDBD`,
        borderRadius: 3,
        textAlign: 'center',
        ...boxSx,
      }}
    >
      <Typography
        variant="caption"
        component="div"
        color={textColor ?? `text.primary`}
        sx={{ mb: 0.5, textTransform: 'uppercase' }}
      >
        {title}
      </Typography>
      <Typography variant="h4" component="div" color={textColor ?? `text.primary`} sx={{ fontWeight: 700 }}>
        {formatNumberWithSuffix(value)}
        <Typography
          variant="subtitle1"
          component="span"
          color={textColor ?? `text.primary`}
          sx={{ fontWeight: 700, marginLeft: 1 }}
        >
          {unit}
        </Typography>
      </Typography>
    </Box>
  );
};
