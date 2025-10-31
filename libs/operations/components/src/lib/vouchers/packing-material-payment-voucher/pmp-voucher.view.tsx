import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import styles from './pmp-voucher.module.css';
import { Check, Close, Download, ChevronRight } from '@mui/icons-material';
import {
  convertInTitleCase,
  formatAddress,
  getDocStatusColor,
  useGetAllCompaniesData,
  useUpdateDocStatusWithThreeApproval,
} from '@prime-fresh/shared/modules';
import { Box, Grid, LinearProgress, Typography, TextField, Container, IconButton } from '@mui/material';
import { useGetPackingMeterialPaymentVoucherForViewById } from '@prime-fresh/operations/modules';
import {
  BtnSmall,
  DrawerContainer,
  formatCurrency,
  InfoTooltip,
  PageTitle,
  StepperData,
  toast,
  VerticalStepper,
} from '@prime-fresh/shared/components';
import { authState, useActions, useAppSelector, usePermission } from '@prime-fresh/modules';
import { images } from '@prime-fresh/assets';

export const PackingMaterialPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  const { openDrawer } = useActions();
  const { canDownload } = usePermission('packaging-material-voucher');
  // const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const pmpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading: isVoucherLoading, refetch } = useGetPackingMeterialPaymentVoucherForViewById(pmpVoucherId);
  const pmpVoucher = data?.data ? data.data : null;
  console.log('pmpVoucher : ', pmpVoucher);
  const { data: companies, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const companyDetails = companies?.data ? companies.data.find((comp) => comp.name === pmpVoucher?.companyName) : null;

  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: pmpVoucher?.createdBy || '',
      status: 'COMPLETE',
    },
    {
      title: 'Verified',
      subtitle: pmpVoucher?.approvalSummary?.verified?.name || '',
      description: pmpVoucher?.approvalSummary?.verified?.reason || '',
      status: pmpVoucher?.approvalSummary?.verified?.status || 'hold',
    },
    {
      title: 'First Approval',
      subtitle: pmpVoucher?.approvalSummary?.firstApproved?.name || '',
      description: pmpVoucher?.approvalSummary?.firstApproved?.reason || '',
      status: pmpVoucher?.approvalSummary?.firstApproved?.status || 'hold',
    },
    {
      title: 'Second Approval',
      subtitle: pmpVoucher?.approvalSummary?.secondApproved?.name || '',
      description: pmpVoucher?.approvalSummary?.secondApproved?.reason || '',
      status: pmpVoucher?.approvalSummary?.secondApproved?.status || 'hold',
      disabled: pmpVoucher?.approvalSummary?.secondApproved === null ? true : false,
    },
    {
      title: 'Third Approval',
      subtitle: pmpVoucher?.approvalSummary?.thirdApproved?.name || '',
      description: pmpVoucher?.approvalSummary?.thirdApproved?.reason || '',
      status: pmpVoucher?.approvalSummary?.thirdApproved?.status || 'hold',
      disabled: pmpVoucher?.approvalSummary?.secondApproved === null ? true : false,
    },
    {
      title: 'First Finalizer',
      subtitle: pmpVoucher?.approvalSummary?.firstFinalized?.name || '',
      description: pmpVoucher?.approvalSummary?.firstFinalized?.reason || '',
      status: pmpVoucher?.approvalSummary?.firstFinalized?.status || 'hold',
    },
    {
      title: 'Second Finalizer',
      subtitle: pmpVoucher?.approvalSummary?.secondFinalized?.name || '',
      description: pmpVoucher?.approvalSummary?.secondFinalized?.reason || '',
      status: pmpVoucher?.approvalSummary?.secondFinalized?.status || 'hold',
    },
    {
      title: 'Completed',
      status: pmpVoucher?.approvalSummary?.secondFinalized?.status || 'hold',
    },
  ];

  const firstGridData = [
    { title: 'Debit / Credit to:', value: convertInTitleCase(pmpVoucher?.debitCreditTo || '') },
    { title: 'Pay to / Received from:', value: convertInTitleCase(pmpVoucher?.payReceivedFrom || '') },
    { title: 'Location:', value: convertInTitleCase(pmpVoucher?.location || '') },
    { title: 'Date:', value: pmpVoucher?.createdDate },
    { title: 'Created Date:', value: pmpVoucher?.createdDate },
    { title: 'Created Time:', value: pmpVoucher?.createdTime },
    { title: 'Supplier / Seller Name:', value: convertInTitleCase(pmpVoucher?.sellerName || '') },
    { title: 'Mobile No.:', value: pmpVoucher?.contactNo },
    { title: 'Address:', value: formatAddress(pmpVoucher?.address) },
    { title: 'Purpose:', value: convertInTitleCase(pmpVoucher?.purpose || '') },
  ];

  const secondGridData = [
    { title: 'Payment Mode:', value: convertInTitleCase(pmpVoucher?.paymentMode || '') },
    { title: 'Total Amount:', value: formatCurrency(Number(pmpVoucher?.totalAmt)) },
    { title: 'Amount In Words:', value: convertInTitleCase(pmpVoucher?.amtWords || '') },
    { title: 'KYC:', value: pmpVoucher?.kyc === true ? 'Yes' : 'No' },
  ];

  const signatureLabels = ['Prepared By', 'Verified By', 'Approved By', 'Approved By', 'Approved By'];

  const { mutateAsync, error, data: actionRes, isError, isPending } = useUpdateDocStatusWithThreeApproval(pmpVoucherId);
  const changePMPVoucherStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        refetch();
        toast.success(actionRes?.message ? actionRes.message : `Voucher ${status}.`);
        setReason('');
      })
      .catch(() => toast.error(error?.message ? error.message : 'Error while changing status of voucher.'));
  };

  return (
    <Container maxWidth="xl">
      {isVoucherLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1, marginY: 1 }}>
          <Grid container rowSpacing={1} marginBottom={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Packing Material Payment Voucher" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {pmpVoucher?.createdBy !== username.split(' ')[0] && (
                <BtnSmall
                  label="Approve"
                  icon={<Check fontSize="inherit" />}
                  color="success"
                  disabled={isPending && !isError}
                  onClick={() => changePMPVoucherStatus('approved')}
                />
              )}
              {pmpVoucher?.createdBy !== username.split(' ')[0] && (
                <BtnSmall
                  label="Disapprove"
                  icon={<Close fontSize="inherit" />}
                  color="error"
                  disabled={isPending && !isError}
                  onClick={() => changePMPVoucherStatus('reject')}
                />
              )}
              {/* <BtnSmall label="Query" icon={<Message />} color="warning" /> */}
              {canDownload && (
                <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />
              )}
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
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#595959' }}>
                  Approval Summary
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ fontWeight: 700, color: '#595959' }}
                >{`Current Status: ${convertInTitleCase(pmpVoucher?.overAllStatus || '')}`}</Typography>
                <VerticalStepper steps={approvalSummary} />
              </DrawerContainer>
            </Grid>
            <Grid item xs={12} alignItems="center">
              <Typography variant="subtitle1" component="span" sx={{ fontWeight: 700, color: '#2C3E50' }}>
                Current Document Status:
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(pmpVoucher?.overAllStatus || 'hold') }}
                >
                  {convertInTitleCase(pmpVoucher?.overAllStatus || '')}
                </Typography>
              </Typography>
              <InfoTooltip info={`Click here to see complete approval summary.`}>
                <IconButton size="medium" onClick={() => openDrawer()}>
                  <ChevronRight fontSize="inherit" />
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
                    <span className={`${styles.textMD} ${styles.textBold}`}>
                      {pmpVoucher?.voucherNo?.toUpperCase()}
                    </span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>PACKING MATERIAL PAYMENT VOUCHER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{companyDetails?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{companyDetails?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {companyDetails?.gstNo}, FASSAI No.: {companyDetails?.fassaiNo}
                    </div>
                  </div>
                  <div className={styles.logo}>
                    <img src={images.sidebarlogo} alt="Logo" width="120px" height="80px" />
                  </div>
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
                        <th className={`${styles.materialsCol} ${styles.textSM} ${styles.textBold}`}>Particulars</th>
                        <th className={`${styles.uomCol} ${styles.textSM} ${styles.textBold}`}>UoM</th>
                        <th className={`${styles.quantityCol} ${styles.textSM} ${styles.textBold}`}>Quantity</th>
                        <th className={`${styles.unitPriceCol} ${styles.textSM} ${styles.textBold}`}>Unit Price</th>
                        <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pmpVoucher?.materials.map((material, index) => (
                        <tr key={material?.id}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(material.itemName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{material.itemUom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{material.itemQty}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{material.rate}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{material.amt}</td>
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
