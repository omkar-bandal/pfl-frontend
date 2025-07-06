import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import styles from './pmp-voucher.module.css';
import { Check, Close, Message, Download } from '@mui/icons-material';
import { convertInTitleCase, formatAddress, useGetAllCompaniesData } from '@prime-fresh/shared/modules';
import { Box, Grid, LinearProgress, Typography, TextField, Container } from '@mui/material';
import { useGetPackingMeterialPaymentVoucherForViewById } from '@prime-fresh/purchase/modules';
import { BtnSmall, formatCurrency, PageTitle, ProgressStep, ProgressStepper } from '@prime-fresh/ui_shared';
import { usePermission } from '@prime-fresh/modules';

export const PackingMaterialPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('packaging-material-voucher');
  // const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const pmpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading: isVoucherLoading } = useGetPackingMeterialPaymentVoucherForViewById(pmpVoucherId);
  const pmpVoucher = data?.data ? data.data : null;
  console.log('pmpVoucher : ', pmpVoucher);
  const { data: companies, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const companyDetails = companies?.data ? companies.data.find((comp) => comp.name === pmpVoucher?.companyName) : null;

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
              <BtnSmall label="Approve" icon={<Check fontSize="inherit" />} color="success" />
              <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" />
              <BtnSmall label="Query" icon={<Message />} color="warning" />
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
                    <span className={`${styles.textMD} ${styles.textBold}`}>{pmpVoucher?.voucherNo?.toUpperCase()}</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>PACKING MATERIAL PAYMENT VOUCHER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{companyDetails?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{companyDetails?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {companyDetails?.gstNo}, FASSAI No.: {companyDetails?.fassaiNo}
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
