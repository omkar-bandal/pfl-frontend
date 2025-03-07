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
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    GRN No : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewMCVoucher?.grnNo !== "string" && previewMCVoucher?.grnNo !== null ? previewMCVoucher?.grnNo.grnNo : previewMCVoucher.grnNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Company Name : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{typeof previewMCVoucher?.companyName !== "string" && previewMCVoucher?.companyName !== null ? previewMCVoucher?.companyName.companyName : previewMCVoucher.companyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Location : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.location}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Debit From / Credit To : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.debitCreditTo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Pay To / Received From : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.payReceivedFrom}
                    </Typography>
                </Typography>
            </Grid>
            <Divider textAlign="left" sx={{ marginY: 2 }}>Products Information</Divider>
            <Grid item>
                <TableContainer component={Box}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Particulars</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {previewMCVoucher?.particulars.map((particulars, index: number) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{particulars.description}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{particulars.amt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Total Amount : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.totalAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Total Amount in Words : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.amtWords}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Payment Mode : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.paymentMode}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Received By : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.receiverName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" component="span" sx={{ color: "#555" }}>
                    Remark : <Typography variant="body1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewMCVoucher?.remark}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}
