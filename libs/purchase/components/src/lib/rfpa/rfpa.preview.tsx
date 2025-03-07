import React from "react";
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { displayAddress, rfpaDataState } from "@prime-fresh/purchase/modules";
import { useAppSelector } from "@prime-fresh/modules";
import { farmersDataState, productsDataState, vendorsDataState } from "@prime-fresh/admin/modules";
import { PreviewContainer } from "@prime-fresh/ui_shared";

export const RFPAPreview = () => {
    const { previewRFPA } = useAppSelector(rfpaDataState)
    const { selectedProduct } = useAppSelector(productsDataState);
    const {selectedVendorPartialData} = useAppSelector(vendorsDataState);
    const {selectedFarmerPartialData} = useAppSelector(farmersDataState)

    return (
        <PreviewContainer title='RFPA Preview'>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Purchase Location : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.purchaseLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Purchase for which location : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.purchaseForSalesLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Special Request : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.specialReq}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Source: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.source}
                    </Typography>
                </Typography>
            </Grid>
            <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
            {previewRFPA?.source === "vendor" ? (
                <>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Company Name: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendorPartialData?.companyName}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Vendor Code: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendorPartialData?.vendorCode}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Office Address: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedVendorPartialData?.officeAddress)}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Office Contact No: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendorPartialData?.officeContactNo}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Email: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendorPartialData?.officeEmail}
                            </Typography>
                        </Typography>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Farmer Name: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmerPartialData?.fullName}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Farmer Code: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmerPartialData?.farmerCode}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Residential Address: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmerPartialData?.residensialAddress)}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Farm Address: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmerPartialData?.farmAddress)}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Contact No: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmerPartialData?.primaryMobileNo}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                            Email: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmerPartialData?.email}
                            </Typography>
                        </Typography>
                    </Grid>
                </>
            )}
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
                                {previewRFPA?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Expected Harvest Date</TableCell> : ''}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {previewRFPA?.rfpaProducts.map((product, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{selectedProduct?.name}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.grade}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.uom}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.unitPrice}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.totalVal}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate?.toLocaleString() || ""}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate?.toLocaleString() || ""}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate?.toLocaleString()|| ""}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                                    {previewRFPA?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.expectedHarvestDate?.toLocaleString()}</TableCell> : ''}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Divider textAlign="left" sx={{ marginY: 2 }}>Additional Payment Information</Divider>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Payment Mode: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.paymentInfo.paymentMode}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Payment Date: <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.paymentInfo.paymentDate?.toLocaleString() || ""}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Payment Terms : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.paymentInfo.paymentTerms}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Validity Of Quote : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.validityOfQuote}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Packing Instruction : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewRFPA?.packingInstruction}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}