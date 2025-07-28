// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useGetFarmerById } from "@prime-fresh/admin/modules";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Download } from "@mui/icons-material";
import { PageTitle, BtnSmall, formatDate } from "@prime-fresh/ui_shared";
import styles from './farmer.module.css';
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";

export const ViewFarmer = () => {
  const { id } = useParams<{ id: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { data: Farmer, isLoading } = useGetFarmerById(id as string);
  const farmer = Farmer?.data ? Farmer.data : null;
  console.log(Farmer);

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
              <PageTitle pagetitle="Farmer Registration" />
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Farmer Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Farmer Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(`${farmer?.farmerfName || ''} ${farmer?.farmermName || ''} ${farmer?.farmerlName || ''}`)}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Residential Address </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatAddress(farmer?.residensialAddress)}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Contact Number </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.primaryMobileNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Alternate Contact </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.secondaryMobileNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.email}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Gender </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(farmer?.gender || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Birth Date </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatDate(farmer?.dob || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Aadhar/ PAN/ License Number </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.idProofNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Is Id proof copy attached ? </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_8}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.idProofCopy ? `Yes` : `No`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> How do you sell your product? </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_8}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.howDoYouSell}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Farm Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Farm Address </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{`${farmer?.farmAddress?.address1} ${farmer?.farmAddress?.address2} ${farmer?.farmAddress?.location} ${farmer?.farmAddress?.city} ${farmer?.farmAddress?.state} ${farmer?.farmAddress?.pincode}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Land Holding Status </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.landHoldingStatus}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Land Status </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.landStatus}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Total Land Area (in Acres) </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.totalLandArea}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Cultivation Area (in Acres) </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.cultivationArea}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Crop Details</span>
                      </div>
                      {farmer?.crops?.map((item, index) => (
                        <>
                          <div className={`${styles.gridItem} ${styles.span_12}`}>
                            <span className={`${styles.textSM} ${styles.textBold}`}>Crop {index + 1}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Crop Name </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.crop}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Variety </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.variety}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> No of Plants </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.noOfPlants}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pruning Date </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.pruningDate}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Expected Harvest Date </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.expectedHarvestDate}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Expected Quantity (in mt) </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.expectedQuantityInTonnes}</span>
                          </div>
                        </>
                      ))}
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

