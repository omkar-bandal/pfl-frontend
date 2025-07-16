import { useParams } from 'react-router-dom';
import { Box, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { BtnSmall, formatDate, PageTitle, ProgressStepper } from '@prime-fresh/ui_shared';
import { useGetAQRForViewById } from '@prime-fresh/inventory/modules';
import { Check, Close, Download, Message } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { usePermission } from '@prime-fresh/modules';
import styles from './aqr.module.css';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const AQRView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { canDownload } = usePermission('aqr');
  const [reason, setReason] = useState<string>('');

  const { id } = useParams<{ id: string }>();
  const Id = id ? id : '';
  const { data, isLoading } = useGetAQRForViewById(Id);
  const aqrData = data?.data ? data.data : null;
  console.log("AQR Data: ", aqrData);

  const firstGridData = [
    { title: 'Product Name:', value: convertInTitleCase(aqrData?.product || '') },
    { title: 'Date of Arrival:', value: formatDate(aqrData?.arrivalDate || '') },
    { title: 'Arrived Quantity:', value: `${aqrData?.arrivedQty} Kg` },
    { title: 'Sampling Quantity:', value: `${aqrData?.samplingQty} Kg` },
    { title: 'Supplier Name:', value: convertInTitleCase(aqrData?.supplierName || '') },
    { title: 'Supplier Location:', value: convertInTitleCase(aqrData?.supplierLocation || '') },
    { title: 'Refered Challan No:', value: convertInTitleCase(aqrData?.dcNo || '') },
    { title: 'Refered Challan Date:', value: formatDate(aqrData?.dcDate || '') },
  ];

  const secondGridData = [
    { title: 'Purchased By:', value: convertInTitleCase(aqrData?.purchaseBy || '') },
    { title: 'Received By:', value: convertInTitleCase(aqrData?.receivedBy || '') },
    { title: 'Quality Checked By:', value: convertInTitleCase(aqrData?.qcCheckBy || '') },
    { title: 'Verified By:', value: convertInTitleCase(aqrData?.verifiedBy || '') },
  ];

  const signatureLabels = ['Prepared By', 'Approved By'];

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
      <Box sx={{ flex: 1 }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <PageTitle pagetitle="Arrival Quality Report" />
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
                { title: 'Approved', subtitle: 'Sudhanshu Singh', status: 'pending' },
                { title: 'Completed', subtitle: 'Jinen Ghelani', status: 'pending' },
              ]}
            />
          </Grid>
        </Grid>
        <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
          <div className={styles.printAreaContainer} ref={contentRef}>
            <div className={styles.mainContainer}>
              <header className={styles.header}>
                <div className={`${styles.title} ${styles.textMD} ${styles.px}`}>ARRIVAL QUALITY REPORT</div>
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
                      <th className={`${styles.srNoCol} ${styles.textSM} ${styles.textBold}`}>
                        Sr. No.
                      </th>
                      <th className={`${styles.particularsCol} ${styles.textSM} ${styles.textBold}`}>
                        Quality Check Parameter
                      </th>
                      <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>
                        Paramter Type
                      </th>
                      <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>
                        Quantity
                      </th>
                      <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {aqrData?.parameters.map((row, index) => (
                      <tr key={row.qualityParameterId}>
                        <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                        <td className={`${styles.textSM} ${styles.px}`}>{convertInTitleCase(row.qualityParameterName)}</td>
                        <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{convertInTitleCase(row.qualityParameterType || '')}</td>
                        <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{Number(row.quantity)}</td>
                        <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{Number(row.percentage).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className={`${styles.textSM} ${styles.textBold}`} style={{ textAlign: 'right' }} colSpan={3}>Total</td>
                      <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{aqrData?.totalQty}</td>
                      <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{aqrData?.totalpercent}</td>
                    </tr>
                  </tfoot>
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
  );
};
