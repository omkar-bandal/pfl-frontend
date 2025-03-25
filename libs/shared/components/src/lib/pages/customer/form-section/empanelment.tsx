import { Grid2 } from "@mui/material"
import { useGetAllCustomerCategories, useGetAllCustomerTypes } from "@prime-fresh/admin/modules";
import { PostCustomer } from "@prime-fresh/admin_api";
import { mapToValueLabelArray, sharedData } from "@prime-fresh/shared/modules";
import { SectionHeader, SelectInput, TextInput } from "@prime-fresh/ui_shared"
import { useFormikContext } from "formik";
import { useMemo } from "react";

export const CustomerEmpanelment = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();

    const { data: cat } = useGetAllCustomerCategories();
    const customerCategory = useMemo(() => cat?.data ? mapToValueLabelArray(cat.data, 'id', 'name') : [], [cat?.data]);

    const { data: types } = useGetAllCustomerTypes();
    const customerTypes = useMemo(() => types?.data ? mapToValueLabelArray(types.data, 'id', 'name') : [], [types?.data]);
    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="organisationName"
                    label="Name of Organisation"
                    value={values.organisationName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                    isRequired={true}
                    label="Customer Type"
                    name="customerTypes"
                    options={customerTypes}
                    value={values.customerTypes}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                    isRequired={true}
                    label="Customer Category"
                    name="customerCategory"
                    options={customerCategory}
                    value={values.customerCategory}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                    isRequired={true}
                    label="Organisation Type"
                    name="organisationType"
                    options={sharedData.organizationType}
                    value={values.organisationType}
                    handleChange={handleChange}
                />
            </Grid2>
            {values.organisationType === "other" && <Grid2 size={{ xs: 12 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="otherType"
                    label="Other Type"
                    value={values.otherType}
                    handleChange={handleChange}
                />
            </Grid2>}
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Customer Address"/>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="customerAddress.address1"
                    label="Address Line 1"
                    value={values.customerAddress.address1}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="customerAddress.address2"
                    label="Address Line 2"
                    value={values.customerAddress.address2}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="customerAddress.location"
                    label="Location"
                    value={values.customerAddress.location}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="customerAddress.city"
                    label="City"
                    value={values.customerAddress.city}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="customerAddress.state"
                    label="State"
                    value={values.customerAddress.state}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="customerAddress.pincode"
                    label="Pincode"
                    value={values.customerAddress.pincode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="primaryContactNo"
                    label="Primary Contact Number"
                    value={values.primaryContactNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput
                    type="email"
                    isRequired={true}
                    name="emailPrimary"
                    label="Primary Email"
                    value={values.emailPrimary}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="secondaryContactNo"
                    label="Alternate Contact Number"
                    value={values.secondaryContactNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput
                    type="email"
                    isRequired={false}
                    name="emailSecondary"
                    label="Alternate Email"
                    value={values.emailSecondary}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}