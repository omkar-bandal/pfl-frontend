import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "@prime-fresh/modules"
import { paymentReqState } from "@prime-fresh/purchase/modules"
import { PreviewContainer } from "@prime-fresh/ui_shared";

export const PaymentRequestPreview = () => {
    const {previewPaymentReq} = useAppSelector(paymentReqState);
    return(
        <PreviewContainer title='Payment Request'>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Party Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.partyName}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Bank Account Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.bankAccNo}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                IFSC Code : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.ifscCode}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
               Type of Transaction : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.typesOfTransaction}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.paymentMode}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Payment Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.paymentDate.toLocaleString()}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.amount}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
               Place of Purchase : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.placeOfPurchase}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
               Vehicle Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.vehicleNo}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Cost Center : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.costCenter}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Contact Person : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.contactpersonRec}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                KYC By Email : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.kycByEmail}
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Remark : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPaymentReq?.remark}
                </Typography>
            </Typography>
        </Grid>
    </PreviewContainer>
    )
}