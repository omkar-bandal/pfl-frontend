import React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetDealSlipForViewById } from '@prime-fresh/purchase/modules';
import { DataViewer } from '@prime-fresh/ui_shared';
import { dealSlipViewConfig } from './deal-slip.view-config';

export const DealSlipView = () => {
  const { id } = useParams<{ id: string }>();
  const dealslipId = id ? id : '';
  const { data, isLoading } = useGetDealSlipForViewById(dealslipId);
  const dealSlip = data?.data ? data.data : null;

  return (
    <Box sx={{ flex: 1, padding: 1 }}>
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <DataViewer config={dealSlipViewConfig} data={dealSlip || []} />
      )}
    </Box>
  );
};
