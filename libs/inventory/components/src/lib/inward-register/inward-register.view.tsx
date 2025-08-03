/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { useGetInwardRegisterForViewById } from '@prime-fresh/inventory/modules';
import { BtnSmall, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';
import { Check, Close, Download, ChevronRight } from '@mui/icons-material';
import { convertInTitleCase, formatAddress, getDocStatusColor, useGetAllCompaniesData, useUpdateDocStatusWithOneApproval } from '@prime-fresh/shared/modules';
import React, { useRef, useState } from 'react';
import styles from './inwared-register.module.css';
import { authState, useActions, useAppSelector, usePermission } from '@prime-fresh/modules';
import { useReactToPrint } from 'react-to-print';

export const InwardRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const inwardId = id ? id : '';
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  const { canDownload } = usePermission('inward-register');
  const [reason, setReason] = useState('');
  const { openDrawer } = useActions();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data, isLoading: isInwardLoading, refetch } = useGetInwardRegisterForViewById(inwardId);
  const inwardData = data?.data ? data.data : null;
  const inwardSourceData = inwardData?.selectedParty as any;
  console.log('Inward Data: ', inwardData);

  const { data: companyData, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const company = companyData?.data ? companyData.data.find((comp) => comp.name === inwardData?.companyName) : null;

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

  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: inwardData?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: inwardData?.approvalSummary?.firstApproved?.name || '',
      description: inwardData?.approvalSummary?.firstApproved?.reason || '',
      status: inwardData?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: inwardData?.overAllStatus || 'hold'
    },
  ];
  const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithOneApproval(inwardId);
  const changeInwardRegisterStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Arrival quality report ${status} successfully.`)
        refetch();
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of arrival quality report.'));
  };
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
                {inwardData?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Approve"
                    icon={<Check fontSize="inherit" />}
                    color="success"
                    disabled={isPending && !isError}
                    onClick={() => changeInwardRegisterStatus('approved')}
                  />}
                {inwardData?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Disapprove"
                    icon={<Close fontSize="inherit" />}
                    color="error"
                    disabled={isPending && !isError}
                    onClick={() => changeInwardRegisterStatus('reject')}
                  />}
                {/* <BtnSmall label="Query" icon={<Message />} color="warning" /> */}
              {canDownload && (
                  <BtnSmall
                    label="Download"
                    icon={<Download />}
                    color="info"
                    onClick={() => reactToPrintFn()}
                  />
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
                  <Typography variant='h6' component='div' sx={{ fontWeight: 700, color: '#595959' }}>Approval Summary</Typography>
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(inwardData?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(inwardData?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(inwardData?.overAllStatus || '')}
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
                        {(inwardData?.inwardProducts.length || 0) < 5 && Array(5 - (inwardData?.inwardProducts?.length || 0)).fill(null).map(() => (
                          <tr className={styles.tableEmptyRows}>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
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
