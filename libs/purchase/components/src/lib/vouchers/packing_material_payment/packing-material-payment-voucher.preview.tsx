import React from 'react'
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { displayAddress, pmpVoucherState } from '@prime-fresh/purchase/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const PMPVoucherPreview = () => {
    const { previewPMPVoucher } = useAppSelector(pmpVoucherState);
    return (
        <PreviewContainer title='Packing Material Payment Voucher Preview'>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    GRN No : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewPMPVoucher?.grnNo !== "string"? previewPMPVoucher?.grnNo?.grnNo : previewPMPVoucher?.grnNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Company Name : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewPMPVoucher?.companyName !== "string"? previewPMPVoucher?.companyName?.companyName : previewPMPVoucher?.companyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Location : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.location}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Debit From / Credit To : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.debitCreditTo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Pay To / Received From : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.payReceivedFrom}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Seller Name : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.sellerName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Contact Numbers of Seller : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${previewPMPVoucher?.contactNo}, ${previewPMPVoucher?.altContactNo}`}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Address of Seller : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(previewPMPVoucher?.address)}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Purpose : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.purpose}
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
                            {previewPMPVoucher?.materials.map((product, index: number) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.itemName}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{typeof product.itemUom !== "string"? product.itemUom?.unit : product.itemUom }</TableCell>
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
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Total Amount : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.totalAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Total Amount in Words : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.amtWords}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Payment Mode : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewPMPVoucher?.paymentMode}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}
