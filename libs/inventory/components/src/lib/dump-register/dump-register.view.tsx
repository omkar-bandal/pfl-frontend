/* eslint-disable no-unsafe-optional-chaining */
import { Box, Container, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { BtnSmall, DrawerContainer, InfoTooltip, PageTitle, StepperData, toast, VerticalStepper } from '@prime-fresh/ui_shared';
import { useGetDumpRegisterForViewById } from '@prime-fresh/inventory/modules';
import { useParams } from 'react-router-dom';
import styles from './dump-register.module.css';
import { convertInTitleCase, getDocStatusColor, useGetAllCompaniesData, useUpdateDocStatusWithTwoApproval } from '@prime-fresh/shared/modules';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Check, ChevronRight, Close, Download } from '@mui/icons-material';
import React from 'react';
import { authState, useActions, useAppSelector, usePermission } from '@prime-fresh/modules';

export const DumpRegisterView = () => {
  const { id } = useParams<{ id: string }>();
  const dumpRegiId = id ? id : '';
  const { loggedInUserInfo } = useAppSelector(authState);
  const username = convertInTitleCase(loggedInUserInfo?.userName || '');
  const { canDownload } = usePermission('dump-register');
  const [reason, setReason] = useState('');
  const { openDrawer } = useActions();
  const { data, isLoading: isDumpLoading, refetch } = useGetDumpRegisterForViewById(dumpRegiId);
  const dumpData = data?.data ? data.data : null;
  console.log('View Dump: ', dumpData);

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data: companyData, isLoading: isCompanyDataLoading } = useGetAllCompaniesData();
  console.log(companyData?.data);
  const company = companyData?.data ? companyData.data.find((comp) => comp.name === dumpData?.companyName) : null;

  const approvalSummary: StepperData[] = [
    {
      title: 'Created',
      subtitle: dumpData?.createdBy || '',
      status: 'COMPLETE'
    },
    {
      title: 'Approved',
      subtitle: dumpData?.approvalSummary?.firstApproved?.name || '',
      description: dumpData?.approvalSummary?.firstApproved?.reason || '',
      status: dumpData?.approvalSummary?.firstApproved?.status || 'hold'
    },
    {
      title: 'Approved',
      subtitle: dumpData?.approvalSummary?.secondApproved?.name || '',
      description: dumpData?.approvalSummary?.secondApproved?.reason || '',
      status: dumpData?.approvalSummary?.secondApproved?.status || 'hold'
    },
    {
      title: 'Completed',
      status: dumpData?.approvalSummary?.secondApproved?.status || 'hold'
    },
  ];

  const firstGridData = [
    { title: 'Refered GRN:', value: dumpData?.grn?.toUpperCase() || '' },
    { title: 'Location:', value: convertInTitleCase(dumpData?.location || '') },
    { title: 'Date:', value: dumpData?.date },
    { title: 'Batch No:', value: dumpData?.batchNo ? dumpData.batchNo.toUpperCase() : '' },
  ];

  const secondGridData = [
    { title: 'Total Dump Cost:', value: `${Number(dumpData?.totalDumpCost)} Rs` },
    {
      title: 'Dump Cost In Words:',
      value: convertInTitleCase(dumpData?.totalCostInWords || ''),
    },
    { title: 'Remarks:', value: convertInTitleCase(dumpData?.remark || '') },
  ];

  const signatureLabels = ['Prepared By', 'Approved By', 'Approved By'];
  const { mutateAsync, error, data: actionRes, isPending, isError } = useUpdateDocStatusWithTwoApproval(dumpRegiId);
  const changeDumpRegisterStatus = (status: 'approved' | 'reject') => {
    mutateAsync({
      status: status,
      reason: reason,
    })
      .then(() => {
        toast.success(actionRes?.message ? actionRes.message : `Dump register ${status} successfully.`)
        refetch();
        setReason('');
      })
      .catch(() => toast.error(error?.message ? error?.message : 'Error while changing status of dump register.'));
  };
  return (
    <Container maxWidth="xl">
      {isDumpLoading || isCompanyDataLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1, marginY: 1 }}>
          <Grid container rowSpacing={1} marginBottom={2}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <PageTitle pagetitle="Dump Register" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {dumpData?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Approve"
                    icon={<Check fontSize="inherit" />}
                    color="success"
                    disabled={isPending && !isError}
                    onClick={() => changeDumpRegisterStatus('approved')}
                  />}
                {dumpData?.createdBy !== username.split(' ')[0] &&
                  <BtnSmall
                    label="Disapprove"
                    icon={<Close fontSize="inherit" />}
                    color="error"
                    disabled={isPending && !isError}
                    onClick={() => changeDumpRegisterStatus('reject')}
                  />}
                {/* <BtnSmall label="Query" icon={<Message />} color="warning" /> */}
              {canDownload && (
                <BtnSmall label="Download" icon={<Download />} color="info" onClick={() => reactToPrintFn()} />
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="div">
                <Typography variant="body1" component="span" color="error">
                  *
                </Typography>
                Mention reason for approval / not approval
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="approveOrRejectReason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
              <Grid item xs={12}>
                <DrawerContainer>
                  <Typography variant='h6' component='div' sx={{ fontWeight: 700, color: '#595959' }}>Approval Summary</Typography>
                  <Typography variant='caption' component='div' sx={{ fontWeight: 700, color: '#595959' }}>{`Current Status: ${convertInTitleCase(dumpData?.overAllStatus || '')}`}</Typography>
                  <VerticalStepper steps={approvalSummary} />
                </DrawerContainer>
              </Grid>
              <Grid item xs={12} alignItems='center'>
                <Typography variant='subtitle1' component='span' sx={{ fontWeight: 700, color: '#2C3E50' }}>
                  Current Document Status:
                  <Typography variant='subtitle1' component='span' sx={{ marginLeft: 2, fontWeight: 700, color: getDocStatusColor(dumpData?.overAllStatus || 'hold') }}>
                    {convertInTitleCase(dumpData?.overAllStatus || '')}
                  </Typography>
                </Typography>
                <InfoTooltip info={`Click here to see complete approval summary.`}>
                  <IconButton size='medium' onClick={() => openDrawer()}>
                    <ChevronRight fontSize='inherit' />
                  </IconButton>
                </InfoTooltip>
            </Grid>
          </Grid>
          <Box padding={1} sx={{ border: `1px dashed #CCC`, borderRadius: 3 }}>
            <div className={styles.printAreaContainer} ref={contentRef}>
                <div className={styles.mainContainer} >
                <header className={`${styles.header} ${styles.px}`}>
                  <div className={styles.companyDetails}>
                    <div className={`${styles.title} ${styles.textMD}`}>DUMP REGISTER</div>
                    <div className={`${styles.companyName} ${styles.textLG}`}>{company?.name}</div>
                    <div className={`${styles.address} ${styles.textXS}`}>{company?.officeAddress}</div>
                    <div className={`${styles.contact} ${styles.textXS}`}>
                      GSTN: {company?.gstNo}, FASSAI No.: {company?.fassaiNo}
                    </div>
                  </div>
                  <div className={styles.logo}>
                    <img src={company?.logo} alt="Logo" />
                  </div>
                </header>
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {firstGridData.map((data, index) => (
                    <React.Fragment key={index}>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title}</span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={styles.textSM}>{data.value}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className={styles.px}>
                  <table className={styles.voucherTable}>
                    <thead>
                      <tr>
                        <th className={`${styles.srNoCol} ${styles.textSM} ${styles.textBold}`} rowSpan={2}>
                          Sr. No.
                        </th>
                        <th className={`${styles.materialsCol} ${styles.textSM} ${styles.textBold}`}>Particulars</th>
                        <th className={`${styles.uomCol} ${styles.textSM} ${styles.textBold}`}>UoM</th>
                        <th className={`${styles.quantityCol} ${styles.textSM} ${styles.textBold}`}>Quantity</th>
                        <th className={`${styles.unitPriceCol} ${styles.textSM} ${styles.textBold}`}>Unit Price</th>
                        <th className={`${styles.amountCol} ${styles.textSM} ${styles.textBold}`}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                        {dumpData?.dumpProducts?.map((product, index) => (
                        <tr key={index}>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{index + 1}</td>
                          <td className={`${styles.textSM}`}>{convertInTitleCase(product.productName || '')}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.uom}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.quantity}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.unitPrice}</td>
                          <td className={`${styles.textAlignCenter} ${styles.textSM}`}>{product.amount}</td>
                        </tr>
                      ))}
                        {(dumpData?.dumpProducts.length || 0) < 5 && Array(5 - (dumpData?.dumpProducts?.length || 0)).fill(null).map((_, index) => (
                          <tr key={index} className={styles.tableEmptyRows}>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                            <td className={styles.tableEmptyRows}></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className={`${styles.gridContainer} ${styles.px}`}>
                  {secondGridData.map((data, index) => (
                    <React.Fragment key={index}>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={`${styles.textSM} ${styles.textBold} ${styles.mr}`}>{data.title} </span>
                      </div>
                      <div className={`${styles.gridItem} ${styles.span_3}`}>
                        <span className={styles.textSM}>{data.value}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className={styles.signatureContainer}>
                  {signatureLabels.map((label, index) => (
                    <div key={index} className={styles.signatureBox}>
                      <span className={`${styles.signatureLabel} ${styles.textSM} ${styles.textBold}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Box>
      )}
    </Container>
  );
};
