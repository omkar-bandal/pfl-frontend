/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useGetInwardRegisterForViewById } from '@prime-fresh/inventory/modules';
import { BtnSmall, PageTitle, ProgressStep, ProgressStepper } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { Check, Close, Message, Download } from '@mui/icons-material';
import { convertInTitleCase, formatAddress, useGetAllCompaniesData } from '@prime-fresh/shared/modules';
import React, { useRef, useState } from 'react';
import styles from './inwared-register.module.css';
import { usePermission } from '@prime-fresh/modules';
import { useReactToPrint } from 'react-to-print';

export const InwardRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const Id = id ? id : '';
  const { canDownload } = usePermission('inward-register');
  const [reason, setReason] = useState('');

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data, isLoading: isInwardLoading } = useGetInwardRegisterForViewById(Id);
  const inwardData = data?.data ? data.data : null;
  const inwardSourceData = inwardData?.selectedParty as any;
  console.log('Inward Data: ', inwardData);

  const { data: companyData, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  console.log(companyData?.data);
  const company = companyData?.data ? companyData.data.find((comp) => comp.name === inwardData?.companyName) : null;

  const approvalData: ProgressStep[] = [
    { title: 'Created', subtitle: 'Sagar Pagar', status: 'approved' },
    { title: 'Approved', subtitle: 'Sudhanshu Singh', status: 'approved' },
    { title: 'Completed', subtitle: 'Jinen Ghelani', status: 'pending' },
  ];

  const firstGridData = [
    { title: 'Inward Type:', value: convertInTitleCase(inwardData?.inwardType || '') },
    { title: 'Refered GRN:', value: convertInTitleCase(inwardData?.grnNo || '') },
    { title: 'Refered Delivery Challan:', value: convertInTitleCase(inwardData?.deliveryChallanNo || '') },
    { title: 'Location:', value: convertInTitleCase(inwardData?.location || '') },
    { title: 'Date of Inward:', value: inwardData?.date },
    { title: 'Batch No:', value: inwardData?.batchNo ? inwardData.batchNo.toUpperCase() : '' },
  ];

  const vendorGridData = [
    { title: 'Source: ', value: inwardData?.source },
    { title: 'Vendor Name: ', value: inwardSourceData?.companyName },
    { title: 'Vendor Code: ', value: inwardSourceData?.vendorCode },
    { title: 'Vendor Category: ', value: inwardSourceData?.category },
    { title: 'Vendor Subcategory: ', value: inwardSourceData?.subcategory },
    { title: 'Contact Person: ', value: inwardSourceData?.contactFName },
    { title: 'Address: ', value: formatAddress(inwardSourceData?.officeAddress) },
  ];

  const farmerGridData = [
    { title: 'Source: ', value: inwardData?.source },
    { title: 'Farmer Name: ', value: inwardSourceData?.fullname },
    { title: 'Farmer Code: ', value: inwardSourceData?.farmerCode },
    { title: 'Contact No: ', value: inwardSourceData?.primaryMobileNo },
    { title: 'Farm Address: ', value: formatAddress(inwardSourceData?.farmAddress) },
    { title: 'Residential Address: ', value: formatAddress(inwardSourceData?.residensialAddress) },
  ];

  const sourceGridData = inwardData?.source === 'vendor' ? vendorGridData : farmerGridData;

  const secondGridData = [
    { title: 'Total Weight in Kg: ', value: `${Number(inwardData?.totalWeightInKg)} Kg` },
    { title: 'Purchased Quantity: ', value: `${Number(inwardData?.purchasedQty)} Kg` },
    { title: 'Inward Quantity in Kg:', value: `${Number(inwardData?.inwardQtyInKg)} Kg` },
    { title: 'Inward Cost:', value: `${Number(inwardData?.inwardCost)} Rs` },
    {
      title: 'Inward By:',
      value: convertInTitleCase(inwardData?.inwardBy || ''),
    },
    { title: 'Purchased By: ', value: convertInTitleCase(inwardData?.purchasedBy || '') },
    { title: 'Remarks:', value: convertInTitleCase(inwardData?.remarks || '') },
  ];

  const signatureLabels = ['Prepared By', 'Approved By', 'Approved By'];
  // return isLoading ? (
  //   <Box flex={1}>
  //     <LinearProgress />
  //   </Box>
  // ) : (
  //   <Box flex={1}>
  //     <PageTitle pagetitle="Inward Register" />
  //     <DataViewer data={inwardData || []} config={inwardRegisterViewConfig} />
  //   </Box>
  // );
  return (
    <Container maxWidth="xl">
      {isInwardLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1, marginY: 1 }}>
          <Grid container rowSpacing={1} marginBottom={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Inward Register" />
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
                <header className={`${styles.header} ${styles.px}`}>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>INWARD REGISTER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{company?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{company?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {company?.gstNo}, FASSAI No.: {company?.fassaiNo}
                    </div>
                  </div>
                  <div className={styles.logo}>
                    <img src={company?.logo} alt="Logo" />
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
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {sourceGridData.map((data, index) => (
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
                      {inwardData?.inwardProducts.map((product, index) => (
                        <tr key={index}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(product.productName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.uom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.quantity}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.unitPrice}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {secondGridData.map((data, index) => (
                    <React.Fragment key={index}>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
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
