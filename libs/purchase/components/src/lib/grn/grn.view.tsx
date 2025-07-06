/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import styles from './grn.module.css';
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  grnDataState,
  setReasonForGRNAction,
  useApproveGRN,
  useGetGRNForViewById,
} from '@prime-fresh/purchase/modules';
import { useReactToPrint } from 'react-to-print';
import { BtnSmall, formatCurrency, formatDate, PageTitle, ProgressStepper, toast } from '@prime-fresh/ui_shared';
import {
  farmersDataStates,
  setSelectedFarmerPartialData,
  setSelectedVendorPartialData,
  vendorsDataStates,
} from '@prime-fresh/admin/modules';
import { useAppDispatch, useAppSelector, usePermission } from '@prime-fresh/modules';
import {
  convertInTitleCase,
  formatAddress,
  useGetFarmersPartialData,
  useGetVendorsPartialData,
} from '@prime-fresh/shared/modules';
import { images } from '@prime-fresh/assets';
import { Check, Close, Message, Download } from '@mui/icons-material';

export const GRNView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('grn');
  const { reasonForGRNAction } = useAppSelector(grnDataState);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';
  const { data, isLoading } = useGetGRNForViewById(grnId);
  const grn = data?.data ? data.data : null;
  console.log('GRN by ID:', grn);

  const borderColor = grn?.locationType === 'cc' ? `1px solid red` : `1px solid green`;
  const textColor = grn?.locationType === 'cc' ? `red` : `green`;
  const tableHeaderBackground = grn?.locationType === 'cc' ? `#FFCDD2` : `#C8E6C9`;
  const { data: vendors } = useGetVendorsPartialData();
  const Vendors = vendors?.data ? vendors.data : [];
  const { data: farmers } = useGetFarmersPartialData();
  const Farmers = farmers?.data ? farmers.data : [];

  useEffect(() => {
    if (grn?.source === 'vendor') {
      const vendor = Vendors?.find((vendor) => vendor.id === grn.selectedParty);
      dispatch(setSelectedVendorPartialData(vendor));
    } else {
      const farmer = Farmers?.find((farmer) => farmer.id === grn?.selectedParty);
      dispatch(setSelectedFarmerPartialData(farmer));
    }
  });
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);

  const handleReasonChange = (reason: string) => {
    dispatch(setReasonForGRNAction(reason));
  };
  const { mutateAsync, data: actionRes } = useApproveGRN(grn?.documentId ? grn?.documentId : '');

  const approveGRN = () => {
    if (grn?.documentDef) {
      mutateAsync({
        documentdef: grn?.documentDef,
        action: 'approve',
        reason: reasonForGRNAction,
      })
        .then(() => toast.success(actionRes?.message))
        .catch((error) => toast.error(`${error}`));
    }
  };

  const rejectGRN = () => {
    if (grn?.documentDef) {
      mutateAsync({
        documentdef: grn?.documentDef,
        action: 'reject',
        reason: reasonForGRNAction,
      });
    }
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
              <BtnSmall
                label="Approve"
                icon={<Check fontSize="inherit" />}
                color="success"
                onClick={() => approveGRN()}
              />
              <BtnSmall label="Reject" icon={<Close fontSize="inherit" />} color="error" onClick={() => rejectGRN()} />
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
                value={reasonForGRNAction}
                onChange={(e) => handleReasonChange(e.target.value)}
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
                  { label: 'GRN No:', value: grn?.grnNo },
                  { label: 'Created Date:', value: grn?.createdDate },
                  { label: 'Created Time:', value: grn?.createdTime },
                  { label: 'Purchase Instruction By:', value: grn?.purchaseInstructionsBy },
                  { label: 'Requested By:', value: grn?.requestedBy?.firstName },
                  { label: 'Base Location:', value: grn?.baseLocation },
                  { label: 'Purchase Location:', value: grn?.purchaseLocation },
                  { label: 'Purchase For Which Location:', value: grn?.purchaseForSalesLocation },
                  { label: 'Source:', value: grn?.source },
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
                {(grn?.source === 'vendor'
                  ? [
                      { label: 'Vendor Name:', value: grn?.selectedParty },
                      { label: 'Vendor Code:', value: selectedVendorPartialData?.vendorCode },
                      { label: 'Contact No:', value: selectedVendorPartialData?.officeContactNo },
                      { label: 'Email:', value: selectedVendorPartialData?.officeEmail },
                      { label: 'Office Address:', value: formatAddress(selectedVendorPartialData?.officeAddress) },
                    ]
                  : [
                      { label: 'Farmer Name:', value: grn?.selectedParty },
                      { label: 'Farmer Code:', value: selectedFarmerPartialData?.farmerCode },
                      { label: 'Contact No:', value: selectedFarmerPartialData?.primaryMobileNo },
                      { label: 'Email:', value: selectedFarmerPartialData?.email },
                      {
                        label: 'Farm Address:',
                        value: formatAddress(selectedFarmerPartialData?.farmAddress),
                      },
                      {
                        label: 'Residential Address:',
                        value: formatAddress(selectedFarmerPartialData?.residensialAddress),
                      },
                    ]
                ).map((item, index) => (
                  <div key={index} className={`${styles['details-item']} ${styles['span-4']}`}>
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
                    <tr>
                      <th className={styles['sr-col']} style={{ border: borderColor, backgroundColor: '#FFFFFF' }}>
                        {index}
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
                    value: grn?.amtWords,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${styles['details-item']} ${
                      item.label === 'Amount in Words:' ? styles['span-12'] : styles['span-4']
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
                  { label: 'Received Through:', value: grn?.receivedThrough },
                  { label: 'Vehicle Number:', value: grn?.vehicleNo?.toUpperCase() },
                  { label: 'Crates In:', value: grn?.cratesIn },
                  { label: 'Time In:', value: grn?.timeIn },
                  { label: 'Purchase By:', value: grn?.purchasedBy },
                  { label: 'RM Name:', value: grn?.rmn },
                  { label: 'Delivery Receiving Person:', value: grn?.deliveryReceivingPerson },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${styles['details-item']} ${
                      item.label === 'Delivery Receiving Person:' ? styles['span-6'] : styles['span-3']
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
      )}
    </Container>
  );
};
