import { Box, Grid, LinearProgress } from '@mui/material'
import { initValLabourPaymentvoucher, labourPaymentVoucherSchema, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewLPVoucher, useGetLaborPaymentVoucherById, useUpdateLaborPaymentVoucherById } from '@prime-fresh/purchase/modules'
import { FormButtonGroup, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { LPVoucherPreview } from './labor-payment-voucher.preview'
import { setPreview } from '@prime-fresh/modules'
import { useNavigate, useParams } from 'react-router-dom'
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/modules'
import { useGetCompanyNames, useGetAllGRNNums } from '@prime-fresh/shared/modules'

export const LabourPaymentVoucherUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get Id from URL
    const { voucherid } = useParams();
    const voucherId = voucherid ? voucherid : '';

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

    //Get all GRN numbers
    const { data: grnNums } = useGetAllGRNNums();
    const allGRNNumbers = grnNums?.data ? grnNums.data : [];

    //Get labour payment voucher data by id
    const { data, isLoading } = useGetLaborPaymentVoucherById(voucherId);
    const lpVoucherValues = data?.data ? data.data : initValLabourPaymentvoucher;

    //Function to calculate total amount and convert it to the words
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateAmounts = (values: any, setFieldValue: (field: string, value: any,) => void) => {
        const totalAmt = values.noOfLabours * values.ratePerLabour;
        const amtWords = numToWords(totalAmt);
        setFieldValue("totalAmt", totalAmt);
        setFieldValue("amtWords", amtWords);
    };

    //React Query to update labour payment voucher
    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateLaborPaymentVoucherById(voucherId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = (values: any) => {
        console.log(values);
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(Res ? Res.message : "Voucher updated");
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER);
            }, 2500);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating voucher")
        });;
    };

    return (
        <>
            {isLoading ?
                (<Box sx={{ flex: 1 }} >
                    <LinearProgress />
                </Box >) :
                (
                    <Formik
                        enableReinitialize={true}
                        initialValues={lpVoucherValues}
                        validationSchema={labourPaymentVoucherSchema}
                        validateOnBlur={true}
                        validateOnChange={true}
                        onSubmit={(values) => {
                            console.log(values);
                            handleUpdate(values);
                        }}
                    >
                        {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                    <Grid item xs={12} marginBottom={2}>
                                        <PageTitle pagetitle='Labor Payment Voucher' />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <SelectInput
                                            isRequired={false}
                                            label="Select GRN"
                                            name="grnNo"
                                            options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                                            value={allGRNNumbers.find(nums => nums.grnNo === values.grnNo)?.id}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SelectInput
                                            isRequired={true}
                                            label="Company Name"
                                            name="companyName"
                                            options={companyNames}
                                            value={typeof values.companyName !== "string" ? values.companyName?.id : values.companyName}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="location"
                                            label="Location"
                                            value={values.location}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="debitCreditTo"
                                            label="Debit / Credit To"
                                            value={values.debitCreditTo}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="payReceivedFrom"
                                            label="Pay To / Received From"
                                            value={values.payReceivedFrom}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='date'
                                            isRequired={true}
                                            name="loadingDate"
                                            label="Day of Loading / Unloading"
                                            value={values.loadingDate}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="noOfLabours"
                                            label="No of Labours"
                                            value={values.noOfLabours}
                                            handleChange={handleChange}
                                            onBlur={() => calculateAmounts(values, setFieldValue)} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='number'
                                            isRequired={true}
                                            name="ratePerLabour"
                                            label="Per Day of Labour"
                                            value={values.ratePerLabour}
                                            handleChange={handleChange}
                                            onBlur={() => calculateAmounts(values, setFieldValue)} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='number'
                                            isRequired={false}
                                            name="totalAmt"
                                            label="Total Amount"
                                            value={values.totalAmt} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <SelectInput
                                            isRequired={true}
                                            label="Payment Mode"
                                            name="paymentMode"
                                            options={PURCHASE_ARRAYS.paymentMode}
                                            value={values.paymentMode}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <TextInput
                                            type='text'
                                            isRequired={false}
                                            name="amtWords"
                                            label="Amount In Words"
                                            value={values.amtWords} />
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="contactNo"
                                            label="Contact Number"
                                            value={values.contactNo}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <TextInput
                                            type='text'
                                            isRequired={false}
                                            name="altContactNo"
                                            label="Alternate Contact"
                                            value={values.altContactNo}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextInput
                                            type='text'
                                            isRequired={true}
                                            name="receiverName"
                                            label="Receiver Name"
                                            value={values.receiverName}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <TextInput
                                            type='text'
                                            isRequired={false}
                                            name="products"
                                            label="Products"
                                            value={values.products}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            type="text"
                                            multiline
                                            maxRows={2}
                                            isRequired={false}
                                            name="remark"
                                            label="Remark"
                                            value={values.remark}
                                            handleChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RadioGroupInput
                                            isRequired={true}
                                            label="is Labour KYC Attached ? (If available) :"
                                            name="kyc"
                                            alignment='vertical'
                                            value={values.kyc}
                                            options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                    </Grid>
                                    <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <FormButtonGroup
                                            submitLabel='Update'
                                            isSubmitting={isSubmitting}
                                            isSubmitError={error}
                                            resetLabel='Reset'
                                            onReset={handleReset}
                                            previewLabel='Preview'
                                            onPreview={() => {
                                                dispatch(setPreviewLPVoucher(values));
                                                dispatch(setPreview(true))
                                            }} />
                                    </Grid>
                                </Grid>
                            </form>)}
                    </Formik>
                )}
            <LPVoucherPreview />
        </>
    )
}
