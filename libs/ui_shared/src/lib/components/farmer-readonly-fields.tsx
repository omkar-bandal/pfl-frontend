import { Grid2 } from "@mui/material"
import { TextInput } from "../form";
import { useAppSelector } from "@prime-fresh/modules";
import { farmersDataStates } from "@prime-fresh/admin/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";

export const FarmerReadOnlyFields = () => {
    const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
    return (
        <>
            <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmerPartialData?.farmerCode || ''}`} isReadOnly={true} />
            </Grid2 >
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmerPartialData?.email || ''}`} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} label='Farmer Contact No' name='contactNo' type='text' value={`${selectedFarmerPartialData?.primaryMobileNo || ''}`} isReadOnly={true} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <TextInput isRequired={false} label='Farm Address' name='farmAddress' type='text' value={selectedFarmerPartialData?.farmAddress ? displayAddress(selectedFarmerPartialData?.farmAddress) : ''} isReadOnly={true} />
            </Grid2>
        </>
    )
}