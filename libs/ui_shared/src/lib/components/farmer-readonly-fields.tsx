import { Grid } from "@mui/material"
import { TextInput } from "../auto_form/components"
import { useAppSelector } from "@prime-fresh/modules";
import { farmersDataState } from "@prime-fresh/admin/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";

export const FarmerReadOnlyFields = () => {
    const { selectedFarmer } = useAppSelector(farmersDataState);
    return (
        <>
            <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmer?.farmerCode || ''}`} isReadOnly={true} />
            </Grid >
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmer?.email || ''}`} isReadOnly={true} />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label='Farmer Contact No' name='contactNo' type='text' value={`${selectedFarmer?.primaryMobileNo || ''}`} isReadOnly={true} />
            </Grid>
            <Grid item xs={12}>
                <TextInput isRequired={false} label='Farm Address' name='farmAddress' type='text' value={selectedFarmer?.farmAddress ? displayAddress(selectedFarmer?.farmAddress) : ''} isReadOnly={true} />
            </Grid>
        </>
    )
}