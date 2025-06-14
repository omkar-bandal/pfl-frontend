import { useParams } from 'react-router-dom';
import { Box, LinearProgress } from '@mui/material';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import { useGetAQRForViewById } from '@prime-fresh/inventory/modules';
import { aqrViewConfig } from './aqr.view-config';

export const AQRView = () => {
  const { id } = useParams<{ id: string }>();
  const Id = id ? id : '';
  const { data, isLoading } = useGetAQRForViewById(Id);
  const aqrData = data?.data ? data.data : {};
  console.log("AQR Data: ", aqrData);
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Arrival Quality Report" />
      <DataViewer data={aqrData || []} config={aqrViewConfig} />
    </Box>
  );
};
