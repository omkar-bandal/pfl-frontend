import { Box, Grid, IconButton, LinearProgress, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValParticulars, initValMMultipleCashVoucher, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, multicashVoucherSchema, setPreviewMCVoucher, useGetMultiCashVoucherById, useUpdateMultiCashVoucherById } from "@prime-fresh/purchase/modules";
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, mapToValueLabelArray, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { GetMCvoucher, Particulars, PostMCvoucher } from "@prime-fresh/purchase_api";
import { MCVoucherPreview } from "./multi-cash-voucher.preview";
import { setPreview } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useGetAllDeliveryChallanNums, useGetAllGRNNums, useGetCompanyNames } from "@prime-fresh/shared/modules";

export const MultipleCashVoucherUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { voucherid } = useParams();
    const voucherId = voucherid ? voucherid : '';

    const { data: mcVoucher, isLoading } = useGetMultiCashVoucherById(voucherId);
    const mcVoucherValues = mcVoucher?.data ? mcVoucher.data : initValMMultipleCashVoucher;

    console.log(mcVoucherValues);

    const { data: grnnos } = useGetAllGRNNums();
    const allGRNNums = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

    const { data: dcnos } = useGetAllDeliveryChallanNums();
    const allDCNums = dcnos?.data ? mapToValueLabelArray(dcnos.data, 'id', 'challanNo') : [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateAmounts = (values: PostMCvoucher | GetMCvoucher, setFieldValue: (field: string, value: any,) => void) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const totalAmt = values.particulars.reduce((acc: any, product: Particulars) => acc + product.amt, 0);
        const amtWords = numToWords(totalAmt);
        setFieldValue("totalAmt", totalAmt);
        setFieldValue("amtWords", amtWords);
    };

    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateMultiCashVoucherById(voucherId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(Res ? Res.message : "Voucher updated")
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating voucher")
        });;
    };

    return (
        <>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (<Formik
                    enableReinitialize={true}
                    initialValues={mcVoucherValues}
                    validationSchema={multicashVoucherSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        handleSubmit(values);
                    }}>
                    {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} marginBottom={2}>
                                    <PageTitle pagetitle='Multiple Cash Voucher' />                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Select GRN"
                                        name="grnNo"
                                        options={allGRNNums}
                                        value={typeof values.grnNo !== "string" ? values.grnNo.id : values.grnNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Select Challan"
                                        name="challanNo"
                                        options={allDCNums}
                                        value={typeof values.challanNo !== "string" ? values.challanNo.id : values.challanNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SelectInput
                                        isRequired={true}
                                        label="Company Name"
                                        name="companyName"
                                        options={companyNames}
                                        value={typeof values.companyName !== "string" ? values.companyName.id : values.companyName}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="debitCreditTo"
                                        label="Debit / Credit To"
                                        value={values.debitCreditTo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="payReceivedFrom"
                                        label="Pay To / Received From"
                                        value={values.payReceivedFrom}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="location"
                                        label="Location"
                                        value={values.location}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <FieldArray name="particulars">
                                        {({ remove, push }) => (
                                            <>
                                                {values.particulars.map((_, index) => (
                                                    <Grid
                                                        container
                                                        columnSpacing={1}
                                                        key={index}
                                                        alignItems="center">
                                                        <Grid item xs={12} md={9}>
                                                            <TextInput
                                                                type="text"
                                                                multiline
                                                                maxRows={2}
                                                                isRequired={true}
                                                                name={`particulars.${index}.description`}
                                                                label="Description"
                                                                value={values.particulars[index].description}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <TextInput
                                                                type="text"
                                                                isRequired={true}
                                                                name={`particulars.${index}.amt`}
                                                                label="Amount"
                                                                value={values.particulars[index].amt}
                                                                handleChange={handleChange}
                                                                onBlur={() => calculateAmounts(values, setFieldValue)} />
                                                        </Grid>
                                                        <Grid item xs={12} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                                            {values.particulars.length > 1 && <IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => remove(index)}>
                                                                <Close />
                                                            </IconButton>}
                                                            <IconButton color="primary" size="large" sx={{ marginTop: 2 }} onClick={() => push(initValParticulars)}>
                                                                <Add />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                            </>
                                        )}
                                    </FieldArray>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <SelectInput
                                        isRequired={true}
                                        label="Payment Mode"
                                        name="paymentMode"
                                        options={PURCHASE_ARRAYS.paymentMode}
                                        value={values.paymentMode}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextInput
                                        isReadOnly={true}
                                        isRequired={false}
                                        name="totalAmt"
                                        label="Total Amount"
                                        value={values.totalAmt} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput
                                        type="text"
                                        isRequired={false}
                                        name="amtWords"
                                        label="Amount In Words"
                                        value={values.amtWords}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="receiverName"
                                        label="Received Name"
                                        value={values.receiverName}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="remark"
                                        label="Remark"
                                        value={values.remark}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                </Grid>
                                <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                                    <FormResetBtn label="Reset" handleReset={handleReset} />
                                    <FormPreviewBtn onClick={() => { dispatch(setPreviewMCVoucher(values)); dispatch(setPreview(true)) }} />
                                </Grid>
                            </Grid>
                        </form>)}
                </Formik >)}
            < MCVoucherPreview />
        </>
    );
};
