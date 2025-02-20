import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { tpVoucherState } from '@prime-fresh/purchase/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const TPVoucherPreview = () => {
    const { previewTPVoucher } = useAppSelector(tpVoucherState);
    return (
        <PreviewContainer title='Transport Payment Voucher Preview'>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewTPVoucher?.grnNo !== "string" ? previewTPVoucher?.grnNo?.grnNo : previewTPVoucher.grnNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewTPVoucher?.companyName !== "string" ? previewTPVoucher?.companyName?.companyName : previewTPVoucher.companyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.location}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Debit From / Credit To : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.debitCreditTo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Pay To / Received From : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.payReceivedFrom}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Driver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.driverName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Contact Numbers of Driver : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${previewTPVoucher?.contactNo}, ${previewTPVoucher?.altContactNo}`}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Vehicle Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.vehicleNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Dispatch Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.dispatchLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Destination Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.destinationLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Freight Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.freightAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.totalAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Total Amount in Words : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.amtWords}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.paymentMode}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Products : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.products}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}
