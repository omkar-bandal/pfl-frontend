import React from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { getGrandientBackground } from '@prime-fresh/shared/modules';

interface DashboardCardProps {
  label: string;
  amountCount: number;
  amountPercent: number;
  quantityCount: number;
  quantityPercent: number;
  color?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  label,
  amountCount,
  amountPercent,
  quantityCount,
  quantityPercent,
  color = '#1976d2',
}) => {
    const cardBackground = getGrandientBackground(135, color, 20)
    
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        background: cardBackground,
        color: '#fff',
        minWidth: 200,
        height: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
      elevation={4}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {label}
      </Typography>

      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="body2">Amount</Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {amountCount} ({amountPercent}%)
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Quantity</Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {quantityCount} ({quantityPercent}%)
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
