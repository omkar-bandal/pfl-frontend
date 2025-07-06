import { Formik } from "formik";
import { FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared"
import { ADMIN_ROUTES, initValUOMConversionMatrix, uomConversionMatrixSchema, useCreateUOMConversionMatrix, useGetAllUOMs, useGetUOMConversionMatrixById, useUpdateUOMConversionMatrixById } from "@prime-fresh/admin/modules";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { handleFormKeyDown, mapToValueLabelArray, useGetUOMPartialData } from "@prime-fresh/shared/modules";

export const UOMConvMatrixForm = () => {
    const { oid } = useParams<{ oid: string }>();
    const uomConvMatId = oid ? oid : '';
    const { data, isLoading } = useGetUOMConversionMatrixById(uomConvMatId);
    const uomConvMatrix = data !== null && data?.data ?
        {
            conversionFactor: data.data.conversionFactor,
            fromUOM: data.data.fromUOM.id,
            toUOM: data.data.toUOM.id
        } :
        {
            conversionFactor: 0,
            fromUOM: '',
            toUOM: '',
        }
    const UOMsConvMatInitValue = uomConvMatId === '' ? initValUOMConversionMatrix : uomConvMatrix;
    const { data: uoms } = useGetUOMPartialData();
    const allUoms = uoms !== null && uoms?.data ? uoms.data : [];
    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOMConversionMatrix();
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOMConversionMatrixById(uomConvMatId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        uomConvMatId === '' ?
            (mutatePost(values).then(() => {
                toast.success(postRes ? postRes.message : "UOM conversion matrix created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating UOM conversion matrix.");
            }))
            : (mutatePatch(values).then(() => {
                toast.success(patchRes ? patchRes.message : "UOM conversion matrix updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating UOM conversion matrix.");
            }));
    };

    return (
        isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={uomConvMatId || "create-uom-conversion-matrix"}
                enableReinitialize={true}
                initialValues={UOMsConvMatInitValue}
                validationSchema={uomConversionMatrixSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle='UoM Conversion Matrix' />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="conversionFactor"
                                    label="Conversion Factor"
                                    value={values.conversionFactor}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <SelectInput
                                    isRequired={true}
                                    label="From UOM"
                                    name="fromUOM"
                                    options={mapToValueLabelArray(allUoms ? allUoms : [], 'id', 'unit')}
                                    value={values.fromUOM}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <SelectInput
                                    isRequired={true}
                                    label="To UOM"
                                    name="toUOM"
                                    options={mapToValueLabelArray(allUoms ? allUoms : [], 'id', 'unit')}
                                    value={values.toUOM}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={uomConvMatId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={uomConvMatId === "" ? postError : patchError}
                                    resetLabel='Reset'
                                    onReset={handleReset}
                                />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )
}