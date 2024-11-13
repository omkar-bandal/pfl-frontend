import { Box, Button, Divider, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { PURCHASE_API_URL, useGetDeliveryChallan } from "@prime-fresh/purchase_api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const DeliveryChallanView = () => {
    // const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    // const [approval, setApproval] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const dcId = id ? id : '';
    const { data: dc, isLoading } = useGetDeliveryChallan(PURCHASE_API_URL.GET_A_MC_VOUCHER, dcId);
    console.log(dc)
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
                                    <Typography variant="h4" component="span">Delivery Challan Details</Typography>
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
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Challan No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.challanNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Challan Type : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.deliveryCType}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.createdDate}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.createdTime?.split('.', 1)}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.requestedBy?.firstName} {dc?.requestedBy?.lastName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.requestingDepartment}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.grnNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.companyName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Party Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.partyName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                From Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.fromLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                To Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.toLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Driver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.driverName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Vehicle Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.vehicleNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Driver Contact : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${dc?.contactNo} , ${dc?.altContactNo}`}
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
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Rate</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dc?.items.map((product, index: number) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.itemName}</TableCell>
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
                                Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.totAmt}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Receiver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dc?.receiverName}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                )}
        </Box>
    )
}