import React from 'react';
import { Box, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetDealSlipForViewById } from '@prime-fresh/purchase/modules';
import { BtnSmall, DataViewer, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { dealSlipViewConfig } from './deal-slip.view-config';
import { Check, Close, Message, ChevronRight } from '@mui/icons-material';
import { convertInTitleCase, getDocStatusColor, useUpdateDocStatusWithThreeApproval } from '@prime-fresh/shared/modules';
import { useActions } from '@prime-fresh/modules';
// import { usePermission } from '@prime-fresh/modules';

export const DealSlipView = () => {
  const { id } = useParams<{ id: string }>();
  const dealslipId = id ? id : '';
  const { openDrawer } = useActions();
  // const { canDownload } = usePermission('deal-slip');
  const [reason, setReason] = React.useState('');
  const { data, isLoading, refetch } = useGetDealSlipForViewById(dealslipId);
  const dealSlip = data?.data ? data.data : null;
  console.log('Deal Slip Data:', dealSlip);

  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: dealSlip?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: dealSlip?.approvalSummary?.firstApproved?.name || '',
      status: dealSlip?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: dealSlip?.approvalSummary?.firstApproved?.status || 'hold'
    },
  ];

  const { mutateAsync, error, data: actionRes } = useUpdateDocStatusWithThreeApproval(dealslipId);
  const changeDealSlipStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Deal slip ${status} successfully.`)
        refetch();
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of deal slip.'));
  };

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
                <PageTitle pagetitle="Deal Slip" />
              </Grid>
              <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" onClick={() => changeDealSlipStatus('approved')} />
                <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" onClick={() => changeDealSlipStatus('reject')} />
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
              <Grid item xs={12}>
                <DrawerContainer>
                  <Typography variant='h6' component='div' sx={{ fontWeight: 700, color: '#595959' }}>Approval Summary</Typography>
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(dealSlip?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(dealSlip?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(dealSlip?.overAllStatus || '')}
                  </Typography>
                </Typography>
                <InfoTooltip info={`Click here to see complete approval summary.`}>
                  <IconButton size='medium' onClick={() => openDrawer()}>
                    <ChevronRight fontSize='inherit' />
                  </IconButton>
                </InfoTooltip>
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
