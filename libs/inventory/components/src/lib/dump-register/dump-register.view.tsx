import { Box, LinearProgress } from '@mui/material';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import { dumpRegisterViewConfig } from './dump-register.view-config';
import { useGetDumpRegisterForViewById } from '@prime-fresh/inventory/modules';
import { useParams } from 'react-router-dom';

export const DumpRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const dumpRegiId = id ? id : '';
  const { data, isLoading } = useGetDumpRegisterForViewById(dumpRegiId);
  const dumpData = data?.data ? data.data : {};
  console.log("View Dump: ", dumpData);
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Dump Register" />
      <DataViewer data={dumpData || []} config={dumpRegisterViewConfig} />
    </Box>
  );
};
