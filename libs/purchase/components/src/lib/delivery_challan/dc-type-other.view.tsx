import React, { FC } from 'react';
import {
  Box,
  Container,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { AllCompaniesData, ApiBaseState } from '@prime-fresh/common_api';
import { GetDeliveryChallan } from '@prime-fresh/purchase_api';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { GetCustomer } from '@prime-fresh/admin_api';

type DCtypeOtherViewPropType = {
  contentRef: React.RefObject<HTMLDivElement>;
  company: AllCompaniesData | null | undefined;
  dcData: GetDeliveryChallan | null;
  customerData: ApiBaseState<GetCustomer> | undefined;
  getQtyPerPackage: (index: number) => string | null | undefined;
};
export const DCtypeOtherView: FC<DCtypeOtherViewPropType> = (props) => {
  const { contentRef, company, dcData, customerData, getQtyPerPackage } = props;
  return (
    <Container maxWidth="xl">
      <Box sx={{ flex: 1, padding: 1 }} ref={contentRef}>
        <Box
          sx={{
            width: '100%',
            marginY: 1,
            padding: 2,
            border: `1px solid #000000`,
          }}
        >
          <Grid2 container marginBottom={2}>
            <Grid2
              size={{ xs: 10 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
              }}
            >
              <Typography variant="h6" component="div" textAlign="end" sx={{ fontWeight: 700 }}>
                DELIVERY CHALLAN
              </Typography>
              <Typography variant="h4" component="div" textAlign="start" sx={{ fontWeight: 700 }}>
                {company?.name.toUpperCase()}
              </Typography>
            </Grid2>
            <Grid2
              size={{ xs: 2 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ width: 250, height: 100, padding: 1 }}>
                <img
                  // src={images.sidebarlogo}
                  src={company?.logo}
                  alt={`${company?.name} Logo`}
                  style={{ width: `100%`, height: `100%` }}
                />
              </Box>
            </Grid2>
          </Grid2>
          <Grid2 container padding={1} rowSpacing={1} sx={{ border: '1px solid black' }}>
            <Grid2 size={{ xs: 2 }}>
              <Typography variant="body2" component="div">
                Head Office:
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              <Typography variant="body2" component="div">
                102, Sanskar-Il, Nr. Ketav Petrol Pump, Polytechnic Rd, Ambawadi, Ahmedabad-380015.
              </Typography>
              <Typography variant="body2" component="div">
                Ph.:+91-79-40320244, Email: info@primefreshlimited.com, Web: www.primefreshlirnited.corn
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 2 }}>
              <Typography variant="body2" component="div">
                Mumbai Office:
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              <Typography variant="body2" component="div">
                448, APMC Masala Market, Sec-19, Market-1, Phase-2, Vashi, New Mumbai-400073.
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container marginY={1}>
            <Grid2 size={{ xs: 7 }} sx={{ border: `1px solid black` }}>
              <Grid2 container padding={1}>
                {dcData?.deliveryCType === 'customer' ? (
                  <>
                    <Grid2 size={{ xs: 3 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                        Customer Name:{' '}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 9 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                        {typeof dcData?.partyName !== 'string'
                          ? convertInTitleCase(dcData?.partyName?.organizationName || '')
                          : dcData?.partyName}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 3 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                        Address:{' '}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 9 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                        {convertInTitleCase(formatAddress(customerData?.data?.deliveryDetails.deliveryAddress))}
                      </Typography>
                    </Grid2>
                  </>
                ) : (
                  <>
                    <Grid2 size={{ xs: 3 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                        From Location{' '}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 9 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                        {dcData?.fromLocation?.name?.toUpperCase() || '-'}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 3 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                        To Location{' '}
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 9 }}>
                      <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                        {dcData?.toLocation?.name?.toUpperCase() || '-'}
                      </Typography>
                    </Grid2>
                  </>
                )}
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 5 }} sx={{ border: `1px solid black` }}>
              <Grid2 size={{ xs: 12 }} padding={1}>
                <Typography variant="subtitle1" component="span" sx={{ color: '#555' }}>
                  Challan No :
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: '#000000', fontWeight: 700 }}>
                  {dcData?.challanNo}
                </Typography>
              </Grid2>
              <Grid2 size={{ xs: 12 }} padding={1}>
                <Typography variant="subtitle1" component="span" sx={{ color: '#555' }}>
                  Date :
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: '#000000', fontWeight: 700 }}>
                  {dcData?.createdDate}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
          <Box sx={{ flex: 1, border: `1px solid #000000` }}>
            <TableContainer component={Box}>
              <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        borderRight: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      No.
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        borderRight: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      PARTICULARS
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        borderRight: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      UOM
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        borderRight: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      QTY
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        borderRight: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      RATE
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: `1px solid #000000`,
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      Amount (Rs)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dcData?.deliveryChallanProducts.map((row, index) => (
                    <TableRow key={row.productName.id}>
                      <TableCell
                        align="center"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          borderRight: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          borderRight: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {convertInTitleCase(`${row.productName?.productName} (${getQtyPerPackage(index)})`)}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          borderRight: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {row.saleUoM?.unit || ''}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          borderRight: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {row.quantity}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          borderRight: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {row.unitPrice}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderBottom: `1px solid #000000`,
                          fontSize: 17,
                          fontWeight: 500,
                        }}
                      >
                        {row.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ display: 'block' }}>GST No. :</span>
              <span style={{ display: 'block' }}>{company?.gstNo}</span>
              <span style={{ display: 'block' }}>|</span>
              <span style={{ display: 'block' }}>FSSAI No.:</span>
              <span style={{ display: 'block' }}>{company?.fassaiNo}</span>
              <span style={{ display: 'block' }}>|</span>
              <span style={{ display: 'block' }}>CIN No.: </span>
              <span style={{ display: 'block' }}>________________</span>
            </Box>
          </Box>
          <Grid2 container size={{ xs: 12 }} marginY={1} sx={{ border: `1px solid #000000` }}>
            <Grid2 size={{ xs: 3 }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                Driver Name :
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 9 }} sx={{ borderBottom: `1px solid #000000` }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                {convertInTitleCase(dcData?.driverName || '')}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 3 }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                Contact No :
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 3 }} sx={{ borderBottom: `1px solid #000000` }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                {dcData?.contactNo}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 3 }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                Vehicle No :
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 3 }} sx={{ borderBottom: `1px solid #000000` }}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 700 }}>
                {dcData?.vehicleNo}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }} sx={{ borderBottom: `1px solid black` }} marginY={1}></Grid2>
            <Grid2
              size={{ xs: 8 }}
              padding={1}
              sx={{
                borderRight: `1px solid #000000`,
                borderBottom: `1px solid #000000`,
              }}
            >
              <Typography variant="body2" component="span" sx={{ color: '#000000', borderBottom: `1px solid #000000` }}>
                {' '}
                Terms & Condition :
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ color: '#555' }}
              >{`1) Goods once sold / delivered will not be taken back or refunded.`}</Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ color: '#555' }}
              >{`2) We are not responsible for any transit damage, loss or leakage.`}</Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ color: '#555' }}
              >{`3) Subject to Ahmedabad Jurisdiction.`}</Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ color: '#555' }}
              >{`4) 18% P.A. interest will be charged for overdue payment..`}</Typography>
            </Grid2>
            <Grid2
              size={{ xs: 4 }}
              sx={{
                borderBottom: `1px solid #000000`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="subtitle1" component="div" sx={{ color: '#000000', fontWeight: 600 }}>
                For, Prime Fresh Limited
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{ color: '#555' }}
              >{`(Authorised Signatory)`}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }} padding={1}>
              <Typography variant="subtitle1" component="div" sx={{ color: '#555' }}>
                Receiver's Signature :
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container marginY={1}>
            <Grid2 size={{ xs: 4 }} sx={{ border: '1px solid #000000' }}>
              <Box sx={{ width: '100%', height: 50 }}></Box>
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  textAlign="center"
                  sx={{ color: '#000000', fontWeight: 700 }}
                >
                  Prepared By
                </Typography>
                {/* <Typography variant="subtitle1" component="div" textAlign="center" sx={{ color: "#000000" }}>{`(${dcData?.requestedBy.firstName} ${dcData?.requestedBy.lastName})`}</Typography> */}
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 4 }} sx={{ border: '1px solid #000000' }}>
              <Box sx={{ width: '100%', height: 50 }}></Box>
              <Typography
                variant="subtitle1"
                component="div"
                textAlign="center"
                sx={{ color: '#000000', fontWeight: 700 }}
              >
                Passed By
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 4 }} sx={{ border: '1px solid #000000' }}>
              <Box sx={{ width: '100%', height: 50 }}></Box>
              <Typography
                variant="subtitle1"
                component="div"
                textAlign="center"
                sx={{ color: '#000000', fontWeight: 700 }}
              >
                Approved By
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};
