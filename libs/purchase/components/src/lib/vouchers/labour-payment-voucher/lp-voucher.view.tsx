import React, { useRef, useState } from 'react';
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetLaborPaymentVoucherForViewById } from '@prime-fresh/purchase/modules';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, PageTitle, ProgressStepper } from '@prime-fresh/ui_shared';
import styles from './lp-voucher.module.css';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { Check, Close, Download, Message } from '@mui/icons-material';
import { usePermission } from '@prime-fresh/modules';

export const LabourPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('labor-payment-voucher');
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const lpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading } = useGetLaborPaymentVoucherForViewById(lpVoucherId);
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
              <ProgressStepper
                steps={[
                  { title: 'Created', subtitle: 'Sagar Pagar', status: 'approved' },
                  { title: 'First Approval', subtitle: 'Sudhanshu Singh', status: 'approved' },
                  { title: 'Second Approval', subtitle: 'Ashok Kori', status: 'pending' },
                  { title: 'Third Approval', subtitle: 'Hiren Ghelani', status: 'rejected' },
                  { title: 'First Finalizer', subtitle: 'Hiren Ghelani', status: 'rejected' },
                  { title: 'Second Finalizer', subtitle: 'Hiren Ghelani', status: 'pending' },
                  { title: 'Completed', subtitle: 'Jinen Ghelani', status: 'pending' },
                ]}
              />
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
