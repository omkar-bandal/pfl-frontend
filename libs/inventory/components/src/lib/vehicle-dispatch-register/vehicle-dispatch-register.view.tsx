/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { BtnSmall, DataViewer, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { vehicleDispatchRegisterViewConfig } from './vehicle-dispatch-register.view-config';
import { useGetVehicleDispatchRegisterForViewById } from '@prime-fresh/inventory/modules';
import { Check, Close, ChevronRight } from '@mui/icons-material';
import { useActions } from '@prime-fresh/modules';
import { convertInTitleCase, getDocStatusColor, useUpdateDocStatusWithOneApproval } from '@prime-fresh/shared/modules';
import { useState } from 'react';

export const VehicleDispatchRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const vehicleDispatchId = id ? id : '';
  const [reason, setReason] = useState('');
  const { openDrawer } = useActions();
  const { data, isLoading, refetch } = useGetVehicleDispatchRegisterForViewById(vehicleDispatchId);
  const vehicleDispatchData = data?.data ? data.data : null;
  console.log("View Vehicle Dispatch:", vehicleDispatchData)
  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: vehicleDispatchData?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: vehicleDispatchData?.approvalSummary?.firstApproved?.name || '',
      status: vehicleDispatchData?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: vehicleDispatchData?.overAllStatus || 'hold'
    },
  ];
  const { mutateAsync, error, data: actionRes } = useUpdateDocStatusWithOneApproval(vehicleDispatchId);
  const changeVehicleDispatchStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Vehicle dispatch register ${status} successfully.`)
        refetch();
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of vehicle dispatch register.'));
  };
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
      <Box sx={{ flex: 1, marginY: 1 }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <PageTitle pagetitle="Vehicle Dispatch Register" />
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" onClick={() => changeVehicleDispatchStatus('approved')} />
            <BtnSmall label="Disapprove" icon={<Close fontSize="inherit" />} color="error" onClick={() => changeVehicleDispatchStatus('reject')} />
            {/* <BtnSmall label="Query" icon={<Message />} color="warning" /> */}
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
              <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(vehicleDispatchData?.overAllStatus || '')}`}</Typography>
              <VerticalStepper steps={approvalSummary} />
            </DrawerContainer>
          </Grid>
          <Grid item xs={12} alignItems='center'>
            <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
              Current Document Status:
              <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(vehicleDispatchData?.overAllStatus || 'hold') }}>
                {convertInTitleCase(vehicleDispatchData?.overAllStatus || '')}
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
          <DataViewer data={vehicleDispatchData || []} config={vehicleDispatchRegisterViewConfig} />
        </Box>
    </Box>
  );
};
