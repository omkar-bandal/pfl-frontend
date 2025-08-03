/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import styles from './rfpa.module.css';
import { Box, Container, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetRFPAForViewById } from '@prime-fresh/purchase/modules';
import { BtnSmall, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { Check, ChevronRight, Close, Download } from '@mui/icons-material';
import { convertInTitleCase, formatAddress, getDocStatusColor, useGetAllCompaniesData, useUpdateDocStatusWithOneApproval } from '@prime-fresh/shared/modules';
import { authState, useActions, useAppSelector, usePermission } from '@prime-fresh/modules';
import { useReactToPrint } from 'react-to-print';

export const RFPAView = () => {
  const { id } = useParams<{ id: string }>();
  const rfpaId = id ? id : '';
  const { canDownload } = usePermission('rfpa');
  const { openDrawer } = useActions();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [reason, setReason] = React.useState('');
  const { data, isLoading, refetch } = useGetRFPAForViewById(rfpaId);
  const rfpa = data?.data ? data.data : null;
  console.log('RFPA data: ', rfpa);

  const rfpaSourceData = rfpa?.selectedParty as any;

  const { data: companyData, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  const company = companyData?.data ? companyData.data.find((comp) => comp.name === rfpa?.companyName) : null;
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  console.log('Username: ', username, 'Created By', rfpa?.createdBy);
  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: rfpa?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: rfpa?.approvalSummary?.firstApproved?.name || '',
      description: rfpa?.approvalSummary?.firstApproved?.reason || '',
      status: rfpa?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: rfpa?.overAllStatus || 'hold'
    },
  ];
  const rfpaLocField = [
    { title: 'Created Date:', value: rfpa?.createdDate || '' },
    { title: 'Created Time:', value: rfpa?.createdTime || '' },
    { title: 'Purchase Location:', value: rfpa?.purchaseLocation ? rfpa?.purchaseLocation : rfpa?.otherPurchaseLoc },
    {
      title: 'Purchase For Sales Location:',
      value: rfpa?.purchaseForSalesLocation ? rfpa?.purchaseForSalesLocation : rfpa?.otherPurchaseForSalesLoc,
    },
  ];

  const rfpaVendorField = [
    { title: 'Source:', value: rfpa?.source },
    { title: 'Vendor Name:', value: rfpaSourceData?.companyName || '' },
    { title: 'Vendor Code:', value: rfpaSourceData?.vendorCode || '' },
    { title: 'Contact Person:', value: rfpaSourceData?.contactPersonName || '' },
    { title: 'Company Email:', value: rfpaSourceData?.officeEmail || '' },
    { title: 'Company Contact No:', value: rfpaSourceData?.officeContactNo || '' },
    { title: 'Company Address:', value: formatAddress(rfpaSourceData?.officeAddress) },
  ];

  const rfpaFarmerField = [
    { title: 'Source:', value: rfpa?.source },
    { title: 'Farmer Name:', value: rfpaSourceData?.fullName || '' },
    { title: 'Farmer Code:', value: rfpaSourceData?.farmerCode || '' },
    { title: 'Farmer Contact No:', value: rfpaSourceData?.primaryMobileNo || '' },
    { title: 'Farm Address: ', value: formatAddress(rfpaSourceData?.farmAddress) || '' },
    { title: 'Residential Address: ', value: formatAddress(rfpaSourceData?.residensialAddress) || '' },
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

  const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithOneApproval(rfpaId);
  const changeRFPAStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Request For Purchase Approval ${status} successfully.`)
        refetch();
        setReason('');
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of RFPA.'));
  };
  return (
    <Container maxWidth="xl">
      {isCompanyDataLoading && isLoading ? (
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
                {rfpa?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Approve"
                    icon={<Check fontSize="inherit" />}
                    color="success"
                    disabled={isPending && !isError}
                    onClick={() => changeRFPAStatus('approved')}
                  />}
                {rfpa?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Disapprove"
                    icon={<Close fontSize="inherit" />}
                    color="error"
                    disabled={isPending && !isError}
                    onClick={() => changeRFPAStatus('reject')}
                  />}
                {/* <BtnSmall label="Query" icon={<Message />} color="warning" /> */}
                {canDownload &&
                  <BtnSmall
                    label="Download"
                    icon={<Download />}
                    color="info"
                    onClick={() => reactToPrintFn()}
                  />}
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
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(rfpa?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(rfpa?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(rfpa?.overAllStatus || '')}
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
                  <div className={styles.rfpaNo}>
                    <span className={`${styles.textSM} ${styles.textBold} ${styles.mb}`}>RFPA No.</span>
                      <span className={`${styles.textMD} ${styles.textBold}`}>{rfpa?.rfpaId}</span>
                  </div>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>REQUEST FOR PURCHASE APPROVAL</div>
                      <div className={`${styles.companyName} ${styles.textLG}`}>{company?.name}</div>
                      <div className={`${styles.address} ${styles.textXS}`}>{company?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                        GSTN: {company?.gstNo}, FASSAI No.: {company?.fassaiNo}
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
                        <tr key={index}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(product.productName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.quantity}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.uom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.unitPrice}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.amount}</td>
                        </tr>
                      ))}
                        {(rfpa?.rfpaProducts.length || 0) < 5 && Array(5 - (rfpa?.rfpaProducts?.length || 0)).fill(null).map((_, index) => (
                          <tr key={index} className={styles.tableEmptyRows}>
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
                  {paymentInfoField.map((data, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`${styles.gridItem} ${data.title === 'Packing Instruction:' || data.title === 'Remark:'
                          ? styles.span_3
                          : styles.span_3
                          }`}
                      >
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title} </span>
                      </div>
                      <div
                        className={`${styles.gridItem} ${data.title === 'Packing Instruction:' || data.title === 'Remark:'
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
