/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './rfpa.module.css';
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetRFPAForViewById } from '@prime-fresh/purchase/modules';
import { BtnSmall, PageTitle, ProgressStepper } from '@prime-fresh/ui_shared';
import { Check, Close, Download, Message } from '@mui/icons-material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const RFPAView = () => {
  const { id } = useParams<{ id: string }>();
  const rfpaId = id ? id : '';
  const { data, isLoading } = useGetRFPAForViewById(rfpaId);
  const rfpa = data?.data ? data.data : null;

  const [reason, setReason] = React.useState('');
  const rfpaLocField = [
    { title: 'Created Date:', value: rfpa?.createdDate || '' },
    { title: 'Created Time:', value: rfpa?.createdTime || '' },
    { title: 'Purchase Location:', value: rfpa?.purchaseLocation ? rfpa?.purchaseLocation : rfpa?.otherPurchaseLoc },
    {
      title: 'Purchase For Sales Location:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
    { title: 'Source:', value: rfpa?.source },
  ];

  const rfpaVendorField = [
    { title: 'Vendor Name:', value: rfpa?.createdDate || '' },
    { title: 'Vendor Code:', value: rfpa?.createdTime || '' },
    { title: 'Contact Person:', value: rfpa?.source },
    { title: 'Company Email:', value: rfpa?.purchaseLocation ? rfpa?.purchaseLocation : rfpa?.otherPurchaseLoc },
    {
      title: 'Company Contact No:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
    {
      title: 'Company Address:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
  ];

  const rfpaFarmerField = [
    { title: 'Farmer Name:', value: rfpa?.createdDate || '' },
    { title: 'Farmer Code:', value: rfpa?.createdTime || '' },
    { title: 'Farmer Email:', value: rfpa?.purchaseLocation ? rfpa?.purchaseLocation : rfpa?.otherPurchaseLoc },
    {
      title: 'Farmer Contact No:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
    {
      title: 'Farmer Address:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
  ];

  const paymentInfoField = [
    { title: 'Payment Mode:', value: convertInTitleCase(rfpa?.paymentInfo.paymentMode || '') },
    { title: 'Payment Terms:', value: `${Number(rfpa?.paymentInfo.paymentTerms)} Days` },
    { title: 'Payment Date:', value: rfpa?.paymentInfo.paymentDate },
    { title: 'Credit Period:', value: `${Number(rfpa?.paymentInfo.creditPeriod)} Days` },
    { title: 'Due Date:', value: rfpa?.paymentInfo.dueDate },
    { title: 'Advanced Paid Amount:', value: `Rs. ${rfpa?.paymentInfo.advancePaidAmt}` },
    { title: 'Validity Of Quote:', value: rfpa?.paymentInfo.validityOfQuote },
    { title: 'Delivery Receiving Person:', value: convertInTitleCase(rfpa?.deliveryReceivingPerson || '') },
    { title: 'Packing Instruction:', value: convertInTitleCase(rfpa?.packingInstruction || '') },
    { title: 'Remark:', value: convertInTitleCase(rfpa?.remark || '') },
  ];

  const signatureLabels = ['Created By', 'Approved By', 'Receiver Sign'];
  const rfpaSourceField = rfpa?.source === 'vendor' ? rfpaVendorField : rfpaFarmerField;
  return (
    <Container maxWidth="xl">
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
              <BtnSmall label="Download" icon={<Download />} color="info" />
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
              <ProgressStepper
                steps={[
                  { title: 'Created', subtitle: 'Sagar Pagar', status: 'approved' },
                  { title: 'Approved', subtitle: 'Sudhanshu Singh', status: 'approved' },
                  { title: 'Completed', status: 'pending' },
                ]}
              />
            </Grid>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div className={styles.printAreaContainer}>
              <div className={styles.mainContainer}>
                <header className={styles.header}>
                  <div className={styles.rfpaNo}>
                    <span className={`${styles.textSM} ${styles.textBold} ${styles.mb}`}>RFPA No.</span>
                    <span className={`${styles.textMD} ${styles.textBold}`}>PFL-LP-1306250001</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>REQUEST FOR PURCHASE APPROVAL</div>
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
                  {rfpaLocField.map((data, index) => (
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
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {rfpaSourceField.map((data, index) => (
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
                  <table className={styles.rfpaTable}>
                    <thead>
                      <tr>
                        <th className={`${styles.srNoCol} ${styles.textSM} ${styles.textBold}`}>Sr.No.</th>
                        <th className={`${styles.productCol} ${styles.textSM} ${styles.textBold}`}>Product</th>
                        <th className={`${styles.quantityCol} ${styles.textSM} ${styles.textBold}`}>Quantity</th>
                        <th className={`${styles.uomCol} ${styles.textSM} ${styles.textBold}`}>UoM</th>
                        <th className={`${styles.unitPriceCol} ${styles.textSM} ${styles.textBold}`}>Unit Price</th>
                        <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rfpa?.rfpaProducts.map((product, index) => (
                        <tr>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(product.productName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.quantity}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.uom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.unitPrice}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {paymentInfoField.map((data, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`${styles.gridItem} ${
                          data.title === 'Packing Instruction:' || data.title === 'Remark:'
                            ? styles.span_3
                            : styles.span_3
                        }`}
                      >
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title} </span>
                      </div>
                      <div
                        className={`${styles.gridItem} ${
                          data.title === 'Packing Instruction:' || data.title === 'Remark:'
                            ? styles.span_9
                            : styles.span_3
                        }`}
                      >
                        <span className={styles.textSM}>{data.value}</span>
                      </div>
                    </React.Fragment>
                  ))}
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

//
// const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
// const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
// const { data: branches } = useGetBranchesPartialData();
// const locations = branches?.data ? branches.data : [];
// return (
//   <Box sx={{ flex: 1, padding: 1 }}>
//     {isLoading ? (
//       <Box sx={{ flex: 1 }}>
//         <LinearProgress />
//       </Box>
//     ) : (
//       <DataViewer config={rfpaPreviewConfig} data={rfpa} />
//     )}
//   </Box>
// );
