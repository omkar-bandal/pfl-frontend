import React from 'react';
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material"
import { useParams } from 'react-router-dom';
import { useGetDealSlipForViewById } from '@prime-fresh/purchase/modules';

export const DealSlipView = () => {
  const { id } = useParams<{ id: string }>();
  const dealslipId = id ? id : '';
  const { data, isLoading } = useGetDealSlipForViewById(dealslipId);
  const dealSlip = data?.data ? data.data : null;
  console.log(dealSlip);

  return (
   <Box sx={{ flex: 1, padding: 1 }}>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <Grid container direction="column" rowSpacing={1}>
                        <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                            <Typography variant="h4" component="span">Deal Slip Details</Typography>
                            <Button fullWidth variant="contained" color='success' size='large' sx={{ width: 150 }}>Approve</Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                DealSlip Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.dealSlipNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.dealSlipCreatedAt?.toLocaleString().split('T', 1)}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.dealSlipCreatedAt?.toLocaleString().split('T')[1].split('.')}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.requestedBy?.firstName} {dealSlip?.requestedBy?.lastName}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Loading Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.loadingLocation}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Lot Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.lotNo}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.specialRequest}
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                Remark : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{dealSlip?.remark}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }
        </Box >
  )
}
