/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import styles from './grn.module.css';
import { Box, Container, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  grnDataState,
  setReasonForGRNAction,
  useGetGRNForViewById,
} from '@prime-fresh/purchase/modules';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, DrawerContainer, formatCurrency, formatDate, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import {
  farmersDataStates,
  setSelectedFarmerPartialData,
  setSelectedVendorPartialData,
  vendorsDataStates,
} from '@prime-fresh/admin/modules';
import { authState, useActions, useAppDispatch, useAppSelector, usePermission } from '@prime-fresh/modules';
import {
  convertInTitleCase,
  formatAddress,
  getDocStatusColor,
  useGetFarmersPartialData,
  useGetVendorsPartialData,
  useUpdateDocStatusWithThreeApproval,
} from '@prime-fresh/shared/modules';
import { images } from '@prime-fresh/assets';
import { Check, Close, Download, ChevronRight } from '@mui/icons-material';

export const GRNView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('grn');
  const { reasonForGRNAction } = useAppSelector(grnDataState);
  const dispatch = useAppDispatch();
  const { openDrawer } = useActions();
  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';
  const { data, isLoading, refetch } = useGetGRNForViewById(grnId);
  const grn = data?.data ? data.data : null;
  console.log('GRN by ID:', grn);
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');

  const borderColor = grn?.locationType === 'cc' ? `1px solid red` : `1px solid green`;
  const textColor = grn?.locationType === 'cc' ? `red` : `green`;
  const tableHeaderBackground = grn?.locationType === 'cc' ? `#FFCDD2` : `#C8E6C9`;
  const { data: vendors } = useGetVendorsPartialData();
  const Vendors = vendors?.data ? vendors.data : [];
  const { data: farmers } = useGetFarmersPartialData();
  const Farmers = farmers?.data ? farmers.data : [];

  useEffect(() => {
    if (grn?.source === 'vendor') {
      const vendor = Vendors?.find((vendor) => vendor.companyName === grn.selectedParty);
      dispatch(setSelectedVendorPartialData(vendor));
    } else {
      const farmer = Farmers?.find((farmer) => farmer.fullName === grn?.selectedParty);
      dispatch(setSelectedFarmerPartialData(farmer));
    }
  });
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);

  const handleReasonChange = (reason: string) => {
    dispatch(setReasonForGRNAction(reason));
  };

  const approvalSummary: StepperData[
  ] = [
      {
        title: 'Created',
        subtitle: grn?.createdBy || '',
        status: 'approved'
      },
      {
        title: 'Verified',
        subtitle: grn?.approvalSummary?.verified?.name || '',
        description: grn?.approvalSummary?.verified?.reason || '',
        status: grn?.approvalSummary?.verified?.status || 'hold'
      },
      {
        title: 'First Approval',
        subtitle: grn?.approvalSummary?.firstApproved?.name || '',
        description: grn?.approvalSummary?.firstApproved?.reason || '',
        status: grn?.approvalSummary?.firstApproved?.status || 'hold'
      },
      {
        title: 'Second Approval',
        subtitle: grn?.approvalSummary?.secondApproved?.name || '',
        description: grn?.approvalSummary?.secondApproved?.reason || '',
        status: grn?.approvalSummary?.secondApproved?.status || 'hold',
        disabled: grn?.approvalSummary?.secondApproved === null ? true : false
      },
      {
        title: 'Third Approval',
        subtitle: grn?.approvalSummary?.thirdApproved?.name || '',
        description: grn?.approvalSummary?.thirdApproved?.reason || '',
        status: grn?.approvalSummary?.thirdApproved?.status || 'hold',
        disabled: grn?.approvalSummary?.secondApproved === null ? true : false
      },
      {
        title: 'First Finalizer',
        subtitle: grn?.approvalSummary?.firstFinalized?.name || '',
        description: grn?.approvalSummary?.firstFinalized?.reason || '',
        status: grn?.approvalSummary?.firstFinalized?.status || 'hold'
      },
      {
        title: 'Second Finalizer',
        subtitle: grn?.approvalSummary?.secondFinalized?.name || '',
        description: grn?.approvalSummary?.secondFinalized?.reason || '',
        status: grn?.approvalSummary?.secondFinalized?.status || 'hold'
      },
      {
        title: 'Completed',
        status: grn?.approvalSummary?.secondFinalized?.status || 'hold'
      },
    ]
  const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithThreeApproval(grnId);
  const changeGRNStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reasonForGRNAction,
    })
      .then(() => {
        dispatch(setReasonForGRNAction(''));
        toast.success(actionRes?.message ? actionRes.message : `GRN ${status} successfully.`);
        refetch();
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of GRN.'));
  };

  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box flex={1}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Goods Received Note" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {grn?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Approve"
                    icon={<Check fontSize="inherit" />}
                    color="success"
                  onClick={() => changeGRNStatus('approved')}
                  disabled={grn?.overAllStatus === 'reject' || (isPending && !isError) ? true : false}
                />}
                {grn?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                  label="Disapprove"
                  icon={<Close fontSize="inherit" />}
                  color="error" onClick={() => changeGRNStatus('reject')}
                  disabled={grn?.overAllStatus === 'reject' || (isPending && !isError) ? true : false}
                />}
                {/* <BtnSmall
                  label="Query"
                  icon={<Message />}
                  color="warning"
                  disabled={grn?.overAllStatus === 'reject' ? true : false}
                /> */}
              {canDownload && (
                  <BtnSmall
                    label="Download"
                    icon={<Download />}
                    color="info"
                    onClick={() => reactToPrintFn()}
                  />)}
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
                value={reasonForGRNAction}
                onChange={(e) => handleReasonChange(e.target.value)}
              />
            </Grid>
              <Grid item xs={12}>
                <DrawerContainer>
                  <Typography variant='h6' component='div' sx={{ fontWeight: 700, color: '#595959' }}>Approval Summary</Typography>
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(grn?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(grn?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(grn?.overAllStatus || '')}
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
            <div className={`${styles['document-container']}`} style={{ border: borderColor }} ref={contentRef}>
              {/* Header */}
              <header className={`${styles.header}`} style={{ borderBottom: borderColor }}>
                <div className={styles['company-details']}>
                  <div className={styles['full-width']}>
                    <span className={`${styles['text-s']} ${styles['text-bold']}`} style={{ color: textColor }}>
                      GOODS RECEIPT NOTE
                    </span>
                  </div>
                  <div className={styles['full-width']}>
                    <span className={`${styles['text-xl']} ${styles['text-bold']}`} style={{ color: textColor }}>
                      Prime Fresh Limited
                    </span>
                  </div>
                  <div className={`${styles['full-width']} ${styles.office}`}>
                    <span className={styles['text-xs']} style={{ color: textColor }}>
                      218 / 219, Wakad Business Bay, Behind TipTop International Hotel, Wakad, Pune.
                    </span>
                    <span className={styles['text-xs']} style={{ color: textColor }}>
                      GSTN: PWGST32457890123
                    </span>
                  </div>
                </div>
                <div className={styles.logo}>
                  <img src={images.sidebarlogo} alt="Logo" width="120px" height="80px" />
                </div>
              </header>

              {/* Details Grid */}
              <div className={styles['details-grid']}>
                {[
                    { label: 'GRN No:', value: grn?.grnNo ? grn?.grnNo.toUpperCase() : '' },
                    { label: 'Purchase Instruction By:', value: convertInTitleCase(grn?.purchaseInstructionsBy || '') },
                    { label: 'Source:', value: convertInTitleCase(grn?.source || '') },
                    { label: 'Created By:', value: grn?.createdBy },
                  { label: 'Created Date:', value: grn?.createdDate },
                    { label: 'Created Time:', value: grn?.createdTime },
                    { label: 'Purchase Location:', value: convertInTitleCase(grn?.purchaseLocation || '') },
                    { label: 'Purchase For Which Location:', value: convertInTitleCase(grn?.purchaseForSalesLocation || '') },
                ].map((item, index) => (
                  <div key={index} className={`${styles['details-item']} ${styles['span-4']}`}>
                    <span
                      className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </span>
                    <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{item.value || ''}</span>
                  </div>
                ))}
              </div>
              <div className={`${styles['details-grid']}`}>
                  {grn?.source === 'vendor' ?
                    (
                      <>
                        <div className={`${styles['details-item']} ${styles['span-4']}`}>
                          <span
                            className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                            style={{ color: textColor }}
                          >
                            Vendor Name:
                          </span>
                          <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{convertInTitleCase(grn?.selectedParty || '')}</span>
                        </div>
                        <div className={`${styles['details-item']} ${styles['span-4']}`}>
                          <span
                            className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                            style={{ color: textColor }}
                          >
                            Vendor Code:
                          </span>
                          <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{selectedVendorPartialData?.vendorCode ? selectedVendorPartialData?.vendorCode.toUpperCase() : ''}</span>
                        </div>
                        <div className={`${styles['details-item']} ${styles['span-4']}`}>
                          <span
                            className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                            style={{ color: textColor }}
                          >
                            Contact Person:
                          </span>
                          <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{convertInTitleCase(selectedVendorPartialData?.contactPersonName || '')}</span>
                        </div>
                        <div className={`${styles['details-item']} ${styles['span-4']}`}>
                          <span
                            className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                            style={{ color: textColor }}
                          >
                            Contact No:
                          </span>
                          <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{selectedVendorPartialData?.officeContactNo}</span>
                        </div>
                        <div className={`${styles['details-item']} ${styles['span-8']}`}>
                          <span
                            className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                            style={{ color: textColor }}
                          >
                            Address:
                          </span>
                          <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{formatAddress(selectedVendorPartialData?.officeAddress)}</span>
                        </div>
                      </>
                    ) :
                    (<>
                      <div className={`${styles['details-item']} ${styles['span-4']}`}>
                        <span
                          className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                          style={{ color: textColor }}
                        >
                          Farmer Name:
                        </span>
                        <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{convertInTitleCase(grn?.selectedParty || '')}</span>
                      </div>
                      <div className={`${styles['details-item']} ${styles['span-4']}`}>
                        <span
                          className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                          style={{ color: textColor }}
                        >
                          Farmer Code:
                        </span>
                        <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{selectedFarmerPartialData?.farmerCode ? selectedFarmerPartialData?.farmerCode.toUpperCase() : ''}</span>
                      </div>
                      <div className={`${styles['details-item']} ${styles['span-4']}`}>
                        <span
                          className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                          style={{ color: textColor }}
                        >
                          Contact No:
                        </span>
                        <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{selectedFarmerPartialData?.primaryMobileNo}</span>
                      </div>
                      <div className={`${styles['details-item']} ${styles['span-12']}`}>
                        <span
                          className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                          style={{ color: textColor }}
                        >
                          Residential Address:
                        </span>
                        <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{formatAddress(selectedFarmerPartialData?.residensialAddress)}</span>
                      </div>
                      <div className={`${styles['details-item']} ${styles['span-12']}`}>
                        <span
                          className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                          style={{ color: textColor }}
                        >
                          Farm Address:
                        </span>
                        <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{formatAddress(selectedFarmerPartialData?.farmAddress)}</span>
                      </div>
                    </>
                    )}
              </div>
              {/* Product Table */}
              <table className={styles['product-table']} style={{ border: borderColor }}>
                <thead>
                  <tr style={{ backgroundColor: tableHeaderBackground }}>
                    <th className={styles['sr-col']} style={{ border: borderColor, color: textColor }}>
                      Sr.No.
                    </th>
                    <th className={styles['product-col']} style={{ border: borderColor, color: textColor }}>
                      Product
                    </th>
                    <th className={styles['qty-col']} style={{ border: borderColor, color: textColor }}>
                      Quantity
                    </th>
                    <th className={styles['uom-col']} style={{ border: borderColor, color: textColor }}>
                      UoM
                    </th>
                    <th className={styles['price-col']} style={{ border: borderColor, color: textColor }}>
                      Unit Price
                    </th>
                    <th className={styles['amt-col']} style={{ border: borderColor, color: textColor }}>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {grn?.grnProducts.map((product, index) => (
                    <tr key={index}>
                      <th className={styles['sr-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {index + 1}
                      </th>
                      <th className={styles['product-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {convertInTitleCase(product.productName || '')}
                      </th>
                      <th className={styles['qty-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {product.quantity}
                      </th>
                      <th className={styles['uom-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {product.uom}
                      </th>
                      <th className={styles['price-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {product.unitPrice}
                      </th>
                      <th className={styles['amt-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {product.amount}
                      </th>
                    </tr>
                  ))}
                    {(grn?.grnProducts.length || 0) < 5 && Array(5 - (grn?.grnProducts?.length || 0)).fill(null).map((_, index) => (
                      <tr key={index} className={styles.tableEmptyRows}>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                        <td className={styles.tableEmptyRows} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}></td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr className={styles['total-row']}>
                    <td colSpan={5} style={{ textAlign: 'end', border: borderColor }}>
                      <span className={`${styles['text-sm']} ${styles['text-bold']}`} style={{ color: textColor }}>
                        Subtotal
                      </span>
                    </td>
                    <td style={{ border: borderColor }}>{formatCurrency(Number(grn?.subTotalAmt) || 0)}</td>
                  </tr>
                </tfoot>
              </table>
              <div className={`${styles['details-grid']}`} style={{ border: borderColor }}>
                {[
                  { label: 'Freight:', value: formatCurrency(Number(grn?.freight) || 0) },
                  { label: 'Other Charges:', value: formatCurrency(Number(grn?.otherCharges) || 0) },
                  { label: 'Total Amount:', value: formatCurrency(Number(grn?.totalAmt) || 0) },
                  {
                    label: 'Amount in Words:',
                    value: convertInTitleCase(grn?.amtWords || ''),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${styles['details-item']} ${item.label === 'Amount in Words:' ? styles['span-12'] : styles['span-4']
                      }`}
                    style={{ border: borderColor }}
                  >
                    <span
                      className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </span>
                    <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className={`${styles['details-grid']}`}>
                {[
                    { label: 'Received Through:', value: convertInTitleCase(grn?.receivedThrough || '') },
                  { label: 'Vehicle Number:', value: grn?.vehicleNo?.toUpperCase() },
                  { label: 'Crates In:', value: grn?.cratesIn },
                  { label: 'Time In:', value: grn?.timeIn },
                    { label: 'Purchase By:', value: convertInTitleCase(grn?.purchasedBy || '') },
                    { label: 'RM Name:', value: convertInTitleCase(grn?.rmn || '') },
                    { label: 'Delivery Receiving Person:', value: convertInTitleCase(grn?.deliveryReceivingPerson || '') },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${styles['details-item']} ${item.label === 'Delivery Receiving Person:' ? styles['span-6'] : styles['span-3']
                      }`}
                  >
                    <span
                      className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </span>
                    <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{item.value}</span>
                  </div>
                ))}
              </div>
                <div style={{ width: '100%', border: borderColor, padding: 0, display: 'flex' }}>
                <div style={{ width: '75%' }} className={`${styles['payment-terms-grid']}`}>
                  {[
                    { label: 'Payment Mode', value: convertInTitleCase(grn?.paymentInfo.paymentMode || '') },
                    { label: 'Pyament Terms', value: `${grn?.paymentInfo.paymentTerms} Days` },
                    { label: 'Credit Period', value: `${grn?.paymentInfo.creditPeriod} Days` },
                    { label: 'Payment Date', value: formatDate(grn?.paymentInfo.paymentDate || null) },
                    { label: 'Due Date', value: formatDate(grn?.paymentInfo.dueDate || null) },
                  ].map((item, index) => (
                    <div key={index} className={`${styles['payment-terms-item']}`}>
                      <span
                        className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}
                        style={{ color: textColor, border: borderColor }}
                      >
                        {item.label}
                      </span>
                      <span className={`${styles['text-smr']} ${styles['text-bold']}`} style={{ border: borderColor }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={styles['signature-box']} style={{ border: borderColor }}>
                  <span className={`${styles['text-smr']} ${styles['text-bold']}`} style={{ color: textColor }}>
                    For, PRIME FRESH LIMITED
                  </span>
                  <span className={`${styles['text-xs']}`} style={{ color: textColor }}>
                    Supervisor Signature
                  </span>
                </div>
                </div>
            </div>
          </Box>
        </Box>
      )
      }
    </Container >
  );
};
