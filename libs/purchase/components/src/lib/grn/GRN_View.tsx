import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { ChangeStatusResponse, PURCHASE_API_URL, useGetGRN } from "@prime-fresh/purchase_api";
import { displayAddress, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { axiosInstance, handleError } from "@prime-fresh/common_api";
import { useReactToPrint } from "react-to-print";
import { smallLogo } from "@prime-fresh/ui_shared";
import { ADMIN_API_URL, useGetAllFarmers, useGetAllProducts, useGetAllUOMs, useGetAllVendors } from "@prime-fresh/admin_api";
import { useDispatch } from "react-redux";
import { farmerDataReducer, farmersDataState, productsDataState, setProducts, setSelectedFarmer, setSelectedVendor, setUOMs, uomsDataState, vendorsDataState } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";

export const GRNView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const navigate = useNavigate();
  const [reason, setReason] = useState<string>("");
  const [approval, setApproval] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';
  const { data: grn, isLoading } = useGetGRN(PURCHASE_API_URL.GET_A_GRN, grnId);
  const { data: Vendors } = useGetAllVendors(ADMIN_API_URL.GET_ALL_VENDORS);
  const { data: Farmers } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
  const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const products = Products ? Products : [];
  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const uoms = UOMs ? UOMs : [];
  const dispatch = useDispatch();
  useEffect(() => {
    if(grn?.source === "vendor"){
      const vendor = Vendors?.find(vendor => vendor.id === grn.selectedParty);
      dispatch(setSelectedVendor(vendor));
    }else{
      const farmer = Farmers?.find(farmer => farmer.id === grn?.selectedParty);
      dispatch(setSelectedFarmer(farmer));
    }
    dispatch(setProducts(products));
    dispatch(setUOMs(uoms));
  })
  const {selectedVendor} = useAppSelector(vendorsDataState);
  const {selectedFarmer} = useAppSelector(farmersDataState);
  const {allProducts} = useAppSelector(productsDataState);
  const {allUOMs} = useAppSelector(uomsDataState);

  const role = localStorage.getItem('role');
  const handleStatusChange = async () => {
    const formData = new FormData();
    formData.append("approvalNote", reason);
    formData.append("approvalStatus", approval);
    try {
      const response: AxiosResponse<ChangeStatusResponse> = await axiosInstance.patch(`${PURCHASE_API_URL.APPROVE_GRN}${grnId}`, formData)
        // { approvalNote: `${reason}`, approvalStatus: `${approval}` });
      console.log(response.data);
      if (response.status === 200)
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <Container maxWidth="xl">
      {isLoading ?
        (<Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>) :
        (
          <Box sx={{ flex: 1 }}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" component="span">GRN Details</Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                {role === 'MANAGER' && (
                  <Grid container columnSpacing={2}>
                    <Grid item xs={4}>
                      {grn?.approvalStatus === "pending" ?
                        (<Button fullWidth variant="contained" color='success' size='small' sx={{ height: 40 }} onClick={() => { setApproval("approved"); handleStatusChange(); }}>Approve</Button>) : ''}
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth variant="contained" color='secondary' size='small' sx={{ height: 40 }} onClick={() => { setApproval("notApproved"); handleStatusChange(); }}>Not Approve</Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth variant="contained" color="info" size="small" sx={{ height: 40 }} onClick={() => reactToPrintFn()}>Print</Button>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              {role === 'MANAGER' ?
                (<Grid item xs={12}>
                  <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                  <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
                </Grid>) : ''}
            </Grid>
            <Box sx={{ flex: 1, padding: 1 }} ref={contentRef}>
              <Box sx={{ width: '100%', marginY: 1, border: `1px solid #000000` }}>
                <Grid container sx={{ borderBottom: '1px solid #000000' }}>
                  <Grid item xs={3}>
                    <Box sx={{ width: 200, height: 70, padding: 0.5 }}>
                      <img
                        src={smallLogo}
                        alt="prime-fresh-logo"
                        style={{ width: `100%`, height: `100%` }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" component="div" textAlign="center" sx={{ fontWeight: 700 }}>PRIME FRESH LIMITED</Typography>
                    <Typography variant="caption" component="div" textAlign="center">102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 700 }}>GOOD RECEIPT NOTE</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>GRN No.</Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.grnNo}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Created Date</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdDate}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Created Time</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdTime?.split('.', 1)}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Requested By</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestedBy?.firstName} {grn?.requestedBy?.lastName}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Department</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestingDepartment}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Base Location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.baseLocation}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Purchase Location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchaseLocation}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}> Purchase for which location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchaseForWhich}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Source</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>{grn?.source === "vendor" ? "Vendor" : "Farmer"} Name</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.companyName : `${selectedFarmer?.farmerfName} ${selectedFarmer?.farmerlName}`}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>{grn?.source === "vendor" ? "Vendor" : "Farmer"} Code</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.vendorCode : selectedFarmer?.farmerCode}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Contact No</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.officeContactNo : selectedFarmer?.primaryMobileNo}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Email</Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.email : selectedFarmer?.email}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>{grn?.source === "vendor" ? "Office" : "Farm"} Address</Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? displayAddress(selectedVendor?.officeAddress) : displayAddress(selectedFarmer?.farmAddress)}</Typography>
                  </Grid>
                  {grn?.source === "farmer" && (
                    <>
                      <Grid item xs={3} sx={{ borderRight: `1px solid #000000`, paddingX: 1 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Residential Address</Typography>
                      </Grid>
                      <Grid item xs={9} sx={{ paddingX: 1 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmer?.residensialAddress)}</Typography>
                      </Grid></>
                  )}
                  <Grid item xs={12}>
                    <TableContainer component={Box} sx={{ borderTop: '1px solid #000000' }}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" sx={{ width: 100, fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>Sr. No.</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>Product</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>Quantity</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>Unit</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>Rate</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18, borderBottom: `1px solid #000000` }}>Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {grn?.products.map((product, index) => (
                            <TableRow
                              key={index}
                              sx={{ borderBottom: `1px solid #000000` }}
                            >

                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{index + 1}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{allProducts.find(item => item.id === product.product)?.name}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{product.quantity ? product.quantity : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{allUOMs.find(item => item.id === product.uom)?.unit}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000`, borderRight: `1px solid #000000` }}>{product.rate ? product.rate : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16, borderBottom: `1px solid #000000` }}>{product.amt ? product.amt : ''}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Subtotal</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.subTotalAmt}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Freight</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.freight}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Other</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.otherCharges}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Total</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.totalAmt}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Amount in words</Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.amtWords}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Purchased By</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchasedBy}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Received Through</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.receivedThrough}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Vehicle No</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vehicleNo}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Time In</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.timeIn}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, borderRight: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#555" }}>Crates In</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: `1px solid #000000`, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.cratesIn}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={8} sx={{ borderRight: `1px solid #000000` }}>
                        <Grid container>
                          <Grid item xs={12} sx={{ borderBottom: `1px solid #000000` }}>
                            <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 600 }}>FOR COMMERCIAL & ADMIN </Typography>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: `1px solid #000000` }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: `1px solid #000000` }}>
                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }} textAlign="center">Bill No.</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: `1px solid #000000` }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: `1px solid #000000` }}>
                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }} textAlign="center">Date</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: `1px solid #000000` }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: `1px solid #000000` }}>
                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }} textAlign="center">Amount</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={3} sx={{ borderRight: `1px solid #000000` }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: `1px solid #000000` }}>
                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }} textAlign="center">Busy Entry No</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={3}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: `1px solid #000000` }}>
                                <Typography variant="subtitle1" component="div" sx={{ color: "#555" }} textAlign="center">Admin Signature</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" component="div" textAlign="center" sx={{ fontWeight: 600 }}>For, PRIME FRESH LIMITED</Typography>
                        <Typography variant="caption" component="div" textAlign="center">Supervisor Signature</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box >
          </Box>
        )
      }
    </Container >
  )
}