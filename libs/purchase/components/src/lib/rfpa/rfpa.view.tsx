import { Box, Button, Divider, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { useGetRFPAById } from "@prime-fresh/purchase/modules";
import { PageTitle } from "@prime-fresh/ui_shared";

export const RFPAView = () => {
    const { id } = useParams<{ id: string }>();
    const rfpaId = id ? id : '';
    const { data, isLoading } = useGetRFPAById(rfpaId);
    const rfpa = data?.data;
    const role = localStorage.getItem('role');

    return (
        <Box sx={{ flex: 1, padding: 1 }}>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <Grid container direction="column" rowSpacing={1}>
                        <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                            <PageTitle pagetitle='Request For Purchase Approval' />                            {role === 'MANAGER' &&
                                (<Button fullWidth variant="contained" color='success' size='large' sx={{ width: 150 }}>Approve</Button>)}
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                RFPA Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.rfpaId}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.createdDate}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.createdTime?.split('.', 1)}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.requestedBy?.firstName} {rfpa?.requestedBy?.lastName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.requestingDepartment}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Base Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.baseLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Purchase Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.purchaseLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Purchase for which location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.purchaseForSalesLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.specialReq}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Source: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.source}
                                </Typography>
                            </Typography>
                        </Grid>
                        {/* <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
                        {rfpa?.source === "vendor" ? (
                            <>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Company Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.companyName}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Vendor Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.vendorCode}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Office Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.vendor?.officeAddress)}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Office Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.officeContactNo}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.email}
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Farmer Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.farmerfName} {rfpa?.farmer?.farmerlName}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Farmer Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.farmerCode}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Residential Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.farmer?.residensialAddress)}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Farm Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.farmer?.farmAddress)}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.primaryMobileNo}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                        Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.email}
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </>
                        )} */}
                        <Divider textAlign="left" sx={{ marginY: 2 }}>Products Information</Divider>
                        <Grid item>
                            <TableContainer component={Box}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Product</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Grade</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>UOM</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Unit Price</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Total</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Purchase Date</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Dispatch Date</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Date</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Location</TableCell>
                                            {rfpa?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Expected Harvest Date</TableCell> : ''}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rfpa?.rfpaProducts.map((product, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >

                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.product}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.grade}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.uom}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.unitPrice}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.totalVal}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate !== null ? product.purchaseDate.toLocaleString() : ""}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate !== null ? product.dispatchDate.toLocaleString() : ""}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate !== null ? product.deliveryDate.toLocaleString() : ""}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                                                {rfpa?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.expectedHarvestDate?.toLocaleString()}</TableCell> : ''}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Divider textAlign="left" sx={{ marginY: 2 }}>Additional Payment Information</Divider>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Payment Mode: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentMode}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Payment Date: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentDate !== null ? rfpa?.paymentInfo.paymentDate.toLocaleString() : ""}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Payment Terms : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentTerms}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Validity Of Quote : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.validityOfQuote}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Packing Instruction : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.packingInstruction}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }
        </Box >
    )
}