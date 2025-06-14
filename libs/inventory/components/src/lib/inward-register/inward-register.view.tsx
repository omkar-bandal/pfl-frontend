/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, LinearProgress } from '@mui/material';
import { useGetInwardRegisterForViewById } from '@prime-fresh/inventory/modules';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { inwardRegisterViewConfig } from './inward-register.view-config';

export const InwardRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const Id = id ? id : '';
  const { data, isLoading } = useGetInwardRegisterForViewById(Id);
  const inwardData = data?.data ? data.data : {};
  console.log("View inward", inwardData)
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Inward Register" />
      <DataViewer data={inwardData || []} config={inwardRegisterViewConfig} />
    </Box>
  );
};
