import { Box, Button, Container, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { PURCHASE_API_URL, useGetDeliveryChallan } from "@prime-fresh/purchase_api";
import { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "@prime-fresh/ui_shared";
import { axiosInstance, COM_API_URL, } from "@prime-fresh/common_api";
import { images } from "@prime-fresh/assets";
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames, useGetCustomerNames } from "@prime-fresh/shared/modules";

export const DeliveryChallanView = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const { data: Companies } = useGetCompanyNames();
    
    const { data: locations } = useGetBranchesPartialData();
    const Locations = locations?.data ? locations.data : [];

    const { data: customerlist } = useGetCustomerNames();
    const customerList = customerlist?.data ? mapToValueLabelArray(customerlist.data, 'id', 'organisationName') : [];


    const reactToPrintFn = useReactToPrint({ contentRef });
    // const navigate = useNavigate();
    // const [reason, setReason] = useState<string>("");
    // const [approval, setApproval] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const dcId = id ? id : '';
    console.log(dcId);
    const { data: dcData, isLoading } = useGetDeliveryChallan(PURCHASE_API_URL.GET_A_DELIVERY_CHALLAN, dcId);
    const selectedCompany = useMemo(() => Companies?.data ? Companies.data.find(company => company.id === dcData?.companyName): null, [Companies, dcData])
    console.log("Data: ", dcData);
    const handleDownload = async () => {
        try {
            const response = await axiosInstance.post(`${COM_API_URL.BASE_URL}/invoice/generate/profarma/${dcId}`);
            const pdfUrl = response.data.invoiceurl;
            if (pdfUrl) {
                toast.success("Invoice created Successfully")
            }
        } catch (error) {
            console.log(error);
            toast.error('Error fetching the PDF URL');
        }
    };

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
                                <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>Delivery Challan Details</Typography>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Grid container sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                    <Grid item xs={4}>
                                        <Button fullWidth variant="contained" color="success" size="medium" sx={{ width: 130, height: 40, marginRight: 20 }} onClick={() => reactToPrintFn()}>Print</Button>
                                    </Grid>
                                    {dcData?.deliveryCType === "customer" &&
                                        <Grid item xs={4}>
                                            <Button fullWidth variant="contained" color="info" size="medium" sx={{ width: 130, height: 40 }} onClick={handleDownload}>Invoice</Button>
                                        </Grid>}
                                </Grid>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                                <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                            </Grid> */}
                        </Grid>
                        <Box sx={{ flex: 1, padding: 1 }} ref={contentRef}>
                            <Box sx={{ width: '100%', marginY: 1, padding: 2, border: `1px solid #000000` }}>
                                <Grid container marginBottom={2}>
                                    <Grid item xs={10} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                                        <Typography variant="h6" component="div" textAlign="end" sx={{ fontWeight: 700 }}>DELIVERY CHALLAN</Typography>
                                        <Typography variant="h4" component="div" textAlign="end" sx={{ fontWeight: 700 }}>{selectedCompany?.name.toUpperCase()}</Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: 250, height: 100, padding: 1 }}>
                                            <img
                                                src={images.sidebarlogo}
                                                alt="prime-fresh-logo"
                                                style={{ width: `100%`, height: `100%` }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container padding={1} rowSpacing={1} sx={{ border: '1px solid black' }}>
                                    <Grid item xs={2}>
                                        <Typography variant="body2" component="div">Head Office:</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body2" component="div">102, Sanskar-Il, Nr. Ketav Petrol Pump, Polytechnic Rd, Ambawadi, Ahmedabad-380015.</Typography>
                                        <Typography variant="body2" component="div">Ph.:+91-79-40320244, Email: info@primefreshlimited.com, Web: www.primefreshlirnited.corn</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body2" component="div">Mumbai Office:</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body2" component="div">448, APMC Masala Market, Sec-19, Market-1, Phase-2, Vashi, New Mumbai-400073.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container marginY={1}>
                                    <Grid item xs={7} sx={{ border: `1px solid black` }}>
                                        <Grid container padding={1}>
                                            {dcData?.deliveryCType === "customer" ?
                                                (<>
                                                    <Grid item xs={3}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Customer Name: </Typography>
                                                    </Grid>
                                                    <Grid item xs={9}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{customerList.find(customer => customer.value === dcData?.partyName)?.label}</Typography>
                                                    </Grid>
                                                </>) :
                                                (<>
                                                    <Grid item xs={3}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>From Location </Typography>
                                                    </Grid>
                                                    <Grid item xs={9}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{Locations?.find(location => location.id === dcData?.fromLocation)?.name}</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>To Location </Typography>
                                                    </Grid>
                                                    <Grid item xs={9}>
                                                        <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{Locations?.find(location => location.id === dcData?.toLocation)?.name}</Typography>
                                                    </Grid>
                                                </>)
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} sx={{ border: `1px solid black` }}>
                                        <Grid container padding={1}>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Challan No :</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{dcData?.challanNo}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Date :</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{dcData?.createdDate}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Box sx={{ flex: 1, border: `1px solid #000000` }}>
                                    <TableContainer component={Box}>
                                        <Table sx={{ minWidth: 650 }} size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>No.</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>PARTICULARS</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>UOM</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>QTY</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>RATE</TableCell>
                                                    <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: "bold" }}>Amount (Rs)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {dcData?.deliveryChallanProducts.map((row, index) => (
                                                    <TableRow key={row.productName.id}>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{index + 1}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.productName.name}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.uom.unit}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.quantity}</TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.unitPrice}</TableCell>
                                                        <TableCell align="center" sx={{ borderBottom: `1px solid #000000`, fontSize: 17, fontWeight: 500 }}>{row.amount}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                            <TableRow>
                                                <TableCell colSpan={6} align="left">
                                                    GST No. (Gujarat) : 24AAECP2124P1ZD / GST No. (Maharashtra) : 27AAECP2124P1Z7 / CIN : L51109GJ2007PLC050404
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </TableContainer>
                                </Box>
                                <Grid container marginY={1} sx={{ border: `1px solid #000000` }}>
                                    <Grid item xs={12} sx={{ borderBottom: `1px solid #000000`, padding: 1 }}>
                                        <Grid container rowSpacing={1}>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Driver Name :</Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{dcData?.driverName}</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Contact No :</Typography>
                                            </Grid>
                                            <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{dcData?.contactNo}</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Vehicle No :</Typography>
                                            </Grid>
                                            <Grid item xs={3} sx={{ borderBottom: `1px solid #000000` }}>
                                                <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 700 }}>{dcData?.vehicleNo}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8} padding={1} sx={{ borderRight: `1px solid #000000`, borderBottom: `1px solid #000000` }}>
                                        <Typography variant="body2" component="span" sx={{ color: "#000000", borderBottom: `1px solid #000000` }}> Terms & Condition :</Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#555" }}>{`1) Goods once sold / delivered wi l not be taken back or refunded.`}</Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#555" }}>{`2) We are not responsible for any transit damage, loss or leakage.`}</Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#555" }}>{`3) Subject to Ahmedabad Jurisdiction.`}</Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#555" }}>{`4) 18% P.A. interest wi l be charged for delayed payment.`}</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ borderBottom: `1px solid #000000`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant="subtitle1" component="div" sx={{ color: "#000000", fontWeight: 600 }}>For, Prime Fresh Limited</Typography>
                                        <Typography variant="caption" component="div" sx={{ color: "#555" }}>{`(Authorised Signatory)`}</Typography>
                                    </Grid>
                                    <Grid item xs={12} padding={1}>
                                        <Typography variant="subtitle1" component="div" sx={{ color: "#555" }}>Receiver's Signature :</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container marginY={1}>
                                    <Grid item xs={4} sx={{ border: '1px solid #000000' }}>
                                        <Box sx={{ width: '100%', height: 50 }}></Box>
                                        <Box sx={{ width: '100%' }}>
                                            <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000", fontWeight: 700 }}>Prepared By</Typography>
                                            {/* <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000" }}>{`(${dcData?.requestedBy.firstName} ${dcData?.requestedBy.lastName})`}</Typography> */}
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
        </Container>
    )
}