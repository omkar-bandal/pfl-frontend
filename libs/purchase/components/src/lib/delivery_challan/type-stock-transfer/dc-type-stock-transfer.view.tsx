import React, { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, DrawerContainer, formatDate, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { useGetDCTypeStockTransferForViewById } from '@prime-fresh/purchase/modules';
import { convertInTitleCase, getDocStatusColor, useGetAllCompaniesData, useUpdateDocStatusWithTwoApproval } from '@prime-fresh/shared/modules';
import { Box, LinearProgress, Typography, Container, Grid, TextField, Grid2, IconButton } from '@mui/material';
import { Check, Close, Download, ChevronRight } from '@mui/icons-material';
import styles from './dc-type-stock-transfer.module.css';
import { authState, useActions, useAppSelector, usePermission } from '@prime-fresh/modules';

export const DCTypeStockTransferView = () => {
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  const { canDownload } = usePermission('delivery-challan');
  const [reason, setReason] = useState('');
  const { openDrawer } = useActions();
  const { data, isLoading: isDCTypeStockTransferLoading, refetch } = useGetDCTypeStockTransferForViewById(dcId);
  const dcTypeStockTransferData = data?.data ? data.data : null;
  console.log('DC Type Stock Transfer Data: ', dcTypeStockTransferData);

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data: companyData, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  console.log(companyData?.data);
  const company = companyData?.data
    ? companyData.data.find((comp) => comp.name === dcTypeStockTransferData?.companyName)
    : null;

  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: dcTypeStockTransferData?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: dcTypeStockTransferData?.approvalSummary?.firstApproved?.name || '',
      status: dcTypeStockTransferData?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Approved',
      subtitle: dcTypeStockTransferData?.approvalSummary?.secondApproved?.name || '',
      status: dcTypeStockTransferData?.approvalSummary?.secondApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: dcTypeStockTransferData?.approvalSummary?.secondApproved?.status || 'hold'
    },
  ];

  const firstGridData = [
    { title: 'From Location:', value: convertInTitleCase(dcTypeStockTransferData?.fromLocation || '') },
    { title: 'Challan No:', value: dcTypeStockTransferData?.challanNo?.toUpperCase() || '' },
    { title: 'To Location:', value: convertInTitleCase(dcTypeStockTransferData?.toLocation || '') },
    { title: 'Date:', value: formatDate(dcTypeStockTransferData?.createdDate || '') },
  ];

  const secondGridData = [
    { title: 'Net Product Weight: ', value: `${Number(dcTypeStockTransferData?.netProductWeight)} Kg` },
    { title: 'Total Amount: ', value: `${Number(dcTypeStockTransferData?.totalProductAmount)} Rs` },
    { title: 'Amount In Words: ', value: convertInTitleCase(dcTypeStockTransferData?.totalAmtInWords || '') },
    { title: 'Driver Name:', value: convertInTitleCase(dcTypeStockTransferData?.driverName || '') },
    { title: 'Contact No:', value: dcTypeStockTransferData?.contactNo || '' },
    {
      title: 'Vehicle No:',
      value: dcTypeStockTransferData?.vehicleNo ? dcTypeStockTransferData?.vehicleNo.toUpperCase() : '',
    },
  ];

  const signatureLabels = ['Prepared By', 'Verified By', 'Approved By', 'Approved By', 'Approved By'];

  const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithTwoApproval(dcId);
  const changeDCTypeStockTransferStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Delivery Challan ${status} successfully.`)
        refetch();
        setReason('');
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of delivery challan.'));
  };

  return (
    <Container maxWidth="xl">
      {isDCTypeStockTransferLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1, marginY: 1 }}>
          <Grid container rowSpacing={1} marginBottom={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery Challan Only For Stock Transfter" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {dcTypeStockTransferData?.createdBy !== username.split(' ')[0] &&
                <BtnSmall
                  label="Approve"
                  icon={<Check />}
                  color="success"
                  disabled={isPending && !isError}
                  onClick={() => changeDCTypeStockTransferStatus('approved')}
                  />}
                {dcTypeStockTransferData?.createdBy !== username.split(' ')[0] &&
                <BtnSmall
                  label="Disapprove"
                  icon={<Close />}
                  color="error"
                  disabled={isPending && !isError}
                  onClick={() => changeDCTypeStockTransferStatus('reject')}
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
              <Grid2 size={12}>
                <DrawerContainer>
                  <Typography variant='h6' component='div' sx={{ fontWeight: 700, color: '#595959' }}>Approval Summary</Typography>
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(dcTypeStockTransferData?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid2>
              <Grid2 size={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(dcTypeStockTransferData?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(dcTypeStockTransferData?.overAllStatus || '')}
                  </Typography>
                </Typography>
                <InfoTooltip info={`Click here to see complete approval summary.`}>
                  <IconButton size='medium' onClick={() => openDrawer()}>
                    <ChevronRight fontSize='inherit' />
                  </IconButton>
                </InfoTooltip>
              </Grid2>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div className={styles.printAreaContainer} ref={contentRef}>
              <div className={styles.mainContainer}>
                <header className={`${styles.header} ${styles.px}`}>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>DELIVERY CHALLAN</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{company?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{company?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {company?.gstNo}, FASSAI No.: {company?.fassaiNo}
                    </div>
                  </div>
                    <div className={styles.logo}><img src={company?.logo} alt="logo" /></div>
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
                      {dcTypeStockTransferData?.deliveryChallanProducts.map((product, index) => (
                        <tr key={product?.id}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(product.productName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.uom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.quantity}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.unitPrice}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.amount}</td>
                        </tr>
                      ))}
                        {(dcTypeStockTransferData?.deliveryChallanProducts.length || 0) < 5 && Array(5 - (dcTypeStockTransferData?.deliveryChallanProducts?.length || 0)).fill(null).map(() => (
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
                <div className={`${styles.termsConditionContainer}`}>
                  <div className={`${styles.termsConditionBlock} ${styles.px}`}>
                    <span className={`${styles.textSM} ${styles.textBold}`}>Terms & Conditions :</span>
                    {[1, 2, 3, 4].map((num, idx) => (
                      <span key={idx} className={styles.textXS} style={{ display: 'block', margin: '3px 0px' }}>
                        {idx === 0 && '1) Goods once sold / delivered will not be taken back or refunded'}
                        {idx === 1 && '2) We are not responsible for any transit damage,loss or leakage'}
                        {idx === 2 && '3) Subject to Ahmedabad Jurisdiction.'}
                        {idx === 3 && '4) 24% P.A interest will be charged for delayed payment.'}
                      </span>
                    ))}
                  </div>
                  <div className={`${styles.authorizedSignBlock}`}>
                    <span className={`${styles.textSM} ${styles.textBold}`}>For, Prime Fresh Limited</span>
                    <span className={`${styles.textXS}`}>(Authorised Signature)</span>
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
