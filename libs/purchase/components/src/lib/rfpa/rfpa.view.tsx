/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, LinearProgress, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { useGetRFPAForViewById } from "@prime-fresh/purchase/modules";
import { DataViewer, formatCurrency, formatDate, ObjectViewerConfig } from "@prime-fresh/ui_shared";
import { Receipt, Person, Inventory, LocalShipping } from "@mui/icons-material";
import { convertInTitleCase, useGetBranchesPartialData } from "@prime-fresh/shared/modules";
import { Address } from "@prime-fresh/common_api";
import { useAppSelector } from "@prime-fresh/modules";
import { farmersDataStates, vendorsDataStates } from "@prime-fresh/admin/modules";

export const RFPAView = () => {
    const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
    const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
    const { id } = useParams<{ id: string }>();
    const rfpaId = id ? id : '';
    const { data, isLoading } = useGetRFPAForViewById(rfpaId);
    const rfpa = data?.data ? data.data : [];

    const {data: branches} = useGetBranchesPartialData();
    const locations = branches?.data ? branches.data : [];
    
    console.log(rfpa);
    const rfpaPreviewConfig: ObjectViewerConfig = {
        sections: [
            {
                title: "RFPA Details",
                sectionType: "object",
                icon: <Receipt />,
                fields: [
                    { 
                        key: "companyName", 
                        label: "Company" 
                    },
                    { 
                        key: "purchaseLocation", 
                        label: "Purchase Location",
                        render: (value: string) => value ? convertInTitleCase(locations.find(loc => loc.id === value)?.name || '') : '-', 
                    },
                    { 
                        key: "purchaseForSalesLocation", 
                        label: "Purchase For",
                        render: (value: string) => value ? convertInTitleCase(locations.find(loc => loc.id === value)?.name || '') : '-', 
                    },
                    { 
                        key: "source", 
                        label: "Source", 
                        render: (value: string) => value ? convertInTitleCase(value) : '-', 
                    },
                    { 
                        key: "specialReq", 
                        label: "Special Requirements" 
                    },
                ],
                gridColumns: 3,
            },
            {
                title: "Vendor / Farmer Information",
                sectionType: "object",
                icon: <Person />,
                fields: [
                    {
                        key: "selectedParty.companyName",
                        label: "Vendor Name",
                        render: (value: any) => value ? (
                            <Typography variant="subtitle1">
                                {convertInTitleCase(value)}
                            </Typography>
                        ) : null,
                    },
                    { key: "selectedParty.category", label: "Category" },
                    { key: "selectedParty.subcategory", label: "Subcategory" },
                    { key: "selectedParty.vendorCode", label: "Vendor Code" },
                    { 
                        key: "selectedParty.contactPersonName", 
                        label: "Contact Person", 
                        render: (value: string) => value ? convertInTitleCase(value) : '',
                    },
                    { key: "selectedParty.officeContactNo", label: "Phone" },
                    { key: "selectedParty.officeEmail", label: "Email" },
                    {
                        key: "selectedParty.officeAddress",
                        label: "Address",
                        render: (value: Address) => value ? (
                            <>
                                <Typography variant="body2" component="div">
                                   { convertInTitleCase(`${value.address1}, ${value.address2}`)}
                                </Typography>
                                <Typography variant="body2" component="div">
                                {convertInTitleCase(`${value.location}, ${value.city}, ${value.state}, ${value.pincode}`)}
                                </Typography>
                            </>
                        ) : null,
                    },
                ],
                gridColumns: 3,
            },
            {
                title: "RFPA Products",
                sectionType: "array",
                icon: <Inventory />,
                fieldArrayName: "rfpaProducts",
                keyField: "id",
                fields: [
                    {
                        key: "productName",
                        label: "Product",
                        width: "25%",
                        render: (value: string) =>
                            <Typography variant="body1" color="text.primary">
                                {convertInTitleCase(value)}
                            </Typography>
                    },
                    {
                        key: "uom",
                        label: "Unit",
                        width: "10%",
                    },
                    {
                        key: "quantity",
                        label: "Quantity",
                        width: "10%",
                        render: (value: any) => (
                            <Box>
                                <Typography variant="body2">{value}</Typography>
                            </Box>
                        ),
                    },
                    {
                        key: "unitPrice",
                        label: "Unit Price",
                        width: "10%",
                        render: (value: any) => (
                            <Box>
                                <Typography variant="body2">{formatCurrency(Number(value))}</Typography>
                            </Box>
                        ),
                    },
                    {
                        key: "totalVal",
                        label: "Amount",
                        width: "10%",
                        render: (value: any) => value ? formatCurrency(Number(value)) : 0,
                    },
                    {
                        key: "purchaseDate",
                        label: "Purchase Date",
                        width: "15%",
                        render: (value: any, item: any) => (
                            <>
                                <Typography variant="caption" display="block" component="div">
                                    {formatDate(value)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" component="div">
                                    {item.deliveryLocation}
                                </Typography>
                            </>
                        ),
                    },
                    {
                        key: "dispatchDate",
                        label: "Dispatch Date",
                        width: "15%",
                        render: (value: any, item: any) => (
                            <>
                                <Typography variant="caption" display="block" component="div">
                                    {formatDate(value)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" component="div">
                                    {item.deliveryLocation}
                                </Typography>
                            </>
                        ),
                    },
                    {
                        key: "deliveryDate",
                        label: "Delivery",
                        width: "15%",
                        render: (value: any, item: any) => (
                            <>
                                <Typography variant="caption" display="block" component="div">
                                    {formatDate(value)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" component="div">
                                    {item.deliveryLocation}
                                </Typography>
                            </>
                        ),
                    },
                ],
            },
            {
                title: "Additional Requirements",
                sectionType: "object",
                icon: <LocalShipping />,
                fields: [
                    { 
                        key: "paymentInfo.paymentMode", 
                        label: "Payment Mode", 
                        render: (value: string) => value ? value.toUpperCase() : '-', 
                    },
                    { key: "paymentInfo.paymentDate", label: "Payment Date" },
                    { key: "paymentInfo.paymentTerms", label: "Payment Terms" },
                    { key: "paymentInfo.dueDate", label: "Due Date" },
                    { key: "paymentInfo.advancePaidAmt", label: "Advance Paid Amount" },
                    { key: "paymentInfo.creditPeriod", label: "Credit Period" },
                    { key: "paymentInfo.validityofQuote", label: "Validity of Quote" },
                    { key: "packingInstruction", label: "Packing Instruction" },
                    { key: "remark", label: "Remarks" },
                ],
                gridColumns: 3,
            },
        ],
    }
    return (
        <Box sx={{ flex: 1, padding: 1 }}>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <DataViewer config={rfpaPreviewConfig} data={rfpa} />
                    // <Grid container direction="column" rowSpacing={1}>
                    //     <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                    //         <PageTitle pagetitle='Request For Purchase Approval' />                            {role === 'MANAGER' &&
                    //             (<Button fullWidth variant="contained" color='success' size='large' sx={{ width: 150 }}>Approve</Button>)}
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             RFPA Number : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.rfpaId}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Created Date : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.createdDate}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Created Time : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.createdTime?.split('.', 1)}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Requested By : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.requestedBy?.firstName} {rfpa?.requestedBy?.lastName}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Requesting Department : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.requestingDepartment}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Base Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.baseLocation}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Purchase Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.purchaseLocation}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Purchase for which location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.purchaseForSalesLocation}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.specialReq}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Source: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.source}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     {/* <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
                    //     {rfpa?.source === "vendor" ? (
                    //         <>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Company Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.companyName}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Vendor Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.vendorCode}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Office Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.vendor?.officeAddress)}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Office Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.officeContactNo}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.vendor?.email}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //         </>
                    //     ) : (
                    //         <>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Farmer Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.farmerfName} {rfpa?.farmer?.farmerlName}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Farmer Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.farmerCode}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Residential Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.farmer?.residensialAddress)}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Farm Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(rfpa?.farmer?.farmAddress)}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.primaryMobileNo}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //             <Grid item>
                    //                 <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //                     Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.farmer?.email}
                    //                     </Typography>
                    //                 </Typography>
                    //             </Grid>
                    //         </>
                    //     )} */}
                    //     <Divider textAlign="left" sx={{ marginY: 2 }}>Products Information</Divider>
                    //     <Grid item>
                    //         <TableContainer component={Box}>
                    //             <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    //                 <TableHead>
                    //                     <TableRow>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Product</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Grade</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>UOM</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Unit Price</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Total</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Purchase Date</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Dispatch Date</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Date</TableCell>
                    //                         <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Location</TableCell>
                    //                         {rfpa?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Expected Harvest Date</TableCell> : ''}
                    //                     </TableRow>
                    //                 </TableHead>
                    //                 <TableBody>
                    //                     {rfpa?.rfpaProducts.map((product, index) => (
                    //                         <TableRow
                    //                             key={index}
                    //                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    //                         >

                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.product}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.grade}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.uom}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.unitPrice}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.totalVal}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate !== null ? product.purchaseDate.toLocaleString() : ""}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate !== null ? product.dispatchDate.toLocaleString() : ""}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate !== null ? product.deliveryDate.toLocaleString() : ""}</TableCell>
                    //                             <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                    //                             {rfpa?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.expectedHarvestDate?.toLocaleString()}</TableCell> : ''}
                    //                         </TableRow>
                    //                     ))}
                    //                 </TableBody>
                    //             </Table>
                    //         </TableContainer>
                    //     </Grid>
                    //     <Divider textAlign="left" sx={{ marginY: 2 }}>Additional Payment Information</Divider>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Payment Mode: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentMode}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Payment Date: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentDate !== null ? rfpa?.paymentInfo.paymentDate.toLocaleString() : ""}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Payment Terms : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.paymentInfo.paymentTerms}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Validity Of Quote : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.validityOfQuote}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    //     <Grid item>
                    //         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                    //             Packing Instruction : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{rfpa?.packingInstruction}
                    //             </Typography>
                    //         </Typography>
                    //     </Grid>
                    // </Grid>
                )
            }
        </Box >
    )
}