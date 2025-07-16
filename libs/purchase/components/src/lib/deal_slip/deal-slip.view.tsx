import React from 'react';
import { Box, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetDealSlipForViewById } from '@prime-fresh/purchase/modules';
import { BtnSmall, DataViewer, PageTitle, ProgressStep, ProgressStepper } from '@prime-fresh/ui_shared';
import { dealSlipViewConfig } from './deal-slip.view-config';
import { Check, Close, Message, Download } from '@mui/icons-material';
// import { usePermission } from '@prime-fresh/modules';

export const DealSlipView = () => {
  const { id } = useParams<{ id: string }>();
  const dealslipId = id ? id : '';
  // const { canDownload } = usePermission('deal-slip');
  const [reason, setReason] = React.useState('');
  const { data, isLoading } = useGetDealSlipForViewById(dealslipId);
  const dealSlip = data?.data ? data.data : null;
  const approvalFlowSummary: ProgressStep[] = [
    { title: 'Created', subtitle: dealSlip?.createdBy || '', status: 'COMPLETE' },
    { title: 'Approved', subtitle: dealSlip?.approvalSummary?.firstApproved?.name || '', status: dealSlip?.approvalSummary?.firstApproved?.status || 'hold' },
    { title: 'Completed', status: dealSlip?.overAllStatus || 'hold' },
  ];
  return (
    <Box sx={{ flex: 1, padding: 1 }}>
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
          <Box sx={{ flex: 1, marginY: 1 }}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <PageTitle pagetitle="Request For Purchase Approval" />
              </Grid>
              <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" />
                <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" />
                <BtnSmall label="Query" icon={<Message />} color="warning" />
                {/* {canDownload && <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />} */}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="div">
                  <Typography variant="body1" component="span" color="error">
                    *
                  </Typography>
                  Mention reason for approval / not approval
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  name="approveOrRejectReason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} marginY={1} paddingY={2} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
                <ProgressStepper steps={approvalFlowSummary} />
              </Grid>
            </Grid>
            <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
              <DataViewer config={dealSlipViewConfig} data={dealSlip || []} />
            </Box>
          </Box>
      )}
    </Box>
  );
};
