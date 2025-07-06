import { Formik } from "formik";
import { ADMIN_ROUTES, initValUOM, uomSchema, useCreateUOM, useGetUOMById, useUpdateUOMById } from "@prime-fresh/admin/modules";
import { PostUOM } from "@prime-fresh/admin_api";
import { FormButtonGroup, PageTitle, TextInput, toast } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { handleFormKeyDown } from "@prime-fresh/shared/modules";

export const UOMForm = () => {
    const { id } = useParams<{ id: string }>();
    const uomId = id ? id : '';
    const { data, isLoading } = useGetUOMById(uomId);
    const uom = data !== null && data?.data ?
        {
            unit: data.data.unit,
            abbreviation: data.data.abbreviation,
            description: data.data.description,
        } :
        {
            unit: '',
            abbreviation: '',
            description: '',
        };
    const UOMsInitValue = uomId === '' ? initValUOM : uom;

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOM();
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOMById(uomId);

    const navigate = useNavigate();

    const handleSubmit = (values: PostUOM) => {
        uomId === '' ?
            (mutatePost(values).then(() => {
                toast.success(postRes ? postRes.message : "UOM created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating UOM");
            }))
            : (mutatePatch(values).then(() => {
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
                    <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle='Unit of Measures' />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="unit"
                                    label="Name of Unit of Measurement"
                                    value={values.unit}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="abbreviation"
                                    label="Abbreviation of Unit of Measurement"
                                    value={values.abbreviation}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={false}
                                    multiline
                                    maxRows={4}
                                    name="description"
                                    label="Description of Unit of Measurement"
                                    value={values.description}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={uomId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={uomId === "" ? postError : patchError}
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
