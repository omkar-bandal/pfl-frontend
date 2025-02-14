import { useRef, useState } from "react";
import { Box, Button, Container, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { PURCHASE_API_URL, useGetLPVoucher } from "@prime-fresh/purchase_api";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance, handleError } from "@prime-fresh/common_api";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { useReactToPrint } from "react-to-print";
import { smallLogo } from "@prime-fresh/ui_shared";

export const LabourPaymentVoucherView = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    const [approval, setApproval] = useState<string>("");
    const { voucherid } = useParams<{ voucherid: string }>();
    const lpVoucherId = voucherid ? voucherid : '';
    const { data: lpVoucher, isLoading } = useGetLPVoucher(PURCHASE_API_URL.GET_A_LP_VOUCHER, lpVoucherId);
    console.log(lpVoucher)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function createData(srNo: number, title: string, value: any, rs: string, ps: string) {
        return { srNo, title, value, rs, ps };
    }
    const rows = [
        createData(1, "No of Labours", lpVoucher?.noOfLabours, "", ""),
        createData(2, "Day of Loading/Unloading", lpVoucher?.loadingDate, "", ""),
        createData(3, "Per Day Rs.", lpVoucher?.ratePerLabour, "", ""),
        createData(4, "Paymetn Mode", lpVoucher?.paymentMode, "", ""),
        createData(5, "Labour KYC Attached", lpVoucher?.kyc === true? "Yes" : "No", "", ""),
        createData(6, "Mobile No of Any 1 or 2", lpVoucher?.contactNo, "", ""),
        createData(7, "Product", lpVoucher?.products, "", ""),
    ];
    const handleStatusChange = async () => {
        try {
            const response = await axiosInstance.patch(`${PURCHASE_API_URL.APPROVE_GRN}${lpVoucherId}`,
                { approvalNote: `${reason}`, approvalStatus: `${approval}` });
            console.log(response.data);
            if (response.status === 200)
                navigate(PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER);
            return response.data;
        } catch (error) {
            handleError(error);
        }
    }
    return (
        <Container maxWidth="xl">
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <Box sx={{ flex: 1, marginY: 1 }}>
                        <Grid container rowSpacing={1}>
                            <Grid xs={12} md={6}>
                                <Typography variant="h4" component="div" sx={{fontWeight: 700}}>Labour Payment Voucher Details</Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Grid container columnSpacing={2}>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color='success' size='medium' sx={{ height: 40 }} onClick={() => { setApproval("APPROVED"); handleStatusChange(); }}>Approve</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color='secondary' size='medium' sx={{ height: 40 }} onClick={() => { setApproval("notApproved"); handleStatusChange(); }}>Not Approve</Button>
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
                            <Box sx={{ width: '100%', marginY: 1, padding: 2, border: `1px solid #000000` }}>
                                <Grid container>
                                    <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: 250, height: 100, padding: 1 }}>
                                            <img
                                                src={smallLogo}
                                                alt="prime-fresh-logo"
                                                style={{ width: `100%`, height: `100%` }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 700 }}>LABOUR PAYMENT VOUCHER</Typography>
                                        <Typography variant="h4" component="div" textAlign="center" sx={{ fontWeight: 700 }}>PRIME FRESH LIMITED</Typography>
                                        <Typography variant="caption" component="div" textAlign="center">102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.</Typography>
                                        <Typography variant="caption" component="div" textAlign="center"> Ph.:+91-79-40320244, Email: info@primecustomer.co.in, Web: www.primecustomer.co.in</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h6" component="div" textAlign="center" sx={{ color: "#555" }}>Voucher No</Typography>
                                        <Typography variant="h6" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.voucherNo}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container padding={2} columnSpacing={2} rowSpacing={1}>
                                    <Grid item xs={12} md={8}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}> Debit / Credit to :</Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.debitCreditTo}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Location :</Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.location}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>  Pay to / Received from : </Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.payReceivedFrom}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Date :</Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.createdDate}</Typography>
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
                                                    <TableCell align="center" colSpan={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Particulars</TableCell>
                                                    <TableCell align="center" colSpan={2} sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Amount</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}></TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Titles</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Values</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Rs.</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Ps.</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.srNo}>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>{row.srNo}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.title}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>{row.value}</TableCell>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{row.rs}</TableCell>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000` }}>{row.ps}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Grid container marginY={2} paddingX={1}>
                                        <Grid item xs={10}>
                                            <Grid container rowSpacing={3} columnSpacing={2}>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Payment Mode :</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.paymentMode}</Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Total Amount :</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.totalAmt}</Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Rupees :</Typography>
                                                </Grid>
                                                <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                    <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{lpVoucher?.amtWords}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                            <Box sx={{ width: 100, height: 100, border: '1px solid #000000' }}></Box>
                                            <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Receiver Sign</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid container marginY={1}>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{width: '100%', height: 50}}></Box>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Prepared By</Typography>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000"}}>{`(${lpVoucher?.requestedBy.firstName} ${lpVoucher?.requestedBy.lastName})`}</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{width: '100%', height: 50}}></Box>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Passed By</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{width: '100%', height: 50}}></Box>
                                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Approved By</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                )}
        </Container>
    )
}