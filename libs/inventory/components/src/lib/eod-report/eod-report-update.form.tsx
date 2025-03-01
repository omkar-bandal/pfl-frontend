/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react'
import { arrayConstants, eodReportInitialValue, eodReportProductsInitialValue, inventoryRouteConstants, useCreateEODReport, useGetEODReportById, useUpdateEODReport } from '@prime-fresh/inventory/modules'
import { FieldArray, Formik } from 'formik'
import { Box, Button, Grid2, LinearProgress } from '@mui/material'
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, PageTitle, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Add, Remove } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { mapToValueLabelArray, useGetBranchesPartialData, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules'

export const EODReportUpdateForm = () => {
    const { id } = useParams<{ id: string }>();
    const eodId = id ? id : "";
    const navigate = useNavigate();
    const { data: eods, isLoading, isError, error } = useGetEODReportById(eodId);
    const EODReportInitialValue = eods?.data ? eods.data : eodReportInitialValue;

    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const { data: uoms } = useGetUOMPartialData();
    const allUOMs = useMemo(() => uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : [], [uoms]);

    const { data: products } = useGetProductsPartialData();
    const allProducts = useMemo(() => products?.data ? mapToValueLabelArray(products?.data, 'id', 'name') : [], [products]);

    const { data: locations } = useGetBranchesPartialData();
    const allLocations = useMemo(() => locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : [], [locations]);

    const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateEODReport();
    const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateEODReport(eodId);

    const handleUpdate = (values: any) => {
        eodId === "" ?
            (mutateAsyncPost(values).then(() => {
                toast.success(PostData ? PostData.message : "EOD report created sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
                }, 2000);
            }).catch(() => {
                toast.error(PostError ? PostError.message : "Error while creating EOD report.");
            })) :
            (mutateAsyncPatch(values).then(() => {
                toast.success(PatchData ? PatchData.message : "EOD report updated sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
                }, 2000);
            }).catch(() => {
                toast.error(PatchError ? PatchError.message : "Error while updating EOD report.");
            }))
    }
    return (
        eodId !== "" && isLoading ? (
            <Box flex={1}>
                <LinearProgress />
            </Box>) :

            <Formik
                enableReinitialize={true}
                initialValues={EODReportInitialValue}
                onSubmit={(values) => handleUpdate(values)}>
                {({ values, handleChange, handleReset, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle='EOD Report' />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <AutoCompleteInput
                                    isRequired={true}
                                    name="location"
                                    label="Location"
                                    options={allLocations} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    isRequired={true}
                                    type="date"
                                    label="Stock Date"
                                    name="stockDate"
                                    value={values.stockDate}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <SelectInput
                                    isRequired={true}
                                    label="Submission"
                                    name="submission"
                                    options={arrayConstants.EOD_SUBMISSION}
                                    value={values.submission}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <FieldArray name="eodProducts">
                                    {({ push, remove }) => (
                                        <>
                                            {values.eodProducts.map((_, index) => (
                                                <>
                                                    <Grid2 container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                                                        <Grid2 size={{ xs: 12, md: 6 }}>
                                                            <AutoCompleteInput
                                                                isRequired={true}
                                                                name={`eodProducts.${index}.sku`}
                                                                label={`SKU ${index + 1}`}
                                                                options={allProducts} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 2 }}>
                                                            <SelectInput
                                                                isRequired
                                                                name={`eodProducts.${index}.uom`}
                                                                label="UOM"
                                                                options={allUOMs}
                                                                value={values.eodProducts[index].uom}
                                                                handleChange={handleChange}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 2 }}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired
                                                                name={`eodProducts.${index}.qty`}
                                                                label="UOM Quantity"
                                                                value={values.eodProducts[index].qty}
                                                                handleChange={handleChange}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 2 }}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired
                                                                name={`eodProducts.${index}.totalWeightinKg`}
                                                                label="Total Weight (in kg)"
                                                                value={values.eodProducts[index].totalWeightinKg}
                                                                handleChange={handleChange}
                                                            />
                                                        </Grid2>
                                                    </Grid2>
                                                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginY: 1 }}>
                                                        <Button variant="text" size="small" color="success" startIcon={<Add />} onClick={() => push(eodReportProductsInitialValue)}>Add</Button>
                                                        {values.eodProducts.length > 1 && (
                                                            <Button variant="text" size="small" color="error" startIcon={<Remove />} onClick={() => remove(index)}>Remove</Button>
                                                        )}
                                                    </Box>
                                                </>
                                            ))}
                                        </>
                                    )}
                                </FieldArray>
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    isRequired={true}
                                    multiline={true}
                                    maxRows={2}
                                    label="Comments"
                                    name="comments"
                                    value={values.comments}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    isSubmitting={isSubmitting}
                                    isError={eodId === "" ? PostError : PatchError}
                                    label={eodId === "" ? "Create" : "Update"} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )
}
