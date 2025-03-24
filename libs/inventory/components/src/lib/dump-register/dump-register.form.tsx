/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FieldArray, Formik } from 'formik'
import { dumpProductsInitialValue, dumpRegisterInitialValue, dumpRegisterSchema, inventoryRouteConstants, useCreateDumpRegister, useGetDumpRegisterById, useUpdateDumpRegister } from '@prime-fresh/inventory/modules'
import { Box, Grid2, IconButton, LinearProgress } from '@mui/material'
import { AutoCompleteInput, FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Add, Close } from '@mui/icons-material'
import { mapToValueLabelArray, useGetAllGRNNums, useGetBranchesPartialData, useGetCompanyNames, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules'

export const DumpRegisterForm = () => {
    const { id } = useParams<{ id: string }>();
    const dumpRegiId = id ? id : "";
    const navigate = useNavigate();
    
    const { data: dumpRecord, isLoading, isError, error } = useGetDumpRegisterById(dumpRegiId);
    const dumpRegi = dumpRecord?.data ? dumpRecord.data : dumpRegisterInitialValue;
    console.log("dump by id: ", dumpRegi)

    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const { data: Companies } = useGetCompanyNames();
    const companies = Companies?.data ? mapToValueLabelArray(Companies.data, 'id', 'name') : [];

    const { data: grns } = useGetAllGRNNums();
    const grnNums = useMemo(() => grns?.data ? mapToValueLabelArray(grns.data, 'id', 'grnNo') : [], [grns]);

    const { data: uoms } = useGetUOMPartialData();
    const allUOMs = useMemo(() => uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : [], [uoms]);

    const { data: products } = useGetProductsPartialData();
    const allProducts = useMemo(() => products?.data ? mapToValueLabelArray(products?.data, 'id', 'name') : [], [products]);

    const { data: locations } = useGetBranchesPartialData();
    const allLocations = useMemo(() => locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : [], [locations]);

    // Memoize derived values
    const initialValuesDumpRegi = dumpRegiId === "" ? dumpRegisterInitialValue : dumpRegi;

    const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateDumpRegister();
    const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateDumpRegister(dumpRegiId);

    const handleSubmit = (values: any) => {
        dumpRegiId === "" ?
            (mutateAsyncPost(values).then(() => {
                toast.success(PostData ? PostData.message : "Dump record created sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
                }, 2000);
            }).catch(() => {
                toast.error(PostError ? PostError.message : "Error while creating dump record .");
            })) :
            (mutateAsyncPatch(values).then(() => {
                toast.success(PatchData ? PatchData.message : "Dump record updated sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
                }, 2000);
            }).catch(() => {
                toast.error(PatchError ? PatchError.message : "Error while updating dump record.");
            }))
    }
    return (
        dumpRegiId !== "" && isLoading ? (
            <Box flex={1}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={dumpRegiId === "" ? "create-dump" : "update-dump"}
                enableReinitialize={true}
                initialValues={initialValuesDumpRegi}
                validationSchema={dumpRegisterSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => {
                    console.log(values)
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleReset, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{xs:12}}>
                                <PageTitle pagetitle='Dump Register'/>
                            </Grid2>
                            <Grid2 size={{xs:12, md: 6}}>
                                <SelectInput
                                    isRequired
                                    label="Company Name"
                                    name="companyName"
                                    options={companies}
                                    value={values.companyName}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{xs:12, md: 4}}>
                                <AutoCompleteInput
                                    isRequired={true}
                                    name="location"
                                    label="Location"
                                    options={allLocations} />
                            </Grid2>
                            <Grid2 size={{xs:12, md: 2}}>
                                <TextInput
                                    type="date"
                                    isRequired
                                    name="date"
                                    label="Date"
                                    value={values.date}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{xs:12, md: 6}}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="batchNo"
                                    label="Batch Number"
                                    value={values.batchNo}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{xs:12, md: 6}}>
                                <SelectInput
                                    isRequired={false}
                                    label="Referred GRN"
                                    name="grn"
                                    options={grnNums}
                                    value={values.grn}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{xs:12}}>
                                <FieldArray name="dumpProducts">
                                    {({ push, remove }) => (
                                        <>
                                            {values.dumpProducts.map((_, index) => (
                                                <Grid2 container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                                                    <Grid2 size={{xs:12, md: 5}}>
                                                        <AutoCompleteInput
                                                            isRequired={true}
                                                            name={`dumpProducts.${index}.product`}
                                                            label="Product Name"
                                                            options={allProducts} />
                                                    </Grid2>
                                                    <Grid2 size={{xs:12, md: 2}}>
                                                        <SelectInput
                                                            isRequired
                                                            name={`dumpProducts.${index}.uom`}
                                                            label="UOM"
                                                            options={allUOMs}
                                                            value={values.dumpProducts[index].uom}
                                                            handleChange={handleChange}
                                                        />
                                                    </Grid2>
                                                    <Grid2 size={{xs:12, md: 2}}>
                                                        <TextInput
                                                            type="number"
                                                            isRequired
                                                            name={`dumpProducts.${index}.quantity`}
                                                            label="Quantity"
                                                            value={values.dumpProducts[index].quantity}
                                                            handleChange={handleChange}
                                                        />
                                                    </Grid2>
                                                    <Grid2 size={{xs:12, md: 2}}>
                                                        <TextInput
                                                            type="number"
                                                            isRequired
                                                            name={`dumpProducts.${index}.dumpCost`}
                                                            label="Dump Cost"
                                                            value={values.dumpProducts[index].dumpCost}
                                                            handleChange={handleChange}
                                                        />
                                                    </Grid2>
                                                    <Grid2 size={{xs:12, md: 1}} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                        <IconButton color="success" size="small" sx={{ marginTop: 3 }} onClick={() => push(dumpProductsInitialValue)}>
                                                            <Add />
                                                        </IconButton>
                                                        {values.dumpProducts.length > 1 && (<IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                                                            <Close />
                                                        </IconButton>)}
                                                    </Grid2>
                                                </Grid2>
                                            ))}
                                        </>
                                    )}
                                </FieldArray>
                            </Grid2>
                            <Grid2 size={{xs:12}}>
                                <TextInput
                                    isRequired={false}
                                    name="remark"
                                    label="Remark"
                                    value={values.remark}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FormButtonGroup
                                    submitLabel={dumpRegiId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={dumpRegiId === "" ? PostError : PatchError}
                                    resetLabel='Reset'
                                    onReset={handleReset}
                                />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    );
};
