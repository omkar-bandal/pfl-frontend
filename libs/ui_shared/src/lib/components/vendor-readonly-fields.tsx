import { Grid } from "@mui/material"
import { TextInput } from "../auto_form/components"
import { useAppSelector } from "@prime-fresh/modules";
import { vendorsDataState } from "@prime-fresh/admin/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";

export const VendorReadOnlyFields = () => {
    const { selectedVendor } = useAppSelector(vendorsDataState);
    return (
        <>
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendor?.vendorCode || ''}`} isReadOnly={true} />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Contact Person' name='contactPerson' type='text' value={selectedVendor?.fullName} isReadOnly={true} />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Company Email' name='email' type='email' value={`${selectedVendor?.email || ''}`} isReadOnly={true} />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Company Contact No' name='contactNo' type='text' value={`${selectedVendor?.officeContactNo || ''}`} isReadOnly={true} />
            </Grid>
            <Grid item xs={12}>
                <TextInput isRequired={false} label='Company Address' name='companyAddress' type='text' value={selectedVendor?.officeAddress ? displayAddress(selectedVendor?.officeAddress) : ''} isReadOnly={true} />
            </Grid>
        </>
    )
}