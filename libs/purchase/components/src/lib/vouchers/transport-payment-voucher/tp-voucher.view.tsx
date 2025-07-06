import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, ProgressStepper, PageTitle, ProgressStep } from '@prime-fresh/ui_shared';
import { useGetTransportPaymentVoucherForViewById } from '@prime-fresh/purchase/modules';
import { Check, Close, Message, Download } from '@mui/icons-material';
import styles from './tp-voucher.module.css';
import { convertInTitleCase, useGetAllCompaniesData } from '@prime-fresh/shared/modules';
import { usePermission } from '@prime-fresh/modules';

export const TransportPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('transport-payment-voucher');
  // const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const tpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading: isVoucherLoading } = useGetTransportPaymentVoucherForViewById(tpVoucherId);
  const tpVoucher = data?.data ? data.data : null;
  console.log(tpVoucher);
  const { data: companies, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const companyDetails = companies?.data ? companies.data.find((comp) => comp.name === tpVoucher?.companyName) : null;

  const approvalData: ProgressStep[] = [
    { title: 'Created', subtitle: 'Sagar Pagar', status: 'approved' },
    { title: 'First Approval', subtitle: 'Sudhanshu Singh', status: 'approved' },
    { title: 'Second Approval', subtitle: 'Ashok Kori', status: 'pending' },
    { title: 'Third Approval', subtitle: 'Hiren Ghelani', status: 'rejected' },
    { title: 'First Finalizer', subtitle: 'Hiren Ghelani', status: 'rejected' },
    { title: 'Second Finalizer', subtitle: 'Hiren Ghelani', status: 'pending' },
    { title: 'Completed', subtitle: 'Jinen Ghelani', status: 'pending' },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createData(srNo: number, title: string, value: any) {
    return { srNo, title, value };
  }
  const tableData = [
    createData(1, 'Driver Name', convertInTitleCase(tpVoucher?.driverName || '')),
    createData(2, 'Mob. No.', tpVoucher?.contactNo),
    createData(3, 'Vehicle No.', convertInTitleCase(tpVoucher?.vehicleNo || '')),
    createData(4, 'Dispatch Location', convertInTitleCase(tpVoucher?.dispatchLocation || '')),
    createData(5, 'Destination', convertInTitleCase(tpVoucher?.destinationLocation || '')),
    createData(5, 'Product', convertInTitleCase(tpVoucher?.products || '')),
    createData(7, 'Freight Amount (Box, Crates x )', tpVoucher?.freightAmt),
    createData(8, 'KYC : Driver Lic. / RC Book / PAN', tpVoucher?.kyc === true ? 'Yes' : 'No'),
  ];
  const firstGridData = [
    { title: 'Debit / Credit to:', value: convertInTitleCase(tpVoucher?.debitCreditTo || '') },
    { title: 'Pay to / Received from:', value: convertInTitleCase(tpVoucher?.payReceivedFrom || '') },
    { title: 'Location:', value: convertInTitleCase(tpVoucher?.location || '') },
    { title: 'Date:', value: tpVoucher?.createdDate },
    { title: 'Created Date:', value: tpVoucher?.createdDate },
    { title: 'Created Time:', value: tpVoucher?.createdTime },
  ];

  const secondGridData = [
    { title: 'Payment Mode:', value: convertInTitleCase(tpVoucher?.paymentMode || '') },
    { title: 'Total Amount:', value: `${Number(tpVoucher?.totalAmt)} Rs.` },
    { title: 'Amount In Words:', value: convertInTitleCase(tpVoucher?.amtWords || '') },
  ];

  const signatureLabels = ['Prepared By', 'Verified By', 'Approved By', 'Approved By', 'Approved By'];
  return (
    <Container maxWidth="xl">
      {isVoucherLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Transport Payment Voucher" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" />
              <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" />
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
            <Grid item xs={12} marginY={1} paddingY={2} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
              <ProgressStepper steps={approvalData} />
            </Grid>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div className={styles.printAreaContainer} ref={contentRef}>
              <div className={styles.mainContainer}>
                <header className={styles.header}>
                  <div className={styles.voucherNo}>
                    <span className={`${styles.textSM} ${styles.textBold} ${styles.mb}`}>Voucher No.</span>
                    <span className={`${styles.textMD} ${styles.textBold}`}>{tpVoucher?.voucherNo}</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>TRANSPORT PAYMENT VOUCHER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{companyDetails?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{companyDetails?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {companyDetails?.gstNo}, FASSAI No.: {companyDetails?.fassaiNo}
                    </div>
                  </div>
                  <div className={styles.logo}>
                    <img src={companyDetails?.logo} alt="Logo" width="120px" height="80px" />
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
