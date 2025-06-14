import { Box, Button, Container, Grid2, LinearProgress } from '@mui/material';
import { useCallback, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { PageTitle, PrintButton, toast } from '@prime-fresh/ui_shared';
import { getSelectedPackMatData, useGetAllCompaniesData } from '@prime-fresh/shared/modules';
import { useGetDeliveryChallanById } from '@prime-fresh/purchase/modules';
import { useCreateFinalInvoice } from '@prime-fresh/inventory/modules';
import { useGetAllPackagingMaterials, useGetCustomerById } from '@prime-fresh/admin/modules';
import { DCtypeOtherView } from './dc-type-other.view';
import { DCtypeCustomerView } from './dc-type-customer.view';

export const DeliveryChallanView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';
  const { data, isLoading } = useGetDeliveryChallanById(dcId);
  const dcData = data?.data ? data.data : null;
  console.log('Delivery Challan Data: ', dcData);

  const customerId = dcData?.partyName && typeof dcData?.partyName !== 'string' ? dcData?.partyName.id : '';
  const companyId = dcData?.companyName && typeof dcData?.companyName !== 'string' ? dcData?.companyName.id : '';

  const { data: customerData } = useGetCustomerById(customerId);
  const { data: companyData } = useGetAllCompaniesData();
  console.log(companyData?.data);
  const company = companyData?.data ? companyData.data.find((comp) => comp.id === companyId) : null;

  const { data: pmdata } = useGetAllPackagingMaterials();
  const packMatData = useMemo(() => (pmdata?.data ? pmdata.data : []), [pmdata]);
  const getQtyPerPackage = useCallback(
    (index: number) => {
      if (dcData !== null) {
        const containsQty = getSelectedPackMatData(
          dcData?.deliveryChallanProducts[index].packagingMaterial?.id,
          packMatData
        )?.containsQuantity;
        const containsQtyUoM = getSelectedPackMatData(
          dcData?.deliveryChallanProducts[index].packagingMaterial?.id,
          packMatData
        )?.uom;
        if (containsQty && containsQtyUoM) return `${containsQty} ${containsQtyUoM}`;
      } else return null;
    },
    [dcData, packMatData]
  );
  const { mutateAsync, error, data: Res } = useCreateFinalInvoice(dcId);

  const handleDownload = () => {
    mutateAsync(dcId)
      .then(() => {
        const pdfUrl = Res?.invoiceurl;
        if (pdfUrl) {
          toast.success('Invoice created Successfully');
        }
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while creating invoice.');
      });
  };

  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Box sx={{ flex: 1 }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ flex: 1, marginY: 1 }}>
          <Grid2 container rowSpacing={1}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <PageTitle pagetitle="Delivery Challan" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Grid2
                container
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                }}
              >
                <Grid2 size={{ xs: 4 }}>
                  <PrintButton onClick={() => reactToPrintFn()} />
                </Grid2>
                {dcData?.deliveryCType === 'customer' && (
                  <Grid2 size={{ xs: 4 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{ width: 150, height: 40, fontWeight: 500, fontSize: 15, textTransform: 'none' }}
                      onClick={handleDownload}
                    >
                      Final Invoice
                    </Button>
                  </Grid2>
                )}
              </Grid2>
            </Grid2>
          </Grid2>
          {dcData?.deliveryCType !== 'customer' ? (
            <DCtypeOtherView
              contentRef={contentRef}
              company={company}
              customerData={customerData}
              dcData={dcData}
              getQtyPerPackage={getQtyPerPackage}
            />
          ) : (
            <DCtypeCustomerView
              contentRef={contentRef}
              company={company}
              customerData={customerData}
              dcData={dcData}
              getQtyPerPackage={getQtyPerPackage}
            />
          )}
        </Box>
      )}
    </Container>
  );
};
