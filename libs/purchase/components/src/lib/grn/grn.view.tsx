import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { displayAddress, useGetGRNById } from "@prime-fresh/purchase/modules";
import { useReactToPrint } from "react-to-print";
import { PageTitle, PrintButton } from "@prime-fresh/ui_shared";
import { useDispatch } from "react-redux";
import { farmersDataState, setSelectedFarmerPartialData, setSelectedVendorPartialData, vendorsDataState } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";
import { useGetBranchesPartialData, useGetFarmersPartialData, useGetProductsPartialData, useGetUOMPartialData, useGetVendorsPartialData } from "@prime-fresh/shared/modules";
import { images } from "@prime-fresh/assets";

export const GRNView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const [reason, setReason] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';
  const { data, isLoading } = useGetGRNById(grnId);
  const grn = data?.data ? data.data : null;
  const borderColor = grn?.locationType === "cc" ? `2px solid green` : `2px solid red`;
  const textColor = grn?.locationType === "cc" ? `success` : `error`;
  const { data: vendors } = useGetVendorsPartialData();
  const Vendors = vendors?.data ? vendors.data : [];
  const { data: farmers } = useGetFarmersPartialData();
  const Farmers = farmers?.data ? farmers.data : [];
  const { data: products } = useGetProductsPartialData();
  const Products = products?.data ? products.data : [];
  const { data: locations } = useGetBranchesPartialData();
  const Locations = locations?.data ? locations.data : [];
  const { data: uoms } = useGetUOMPartialData();
  const UOMs = uoms?.data ? uoms.data : [];

  const dispatch = useDispatch();
  useEffect(() => {
    if (grn?.source === "vendor") {
      const vendor = Vendors?.find(vendor => vendor.id === grn.selectedParty);
      dispatch(setSelectedVendorPartialData(vendor));
    } else {
      const farmer = Farmers?.find(farmer => farmer.id === grn?.selectedParty);
      dispatch(setSelectedFarmerPartialData(farmer));
    }
  })
  const { selectedVendorPartialData } = useAppSelector(vendorsDataState);
  const { selectedFarmerPartialData } = useAppSelector(farmersDataState);

  return (
    <Container maxWidth="xl">
      {isLoading ?
        (<Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>) :
        (
          <Box sx={{ flex: 1 }}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <PageTitle pagetitle='Goods Received Note' />
              </Grid>
              <Grid item xs={12} md={8} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <PrintButton label="Print" onClick={() => reactToPrintFn()} />
                {/* <Grid container columnSpacing={2}>
                  <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="info" size="small" sx={{ height: 40 }} onClick={() => reactToPrintFn()}>Print</Button>
                  </Grid>
                </Grid> */}
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="body1" component="div"><Typography variant="body1" component="span" color="error">*</Typography>Mention reason for approval / not approval</Typography>
                <TextField fullWidth size="small" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
              </Grid> */}
            </Grid>
            <Box sx={{ flex: 1, padding: 1 }} ref={contentRef}>
              <Box sx={{ width: '100%', marginY: 1, border: borderColor }}>
                <Grid container sx={{ borderBottom: borderColor }}>
                  <Grid item xs={3}>
                    <Box sx={{ width: 200, height: 70, padding: 0.5 }}>
                      <img
                        src={images.sidebarlogo}
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
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{Locations?.find(location => location.id === grn?.purchaseForSalesLocation)?.name}</Typography>
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
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendorPartialData?.companyName : selectedFarmerPartialData?.fullName}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>{grn?.source === "vendor" ? "Vendor" : "Farmer"} Code</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendorPartialData?.vendorCode : selectedFarmerPartialData?.farmerCode}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Contact No</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendorPartialData?.officeContactNo : selectedFarmerPartialData?.primaryMobileNo}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>Email</Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? selectedVendorPartialData?.officeEmail : selectedFarmerPartialData?.email}</Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ borderBottom: borderColor, borderRight: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" color={textColor}>{grn?.source === "vendor" ? "Office" : "Farm"} Address</Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: borderColor, paddingX: 1 }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{grn?.source === "vendor" ? displayAddress(selectedVendorPartialData?.officeAddress) : displayAddress(selectedFarmerPartialData?.farmAddress)}</Typography>
                  </Grid>
                  {grn?.source === "farmer" && (
                    <>
                      <Grid item xs={3} sx={{ borderRight: borderColor, paddingX: 1 }}>
                        <Typography variant="subtitle1" component="span" color={textColor}>Residential Address</Typography>
                      </Grid>
                      <Grid item xs={9} sx={{ paddingX: 1 }}>
                        <Typography variant="subtitle1" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmerPartialData?.residensialAddress)}</Typography>
                      </Grid></>
                  )}
                  <Grid item xs={12}>
                    <TableContainer component={Box} sx={{ borderTop: '1px solid #000000' }}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" color={textColor} sx={{ width: 100, fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor, borderRight: borderColor }}>Sr. No.</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor, borderRight: borderColor }}>Product</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor, borderRight: borderColor }}>Quantity</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor, borderRight: borderColor }}>Unit</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor, borderRight: borderColor }}>Rate</TableCell>
                            <TableCell align="center" color={textColor} sx={{ fontWeight: "bold", fontSize: 18, color: textColor, borderBottom: borderColor }}>Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {grn?.grnProducts.map((product, index) => (
                            <TableRow
                              key={index}
                              sx={{ borderBottom: borderColor }}
                            >

                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{index + 1}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{Products.find(item => item.id === product.productName)?.name}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{product.quantity ? product.quantity : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{UOMs.find(item => item.id === product.uom)?.unit}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor, borderRight: borderColor }}>{product.unitPrice ? product.unitPrice : ''}</TableCell>
                              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16, borderBottom: borderColor }}>{product.amount ? product.amount : ''}</TableCell>
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
                            <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 600 }}>PAYMENT TERMS</Typography>
                          </Grid>
                          <Grid item xs={4} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Payment Mode</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Payment Date</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}></Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4} sx={{ borderRight: borderColor }}>
                            <Grid container direction="column">
                              <Grid item sx={{ borderBottom: borderColor }}>
                                <Typography variant="subtitle1" component="div" color={textColor} textAlign="center">Paymet Status</Typography>
                              </Grid>
                              <Grid item>
                                <Box sx={{ width: `100%`, height: 40 }}>{grn?.approvalStatus}</Box>
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