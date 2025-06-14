import { Box, Button, Grid2, LinearProgress } from '@mui/material';
import { useCreateFinalInvoice } from '@prime-fresh/inventory/modules';
import { useGetDCTypeCustomerForViewById } from '@prime-fresh/purchase/modules';
import { PageTitle, PrintButton, toast } from '@prime-fresh/ui_shared';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import styles from './dc-type-customer.module.css';
import { formatAddress, useGetAllCompaniesData } from '@prime-fresh/shared/modules';

export const DCTypeCustomerView = () => {
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';

  const { data, isLoading } = useGetDCTypeCustomerForViewById(dcId);
  const dcTypeCustomerData = data?.data ? data.data : null;
  console.log('DC Type Customer Data: ', dcTypeCustomerData);

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { data: companyData } = useGetAllCompaniesData();
  console.log(companyData?.data);
  const company = companyData?.data
    ? companyData.data.find((comp) => comp.name === dcTypeCustomerData?.companyName)
    : null;

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

  return isLoading ? (
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
          </Grid2>
        </Grid2>
      </Grid2>
      <Box flex={1}>
        <div className={styles['document-container']} ref={contentRef}>
          {/* Header */}
          <header className={`${styles.header} ${styles['bottom-border']}`}>
            <div className={styles['company-details']}>
              <div className={styles['full-width']}>
                <span className={`${styles['text-smr']} ${styles['text-bold']}`}>DELIVERY CHALLAN</span>
              </div>
              <div className={styles['full-width']}>
                <span className={`${styles['text-xl']} ${styles['text-bold']}`}>{company?.name}</span>
              </div>
              <div className={`${styles['full-width']} ${styles.office}`}>
                <span className={styles['text-xs']}>{company?.officeAddress}</span>
                <span className={styles['text-xs']}>GSTN: {company?.gstNo}</span>
              </div>
            </div>
            <div className={styles.logo}>
              <img src={company?.logo} alt="Logo" width="120px" height="80px" />
            </div>
          </header>

          {/* Details Grid */}
          <div className={styles['details-grid']}>
            {[
              { label: 'DATE:', value: dcTypeCustomerData?.createdDate },
              { label: 'DC No:', value: dcTypeCustomerData?.challanNo },
              { label: 'P.O. No:', value: dcTypeCustomerData?.poNumber },
              { label: 'Vendor Code:', value: 'ABC Private Limited' },
              { label: 'Number of Crates:', value: '70' },
              { label: 'Grand Total:', value: dcTypeCustomerData?.netProductWeight },
              { label: 'Dispatch Time:', value: '10:15 AM' },
              { label: 'Dispatch Vehicle No:', value: dcTypeCustomerData?.vehicleNo },
              { label: 'Driver Name:', value: dcTypeCustomerData?.driverName },
              { label: 'Driver Mobile No:', value: dcTypeCustomerData?.contactNo },
              { label: 'Dispatched By:', value: 'Jane John Doe' },
              { label: 'Mob No. (Dispatched By):', value: '9008007001' },
              { label: 'Sign:', value: '' },
            ].map((item, index) => (
              <div key={index} className={`${styles['details-item']} ${index === 12 ? styles['span-2'] : ''}`}>
                <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mr']}`}>
                  {item.label}
                </span>
                <span className={styles['text-smr']}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Address Section */}
          <div className={styles['address-challan-container']}>
            <div className={styles['address-box']}>
              <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mb']}`}>
                Billing Address:
              </span>
              <span className={styles['text-smr']}>{formatAddress(dcTypeCustomerData?.deliveryAddress)}</span>
            </div>
            <div className={styles['address-box']}>
              <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mb']}`}>
                Shipping Address:
              </span>
              <span className={styles['text-smr']}>{formatAddress(dcTypeCustomerData?.billingAddress)}</span>
            </div>
            <div className={styles['challan-box']}>
              <span className={`${styles['text-smr']} ${styles['text-bold']} ${styles['label-mb']}`}>
                Delivery Challan/
                <br />
                Proforma Invoice No
              </span>
              <span className={styles['text-s']}>PROF-INV-2504220001</span>
            </div>
          </div>

          {/* Product Table */}
          <table className={styles['product-table']}>
            <thead>
              <tr>
                <th className={styles['sr-col']}>Sr.No.</th>
                <th className={styles['product-col']}>Product Description / SKU</th>
                <th className={styles['uom-col']}>UOM</th>
                <th className={styles['qty-col']}>Order Qty.</th>
                <th className={styles['dispatch-col']}>Dispatch Qty</th>
                <th className={styles['price-col']}>Price Per Unit</th>
                <th className={styles['value-col']}>Invoice Value</th>
                <th className={styles['accepted-col']}>Accepted Qty.</th>
                <th className={styles['rejection-col']}>Rejection Qty.</th>
                <th className={styles['return-col']}>Return received</th>
              </tr>
            </thead>
            <tbody>
              {dcTypeCustomerData?.deliveryChallanProducts.map((product, index) => (
                <tr>
                  <th className={styles['sr-col']}>{index}</th>
                  <th className={styles['product-col']}>{product.productName || ''}</th>
                  <th className={styles['uom-col']}>{product.saleUoM || ''}</th>
                  <th className={styles['qty-col']}> </th>
                  <th className={styles['dispatch-col']}>{product.netWeight}</th>
                  <th className={styles['price-col']}>{product.unitPrice}</th>
                  <th className={styles['value-col']}></th>
                  <th className={styles['accepted-col']}></th>
                  <th className={styles['rejection-col']}></th>
                  <th className={styles['return-col']}></th>
                </tr>
              ))}
              <tr className={styles['total-row']}>
                <td colSpan={2}>
                  <span className={`${styles['text-sm']} ${styles['text-bold']}`}>Total</span>
                </td>
                <td></td>
                <td></td>
                <td>0</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          {/* Amount in Words */}
          <div className={styles['amount-words']}>
            <span className={`${styles['words-label']} ${styles['text-smr']} ${styles['text-bold']}`}>
              Amount in Words:
            </span>
            <span className={styles['text-smr']}></span>
          </div>

          {/* Terms and Signature */}
          <div style={{ display: 'flex', marginTop: '8px', marginBottom: '8px' }}>
            <div style={{ flex: 1, border: '1px solid #000', marginRight: 5, paddingLeft: 5 }}>
              <span
                className={`${styles['text-smr']} ${styles['text-bold']}`}
                style={{ display: 'block', marginBottom: 5 }}
              >
                Terms & Conditions :
              </span>
              {[1, 2, 3, 4].map((num, idx) => (
                <span key={idx} className={styles['text-xs']} style={{ display: 'block', margin: '3px 0px' }}>
                  {idx === 0 && '1) Goods once sold / delivered will not be taken back or refunded'}
                  {idx === 1 && '2) We are not responsible for any transit damage,loss or leakage'}
                  {idx === 2 && '3) Subject to city Jurisdiction.'}
                  {idx === 3 && '4) 24% P.A interest will be charged for delayed payment.'}
                </span>
              ))}
            </div>
            <div style={{ flex: 1, border: '1px solid #000' }}>
              <div className={styles['signature-box']}>
                <div className={styles['terms-title']}>Authorised Signature :</div>
                <br />
              </div>
            </div>
          </div>

          {/* Receipt Section */}
          <div style={{ display: 'flex', marginTop: '8px', marginBottom: '8px' }}>
            {/* Left */}
            <div style={{ flex: 1, border: '1px solid #000', marginRight: 5 }}>
              <div className={`${styles['receipt-header']} ${styles['text-smr']} ${styles['text-bold']}`}>
                RECEIVED BY :
              </div>
              <table className={styles['full-width']}>
                {['Name:', 'No:', 'Sign:', 'Time :'].map((text, idx) => (
                  <tr key={idx}>
                    <td style={{ width: '40%' }}>
                      <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{text}</span>
                    </td>
                    {idx === 0 && (
                      <td rowSpan={4} style={{ width: '60%', borderLeft: '1px solid #eee' }}>
                        <div style={{ textAlign: 'center', padding: 10 }}>
                          <span className={styles.label}>Stamp :</span>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </table>
            </div>

            {/* Right */}
            <div style={{ flex: 1, border: '1px solid #000' }}>
              <div className={`${styles['receipt-header']} ${styles['text-smr']} ${styles['text-bold']}`}>
                RTV RECEIVED BY :
              </div>
              <table className={styles['full-width']}>
                {['Name:', 'No:', 'Sign:', 'Time :'].map((text, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: 3 }}>
                      <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{text}</span>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>

          {/* Feedback */}
          <div className={styles['feedback-container']}>
            {['Driver Feedback:', 'Receivers Feedback:', 'Remarks & Comments:'].map((text, idx) => (
              <div key={idx} className={styles['feedback-row']}>
                <span className={`${styles['text-smr']} ${styles['text-bold']}`}>{text}</span>
              </div>
            ))}
          </div>

          {/* Thank You */}
          <div className={styles['thank-you']}>**Thank You For Your Business **</div>
        </div>
      </Box>
    </Box>
  );
};
