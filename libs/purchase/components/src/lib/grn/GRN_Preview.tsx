import React from 'react'
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { displayAddress, grnDataState } from '@prime-fresh/purchase/modules';
import { farmersDataState, productsDataState, vendorsDataState } from '@prime-fresh/admin/modules';
import { PreviewContainer } from '@prime-fresh/ui_shared';

export const GRNPreview = () => {
  const { previewGRN } = useAppSelector(grnDataState);
  const { selectedVendor } = useAppSelector(vendorsDataState);
  const { selectedFarmer } = useAppSelector(farmersDataState);
  const { selectedProduct } = useAppSelector(productsDataState);

  return (
    <PreviewContainer title='GRN Preview'>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Bill No : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.billNo}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Purchase Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.purchaseLocation}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Purchase for which location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.purchaseForWhich}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.specialReq}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Source: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.source}
          </Typography>
        </Typography>
      </Grid>
      <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
      {previewGRN?.source === "vendor" ? (
        <>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Company Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.companyName}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Vendor Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.vendorCode}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Office Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedVendor?.officeAddress)}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Office Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.officeContactNo}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.email}
              </Typography>
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Farmer Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.farmerfName} {selectedFarmer?.farmerlName}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Farmer Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.farmerCode}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Residential Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmer?.residensialAddress)}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Farm Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmer?.farmAddress)}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.primaryMobileNo}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span" sx={{ color: "#555" }}>
              Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.email}
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
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Rate</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Total</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Purchase Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Dispatch Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {previewGRN?.products.map((product, index: number) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{selectedProduct?.name}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.rate}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.amt}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate.toLocaleString()}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate.toLocaleString()}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate.toLocaleString()}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Subtotal : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.subTotalAmt}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Freight : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.freight}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Other Charges : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.otherCharges}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
          Total Amount : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{previewGRN?.totalAmt}
          </Typography>
        </Typography>
      </Grid>
    </PreviewContainer>
  )
}
