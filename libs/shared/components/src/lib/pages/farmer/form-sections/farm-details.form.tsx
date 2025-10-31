import { IFarmer } from '@prime-fresh/services';
import { useFormikContext } from 'formik';
import { sharedData } from '@prime-fresh/shared/modules';
import { Grid2, InputAdornment } from '@mui/material';
import { SectionHeader, SelectInput, TextInput, AddressFormFields, FileUpload } from '../../../components';

export const FarmDetails = () => {
  const { values, setFieldValue, handleChange } = useFormikContext<IFarmer>();
  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Farm Address" />
      </Grid2>
      <AddressFormFields fieldPrefix="farmAddress" requiredFields={['pincode', 'state', 'city', 'address1']} />
       <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Farm Details" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          name="landHoldingStatus"
          label="Land Holding Status"
          value={values.landHoldingStatus}
          options={sharedData.landHoldingStatus}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          name="landStatus"
          label="Land Status"
          value={values.landStatus}
          options={sharedData.landStatus}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          name="totalLandArea"
          label="Total Land Area (in Acres)"
          value={values.totalLandArea}
          handleChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Acres</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          name="cultivationArea"
          label="Cultivation Area (in Acres)"
          value={values.cultivationArea}
          handleChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Acres</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="sevenTwelveNo"
          label="7/12 Document Number"
          value={values.sevenTwelveNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <FileUpload isRequired={false} name="sevenTwelveCopy" label="7/12 Document Copy" />
      </Grid2>
    </Grid2>
  );
};
