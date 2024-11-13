import React from 'react'
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { mcVoucherState } from '@prime-fresh/purchase/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const MCVoucherPreview = () => {
    const { previewMCVoucher } = useAppSelector(mcVoucherState);
    return (
        <PreviewContainer title='Multiple Cash Voucher Preview'>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.grnNo}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.companyName}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.location}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Debit From / Credit To : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.debitCreditTo}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Pay To / Received From : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.payReceivedFrom}
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
                                    {previewMCVoucher?.mvItems.map((product, index: number) => (
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
                            Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.totalAmt}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Total Amount in Words : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.amtWords}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Payment Mode : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.paymentMode}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Received By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.receivedBy}
                            </Typography>
                        </Typography>
                    </Grid>
           </PreviewContainer>
    )
}
