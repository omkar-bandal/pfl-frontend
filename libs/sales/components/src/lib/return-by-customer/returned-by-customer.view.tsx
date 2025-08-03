import React from "react";
import { useParams } from "react-router-dom";
import { returnByCustomerViewConfig } from "./return-by-customer.view-config";
import { Check, Close, ChevronRight } from "@mui/icons-material";
import { Box, LinearProgress, Grid, Typography, TextField, IconButton } from "@mui/material";
import { useActions, useAppSelector, authState } from "@prime-fresh/modules";
import { convertInTitleCase, getDocStatusColor, useUpdateDocStatusWithTwoApproval } from "@prime-fresh/shared/modules";
import { StepperData, PageTitle, BtnSmall, DrawerContainer, VerticalStepper, InfoTooltip, DataViewer, toast } from "@prime-fresh/ui_shared";
import { useGetReturnedByCustomerById } from "@prime-fresh/sales/modules";

export const ReturnedByCustomerView = () => {
    const { id } = useParams<{ id: string }>();
    const rbcId = id ? id : '';
    const { openDrawer } = useActions();
    // const { canDownload } = usePermission('rbc');
    const [reason, setReason] = React.useState('');
    const { data, isLoading, refetch } = useGetReturnedByCustomerById(rbcId);
    const rbc = data?.data ? data.data : null;
    console.log('RBC:', rbc);
    const { loggedInUserInfo } = useAppSelector(authState);
    const username = convertInTitleCase(loggedInUserInfo?.userName || '');
    const approvalSummary: StepperData[] = [
        {
            title: 'Created',
            subtitle: rbc?.createdBy || '',
            status: 'COMPLETE'
        },
        {
            title: 'Approved',
            subtitle: rbc?.approvalSummary?.firstApproved?.name || '',
            description: rbc?.approvalSummary?.firstApproved?.reason || '',
            status: rbc?.approvalSummary?.firstApproved?.status || 'hold'
        },
        {
            title: 'Approved',
            subtitle: rbc?.approvalSummary?.secondApproved?.name || '',
            description: rbc?.approvalSummary?.secondApproved?.reason || '',
            status: rbc?.approvalSummary?.secondApproved?.status || 'hold'
        },
        {
            title: 'Completed',
            status: rbc?.approvalSummary?.firstApproved?.status || 'hold'
        },
    ];

    const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithTwoApproval(rbcId);
    const changeRBCStatus = (status: 'approved' | 'reject') => {
        mutateAsync({
            status: status,
            reason: reason,
        })
            .then(() => {
                toast.success(actionRes?.message ? actionRes.message : `Returned By Customer ${status} successfully.`);
                setReason('')
                refetch();
            })
            .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of return by customer.'));
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
                            {rbc?.createdBy !== username.split(' ')[0] &&
                                <BtnSmall
                                    label="Approve"
                                    icon={<Check fontSize="inherit" />}
                                    color="success"
                                    onClick={() => changeRBCStatus('approved')}
                                    disabled={isPending && !isError}
                                />}
                            {rbc?.createdBy !== username.split(' ')[0] &&
                                <BtnSmall
                                    label="Reject"
                                    icon={<Close fontSize="inherit" />}
                                    color="error"
                                    onClick={() => changeRBCStatus('reject')}
                                    disabled={isPending && !isError}
                                />}
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
                                <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(rbc?.overAllStatus || '')}`}</Typography>
                                <VerticalStepper steps={approvalSummary} />
                            </DrawerContainer>
                        </Grid>
                        <Grid item xs={12} alignItems='center'>
                            <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                                Current Document Status:
                                <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(rbc?.overAllStatus || 'hold') }}>
                                    {convertInTitleCase(rbc?.overAllStatus || '')}
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
                        <DataViewer config={returnByCustomerViewConfig} data={rbc || []} />
                    </Box>
                </Box>
            )}
        </Box>
    )
}