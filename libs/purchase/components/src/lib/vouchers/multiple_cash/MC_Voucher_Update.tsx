import { Box, Button, Grid, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValParticulars, initValMMultipleCashVoucher, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, multicashVoucherSchema } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, Notification, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { GetMCvoucher, Particulars, PostMCvoucher, PURCHASE_API_URL, useGetAllDeliveryChallanNums, useGetAllGRNNums, useGetMCVoucher, useUpdateMCVoucher } from "@prime-fresh/purchase_api";
import { MCVoucherPreview } from "./MC_Voucher_Preview";
import { setPreview, showNotification } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";

export const MultipleCashVoucherUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { voucherid } = useParams();
    const voucherId = voucherid ? voucherid : '';
    const { data: mcVoucherData, isLoading } = useGetMCVoucher(PURCHASE_API_URL.GET_A_MC_VOUCHER, voucherId);
    const mcVoucherValues = mcVoucherData ? mcVoucherData : initValMMultipleCashVoucher;
    console.log(mcVoucherData);
    const { data: grnNums } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
    const allGRNNumbers = grnNums ? grnNums : [];
    const { data: dcnos } = useGetAllDeliveryChallanNums(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN_NO);
    const allDCNums = dcnos ? dcnos : [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateAmounts = (values: PostMCvoucher | GetMCvoucher, setFieldValue: (field: string, value: any,) => void) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const totalAmt = values.particulars.reduce((acc: any, product: Particulars) => acc + product.amt, 0);
        const amtWords = numToWords(totalAmt);
        setFieldValue("totalAmt", totalAmt);
        setFieldValue("amtWords", amtWords);
    };

    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateMCVoucher(PURCHASE_API_URL.UPDATE_MC_VOUCHER, voucherId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Multiple cash voucher updated successfully !!!" }));
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER);
            }, 5000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
        });;
    };

    return (
        <>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (
                    <>
                        <Notification />
                        <Formik
                            enableReinitialize={true}
                            initialValues={mcVoucherValues}
                            validationSchema={multicashVoucherSchema}
                            onSubmit={(values) => {
                                console.log(values);
                                handleSubmit(values);
                            }}
                        >
                            {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <Grid container columnSpacing={2} rowSpacing={2} padding={1}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h4">Multiple Cash Voucher</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Stack direction="row" justifyContent="end" alignItems="center">
                                                <Button type="submit" variant="contained" color="success" size="large" sx={{ width: 150 }}>Update</Button>
                                                <Button type="reset" variant="contained" color="secondary" size="large" sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                                                <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => dispatch(setPreview(true))}>Preview</Button>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SelectInput
                                                isRequired={false}
                                                label="Select GRN"
                                                name="grnNo"
                                                options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                                                value={allGRNNumbers.find(nums => nums.grnNo === values.grnNo)?.id}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SelectInput
                                                isRequired={false}
                                                label="Select Challan"
                                                name="challanNo"
                                                options={mapToValueLabelArray(allDCNums, 'id', 'challanNo')}
                                                value={values.challanNo}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SelectInput
                                                isRequired={true}
                                                label="Company Name"
                                                name="companyName"
                                                options={PURCHASE_ARRAYS.companyNames}
                                                value={values.companyName}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={5}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="debitCreditTo"
                                                label="Debit / Credit To"
                                                value={values.debitCreditTo}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={5}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="payReceivedFrom"
                                                label="Pay To / Received From"
                                                value={values.payReceivedFrom}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="location"
                                                label="Location"
                                                value={values.location}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
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
                                                                        handleChange={handleChange}
                                                                        touched={touched}
                                                                        errors={errors} />
                                                                </Grid>
                                                                <Grid item xs={12} md={2}>
                                                                    <TextInput
                                                                        type="text"
                                                                        isRequired={true}
                                                                        name={`particulars.${index}.amt`}
                                                                        label="Amount"
                                                                        value={values.particulars[index].amt}
                                                                        handleChange={handleChange}
                                                                        onBlur={() => calculateAmounts(values, setFieldValue)}
                                                                        touched={touched}
                                                                        errors={errors} />
                                                                </Grid>
                                                                <Grid item xs={12} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                                                    <IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => remove(index)}>
                                                                        <Close />
                                                                    </IconButton>
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
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                            <TextInput
                                                type="number"
                                                isRequired={false}
                                                name="totalAmt"
                                                label="Total Amount"
                                                value={values.totalAmt}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="amtWords"
                                                label="Amount In Words"
                                                value={values.amtWords}
                                                handleChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="receiverName"
                                                label="Received Name"
                                                value={values.receiverName}
                                                handleChange={handleChange}
                                                touched={touched}
                                                errors={errors} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="remark"
                                                label="Remark"
                                                value={values.remark}
                                                handleChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                        </Grid>
                                    </Grid>
                                </form>
                            )
                            }
                        </Formik >
                    </>)}
            < MCVoucherPreview />
        </>
    );
};
