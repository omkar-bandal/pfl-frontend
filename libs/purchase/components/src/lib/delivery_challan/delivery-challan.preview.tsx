import React from 'react'
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { dcState } from '@prime-fresh/purchase/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const DeliveryChallanPreview = ( ) => {
    const { previewDC } = useAppSelector(dcState);
    return (
        <PreviewContainer title='Delivery Challan Preview'>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Challan Type : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.deliveryCType}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    GRN No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.grnNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Company Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.companyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Party Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.partyName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    From Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.fromLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    To Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.toLocation}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Driver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.driverName}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Vehicle Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.vehicleNo}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Driver Contact : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{`${previewDC?.contactNo} , ${previewDC?.altContactNo}`}
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
                            {previewDC?.items.map((product, index: number) => (
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
                    Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.totAmt}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Receiver Name : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewDC?.receiverName}
                    </Typography>
                </Typography>
            </Grid>
        </PreviewContainer>
    )
}
