import { useRef, useState } from 'react';
import { Box, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { PageTitle, StyledButton } from '@prime-fresh/ui_shared';
import { useGetMultiCashVoucherForViewById } from '@prime-fresh/purchase/modules';
import { images } from '@prime-fresh/assets';
import styles from './multi-cash-voucher.module.css';

export const MultipleCashVoucherView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  // const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const [approval, setApproval] = useState<string>('');
  const { voucherid } = useParams<{ voucherid: string }>();
  const mcVoucherId = voucherid ? voucherid : '';
  const { data, isLoading } = useGetMultiCashVoucherForViewById(mcVoucherId);
  const mcVoucher = data?.data ? data.data : null;
  console.log(mcVoucher);
  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box flex={1}>
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
                <div className={styles.companyDetails}>
                  <div className={`${styles.title} ${styles.textMD}`}>MULTIPLE CASH VOUCHER</div>
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
              <div className={styles['grid-container']} style={{ padding: `0px 10px` }}>
                {[
                  { label: 'Debit / Credit to:', value: 'FarmaFresh' },
                  { label: 'Location:', value: 'Nashik' },
                  { label: 'Pay to / Received from:', value: 'Prime Fresh' },
                  { label: 'Date:', value: '06 June, 2025' },
                ].map((item, index) => (
                  <div key={index} className={`${styles['grid-item']} ${styles['span-6']}`}>
                    <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}>
                      {item.label}
                    </span>
                    <span className={`${styles['text-smr']}`}>{item.value || ''}</span>
                  </div>
                ))}
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={`${styles['sr-no-col']} ${styles.textSM} ${styles.textBold} `}>Sr. No.</th>
                    <th className={`${styles['materials-col']} ${styles.textSM} ${styles.textBold}`}>Particulars</th>
                    <th className={`${styles['amount-col']} ${styles.textSM} ${styles.textBold}`}>Amount (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${styles.textAlignCenter} ${styles.textSM}`}>1</td>
                    <td className={styles.textSM}>10 cardboard boxed of size 20 x 30 x 10</td>
                    <td className={`${styles.textAlignCenter} ${styles.textSM}`}>250</td>
                  </tr>
                  <tr>
                    <td className={`${styles.textAlignCenter} ${styles.textSM}`}>2</td>
                    <td className={styles.textSM}>250 plastic crates of size 10 x 30 x 30</td>
                    <td className={`${styles.textAlignCenter} ${styles.textSM}`}>400</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles['grid-container']} style={{ padding: `0px 10px` }}>
                {[
                  { label: 'Payment Mode:', value: 'Cash' },
                  { label: 'Total Amount:', value: 'Rs. 2000' },
                  { label: 'Amount In Words:', value: 'Two Thousand Rupees' },
                ].map((item, index) => (
                  <div key={index} className={`${styles['grid-item']} ${styles['span-6']}`}>
                    <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}>
                      {item.label}
                    </span>
                    <span className={`${styles['text-smr']}`}>{item.value || ''}</span>
                  </div>
                ))}
              </div>
              <div className={styles.signatureContainer}>
                {['Receiver Sign', 'Prepared By', 'Passed By', 'Approved By'].map((label) => (
                <div className={styles.signatureBox}>
                  <span className={`${styles.signatureLabel} ${styles['text-smr']} ${styles['text-bold']}`}>{label}</span>
                </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      )}
    </Container>
  );
};
