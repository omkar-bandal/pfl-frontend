/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Card, Typography, CardActionArea } from '@mui/material';
import { getGrandientBackground } from '@prime-fresh/shared/modules';

interface DashboardCardProps {
  label: string;
  amountCount: number;
  amountPercent: number | string;
  quantityCount: number;
  quantityPercent: number | string;
  color?: string;
  onClickAction: any;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  label,
  amountCount,
  amountPercent,
  quantityCount,
  quantityPercent,
  color = '#1976d2',
  onClickAction,
}) => {
  const cardBackground = getGrandientBackground(135, color, 10);

  return (
    <Card
      sx={{
        borderRadius: 3,
        background: cardBackground,
        color: '#fff',
        minWidth: 200,
        height: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 10,
        },
      }}
      elevation={4}
    >
      <CardActionArea sx={{ p: 2 }} onClick={onClickAction}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {label}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="caption">Quantity</Typography>
            <Typography variant="subtitle1" fontWeight={600} component="div">
              {quantityCount}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600} component="div">
              ({quantityPercent}%)
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Amount</Typography>
            <Typography variant="subtitle1" fontWeight={600} component="div">
              {amountCount}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600} component="div">
              ({amountPercent}%)
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};
