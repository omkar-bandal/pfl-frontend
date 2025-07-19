import React, { useRef, useState } from 'react';
import { Box, Container, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetLaborPaymentVoucherForViewById } from '@prime-fresh/purchase/modules';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import styles from './lp-voucher.module.css';
import { convertInTitleCase, getDocStatusColor, useUpdateDocumentStatus } from '@prime-fresh/shared/modules';
import { Check, ChevronRight, Close, Download, Message } from '@mui/icons-material';
import { useActions, usePermission } from '@prime-fresh/modules';

export const LabourPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('labor-payment-voucher');
  const [reason, setReason] = useState<string>('');
  const { openDrawer } = useActions();
  const { voucherid } = useParams<{ voucherid: string }>();
  const lpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading, refetch } = useGetLaborPaymentVoucherForViewById(lpVoucherId);
  const lpVoucher = data?.data ? data.data : null;
  console.log(lpVoucher);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createData(srNo: number, title: string, value: any) {
    return { srNo, title, value };
  }
  const tableData = [
    createData(1, 'No of Labours', lpVoucher?.noOfLabours),
    createData(2, 'Day of Loading/Unloading', lpVoucher?.loadingDate),
    createData(3, 'Per Day Rs.', lpVoucher?.ratePerLabour),
    createData(4, 'Labour KYC Attached', lpVoucher?.kyc === true ? 'Yes' : 'No'),
    createData(5, 'Mobile No of Any 1 or 2', lpVoucher?.contactNo),
    createData(6, 'Product', lpVoucher?.products),
  ];

  const firstGridData = [
    { title: 'Debit / Credit to:', value: convertInTitleCase(lpVoucher?.debitCreditTo || '') },
    { title: 'Pay to / Received from:', value: convertInTitleCase(lpVoucher?.payReceivedFrom || '') },
    { title: 'Location:', value: convertInTitleCase(lpVoucher?.location || '') },
    { title: 'Date:', value: lpVoucher?.loadingDate },
    { title: 'Created Date:', value: lpVoucher?.createdDate },
    { title: 'Created Time:', value: lpVoucher?.createdTime },
  ];

  const secondGridData = [
    { title: 'Payment Mode:', value: lpVoucher?.paymentMode },
    { title: 'Total Amount:', value: lpVoucher?.totalAmt },
    { title: 'Amount In Words:', value: lpVoucher?.amtWords },
  ];

  const signatureLabels = ['Prepared By', 'Verified By', 'Approved By', 'Approved By', 'Approved By'];
  // const approverBlock = lpVoucher?.approvalSummary?
  const approvalSummary: StepperData[
  ] = [
      {
        title: 'Created',
        subtitle: lpVoucher?.createdBy || '',
        status: 'COMPLETE'
      },
      {
        title: 'Verified',
        subtitle: lpVoucher?.approvalSummary?.verified?.name || '',
        status: lpVoucher?.approvalSummary?.verified?.status || 'hold'
      },
      {
        title: 'First Approval',
        subtitle: lpVoucher?.approvalSummary?.firstApproved?.name || '',
        status: lpVoucher?.approvalSummary?.firstApproved?.status || 'hold',
      },
      {
        title: 'Second Approval',
        subtitle: lpVoucher?.approvalSummary?.secondApproved?.name || '',
        status: lpVoucher?.approvalSummary?.secondApproved?.status || 'hold',
        disabled: lpVoucher?.approvalSummary?.secondApproved === null ? true : false
      },
      {
        title: 'Third Approval',
        subtitle: lpVoucher?.approvalSummary?.thirdApproved?.name || '',
        status: lpVoucher?.approvalSummary?.thirdApproved?.status || 'hold',
        disabled: lpVoucher?.approvalSummary?.thirdApproved === null ? true : false
      },
      {
        title: 'First Finalizer',
        subtitle: lpVoucher?.approvalSummary?.firstFinalized?.name || '',
        status: lpVoucher?.approvalSummary?.firstFinalized?.status || 'hold'
      },
      {
        title: 'Second Finalizer',
        subtitle: lpVoucher?.approvalSummary?.secondFinalized?.name || '',
        status: lpVoucher?.approvalSummary?.secondFinalized?.status || 'hold'
      },
      {
        title: 'Completed',
        status: lpVoucher?.approvalSummary?.secondFinalized?.status || 'hold'
      },
    ]
  const { mutateAsync, error, data: actionRes } = useUpdateDocumentStatus(lpVoucherId);

  const approveLPVoucher = () => {
    mutateAsync({
      status: 'approved',
      reason: reason,
    })
      .then(() => {
        refetch();
        toast.success(actionRes?.message ? actionRes.message : 'Voucher Approved.');
      })
      .catch(() => toast.error(error?.message ? error.message : 'Error while approving voucher.'));
  };

  const rejectLPVoucher = () => {
    mutateAsync({
      status: 'reject',
      reason: reason,
    }).then(() => {
      refetch();
      toast.success(actionRes?.message ? actionRes.message : 'Voucher Rejected.')
    })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while rejecting voucher.'));
  };
  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Labour Payment Voucher" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" onClick={() => approveLPVoucher()} />
                <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" onClick={() => rejectLPVoucher()} />
              <BtnSmall label="Query" icon={<Message />} color="warning" />
              {canDownload && (
                <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />
              )}
            </Grid>
            <Grid item xs={12} marginY={1}>
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
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(lpVoucher?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(lpVoucher?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(lpVoucher?.overAllStatus || '')}
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
            <div className={styles.printAreaContainer} ref={contentRef}>
              <div className={styles.mainContainer}>
                <header className={styles.header}>
                  <div className={styles.voucherNo}>
                    <span className={`${styles.textSM} ${styles.textBold} ${styles.mb}`}>Voucher No.</span>
                    <span className={`${styles.textMD} ${styles.textBold}`}>PFL-LP-1306250001</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>LABOUR PAYMENT VOUCHER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>PRIME FRESH COMPANY LIMITED</div>
                    <div className={`${styles.address} ${styles.textXS}`}>
                      Address: 102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.
                    </div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      Ph.:+919090909090, Email: primefresh.employee@example.com, Web: website: primefreshlimited.com
                    </div>
                  </div>
                  <div className={styles.logo}>LOGO</div>
                </header>
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {firstGridData.map((data, index) => (
                    <React.Fragment key={index}>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={styles.textSM}>{data.value}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className={styles.px}>
                  <table className={styles.voucherTable}>
                    <thead>
                      <tr>
                        <th className={`${styles.srNoCol} ${styles.textSM} ${styles.textBold}`} rowSpan={2}>
                          Sr. No.
                        </th>
                        <th className={`${styles.particularsCol} ${styles.textSM} ${styles.textBold}`} colSpan={2}>
                          Particulars
                        </th>
                        <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`} colSpan={2}>
                          Amount
                        </th>
                      </tr>
                      <tr>
                        <th className={`${styles.particularsTitleCol} ${styles.textSM} ${styles.textBold}`}>Title</th>
                        <th className={`${styles.particularsValueCol} ${styles.textSM} ${styles.textBold}`}>Value</th>
                        <th className={`${styles.amountRsCol} ${styles.textSM} ${styles.textBold}`}>Rs</th>
                        <th className={`${styles.amountPsCol} ${styles.textSM} ${styles.textBold}`}>Ps</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{row.srNo}</td>
                          <td className={styles.textSM}>{row.title}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{row.value}</td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={styles.receiverSignContainer}>
                  <div className={`${styles.gridContainer} ${styles.px} ${styles.receiverSignContainerLeft}`}>
                    {secondGridData.map((data, index) => (
                      <React.Fragment key={index}>
                        <div className={`${styles.gridItem} ${styles.span_3}`}>
                          <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title} </span>
                        </div>
                        <div className={`${styles.gridItem} ${styles.span_9}`}>
                          <span className={styles.textSM}>{data.value}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className={styles.receiverSignContainerRight}>
                    <div></div>
                    <span className={`${styles.textAlignCenter} ${styles.textSM} ${styles.textBold}`}>
                      Receiver Sign
                    </span>
                  </div>
                </div>
                <div className={styles.signatureContainer}>
                  {signatureLabels.map((label, index) => (
                    <div key={index} className={styles.signatureBox}>
                      <span className={`${styles.signatureLabel} ${styles.textSM} ${styles.textBold}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Box>
      )}
    </Container>
  );
};
