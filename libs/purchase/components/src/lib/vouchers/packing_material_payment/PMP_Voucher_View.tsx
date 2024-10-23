import { Box, Button, Grid, LinearProgress, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from "@mui/material";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { PURCHASE_API_URL, useGetPMPVoucher } from "@prime-fresh/purchase_api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const PMPVoucherView = () => {
    // const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    // const [approval, setApproval] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const pmpVoucherId = id ? id : '';
    const { data: pmpVoucher, isLoading } = useGetPMPVoucher(PURCHASE_API_URL.GET_A_PMP_VOUCHER, pmpVoucherId);
    console.log(pmpVoucher)
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
                                    <Typography variant="h4" component="span">Packing Material Voucher Details</Typography>
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
                                Voucher No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.voucherNo}
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
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.requestedBy?.firstName} {pmpVoucher?.requestedBy?.lastName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.requestingDepartment}
                                </Typography>
                            </Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.grnNo}
                                </Typography>
                            </Typography>
                        </Grid> */}
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.companyName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.location}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Debit From / Credit To : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.debitCreditTo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Pay To / Received From : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.payReceivedFrom}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Seller Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.sellerName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Contact Numbers of Seller : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${pmpVoucher?.contactNo}, ${pmpVoucher?.altContactNo}`}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Address of Seller : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(pmpVoucher?.address)}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Purpose : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.purpose}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Divider textAlign="left" sx={{ marginY: 2 }}>Products Information</Divider>
                        <Grid item>
                            <TableContainer component={Box}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>UOM</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Rate</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pmpVoucher?.materials.map((product, index: number) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.itemName}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.itemUom}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.itemQty}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.rate}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.amt}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.totalAmt}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Total Amount in Words : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.amtWords}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.paymentMode}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Received By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.receivedBy}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                )}
        </Box>
    )
}