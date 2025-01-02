import { Formik } from "formik";
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared"
import { ADMIN_ROUTES, initValUOMConversionMatrix, uomConversionMatrixSchema } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useCreateUOMConversionMatrix, useGetAllUOMs, useGetAUOMConversionMatrixs, useUpdateUOMConversionMatrixs } from "@prime-fresh/admin_api";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";

export const UOMConvMatrixForm = () => {
    const { oid } = useParams<{ oid: string }>();
    const uomConvMatId = oid ? oid : '';
    const { data, isLoading } = useGetAUOMConversionMatrixs(ADMIN_API_URL.GET_A_UOM_CONVERSION, uomConvMatId);
    const uomConvMatrix = data ?
        {
            conversionFactor: data.conversionFactor,
            fromUOM: data.fromUOM.id,
            toUOM: data.toUOM.id
        } :
        {
            conversionFactor: 0,
            fromUOM: '',
            toUOM: '',
        }
    const UOMsConvMatInitValue = uomConvMatId === '' ? initValUOMConversionMatrix : uomConvMatrix;
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUoms = uoms ? uoms : [];
    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOMConversionMatrix(ADMIN_API_URL.CREATE_UOM_CONVERSION);
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOMConversionMatrixs(ADMIN_API_URL.UPDATE_UOM_CONVERSION, uomConvMatId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        appendFormData(formData, values);
        uomConvMatId === '' ?
            (mutatePost(formData).then(() => {
                toast.success(postRes ? postRes.message : "UOM conversion matrix created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2400);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating UOM conversion matrix.");
            }))
            : (mutatePatch(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "UOM conversion matrix updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2400);
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
                                    isError={uomConvMatId === "" ? !postError : !patchError}
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