import { Box, Button, Grid, LinearProgress, TextField, Typography } from "@mui/material";
import { PURCHASE_API_URL, useGetTPVoucher } from "@prime-fresh/purchase_api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const TPVoucherView = () => {
    // const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    // const [approval, setApproval] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const tpVoucherId = id ? id : '';
    const { data: tpVoucher, isLoading } = useGetTPVoucher(PURCHASE_API_URL.GET_A_TP_VOUCHER, tpVoucherId);
    console.log(tpVoucher)
    return (
        <Box sx={{ flex: 1, padding: 1 }}>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <Grid container direction="column" rowSpacing={1}>
                        <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                            <Grid container direction="row">
                                <Grid item xs={8}>
                                    <Typography variant="h4" component="span">Transport Payment Voucher Details</Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", alignItem: "center", justifyContent: "space-around" }}>
                                    <Button fullWidth variant="contained" color='success' size='medium' sx={{ width: 150, height: 40 }}>Approve</Button>
                                    <Button fullWidth variant="contained" color='secondary' size='medium' sx={{ width: 150, height: 40 }}>Not Approve</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                            <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Voucher No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.voucherNo}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdDate}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdTime?.split('.', 1)}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.requestedBy?.firstName} {tpVoucher?.requestedBy?.lastName}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.requestingDepartment}
                                </Typography>
                            </Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.grnNo}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.companyName}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.location}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Debit From / Credit To : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.debitCreditTo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Pay To / Received From : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.payReceivedFrom}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Driver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.driverName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Contact Numbers of Driver : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${tpVoucher?.contactNo}, ${tpVoucher?.altContactNo}`}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Vehicle Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.vehicleNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Dispatch Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.dispatchLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Destination Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.destinationLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Freight Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.freightAmt}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.totalAmt}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Total Amount in Words : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.amtWords}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.paymentMode}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Received By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.receivedBy}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Products : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{tpVoucher?.products}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                )}
        </Box>
    )
}