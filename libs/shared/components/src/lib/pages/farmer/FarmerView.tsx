// import { Employee } from "../../api/admin/models"
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './farmer.module.css';
import { StatusType } from '@prime-fresh/services';
import { useReactToPrint } from 'react-to-print';
import { Check, Close, Download } from '@mui/icons-material';
import { Box, Container, Grid, LinearProgress } from '@mui/material';
import { PageTitle, BtnSmall, formatDate, toast } from '../../components';
import { images } from '@prime-fresh/assets';
import {
  convertInTitleCase,
  formatAddress,
  useChangeStatusFarmer,
  useGetFarmerByIdForView,
} from '@prime-fresh/shared/modules';

export const FarmerView = () => {
  const { id } = useParams<{ id: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { data: Farmer, isLoading } = useGetFarmerByIdForView(id as string);
  const farmer = Farmer?.data ? Farmer.data : null;
  console.log(Farmer);

  const { mutateAsync, error, data, isPending, isError } = useChangeStatusFarmer(id as string);

  const changeFarmerStatus = (status: StatusType) => {
    mutateAsync(status)
      .then(() => {
        toast.success(data?.message ? data.message : `Farmer registration ${status} successfully.`);
      })
      .catch(() =>
        toast.error(error?.message ? error?.message : 'Error while changing status of farmer registration.')
      );
  };

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
                label="Approve"
                icon={<Check fontSize="inherit" />}
                color="success"
                disabled={isPending && !isError}
                onClick={() => changeFarmerStatus('approved')}
              />
              <BtnSmall
                label="Disapprove"
                icon={<Close fontSize="inherit" />}
                color="error"
                disabled={isPending && !isError}
                onClick={() => changeFarmerStatus('notApproved')}
              />
              <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />
            </Grid>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div ref={contentRef}>
              <div className={`${styles.pageSimulation} ${styles.allBorder}`}>
                <header className={styles.header}>
                  <div className={styles.companyName}>
                    <span className={`${styles.textLG} ${styles.textBold}`}>PRIME FRESH COMPANY LIMITED</span>
                  </div>
                  <div className={styles.logo}>
                    <img src={images.sidebarlogo} alt="Logo" width="120px" height="80px" />
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
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {convertInTitleCase(
                            `${farmer?.farmerfName || ''} ${farmer?.farmermName || ''} ${farmer?.farmerlName || ''}`
                          )}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Residential Address{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {formatAddress(farmer?.residensialAddress)}
                        </span>
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
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {convertInTitleCase(farmer?.gender || '')}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Birth Date </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatDate(farmer?.dob || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Aadhar/ PAN/ License No{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.idProofNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is Id proof copy attached ?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_8}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.idProofCopy ? `Yes` : `No`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          How do you sell your product?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_8}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.howDoYouSell}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Farm Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Farm Address </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatAddress(farmer?.farmAddress)}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Land Holding Status</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(farmer?.landHoldingStatus || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Land Status </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(farmer?.landStatus || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Total Land Area (in Acres)
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.totalLandArea}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Cultivation Area (in Acres)
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.cultivationArea}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>7/12 Document Number</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{farmer?.sevenTwelveNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          7/12 Document Copy Attached
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {farmer?.sevenTwelveCopy ? `Yes` : `No`}
                        </span>
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
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                              {' '}
                              Expected Harvest Date{' '}
                            </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.expectedHarvestDate}</span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                              {' '}
                              Expected Quantity (in mt){' '}
                            </span>
                          </div>
                          <div className={`${styles.gridItem} ${styles.span_2}`}>
                            <span className={`${styles.textSM} ${styles.mr}`}>{item.expectedQuantityInTonnes}</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Created By </span>
                    </div>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                        {convertInTitleCase(farmer?.createdBy || '')}
                      </span>
                    </div>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Created Date </span>
                    </div>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                        {formatDate(farmer?.createdDate || '')}
                      </span>
                    </div>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Created Time </span>
                    </div>
                    <div className={`${styles.gridItem} ${styles.span_2}`}>
                      <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{farmer?.createdTime}</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Box>
        </Box>
      )}
    </Container>
  );
};
