import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { ChangeStatusResponse, PURCHASE_API_URL, useGetGRN } from "@prime-fresh/purchase_api";
import { displayAddress, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { axiosInstance, handleError } from "@prime-fresh/common_api";
import { useReactToPrint } from "react-to-print";
import { smallLogo } from "@prime-fresh/ui_shared";
import { ADMIN_API_URL, useGetAllFarmers, useGetAllFilteredBranches, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, useGetAllProducts, useGetAllUOMs, useGetAllVendors } from "@prime-fresh/admin_api";
import { useDispatch } from "react-redux";
import { farmersDataState, productsDataState, setProducts, setSelectedFarmer, setSelectedVendor, setUOMs, uomsDataState, vendorsDataState } from "@prime-fresh/admin/modules";
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
  const borderColor = grn?.grnType === "cc"? `2px solid green` : `2px solid red`;
  const textColor = grn?.grnType === "cc"? `success` : `error`;
  const { data: Vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
  const { data: Farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
  const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const products = Products ? Products : [];
  const { data: Locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);
  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const uoms = UOMs ? UOMs : [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (grn?.source === "vendor") {
      const vendor = Vendors?.find(vendor => vendor.id === grn.selectedParty);
      dispatch(setSelectedVendor(vendor));
    } else {
      const farmer = Farmers?.find(farmer => farmer.id === grn?.selectedParty);
      dispatch(setSelectedFarmer(farmer));
    }
    dispatch(setProducts(products));
    dispatch(setUOMs(uoms));
  })
  const { selectedVendor } = useAppSelector(vendorsDataState);
  const { selectedFarmer } = useAppSelector(farmersDataState);
  const { allProducts } = useAppSelector(productsDataState);
  const { allUOMs } = useAppSelector(uomsDataState);

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
              <Box sx={{ width: '100%', marginY: 1, border: borderColor }}>
                <Grid container sx={{ borderBottom: borderColor }}>
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
                    <Typography variant="h4" component="div" textAlign="center" sx={{ fontWeight: 700 }} color={textColor}>PRIME FRESH LIMITED</Typography>
                    <Typography variant="caption" component="div" textAlign="center" color={textColor}>102, Sanskar-ll, Nr. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad-380015.</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 700 }} color={textColor}>GOOD RECEIPT NOTE</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>GRN No.</Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.grnNo}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Created Date</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdDate}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Created Time</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.createdTime?.split('.', 1)}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Requested By</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestedBy?.firstName} {grn?.requestedBy?.lastName}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Department</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.requestingDepartment}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Base Location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.baseLocation}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Purchase Location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{Locations?.find(location => location.id === grn?.purchaseLocation)?.name}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}> Purchase for which location</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{Locations?.find(location => location.id === grn?.purchaseForWhich)?.name}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Source</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>{grn?.source === "vendor" ? "Vendor" : "Farmer"} Name</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.companyName : selectedFarmer?.fullName}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>{grn?.source === "vendor" ? "Vendor" : "Farmer"} Code</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.vendorCode : selectedFarmer?.farmerCode}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Contact No</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.officeContactNo : selectedFarmer?.primaryMobileNo}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Email</Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendor?.email : selectedFarmer?.email}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>{grn?.source === "vendor" ? "Office" : "Farm"} Address</Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? displayAddress(selectedVendor?.officeAddress) : displayAddress(selectedFarmer?.farmAddress)}</Typography>
                  </Grid>
                  {grn?.source === "farmer" && (
                    <>
                      <Grid item xs={3} sx={{ borderRight: borderColor, paddingX: 1 }}>
                        <Typography variant="subtitle1" component="span" color={textColor}>Residential Address</Typography>
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
                            <TableCell align="center" color={textColor} sx={{ width: 100, fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor, borderRight: borderColor }}>Sr. No.</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor, borderRight: borderColor }}>Product</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor, borderRight: borderColor }}>Quantity</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor, borderRight: borderColor }}>Unit</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor, borderRight: borderColor }}>Rate</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color:textColor, borderBottom: borderColor }}>Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {grn?.products.map((product, index) => (
                            <TableRow
                              key={index}
                              sx={{ borderBottom: borderColor }}
                            >

                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{index + 1}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{allProducts.find(item => item.id === product.product)?.name}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{product.quantity ? product.quantity : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{allUOMs.find(item => item.id === product.uom)?.unit}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{product.rate ? product.rate : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor }}>{product.amt ? product.amt : ''}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Subtotal</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.subTotalAmt}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Freight</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.freight}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Other</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.otherCharges}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Total</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.totalAmt}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Amount in words</Typography>
                  </Grid>
                  <Grid item xs={5} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.amtWords}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Purchased By</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.purchasedBy}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Received Through</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.receivedThrough}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Vehicle No</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.vehicleNo}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Time In</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.timeIn}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Crates In</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.cratesIn}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={8} sx={{ borderRight: borderColor }}>
                        <Grid container>
                          <Grid item xs={12} sx={{ borderBottom: borderColor }}>
                            <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 600 }}>FOR COMMERCIAL & ADMIN </Typography>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Bill No.</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Date</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Amount</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={3} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Busy Entry No</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={3}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Admin Signature</Typography>
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