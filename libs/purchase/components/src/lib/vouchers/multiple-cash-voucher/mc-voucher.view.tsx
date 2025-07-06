import React, { useRef, useState } from 'react';
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { PageTitle, BtnSmall, ProgressStepper, ProgressStep } from '@prime-fresh/ui_shared';
import { useGetMultiCashVoucherForViewById } from '@prime-fresh/purchase/modules';
import styles from './mc-voucher.module.css';
import { Check, Close, Download, Message } from '@mui/icons-material';
import { convertInTitleCase, useGetAllCompaniesData } from '@prime-fresh/shared/modules';
import { usePermission } from '@prime-fresh/modules';

export const MultipleCashVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('multi-cash-voucher');
  // const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const mcVoucherId = voucherid ? voucherid : '';
  const { data, isLoading: isVoucherLoading } = useGetMultiCashVoucherForViewById(mcVoucherId);
  const mcVoucher = data?.data ? data.data : null;
  const { data: companies, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const companyDetails = companies?.data ? companies.data.find((comp) => comp.name === mcVoucher?.companyName) : null;
  console.log(companies?.data);

  const approvalData: ProgressStep[] = [
    { title: 'Created', subtitle: 'Sagar Pagar', status: 'approved' },
    { title: 'First Approval', subtitle: 'Sudhanshu Singh', status: 'approved' },
    { title: 'Second Approval', subtitle: 'Ashok Kori', status: 'pending' },
    { title: 'Third Approval', subtitle: 'Hiren Ghelani', status: 'rejected' },
    { title: 'First Finalizer', subtitle: 'Hiren Ghelani', status: 'rejected' },
    { title: 'Second Finalizer', subtitle: 'Hiren Ghelani', status: 'pending' },
    { title: 'Completed', subtitle: 'Jinen Ghelani', status: 'pending' },
  ];

  const firstGridData = [
    { title: 'Debit / Credit to:', value: convertInTitleCase(mcVoucher?.debitCreditTo || '') },
    { title: 'Location:', value: convertInTitleCase(mcVoucher?.location || '') },
    { title: 'Pay to / Received from:', value: convertInTitleCase(mcVoucher?.payReceivedFrom || '') },
    { title: 'Date:', value: mcVoucher?.createdDate },
  ];

  const secondGridData = [
    { title: 'Payment Mode:', value: convertInTitleCase(mcVoucher?.paymentMode || '') },
    { title: 'Total Amount:', value: `${Number(mcVoucher?.totalAmt)} Rs` },
    { title: 'Amount In Words:', value: convertInTitleCase(mcVoucher?.amtWords || '') },
  ];
  const signatureLabels = ['Prepared By', 'Verified By', 'Approved By', 'Approved By', 'Approved By'];

  return (
    <Container maxWidth="xl">
      {isVoucherLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box flex={1}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Multiple Cash Voucher" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" />
              <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" />
              <BtnSmall label="Query" icon={<Message />} color="warning" />
              {canDownload && (
                <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />
              )}
            </Grid>
            <Grid item xs={12} margin={1}>
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
                    <span className={`${styles.textMD} ${styles.textBold}`}>{mcVoucher?.voucherNo}</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>MULTIPLE CASH VOUCHER</div>
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
                        <th className={`${styles.srNoCol} ${styles.textSM} ${styles.textBold} `}>Sr. No.</th>
                        <th className={`${styles.particularsCol} ${styles.textSM} ${styles.textBold}`}>Particulars</th>
                        <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>Amount (Rs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mcVoucher?.particulars.map((particulars, index) => (
                        <tr key={particulars.id}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={styles.textSM}>{particulars.description}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{particulars.amt}</td>
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
                  {signatureLabels.map((label) => (
                    <div className={styles.signatureBox}>
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
