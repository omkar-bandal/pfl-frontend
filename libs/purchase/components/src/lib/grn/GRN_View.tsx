import { useState } from "react";
import { Box, Button, Divider, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { ChangeStatusResponse, PURCHASE_API_URL, useGetGRN } from "@prime-fresh/purchase_api";
import { displayAddress, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { axiosInstance, handleError } from "@prime-fresh/common_api";

export const GRNView = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState<string>("");
  const [approval, setApproval] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';
  const { data: grn, isLoading } = useGetGRN(PURCHASE_API_URL.GET_A_GRN, grnId);
  console.log(grn)
  const role = localStorage.getItem('role');
  const handleStatusChange = async () => {
    try {
      const response: AxiosResponse<ChangeStatusResponse> = await axiosInstance.patch(`${PURCHASE_API_URL.APPROVE_GRN}${grnId}`, { approvalNote: reason, approvalStatus: approval });
      console.log(response.data);
      if (response.status === 200)
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
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
                  <Typography variant="h4" component="span">GRN Details</Typography>
                </Grid>
                <Grid item xs={4} sx={{display: "flex", alignItem: "center", justifyContent: "space-around"}}>
                  {role === 'MANAGER' ?
                    (<>
                      {grn?.approvalStatus === "approved" ? '' :
                      (<Button fullWidth variant="contained" color='success' size='medium' sx={{ width: 150, height: 40 }} onClick={() => { setApproval("approved"); handleStatusChange(); }}>Approve</Button>)}
                      <Button fullWidth variant="contained" color='secondary' size='medium' sx={{ width: 150, height: 40 }} onClick={() => { setApproval("rejected"); handleStatusChange(); }}>Not Approve</Button>
                    </>
                    ) : ''}
                </Grid>
              </Grid>
            </Grid>
            {role === 'MANAGER' ?
              (<Grid item>
                <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
              </Grid>) : ''}
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                GRN Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.grnNo}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdDate}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdTime?.split('.', 1)}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestedBy?.firstName} {grn?.requestedBy?.lastName}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestingDepartment}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Base Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.baseLocation}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Purchase Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchaseLocation}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Purchase for which location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchaseForWhich}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.specialReq}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                Source: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source}
                </Typography>
              </Typography>
            </Grid>
            <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
            {grn?.source === "vendor" ? (
              <>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Company Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vendor?.companyName}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Vendor Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vendor?.vendorCode}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Office Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(grn?.vendor?.officeAddress)}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Office Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vendor?.officeContactNo}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vendor?.email}
                    </Typography>
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Farmer Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.farmer?.farmerfName} {grn?.farmer?.farmerlName}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Farmer Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.farmer?.farmerCode}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Residential Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(grn?.farmer?.residensialAddress)}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Farm Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(grn?.farmer?.farmAddress)}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.farmer?.primaryMobileNo}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.farmer?.email}
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
                      {grn?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Expected Harvest Date</TableCell> : ''}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {grn?.products.map((product, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >

                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.product}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.uom}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.rate}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.amt}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate.toLocaleString()}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate.toLocaleString()}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate.toLocaleString()}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                        {grn?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.expectedHarvestDate?.toLocaleString()}</TableCell> : ''}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            </Grid>
        )
      }
    </Box >
  )
}