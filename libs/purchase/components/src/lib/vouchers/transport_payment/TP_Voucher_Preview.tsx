import React from 'react'
import { Close } from '@mui/icons-material'
import { Box, Dialog, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { tpVoucherState } from '@prime-fresh/purchase/modules';

type TPVoucherPreviewProps = {
    open: boolean;
    handleClose: () => void;
}

export const TPVoucherPreview = ({ open, handleClose }: TPVoucherPreviewProps) => {
    const { previewTPVoucher } = useAppSelector(tpVoucherState);
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ flex: 1, padding: 1 }}>
                <Grid container direction="column" rowSpacing={1}>
                    <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                            <Typography variant="h4" component="div">Transport Payment Voucher Preview</Typography>
                            <IconButton
                                edge="start"
                                color="error"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <Close fontSize='large' />
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.grnNo}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.companyName}
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
                            Received By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.receivedBy}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Products : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewTPVoucher?.products}
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
        </Dialog>
    )
}
