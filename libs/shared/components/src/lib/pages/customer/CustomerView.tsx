import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './customer.module.css';
import { StatusType } from '@prime-fresh/services';
import { useReactToPrint } from 'react-to-print';
import { Check, Close, Download } from '@mui/icons-material';
import { Box, Container, Grid, LinearProgress } from '@mui/material';
import { BtnSmall, formatDate, PageTitle, toast } from '../../components';
import { images } from '@prime-fresh/assets';
import { convertInTitleCase, useChangeStatusCustomer, useGetCustomerByIdForView } from '@prime-fresh/shared/modules';

export const CustomerView = () => {
  const { id } = useParams<{ id: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { data: Customer, isLoading } = useGetCustomerByIdForView(id as string);
  const customer = Customer?.data ? Customer.data : null;
  console.log(Customer);

  const { mutateAsync, error, data, isPending, isError } = useChangeStatusCustomer(id as string);

  const changeCustomerStatus = (status: StatusType) => {
    mutateAsync(status)
      .then(() => {
        toast.success(data?.message ? data.message : `Customer registration ${status} successfully.`);
      })
      .catch(() =>
        toast.error(error?.message ? error?.message : 'Error while changing status of customer registration.')
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
              <PageTitle pagetitle="Customer Registration" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <BtnSmall
                label="Approve"
                icon={<Check fontSize="inherit" />}
                color="success"
                disabled={isPending && !isError}
                onClick={() => changeCustomerStatus('approved')}
              />
              <BtnSmall
                label="Disapprove"
                icon={<Close fontSize="inherit" />}
                color="error"
                disabled={isPending && !isError}
                onClick={() => changeCustomerStatus('notApproved')}
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Customer Empanelment Form</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Name of Organization{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.organisationName}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Organization Type </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.organisationType}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Customer Type </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.customerTypes || ''}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Customer Category </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.customerCategory || ''}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.customerAddress?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.customerAddress?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.customerAddress?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.customerAddress?.city || ''}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.customerAddress?.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.customerAddress?.pincode || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.primaryContactNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Secondary Contact No{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.secondaryContactNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.emailPrimary}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Secondary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.emailSecondary}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <div className={`${styles.textMD} ${styles.textBold} ${styles.mr}`}>Key Mobile Numbers</div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <div className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Accounts Department</div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span
                          className={`${styles.textSM} ${styles.mr}`}
                        >{`${customer?.keyMobileNumbers?.accDeptFName} ${customer?.keyMobileNumbers?.accDeptLName}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.accDeptMobileNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <div className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Owner or Decision Maker
                        </div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span
                          className={`${styles.textSM} ${styles.mr}`}
                        >{`${customer?.keyMobileNumbers?.ownerFName} ${customer?.keyMobileNumbers?.ownerLName}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers.ownerMobileNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is mandi licence copy attached?{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.mandiLicenceCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Mandi licence No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.mandiLicenceNo}
                        </span>
                      </div>

                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Is Est. Cert. copy attacted?{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.regiCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Registration Number of Shops & Est. Cert.{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.keyMobileNumbers?.regiNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is electricity bill (recent) copy attached?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.electricityBillCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Consumer No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.consumenrNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Reason not to attach electricity bill
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_7}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.notElectricityBillReason}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Whether Customer was blacklisted by any company or authority?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers.customerBlacklisted ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Blacklisted By</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.blackListedBy}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Reason For Blacklisting
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ifBlacklistedReason}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is visiting card copy attached?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers.visitingCardCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Contact No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.visitinContactNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Reason for not attaching visiting card
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_7}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {customer?.keyMobileNumbers.notVisitingCardReason}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>References</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Reference - 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {customer?.keyMobileNumbers.ref1FName}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref1MName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref1LName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Contact</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers?.ref1ContactNo}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Email</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref1Email}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address?.city || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref1Address?.pincode || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Reference - 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref2FName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref2MName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref2LName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Contact</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref2ContactNo}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Email</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.keyMobileNumbers.ref2Email}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.city || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.keyMobileNumbers?.ref2Address?.pincode || ''}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <div className={`${styles.textMD} ${styles.textBold} ${styles.mr}`}>Billing Details</div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <div className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Billing Name/Regd. Name{' '}
                        </div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Commonly Known As</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.commonlyKnownAs}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Contact Person Details
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.billingDetails?.contactPersonFName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.billingDetails?.contactPersonMName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.billingDetails?.contactPersonLName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.city || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.billingAddress?.pincode || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.primaryContactNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Secondary Contact No{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.secondaryContactNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.emailPrimary}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Secondary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.billingDetails?.emailSecondary}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Statutory Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is PAN card copy attached?{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails.panCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> PAN No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.statutoryDetails?.panNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Is Aadhar card copy attacted?{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails.aadharCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Aadhar card No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.statutoryDetails?.aadharNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is Registration certificate copy attached?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails.regiCertificateCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>GST No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.statutoryDetails.gstn}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_5}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is copy of Bill Book or Bilty attached?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails.billBookCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>CIN No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.statutoryDetails?.cinNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_11}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is copy of incorporation certificate duly signed by the director if it is a corporate client
                          attached?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_1}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails.incorpoCertificateCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Details of certifications{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails?.certificationsDetails}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Any Other certifications
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails?.otherCertifications}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Registration details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails?.corpRegiDetails}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Any Other registration details
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.statutoryDetails?.otherCorpRegiDetails}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <div className={`${styles.textMD} ${styles.textBold} ${styles.mr}`}>Delivery Details</div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Delivery Address</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.city || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryAddress?.pincode || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Receiving Person Details
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>First Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.deliveryDetails?.receivingPersonFName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Middle Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.deliveryDetails?.receivingPersonMName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>Last Name</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          {customer?.deliveryDetails?.receivingPersonLName}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Contact No </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.primaryContactNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Secondary Contact No{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.secondaryContactNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Primary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.emailPrimary}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Secondary Email </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.emailSecondary}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Delivery Time </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.deliveryDetails?.deliveryTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Bank Details</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Account Holder Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span
                          className={`${styles.textSM} ${styles.mr}`}
                        >{`${customer?.bankDetails?.bankAccHolderFName} ${customer?.bankDetails?.bankAccHolderLName}`}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Bank Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.bankName}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Branch Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.bankBranch}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Account No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.bankAccNo}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>IFSC Code</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.ifscCode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Account Type</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.accType}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Any Other</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.bankDetails?.otherAccType}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 1 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.address1 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Address 2 </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.address2 || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Location </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.location || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> City </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.city || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> State </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.state || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Pincode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.bankAddress?.pincode || ''}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Cancel Cheque available?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.ifCancelledCheque ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Is copy of cancel cheque attached ?
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.cancelledChequeCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          If cancelled cheque not attached please specify reason
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.bankDetails?.notCancelledChequeReason}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <div className={`${styles.textMD} ${styles.textBold} ${styles.mr}`}>Product Specification</div>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <table>
                          <thead>
                            <tr>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Name of Article</th>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Specifications</th>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Parameters</th>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Packing Material Spec</th>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Rejection Criteria</th>
                              <th className={`${styles.textSM} ${styles.textBold}`}>Comment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customer?.productSpecification?.map((item, index) => (
                              <tr>
                                <td className="textSM">{item.articleName}</td>
                                <td className="textSM">{item.specifications}</td>
                                <td className="textSM">{item.parameters}</td>
                                <td className="textSM">{item.packingMaterialSpec}</td>
                                <td className="textSM">{item.rejectionCriteria}</td>
                                <td className="textSM">{item.comment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Payment Terms</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Payment to be made </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.paymentMade}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold}`}>Any Other</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {customer?.paymentTerms?.otherPaymentMade}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Payment Mode </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.paymentMode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Any Other</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.otherPaymentMode}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>RTV</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.rtv ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Agreement Executed</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.agreementExecuted ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          {' '}
                          Margin / Deposit Mutually Agreed{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.marginDeposit}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Security Deposit Details
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Cheque No</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.securityDepoCheqNo}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Amount</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.securityDepoAmt}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>L/C attached ?</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.lc ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>B/G attached ?</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.bg ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Initial Exposure Limit
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> In Amount </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.IELinAmt}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Recommended By</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.IELRecommendedBy}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Recommended Date </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.IELRecommendedDate}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Revision of Exposure Limit
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> In Amount </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_6}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.RELinAmt}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Recommended By</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.RELRecommendedBy}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}> Recommended Date </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.RELRecommendedDate}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Document Evidence </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.paymentTerms?.docEvidenceCopy ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Reason </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_9}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.paymentTerms?.reason}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.blockSection}>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textMD} ${styles.textBold}`}>Declaration</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textXS} ${styles.textBold}`}>
                          I/We hereby declare that the particulars furnished above are correct and complete. The
                          financial information provided above is to be used by PFL for making payment or receiving
                          payment through electronic mode. I request and authorize PFL to effect payment through
                          electronic mode to my/our bank account as per the details mentioned above. If any transaction
                          is delayed or not effected at all for reasons of incompleteness or incorrectness of
                          information provided as above or any error made by the Bank(s), the Company (Prime Fresh
                          Limited) shall not be held responsible. I/We hereby undertake to inform the Company
                          immediately of any change in my/our bank/branch and account number. No column to be left
                          Blank. All Documents provided should be legible to ensure correctness of the details specified
                          above.{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.textBold} ${styles.mr}`}>
                          Name & Signature of the Customer
                        </span>
                      </div>

                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.textBold}`}>Designation</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.textBold}`}>Stamp of Customer</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Date </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}></span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Place</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}></span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={`${styles.pageSimulation} ${styles.allBorder} ${styles.pageBreak}`}>
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
                        <span className={`${styles.textMD} ${styles.textBold}`}>Office Use Only</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Proposer / BD Name </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Recommended By </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Approved By </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.proposerBDName}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.officeUseOnly.recommendedBy}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.officeUseOnly.approvedBy}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.mr}`}>Signature</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.mr}`}>Signature</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4} ${styles.signatureBlock}`}>
                        <span className={`${styles.textXS} ${styles.mr}`}>Signature</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>PFL Co-ordinator </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Dispatch Location -PFL{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Relationship Manager{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.pflCoordinator}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.dispatchLocationPfl}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.relationshipManager}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold}`}>Expected average monthly Billing </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.avgBillingMonthly}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Volume in Tonnes per month{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.officeUseOnly.volumeMonthly}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold}`}>Customer verification completed? </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.customerVerification ? `Yes` : `No`}{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          If yes, by which agency and validity{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.verificationAgency}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Due diligence done? </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.dueDiligenceDone ? `Yes` : `No`}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Renewal of Credit worthiness due{' '}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.creditWorthinessDue}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Key Account Person assigned
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.keyAccountPersonAssigned}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Since When</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.officeUseOnly.sinceWhen}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Ledger Created Date</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Ledger Created By</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Ledger Verified & Approved By
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.ledgerCreatedDate}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.ledgerCreatedBy}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_4}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly.ledgerVerifiedApprovedBy}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Any other description & Brief of the customer requirement
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>
                          {customer?.officeUseOnly?.additionalNotes}
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Brief Note on feasibility of conducting business and customer acceptance policy of the PFL
                          permits the customer
                        </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Customer Code</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{customer?.customerCode}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Created By</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{convertInTitleCase(customer?.createdBy || '')}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>Created Date</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_2}`}>
                        <span className={`${styles.textSM} ${styles.mr}`}>{formatDate(customer?.createdDate ?? null)}</span>
                      </div>
                    </div>
                    <div className={styles.gridContainer} style={{ padding: `0px 10px`, margin: `20px auto` }}>
                      <div className={`${styles.gridItem} ${styles.span_12}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>
                          Note: Ensure that Customer requirement sheet(s), product specifications including packing
                          details are attached as a separate document and marked as annexure. Customer SOP, Business
                          Transaction document and a copy of the Profile of the customer are collected/ created and
                          attached along with this form
                        </span>
                      </div>
                    </div>
                    <div className={styles.addressBlock}>
                      <div
                        className={`${styles.textXS} ${styles.textBold} ${styles.mr}`}
                        style={{ display: `block`, textAlign: `center` }}
                      >
                        Registered and Admin. Office:
                      </div>
                      <div
                        className={`${styles.textXS} ${styles.mr}`}
                        style={{ display: `block`, textAlign: `center` }}
                      >
                        102, Sanskar 2, Pol;ytechnic Road, Near Ketav Petrol Pump, Ambawadi, Ahmedabad - 380 015
                      </div>
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
