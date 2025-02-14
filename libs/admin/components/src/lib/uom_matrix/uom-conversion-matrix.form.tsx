import { Formik } from "formik";
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared"
import { ADMIN_ROUTES, initValUOMConversionMatrix, uomConversionMatrixSchema, useCreateUOMConversionMatrix, useGetAllUOMs, useGetUOMConversionMatrixById, useUpdateUOMConversionMatrixById } from "@prime-fresh/admin/modules";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { mapToValueLabelArray } from "@prime-fresh/shared/utils";

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
    const { data: uoms } = useGetAllUOMs();
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
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>UOM Conversion Matrix</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={uomConvMatId === "" ? "Create" : "Update"}
                                    isError={uomConvMatId === "" ? postError : patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="conversionFactor"
                                    label="Conversion Factor"
                                    value={values.conversionFactor}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="From UOM"
                                    name="fromUOM"
                                    options={mapToValueLabelArray(allUoms ? allUoms : [], 'id', 'unit')}
                                    value={values.fromUOM}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="To UOM"
                                    name="toUOM"
                                    options={mapToValueLabelArray(allUoms ? allUoms : [], 'id', 'unit')}
                                    value={values.toUOM}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}