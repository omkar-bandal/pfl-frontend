import { ADMIN_ROUTES, initValUOM, uomSchema } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostUOM, useCreateUOM, useGetAUOM, useUpdateUOM } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, TextInput, toast } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { appendFormData } from "@prime-fresh/shared/utils";
import { Formik } from "formik";

export const UOMForm = () => {
    const { id } = useParams<{ id: string }>();
    const uomId = id ? id : '';
    const { data, isLoading } = useGetAUOM(ADMIN_API_URL.GET_A_UOM, uomId);
    const uom = data ?
        {
            unit: data.unit,
            abbreviation: data.abbreviation,
            description: data.description,
        } :
        {
            unit: '',
            abbreviation: '',
            description: '',
        };
    const UOMsInitValue = uomId === '' ? initValUOM : uom;

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOM(ADMIN_API_URL.CREATE_UOM);
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOM(ADMIN_API_URL.UPDATE_UOM, uomId);

    const navigate = useNavigate();

    const handleSubmit = (values: PostUOM) => {
        console.log(values);
        const formData = new FormData();
        appendFormData(formData, values);
        uomId === '' ?
            (mutatePost(formData).then(() => {
                toast.success(postRes ? postRes.message : "UOM created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs);
                }, 2400);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating UOM");
            }))
            : (mutatePatch(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "UOM updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating UOM");
            }))
    };

    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={uomId || "create-uom"}
                enableReinitialize={true}
                initialValues={UOMsInitValue}
                validationSchema={uomSchema}
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
                                <Typography variant='h4'>Unit of Measurement</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={uomId === "" ? "Create" : "Update"}
                                    isError={uomId === "" ? !postError : !patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="unit"
                                    label="Name of Unit of Measurement"
                                    value={values.unit}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="abbreviation"
                                    label="Abbreviation of Unit of Measurement"
                                    value={values.abbreviation}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={false}
                                    multiline
                                    maxRows={4}
                                    name="description"
                                    label="Description of Unit of Measurement"
                                    value={values.description}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}
