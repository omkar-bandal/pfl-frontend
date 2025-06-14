/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, LinearProgress } from '@mui/material';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { vehicleDispatchRegisterViewConfig } from './vehicle-dispatch-register.view-config';
import { useGetVehicleDispatchRegisterById } from '@prime-fresh/inventory/modules';

export const VehicleDispatchRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const vehicleDispatchId = id ? id : '';

  const { data, isLoading } = useGetVehicleDispatchRegisterById(vehicleDispatchId);
  const vehicleDispatchData = data?.data ? data.data : {};
  console.log("View Vehicle Dispatch:", vehicleDispatchData)

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Vehicle Dispatch Register" />
      <DataViewer data={vehicleDispatchData || []} config={vehicleDispatchRegisterViewConfig} />
    </Box>
  );
};
