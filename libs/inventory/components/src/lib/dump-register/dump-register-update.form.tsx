import React from 'react'
import { FieldArray, Formik } from 'formik'
import { dumpProductsInitialValue, dumpRegisterInitialValue, dumpRegisterSchema, inventoryRouteConstants } from '@prime-fresh/inventory/modules'
import { Grid, IconButton, Typography } from '@mui/material'
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules'
import { PURCHASE_API_URL, useGetAllGRN } from '@prime-fresh/purchase_api'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils'
import { ADMIN_API_URL, useGetAllFilteredBranches, useGetAllProducts, useGetAllUOMs } from '@prime-fresh/admin_api'
import { Add, Close } from '@mui/icons-material'
import { INVENTORY_API_URL, useGetADumpRegister, useUpdateDumpRegister } from '@prime-fresh/inventory_api'
import { useNavigate, useParams } from 'react-router-dom'

export const DumpRegisterUpdateForm = () => {
    const { id } = useParams<{ id: string }>();
    const dumpRegiId = id ? id : "";
    const navigate = useNavigate();
    // Fetch Data
    const { data: dumpRegi } = useGetADumpRegister(INVENTORY_API_URL.GET_A_DUMP_REGISTER, dumpRegiId);
    const { data: grns } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
    const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const allProducts = products? mapToValueLabelArray(products || [], 'id', 'name') : [];
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);

    // Memoize derived values
    const initialValuesDumpRegi = dumpRegi ? dumpRegi : dumpRegisterInitialValue;
    const grnNums = React.useMemo(() => mapToValueLabelArray(grns || [], 'id', 'grnNo'), [grns]);
    const allUOMs = React.useMemo(() => mapToValueLabelArray(uoms || [], 'id', 'unit'), [uoms]);
    const allLocations = React.useMemo(() => mapToValueLabelArray(locations || [], 'id', 'name'), [locations]);

    const { mutateAsync, error, data } = useUpdateDumpRegister(INVENTORY_API_URL.UPDATE_DUMP_REGISTER, dumpRegiId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutateAsync(formData).then(() => {
            toast.success(data ? data.message : "Dump record updated sucessfully.");
            setTimeout(() => {
                navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
            }, 2500);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating dump record.");
        })
    }
    return (
        <Formik
            key={"update"}
            enableReinitialize={true}
            initialValues={initialValuesDumpRegi}
            validationSchema={dumpRegisterSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values)
                handleUpdate(values);
            }}>
            {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">Dump Register</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectInput
                                isRequired
                                label="Company Name"
                                name="companyName"
                                options={PURCHASE_ARRAYS.companyNames}
                                value={values.companyName}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AutoCompleteInput
                                isRequired={true}
                                name="location"
                                label="Location"
                                options={allLocations}
                                handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextInput
                                type="date"
                                isRequired
                                name="date"
                                label="Date"
                                value={values.date}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                type="text"
                                isRequired={false}
                                name="batchNo"
                                label="Batch Number"
                                value={values.batchNo}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectInput
                                isRequired={false}
                                label="Referred GRN"
                                name="grn"
                                options={grnNums}
                                value={values.grn}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="dumpProducts">
                                {({ push, remove }) => (
                                    <>
                                        {values.dumpProducts.map((_, index) => (
                                            <Grid container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                                                <Grid item xs={12} md={5}>
                                                    <AutoCompleteInput
                                                        isRequired={true}
                                                        name={`dumpProducts.${index}.product`}
                                                        label="Product Name"
                                                        options={allProducts}
                                                        handleChange={(event, newValue) => {
                                                            if (newValue) {
                                                                setFieldValue(`dumpProducts.${index}.product`, newValue.value);
                                                            } else {
                                                                setFieldValue(`dumpProducts.${index}.product`, '');
                                                            }
                                                        }} />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <SelectInput
                                                        isRequired
                                                        name={`dumpProducts.${index}.uom`}
                                                        label="UOM"
                                                        options={allUOMs}
                                                        value={values.dumpProducts[index].uom}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired
                                                        name={`dumpProducts.${index}.quantity`}
                                                        label="Quantity"
                                                        value={values.dumpProducts[index].quantity}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired
                                                        name={`dumpProducts.${index}.dumpCost`}
                                                        label="Dump Cost"
                                                        value={values.dumpProducts[index].dumpCost}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                    <IconButton color="success" size="small" sx={{ marginTop: 3 }} onClick={() => push(dumpProductsInitialValue)}>
                                                        <Add />
                                                    </IconButton>
                                                    {values.dumpProducts.length > 1 && (<IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                                                        <Close />
                                                    </IconButton>)}
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                isRequired={false}
                                name="remark"
                                label="Remark"
                                value={values.remark}
                                handleChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
};
