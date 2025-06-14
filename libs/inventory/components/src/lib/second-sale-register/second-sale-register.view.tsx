/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, LinearProgress } from '@mui/material';
import { useGetSecondSaleRegisterById } from '@prime-fresh/inventory/modules';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { secondSaleRegisterViewConfig } from './second-sale-register.view-config';

export const SecondSaleRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const secondSaleId = id ? id : '';

  const { data, isLoading } = useGetSecondSaleRegisterById(secondSaleId);
  const secondSaleData = data?.data ? data.data : {};
  console.log("View Second Sale :", secondSaleData);

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Second Sale Register" />
      <DataViewer data={secondSaleData || []} config={secondSaleRegisterViewConfig} />
    </Box>
  );
};
