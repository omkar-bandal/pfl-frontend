import {
    Button,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValPackingMaterials, initValPackingMaterialVoucher, numToWords, PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { Alertbar, ImageUpload, mapToValueLabelArray, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Materials, PURCHASE_API_URL, useGetAllGRNNums, useGetPMPVoucher, useUpdatePMPVoucher } from "@prime-fresh/purchase_api";
import { ADMIN_API_URL, useGetAllUOMs } from "@prime-fresh/admin_api";
import { UOM } from "@prime-fresh/admin/modules";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { PMPVoucherPreview } from "./PMP_Voucher_Preview";
import { useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";

//Labour Payment Voucher
export const PackingMaterialPaymentVoucherUpdate = () => {
    const { voucherid } = useParams();
    const voucherId = voucherid ? voucherid : '';
    const dispatch = useDispatch();
    const { data: grnNums } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
    const allGRNNumbers = grnNums ? grnNums : [];
    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUOMS = UOMs ? UOMs : [];
    const {data: pmpVoucherData} = useGetPMPVoucher(PURCHASE_API_URL.GET_A_PMP_VOUCHER, voucherId);
    const pmpVoucherValues = pmpVoucherData ? pmpVoucherData : initValPackingMaterialVoucher;

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
    const { mutateAsync: mutatePatch, isPending, isError, error, data: Res } = useUpdatePMPVoucher(PURCHASE_API_URL.UPDATE_PMP_VOUCHER, voucherId);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData);
    };
    return (
        <>
            <Alertbar open={isPending || isError} error={error} resMessage={Res} />
            <Formik
                initialValues={pmpVoucherValues}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
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

                            {/* GRN No. */}
                            <Grid item xs={12} md={4}>
                                <SelectInput
                                    isRequired={false}
                                    label="Select GRN"
                                    name="grnNo"
                                    options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                                    value={allGRNNumbers.find(nums => nums.grnNo === values.grnNo)?.id}
                                    handleChange={handleChange} />                </Grid>

                            <Grid item xs={12} md={4}>
                                <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="location"
                                    label="Location"
                                    value={values.location}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            {/* Other form fields */}
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="debitCreditTo"
                                    label="Debit / Credit To"
                                    value={values.debitCreditTo}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="payReceivedFrom"
                                    label="Pay To / Received From"
                                    value={values.payReceivedFrom}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="sellerName"
                                    label="Seller Name"
                                    value={values.sellerName}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="contactNo"
                                    label="Contact No"
                                    value={values.contactNo}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="altContactNo"
                                    label="Alternate Contact No"
                                    value={values.altContactNo}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            {/* Address Fields */}
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.address1"
                                    label="Address1"
                                    value={values.address.address1}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.address2"
                                    label="Address2"
                                    value={values.address.address2}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.location"
                                    label="Location"
                                    value={values.address.location}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            {/* More address fields */}
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.city"
                                    label="City"
                                    value={values.address.city}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.state"
                                    label="State"
                                    value={values.address.state}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="address.pincode"
                                    label="Pincode"
                                    value={values.address.pincode}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="purpose"
                                    label="Purpose"
                                    value={values.purpose}
                                    handleChange={handleChange}
                                />
                            </Grid>

                            {/* FieldArray for materials */}
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
                                                            isRequired={false}
                                                            name={`materials.${index}.itemName`}
                                                            label="Name"
                                                            value={item.itemName}
                                                            handleChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <SelectInput isRequired={true} label="Unit" name={`materials.${index}.uom`} options={mapToValueLabelArray<UOM>(allUOMS, 'id', 'unit')} value={item.itemUom} handleChange={handleChange} />
                                                    </Grid>
                                                    {/* More material fields */}
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            type="text"
                                                            isRequired={false}
                                                            name={`materials.${index}.itemQty`}
                                                            label="Quantity"
                                                            value={values.materials[index].itemQty}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`materials.${index}.itemQty`, parseFloat(e.target.value) || 0);
                                                            }}
                                                            onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            type="text"
                                                            isRequired={false}
                                                            name={`materials.${index}.rate`}
                                                            label="Rate"
                                                            value={values.materials[index].rate}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`materials.${index}.rate`, parseFloat(e.target.value) || 0);
                                                            }}
                                                            onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            type="text"
                                                            isRequired={false}
                                                            name={`item.${index}.amt`}
                                                            label="Amount"
                                                            value={item.amt}
                                                            handleChange={handleChange}
                                                        />
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

                            {/* Payment Mode */}
                            <Grid item xs={12} md={6}>
                                <SelectInput isRequired={true} label="Payment Mode" name="paymentMode" options={PURCHASE_ARRAYS.paymentMode} value={values.paymentMode} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="number"
                                    isRequired={false}
                                    name="totalAmt"
                                    label="Total Amount"
                                    value={values.totalAmt}
                                    handleChange={handleChange}
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
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="receivedBy"
                                    label="ReceivedBy"
                                    value={values.receivedBy}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
            <PMPVoucherPreview />
        </>
    );
};
