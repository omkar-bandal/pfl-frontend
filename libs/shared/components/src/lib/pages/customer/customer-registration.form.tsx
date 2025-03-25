import * as React from 'react';
import { Formik } from 'formik';
import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PostCustomer } from '@prime-fresh/admin_api';
import { appendFormData, customerValidationSchema, initValCustomer } from '@prime-fresh/shared/modules';
import { FormAccordion, FormButtonGroup, PageTitle, toast } from '@prime-fresh/ui_shared';
import {
    CustomerEmpanelment,
    CustomerKeyMobileNo,
    CustomerReferences,
    CustomerBillingDetails,
    CustomerDeliveryDetails,
    CustomerStatutoryDetails,
    CustomerBankDetails,
    CustomerProductSpecification,
    CustomerPaymentTerms,
    CustomerOfficeUseOnly
} from './form-section';
import { ADMIN_ROUTES, useCreateCustomer } from '@prime-fresh/admin/modules';

export const CustomerRegistrationForm = () => {
    // const [tab, setTab] = React.useState(0);
    // const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setTab(newValue);
    // };
    const navigate = useNavigate();

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateCustomer();

    const handleSubmit = async (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Customer registered successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while registering customer.");
        });
    };
    // const formParts = [<CustomerEmpanelment />, <CustomerKeyMobileNo />, <CustomerReferences />, <CustomerBillingDetails />, <CustomerDeliveryDetails />, <CustomerStatutoryDetails />, <CustomerBankDetails />, <CustomerProductSpecification />, <CustomerPaymentTerms />, <CustomerOfficeUseOnly />]
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValCustomer}
            validationSchema={customerValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
            }}>
            {({ handleReset, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                            <PageTitle pagetitle="Customer Registration" />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FormButtonGroup
                                submitLabel='Create'
                                isSubmitting={isSubmitting}
                                isSubmitError={postError}
                                resetLabel='Reset'
                                onReset={handleReset}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <CustomerEmpanelment />
                            <FormAccordion panel="Key Mobile Numbers" openOnError={true}>
                                <CustomerKeyMobileNo />
                            </FormAccordion>
                            <FormAccordion panel="References" openOnError={true}>
                                <CustomerReferences />
                            </FormAccordion>
                            <FormAccordion panel="Billing Details" openOnError={true}>
                                <CustomerBillingDetails />
                            </FormAccordion>
                            <FormAccordion panel="Delivery Details" openOnError={true}>
                                <CustomerDeliveryDetails />
                            </FormAccordion>
                            <FormAccordion panel="Statutory Details" openOnError={true}>
                                <CustomerStatutoryDetails />
                            </FormAccordion>
                            <FormAccordion panel="Bank Details" openOnError={true}>
                                <CustomerBankDetails />
                            </FormAccordion>
                            <FormAccordion panel="Product Specifications" openOnError={true}>
                                <CustomerProductSpecification />
                            </FormAccordion>
                            <FormAccordion panel="Payment Terms" openOnError={true}>
                                <CustomerPaymentTerms />
                            </FormAccordion>
                            <FormAccordion panel="Office Use Only" openOnError={true}>
                                <CustomerOfficeUseOnly />
                            </FormAccordion>
                        </Grid2>
                    </Grid2>
                    {/* <Box sx={{ flex: 1 }}>
                        <FormTabs
                            tabLabels={sharedData.customerFormTabs}
                            value={tab}
                            handleChange={handleTabChange} />
                        {formParts.map((child, index) => (
                            <TabPanel key={index} index={index} value={tab}>
                                {child}
                            </TabPanel>))}
                    </Box> */}
                </form>
            )}
        </Formik>
    )
}
