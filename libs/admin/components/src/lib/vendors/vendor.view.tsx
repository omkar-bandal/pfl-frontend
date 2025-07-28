import { useParams } from "react-router-dom";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useGetVendorById } from "@prime-fresh/admin/modules";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from './vendor.module.css';
import { Download } from "@mui/icons-material";
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";
import { PageTitle, BtnSmall, formatDate } from "@prime-fresh/ui_shared";

export const ViewVendor = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Vendor, isLoading } = useGetVendorById(id as string);
  const vendor = Vendor?.data ? Vendor?.data : null;
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  console.log(Vendor);
  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box flex={1}>
          <Grid container rowSpacing={1} marginY={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <PageTitle pagetitle="Vendor Registration" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <BtnSmall
                label="Download"
                icon={<Download />}
                color="info"
                onClick={() => reactToPrintFn()}
              />
            </Grid>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div ref={contentRef}>
              <div className={`${styles.pageSimulation} ${styles.allBorder}`}>
                <header className={styles.header}>
                  <div>
                    <span className={`${styles.textLG} ${styles.textBold}`}>PRIME FRESH COMPANY LIMITED</span>
                    <span className={styles.logo}>LOGO</span>
                  </div>
                </header>
                <section>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Vendor Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Vendor Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(vendor?.companyName || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.address1}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.address2}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.location}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.city}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.state}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeAddress?.pincode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.officeContactNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.email}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Website </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.website}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> In F&V Business Since </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.inFandVBusinessSince}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Date Of Incorporation </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatDate(String(vendor?.dateOfIncorporation) || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> List of Products </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.listOfAllProducts}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Main Product To Be Supply </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.mainProduct}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Dispatch Center </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.dispatchCenter}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Warehouse Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.warehouseLocations}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Packing Center Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.packingCenterLocation}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> GSTN </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.gstn}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> PAN No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.panNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> MSME No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.msmeNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Trade License No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.msmeNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Proposed Payment Terms </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.proposedPaymentTerms}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Credit Terms </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.creditTerms}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Any Other Details Regarding Team And Infrastructure </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.anyDetailsTeamAndInfra}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Sales Contact Information</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{`${vendor?.vendorSaleInfo?.contactFName || ''} ${vendor?.vendorSaleInfo?.contactMName || ''} ${vendor?.vendorSaleInfo?.contactLName || ''}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{`${vendor?.vendorSaleInfo?.directContactNumber || ''}, ${vendor?.vendorSaleInfo?.mobileNumber || ''}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorSaleInfo?.email}</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
                <header className={styles.header}>
                  <div>
                    <span className={`${styles.textLG} ${styles.textBold}`}>PRIME FRESH COMPANY LIMITED</span>
                    <span className={styles.logo}>LOGO</span>
                  </div>
                </header>
                <section>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Bank Account Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Beneficiary Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{`${vendor?.vendorBankDetails?.beneficiaryFName || ''} ${vendor?.vendorBankDetails?.beneficiaryMName || ''} ${vendor?.vendorBankDetails?.beneficiaryLName || ''}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Bank Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.bankName}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Bank Address </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatAddress(vendor?.vendorBankDetails.branchAddress)}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Type of Account </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.typeOfAcc}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>IFSC Code </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.ifscCode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Swift No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.swiftNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Invoice Currency </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.invoiceCurrency}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Is Copy of Cancelled Cheque Attached ? </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.vendorBankDetails.cancelledChequeCopy ? `Yes` : `No`}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>References</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Reference - 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1FName}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref1MName} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref1LName} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Contact</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref1AltrCNumb} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Email</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref1Email} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address?.address1}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address.address2}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address.location}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address.city}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address.state}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref1Address.pincode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Reference - 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref2FName} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref2MName} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref2LName} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Contact</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref2AltrCNumb} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}> {vendor?.ref2Email} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.address1}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.address2}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.location}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.city}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.state}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{vendor?.ref2Address?.pincode}</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Box>
        </Box>)}
    </Container>
  )
}

