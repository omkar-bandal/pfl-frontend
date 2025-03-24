import { Box, Grid2, LinearProgress } from "@mui/material";
import { initValTransportPaymentVoucher, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewTPVoucher, useGetTransportPaymentVoucherById, useUpdateTransportPaymentVoucherById } from "@prime-fresh/purchase/modules";
import { FormButtonGroup, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { TPVoucherPreview } from "./transport-payment-voucher.preview";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllGRNNums, useGetCompanyNames, appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/modules";
import { handleAmountChange } from "./helper-function";

export const TransportPaymentVoucherUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { voucherid } = useParams<{ voucherid: string }>();
  const tpVoucherId = voucherid ? voucherid : '';
  const { data: tpVoucherData, isLoading } = useGetTransportPaymentVoucherById(tpVoucherId);
  const tpVoucherValues = tpVoucherData?.data ? tpVoucherData.data : initValTransportPaymentVoucher;

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: grnNums } = useGetAllGRNNums();
  const allGRNNumbers = grnNums?.data ? mapToValueLabelArray(grnNums.data, 'id', 'grnNo') : [];

  const { mutateAsync: mutatePatch, error, data: Res } = useUpdateTransportPaymentVoucherById(tpVoucherId);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePatch(formData).then(() => {
      toast.success(Res ? Res.message : "Voucher updating.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while updating voucher.");
    });;
  };
  return (
    <>
      {isLoading ?
        (<Box sx={{ flex: 1 }} >
          <LinearProgress />
        </Box >) :
        (<Formik
          enableReinitialize={true}
          initialValues={tpVoucherValues}
          onSubmit={(values) => {
            console.log("updating values:", values);
            handleSubmit(values);
          }} >
          {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                <Grid2 size={{xs: 12 }} marginBottom={2}>
                  <PageTitle pagetitle="Transport Payment Voucher" />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <SelectInput
                    isRequired={false}
                    label="Select GRN"
                    name="grnNo"
                    options={allGRNNumbers}
                    value={typeof values.grnNo !== 'string' ? values.grnNo?.id : values.grnNo}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 6 }}>
                  <SelectInput
                    isRequired={true}
                    label="Company Name"
                    name="companyName"
                    options={companyNames}
                    value={typeof values.companyName !== 'string' ? values.companyName?.id : values.companyName}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="location"
                    label="Location"
                    value={values.location}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 6 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="debitCreditTo"
                    label="Debit / Credit To"
                    value={values.debitCreditTo}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 6 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="payReceivedFrom"
                    label="Pay To / Received From"
                    value={values.payReceivedFrom}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="driverName"
                    label="Driver Name"
                    value={values.driverName}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="contactNo"
                    label="Contact No"
                    value={values.contactNo}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <TextInput
                    type="number"
                    isRequired={false}
                    name="altContactNo"
                    label="Alternate Contact Number"
                    value={values.altContactNo}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="vehicleNo"
                    label="Vehicle No"
                    value={values.vehicleNo}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="dispatchLocation"
                    label="Dispatch Location"
                    value={values.dispatchLocation}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="destinationLocation"
                    label="Destination Location"
                    value={values.destinationLocation}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={false}
                    name="products"
                    label="Products"
                    value={values.products}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <SelectInput
                    isRequired={true}
                    label="Payment Mode"
                    name="paymentMode"
                    options={PURCHASE_ARRAYS.paymentMode}
                    value={values.paymentMode}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <TextInput
                    type="text"
                    isRequired={false}
                    name="freightAmt"
                    label="Freight Amount"
                    value={values.freightAmt || ""}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 4 }}>
                  <TextInput
                    type="text"
                    isRequired={false}
                    name="totalAmt"
                    label="Total Amount"
                    value={values.totalAmt || ""}
                    handleChange={e => handleAmountChange(e, setFieldValue)} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 9 }}>
                  <TextInput
                    type="text"
                    isRequired={false}
                    isReadOnly={true}
                    name="amtWords"
                    label="Amount In Words"
                    value={values.amtWords} />
                </Grid2>
                <Grid2 size={{xs: 12, md: 3 }}>
                  <TextInput
                    type="text"
                    isRequired={true}
                    name="receiverName"
                    label="Receiver Name"
                    value={values.receiverName}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12 }}>
                  <TextInput
                    type="text"
                    multiline
                    maxRows={2}
                    isRequired={false}
                    name="remark"
                    label="Remark"
                    value={values.remark}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12 }}>
                  <RadioGroupInput
                    isRequired={false}
                    label="is KYC attached? (Driver Lic. / RC Book / PAN)"
                    name="kyc"
                    alignment="vertical"
                    value={values.kyc}
                    options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                    handleChange={handleChange} />
                </Grid2>
                <Grid2 size={{xs: 12 }}>
                  <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                </Grid2>
                <Grid2 size={{xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FormButtonGroup
                    submitLabel='Update'
                    isSubmitting={isSubmitting}
                    isSubmitError={error}
                    resetLabel='Reset'
                    onReset={handleReset}
                    previewLabel='Preview'
                    onPreview={() => {
                      dispatch(setPreviewTPVoucher(values));
                      dispatch(setPreview(true))
                    }} />
                </Grid2>
              </Grid2>
            </form>
          )}
        </Formik>)}
      <TPVoucherPreview />
    </>
  );
};