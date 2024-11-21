import { ADMIN_API_URL, GetVendorCategory, PostVendorSubcategory, useCreateVendorSubCat, useGetAllVendorCat} from "@prime-fresh/admin_api";
import { Alertbar,SelectInput,TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Button, Grid, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';
import { mapToValueLabelArray } from "@prime-fresh/shared/utils";

const initValVendorSubcat: PostVendorSubcategory = {
    name: '',
    category: '',
}

const vendorSubcatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Subategory name is required'),
    category: Yup.string().required('Please select one category'),
});

export function VendorSubcatForm() {

    const { mutateAsync: postVendorSubcategory, isPending, isError, error, data: Res } = useCreateVendorSubCat(ADMIN_API_URL.CREATE_VENDOR_SUBCAT);
    const {data} = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCat = data ? data : [];
    console.log(vendorCat);
    const handleSubmit = (values: PostVendorSubcategory) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        postVendorSubcategory(formData);
    }

    return (
        <>
            <Alertbar open={isPending || isError} error={error} resMessage={Res} />
            <Formik
                initialValues={initValVendorSubcat}
                validationSchema={vendorSubcatValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Create Vendor Subcategory</Typography>
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
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="Vendor Categories"
                                    name="category"
                                    options={mapToValueLabelArray<GetVendorCategory>(vendorCat, 'id', 'name')}
                                    value={values.category}
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