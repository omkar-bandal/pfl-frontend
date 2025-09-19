import { Grid2 } from '@mui/material';
import { TextInput } from '@prime-fresh/ui_shared';
import { useAppSelector } from '@prime-fresh/modules';
import { farmersDataStates } from '@prime-fresh/admin/modules';
import { formatAddress } from '@prime-fresh/shared/modules';

export const FarmerReadOnlyFields = () => {
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
  return (
    <>
      {/* <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmerPartialData?.farmerCode || ''}`} isReadOnly={true} />
            </Grid2 > */}
      {/* <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmerPartialData?.email || ''}`} isReadOnly={true} />
            </Grid2> */}
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          label="Farmer Contact No"
          name="contactNo"
          type="text"
          value={`${selectedFarmerPartialData?.primaryMobileNo || ''}`}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={false}
          isReadOnly={true}
          multiline
          rows={2}
          label="Farm Address"
          name="farmAddress"
          type="text"
          value={selectedFarmerPartialData?.farmAddress ? formatAddress(selectedFarmerPartialData?.farmAddress) : ''}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={false}
          isReadOnly={true}
          multiline
          rows={2}
          label="Residential Address"
          name="residensialAddress"
          type="text"
          value={
            selectedFarmerPartialData?.residensialAddress
              ? formatAddress(selectedFarmerPartialData?.residensialAddress)
              : ''
          }
        />
      </Grid2>
    </>
  );
};
