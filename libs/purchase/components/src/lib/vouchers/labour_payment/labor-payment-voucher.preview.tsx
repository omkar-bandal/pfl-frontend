import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { lpVoucherState } from '@prime-fresh/purchase/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const LPVoucherPreview = () => {
    const { previewLPVoucher } = useAppSelector(lpVoucherState);
    return (
        <PreviewContainer title='Labour Payment Voucher Preview'>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.grnNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.companyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.location}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Debit From / Credit To : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.debitCreditTo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Pay To / Received From : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.payReceivedFrom}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Location of Work : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.workLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Day of Loading / Unloading : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.loadingDate?.toLocaleString()}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Number of Labours : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.noOfLabours}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Per Day of Labour : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.ratePerLabour}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.totalAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Total Amount in Words : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.amtWords}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.paymentMode}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Contact Numbers of Labour : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${previewLPVoucher?.contactNo}, ${previewLPVoucher?.altContactNo}`}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Receiver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.receiverName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Products : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewLPVoucher?.products}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}
