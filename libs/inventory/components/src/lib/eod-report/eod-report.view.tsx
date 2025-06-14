import { Box, LinearProgress } from '@mui/material';
import { useGetEODReportById } from '@prime-fresh/inventory/modules';
import { DataViewer, PageTitle } from '@prime-fresh/ui_shared';
import React from 'react';
import { useParams } from 'react-router-dom';
import { eodReportViewConfig } from './eod-report.view-config';

export const EODReportView = () => {
  const { id } = useParams<{ id: string }>();
  const eodId = id ? id : '';
  const { data, isLoading } = useGetEODReportById(eodId);
  const eodReportData = data?.data ? data.data : {};
  console.log("View EOD Report: ",eodReportData)
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="EOD Report" />
      <DataViewer data={eodReportData || []} config={eodReportViewConfig} />
    </Box>
  );
};
