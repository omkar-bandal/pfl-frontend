import { useRef, useState } from "react";
import { Box, Button, Grid, LinearProgress, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { PURCHASE_API_URL, useGetPMPVoucher } from "@prime-fresh/purchase_api";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { smallLogo } from "@prime-fresh/ui_shared";

export const PackingMaterialPaymentVoucherView = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    // const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    const [approval, setApproval] = useState<string>("");
    const { voucherid } = useParams<{ voucherid: string }>();
    const pmpVoucherId = voucherid ? voucherid : '';
    const { data: pmpVoucher, isLoading } = useGetPMPVoucher(PURCHASE_API_URL.GET_A_PMP_VOUCHER, pmpVoucherId);
    console.log("pmpVoucher : ", pmpVoucher)
    return (
        <Box sx={{ flex: 1, padding: 1 }}>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <Box sx={{ flex: 1, marginY: 1 }}>
                        <Grid container rowSpacing={1}>
                            <Grid xs={12} md={6}>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>Packing Material Payment Voucher Details</Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Grid container columnSpacing={2}>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color='success' size='medium' sx={{ height: 40 }} onClick={() => { setApproval("APPROVED") }}>Approve</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color='secondary' size='medium' sx={{ height: 40 }} onClick={() => { setApproval("notApproved") }}>Not Approve</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color="info" size="medium" sx={{ height: 40 }} onClick={() => reactToPrintFn()}>Print</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                                <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Box sx={{ flex: 1, padding: 1 }} ref={contentRef}>
                            <Box sx={{ width: '100%', marginY: 1, border: `1px solid #000000` }}>
                                <Grid container sx={{ borderBottom: '1px solid #000000' }}>
                                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: 250, height: 100, padding: 1 }}>
                                            <img
                                                src={smallLogo}
                                                alt="prime-fresh-logo"
                                                style={{ width: `100%`, height: `100%` }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8} sx={{ textAlign: "center" }}>
                                        <Typography variant="subtitle1" component="span" textAlign="center" sx={{ fontWeight: 700, borderBottom: '1px solid #000000' }}>PACKING MATERIAL  PAYMENT  VOUCHER</Typography>
                                        <Typography variant="h4" component="div" textAlign="center" sx={{ fontWeight: 700 }}>PRIME FRESH LIMITED</Typography>
                                        <Typography variant="caption" component="div" textAlign="center">102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.</Typography>
                                        <Typography variant="caption" component="div" textAlign="center"> Ph.:+91-79-40320244, Email: info@primecustomer.co.in, Web: www.primecustomer.co.in</Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Typography variant="body2" component="div" textAlign="center" sx={{ color: "#555" }}>Voucher No</Typography>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.voucherNo}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container padding={2} columnSpacing={2} rowSpacing={1}>
                                    <Grid item xs={12} md={8}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}> Debit / Credit to :</Typography>
                                            </Grid>
                                            <Grid item xs={8} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.debitCreditTo}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Location :</Typography>
                                            </Grid>
                                            <Grid item xs={8} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.location}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>  Pay to / Received from : </Typography>
                                            </Grid>
                                            <Grid item xs={8} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.payReceivedFrom}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Date :</Typography>
                                            </Grid>
                                            <Grid item xs={8} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.createdDate}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box sx={{ flex: 1, border: `1px solid #000000` }}>
                                    <TableContainer component={Box}>
                                        <Table sx={{ minWidth: 650 }} size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Sr. No.</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Particulars</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Quantity</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Price</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Amount (Rs)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {pmpVoucher?.materials.map((row, index) => (
                                                    <TableRow key={row.id}>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{index + 1}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.itemName}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.itemQty}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.rate}</TableCell>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.amt}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Grid container padding={1} rowSpacing={2} sx={{ borderBottom: `1px solid #000000` }}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Supplier / Seller Name :</Typography>
                                        </Grid>
                                        <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.sellerName}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Address Brief :</Typography>
                                        </Grid>
                                        <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(pmpVoucher?.address)}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Mobile No. :</Typography>
                                        </Grid>
                                        <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.contactNo}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>KYC :</Typography>
                                        </Grid>
                                        <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.kyc === true ? "Yes" : "No"}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Purpose :</Typography>
                                        </Grid>
                                        <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                            <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.purpose}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container marginY={2} paddingX={1}>
                                        <Grid item xs={10}>
                                            <Grid container rowSpacing={3} columnSpacing={2}>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Payment Mode :</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.paymentMode}</Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Total Amount :</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.totalAmt}</Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Rupees :</Typography>
                                                </Grid>
                                                <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{pmpVoucher?.amtWords}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <Box sx={{ width: 100, height: 100, border: '1px solid #000000' }}></Box>
                                            <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Receiver Sign</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid container marginY={1}>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{ width: '100%', height: 50 }}></Box>
                                        <Box sx={{ width: '100%' }}>
                                            <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Prepared By</Typography>
                                            <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000" }}>{`(${pmpVoucher?.requestedBy.firstName} ${pmpVoucher?.requestedBy.lastName})`}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{ width: '100%', height: 50 }}></Box>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Passed By</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{ width: '100%', height: 50 }}></Box>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Approved By</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                )}
        </Box>
    )
}