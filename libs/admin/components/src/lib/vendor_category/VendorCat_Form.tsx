import { ADMIN_API_URL, PostVendorCategory, useCreateVendorCat} from "@prime-fresh/admin_api";
import { Alertbar,TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Button, Grid, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';

const initValVendorCat: PostVendorCategory = {
    name: '',
}

const vendorCatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Category name is required'),
});

export function VendorCatForm() {

    const { mutateAsync: postVendorCategory, isPending, isError, error, data: Res } = useCreateVendorCat(ADMIN_API_URL.CREATE_VENDOR_CAT);

    const handleSubmit = (values: PostVendorCategory) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        postVendorCategory(formData);
    }

    return (
        <>
            <Alertbar open={isPending || isError} error={error} resMessage={Res} />
            <Formik
                initialValues={initValVendorCat}
                validationSchema={vendorCatValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Create Vendor Category</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack direction="row" justifyContent="end" alignItems="center">
                                    <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                                    <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    handleChange={handleChange}
                                    touched={touched}
                                    errors={errors}
                                />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}