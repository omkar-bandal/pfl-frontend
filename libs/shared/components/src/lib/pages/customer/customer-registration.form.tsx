import { Formik } from 'formik';
import { Grid2 } from '@mui/material';
import { PageTitle } from '@prime-fresh/ui_shared';
import { initValCustomer } from '@prime-fresh/shared/modules';

export const CustomerRegistrationForm = () => {
  return (
    <Formik
            enableReinitialize={true}
            initialValues={initValCustomer}
            // validationSchema={vendorValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values);
                // handleSubmit(values);
            }}>
            {({ handleReset, handleSubmit, values, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid2 size={{ xs: 12 }}>
                            <PageTitle pagetitle="Customer Registration" />
                        </Grid2>
                    </Grid2>
                </form>
            )}
        </Formik>
  )
}
