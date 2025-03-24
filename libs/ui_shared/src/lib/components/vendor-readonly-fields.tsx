import { Grid2 } from "@mui/material"
import { TextInput } from "../auto_form/components"
import { useAppSelector } from "@prime-fresh/modules";
import { vendorsDataState } from "@prime-fresh/admin/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";

export const VendorReadOnlyFields = () => {
    const { selectedVendorPartialData } = useAppSelector(vendorsDataState);
    return (
        <>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    isRequired={false}
                    name="vendorCategory"
                    label="Vendor Category"
                    value={`${selectedVendorPartialData?.category || ''}`}
                    isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    isRequired={false}
                    name="vendorSubcategory"
                    label="Vendor Subategory"
                    value={`${selectedVendorPartialData?.subcategory || ''}`}
                    isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendorPartialData?.vendorCode || ''}`} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Contact Person' name='contactPerson' type='text' value={selectedVendorPartialData?.contactPersonName} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Company Email' name='email' type='email' value={`${selectedVendorPartialData?.officeEmail || ''}`} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Company Contact No' name='contactNo' type='text' value={`${selectedVendorPartialData?.officeContactNo || ''}`} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <TextInput isRequired={false} label='Company Address' name='companyAddress' type='text' value={displayAddress(selectedVendorPartialData?.officeAddress)} isReadOnly={true} />
            </Grid2>
        </>
    )
}