import { Box, Button, Grid, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValPackingMaterials, initValPackingMaterialVoucher, numToWords, packingMaterialPaymentVoucherSchema, PURCHASE_ARRAYS, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Materials, PURCHASE_API_URL, useGetAllGRNNums, useGetPMPVoucher, useUpdatePMPVoucher } from "@prime-fresh/purchase_api";
import { ADMIN_API_URL, GetUOM, useGetAllUOMs } from "@prime-fresh/admin_api";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { PMPVoucherPreview } from "./PMP_Voucher_Preview";
import { useNavigate, useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";

export const PackingMaterialPaymentVoucherUpdate = () => {
    const navigate = useNavigate();

    const { voucherid } = useParams();
    const voucherId = voucherid ? voucherid : '';

    const { data: pmpVoucherData, isLoading } = useGetPMPVoucher(PURCHASE_API_URL.GET_A_PMP_VOUCHER, voucherId);
    const pmpVoucherValues = pmpVoucherData ? pmpVoucherData : initValPackingMaterialVoucher;
    console.log(pmpVoucherValues);
    const { data: grnNums } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
    const allGRNNumbers = grnNums ? grnNums : [];

    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUOMS = UOMs ? UOMs : [];

    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateAmounts = (values: any, setFieldValue: (field: string, value: any,) => void) => {
        const updatedProducts = values.materials.map((product: Materials) => ({
            ...product,
            amt: product.itemQty * product.rate,
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const totalAmt = updatedProducts.reduce((acc: any, product: Materials) => acc + product.amt, 0);
        const amtWords = numToWords(totalAmt);
        setFieldValue("materials", updatedProducts);
        setFieldValue("totalAmt", totalAmt);
        setFieldValue("amtWords", amtWords);
    };

    const { mutateAsync: mutatePatch, error, data: Res } = useUpdatePMPVoucher(PURCHASE_API_URL.UPDATE_PMP_VOUCHER, voucherId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(Res? Res.message: "Voucher created.")
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER);
            }, 2500);
        }).catch(() => {
            toast.error(error? error.message : "Error while creating voucher.")
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
                            initialValues={pmpVoucherValues}
                            validationSchema={packingMaterialPaymentVoucherSchema}
                            validateOnBlur={true}
                            validateOnChange={true}
                            onSubmit={(values) => {
                                console.log(values);
                                handleSubmit(values);
                            }}
                        >
                            {({ values, handleChange, handleSubmit, setFieldValue, handleReset}) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h4">
                                                Packing Material Payment Voucher
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Stack direction="row" justifyContent="end" alignItems="center">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="success"
                                                    size="large"
                                                    sx={{ width: 150 }}
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    type="reset"
                                                    variant="contained"
                                                    color="secondary"
                                                    size="large"
                                                    sx={{ width: 150, marginLeft: 2 }}
                                                    onClick={handleReset}
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color='info'
                                                    size='large'
                                                    sx={{ width: 150, marginLeft: 2 }}
                                                    onClick={() => dispatch(setPreview(true))}
                                                >
                                                    Preview
                                                </Button>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SelectInput
                                                isRequired={false}
                                                label="Select GRN"
                                                name="grnNo"
                                                options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                                                value={allGRNNumbers.find(nums => nums.grnNo === values.grnNo)?.id}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SelectInput
                                                isRequired={true}
                                                label="Company Name"
                                                name="companyName"
                                                options={PURCHASE_ARRAYS.companyNames}
                                                value={values.companyName}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="location"
                                                label="Location"
                                                value={values.location}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="debitCreditTo"
                                                label="Debit / Credit To"
                                                value={values.debitCreditTo}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="payReceivedFrom"
                                                label="Pay To / Received From"
                                                value={values.payReceivedFrom}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="sellerName"
                                                label="Seller Name"
                                                value={values.sellerName}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="contactNo"
                                                label="Contact No"
                                                value={values.contactNo}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="altContactNo"
                                                label="Alternate Contact No"
                                                value={values.altContactNo}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="address.address1"
                                                label="Address1"
                                                value={values.address.address1}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="address.address2"
                                                label="Address2"
                                                value={values.address.address2}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="address.location"
                                                label="Location"
                                                value={values.address.location}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="address.city"
                                                label="City"
                                                value={values.address.city}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="address.state"
                                                label="State"
                                                value={values.address.state}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="address.pincode"
                                                label="Pincode"
                                                value={values.address.pincode}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="purpose"
                                                label="Purpose"
                                                value={values.purpose}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FieldArray name="materials">
                                                {({ remove, push }) => (
                                                    <>
                                                        {values.materials.map((item, index) => (
                                                            <Grid
                                                                container
                                                                columnSpacing={1}
                                                                key={index}
                                                                alignItems="center"
                                                                sx={{
                                                                    border: `1px solid #BDBDBD`,
                                                                    marginY: 1,
                                                                    padding: 1,
                                                                    borderRadius: 2,
                                                                }}
                                                            >
                                                                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                                    <Typography variant="body1" component="div">Product: {index + 1}</Typography>
                                                                    <IconButton
                                                                        color="error"
                                                                        onClick={() => remove(index)}
                                                                    >
                                                                        <Close />
                                                                    </IconButton>
                                                                </Grid>
                                                                <Grid item xs={12} md={4}>
                                                                    <TextInput
                                                                        type="text"
                                                                        isRequired={true}
                                                                        name={`materials.${index}.itemName`}
                                                                        label="Name"
                                                                        value={values.materials[index].itemName}
                                                                        handleChange={handleChange}/>
                                                                </Grid>
                                                                <Grid item xs={12} md={2}>
                                                                    <SelectInput
                                                                        isRequired={true}
                                                                        label="Unit"
                                                                        name={`materials.${index}.itemUom`}
                                                                        options={mapToValueLabelArray<GetUOM>(allUOMS, 'id', 'unit')}
                                                                        value={values.materials[index].itemUom}
                                                                        handleChange={handleChange} />
                                                                </Grid>
                                                                <Grid item xs={12} md={2}>
                                                                    <TextInput
                                                                        type="text"
                                                                        isRequired={true}
                                                                        name={`materials.${index}.itemQty`}
                                                                        label="Quantity"
                                                                        value={values.materials[index].itemQty}
                                                                        handleChange={(e) => {
                                                                            handleChange(e);
                                                                            setFieldValue(`materials.${index}.itemQty`, parseFloat(e.target.value) || 0);
                                                                        }}
                                                                        onBlur={() => calculateAmounts(values, setFieldValue)}/>
                                                                </Grid>
                                                                <Grid item xs={12} md={2}>
                                                                    <TextInput
                                                                        type="text"
                                                                        isRequired={true}
                                                                        name={`materials.${index}.rate`}
                                                                        label="Rate"
                                                                        value={values.materials[index].rate}
                                                                        handleChange={(e) => {
                                                                            handleChange(e);
                                                                            setFieldValue(`materials.${index}.rate`, parseFloat(e.target.value) || 0);
                                                                        }}
                                                                        onBlur={() => calculateAmounts(values, setFieldValue)}/>
                                                                </Grid>
                                                                <Grid item xs={12} md={2}>
                                                                    <TextInput
                                                                        type="text"
                                                                        isRequired={false}
                                                                        name={`item.${index}.amt`}
                                                                        label="Amount"
                                                                        value={values.materials[index].amt}
                                                                        handleChange={handleChange}/>
                                                                </Grid>
                                                            </Grid>
                                                        ))}
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sx={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "end",
                                                            }}
                                                        >
                                                            <Button
                                                                variant="text"
                                                                startIcon={<Add />}
                                                                onClick={() => push(initValPackingMaterials)}
                                                            >
                                                                Add More
                                                            </Button>
                                                        </Grid>
                                                    </>
                                                )}
                                            </FieldArray>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <SelectInput
                                                isRequired={true}
                                                label="Payment Mode"
                                                name="paymentMode"
                                                options={PURCHASE_ARRAYS.paymentMode}
                                                value={values.paymentMode}
                                                handleChange={handleChange}/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="number"
                                                isRequired={false}
                                                name="totalAmt"
                                                label="Total Amount"
                                                value={values.totalAmt}
                                                handleChange={handleChange}/>
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
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="receiverName"
                                                label="Receiver Name"
                                                value={values.receiverName}
                                                handleChange={handleChange}/>
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
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <RadioGroupInput
                                                isRequired={false}
                                                label="is KYC attached? (if available)"
                                                name="kyc"
                                                value={values.kyc}
                                                options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>)}
            <PMPVoucherPreview />
        </>
    );
};
