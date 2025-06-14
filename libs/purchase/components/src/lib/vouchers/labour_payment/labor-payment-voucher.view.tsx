import { useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetLaborPaymentVoucherForViewById } from '@prime-fresh/purchase/modules';
import { useReactToPrint } from 'react-to-print';
import { PageTitle, PrintButton, StyledButton } from '@prime-fresh/ui_shared';
import { images } from '@prime-fresh/assets';
import styles from './labour-payment-voucher.module.css';

export const LabourPaymentVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [reason, setReason] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const lpVoucherId = voucherid ? voucherid : '';
  const { data, isLoading } = useGetLaborPaymentVoucherForViewById(lpVoucherId);
  const lpVoucher = data?.data ? data.data : null;
  console.log(lpVoucher);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createData(srNo: number, title: string, value: any, rs: string, ps: string) {
    return { srNo, title, value, rs, ps };
  }
  const rows = [
    createData(1, 'No of Labours', lpVoucher?.noOfLabours, '', ''),
    createData(2, 'Day of Loading/Unloading', lpVoucher?.loadingDate, '', ''),
    createData(3, 'Per Day Rs.', lpVoucher?.ratePerLabour, '', ''),
    createData(4, 'Paymetn Mode', lpVoucher?.paymentMode, '', ''),
    createData(5, 'Labour KYC Attached', lpVoucher?.kyc === true ? 'Yes' : 'No', '', ''),
    createData(6, 'Mobile No of Any 1 or 2', lpVoucher?.contactNo, '', ''),
    createData(7, 'Product', lpVoucher?.products, '', ''),
  ];
  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1 }}>
          <Grid container rowSpacing={1} marginBottom={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Goods Received Note" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <StyledButton variant="contained" color="info" onClick={() => reactToPrintFn()}>
                Print
              </StyledButton>
              <StyledButton variant="contained" color="success">
                Approve
              </StyledButton>
              <StyledButton variant="contained" color="error">
                Reject
              </StyledButton>
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
          </Grid>
          <div className={styles.printAreaContainer} ref={contentRef}>
            <div className={styles.mainContainer}>
              <header className={styles.header}>
                <div className={styles.voucherNo}>
                  <span className={`${styles.textSM} ${styles.textBold} ${styles.mb}`}>Voucher No.</span>
                  <span className={`${styles.textMD} ${styles.textBold}`}>PFL-LP-1306250001</span>
                </div>
                <div className={styles.companyDetails}>
                  <div className={`${styles.title} ${styles.textMD}`}>LABOUR PAYMENT VOUCHER</div>
                  <div className={`${styles.companyName} ${styles.textLG}`}>PRIME FRESH COMPANY LIMITED</div>
                  <div className="address textXS">
                    Address: 102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.
                  </div>
                  <div className="contact textXS">
                    Ph.:+919090909090, Email: primefresh.employee@example.com, Web: website: primefreshlimited.com
                  </div>
                </div>
                <div className="logo">LOGO</div>
              </header>
              <div className="grid-container px">
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Debit / Credit to: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">FarmaFresh</span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Pay to / Received from: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">Prime Fresh</span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Location: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">Nashik</span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Date: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">6 June, 2025</span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Created Date: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">13 June, 2025</span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM textBold mr"> Created Time: </span>
                </div>
                <div className="grid-item span-3">
                  <span className="textSM">04:00 PM</span>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="sr-no-col textSM textBold" rowspan="2">
                      Sr. No.
                    </th>
                    <th className="textSM textBold" colspan="2">
                      Particulars
                    </th>
                    <th className="textSM textBold" colspan="2">
                      Amount
                    </th>
                  </tr>
                  <tr>
                    <th className="particulars-title-col textSM textBold">Title</th>
                    <th className="particulars-value-col textSM textBold">Value</th>
                    <th className="amount-rs-col textSM textBold">Rs</th>
                    <th className="amount-ps-col textSM textBold">Ps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="textAlignCenter textSM">2</td>
                    <td className="textSM">Day of Loading/Unloading</td>
                    <td className="textAlignCenter textSM">10-06-2025</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="textAlignCenter textSM">1</td>
                    <td className="textSM">No of Labours</td>
                    <td className="textAlignCenter textSM">10</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="textAlignCenter textSM">3</td>
                    <td className="textSM">Per Day Rs.</td>
                    <td className="textAlignCenter textSM">Rs. 400 per head</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="textAlignCenter textSM">5</td>
                    <td className="textSM">Labour KYC Attached</td>
                    <td className="textAlignCenter textSM">No</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="textAlignCenter textSM">6</td>
                    <td className="textSM">Mobile No of Any 1 or 2</td>
                    <td className="textAlignCenter textSM">9090808070</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="textAlignCenter textSM">7</td>
                    <td className="textSM">Product</td>
                    <td className="textAlignCenter textSM">Onion</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="receiverSignContainer">
                <div className="grid-container px receiverSignContainerLeft">
                  <div className="grid-item span-3">
                    <span className="textSM textBold mr">Payment Mode: </span>
                  </div>
                  <div className="grid-item span-9">
                    <span className="textSM">Cash</span>
                  </div>
                  <div className="grid-item span-3">
                    <span className="textSM textBold mr">Total Amount: </span>
                  </div>
                  <div className="grid-item span-9">
                    <span className="textSM">Rs. 2000</span>
                  </div>
                  <div className="grid-item span-3">
                    <span className="textSM textBold mr">Amount In Words: </span>
                  </div>
                  <div className="grid-item span-9">
                    <span className="textSM">Two Thousand Rupees</span>
                  </div>
                </div>
                <div className="receiverSignContainerRight">
                  <div></div>
                  <span className="textAlignCenter textSM textBold">Receiver Sign</span>
                </div>
              </div>
              <div className="signatureContainer">
                <div className="signatureBox">
                  <span className="signatureLabel textSM textBold">Prepared By</span>
                </div>
                <div className="signatureBox">
                  <span className="signatureLabel textSM textBold">Verified By</span>
                </div>
                <div className="signatureBox">
                  <span className="signatureLabel textSM textBold">Approved By</span>
                </div>
                <div className="signatureBox">
                  <span className="signatureLabel textSM textBold">Approved By</span>
                </div>
                <div className="signatureBox">
                  <span className="signatureLabel textSM textBold">Approved By</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      )}
    </Container>
  );
};
