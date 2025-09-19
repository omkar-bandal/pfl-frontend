import { Grid2 } from '@mui/material';
import { Address } from '@prime-fresh/common_api';
import { useDebounce, useGetAddressByPincode } from '@prime-fresh/shared/modules';
import { TextInput, toast } from '@prime-fresh/ui_shared';
import { useFormikContext } from 'formik';
import { useEffect, useRef } from 'react';

interface AddressSectionProps<T> {
  fieldPrefix: string; // Change from keyof T to string to allow nested paths
  parentValues?: T;    // Optional prop to pass parent values
 requiredFields?: string[];
}

export function AddressFormFields<T extends Record<string, any>>({ 
  fieldPrefix,
  parentValues,
  requiredFields = []
}: AddressSectionProps<T>) {
  const { values, setFieldValue, handleChange } = useFormikContext<T>();
  
  // Helper function to get nested value
  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : undefined;
    }, obj);
  };

  const address = (getNestedValue(values, fieldPrefix) || {}) as Address;
  const isRequired = (field: string) => requiredFields.includes(field);
  const isManualChange = useRef(false);
  const debouncedPincode = useDebounce(address?.pincode || '', 1000);
 
  const { data: ads, isError: isAddressError, error, isLoading, isFetching } = useGetAddressByPincode(debouncedPincode);
  const addressData = ads ? ads : null;

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isManualChange.current = true;
    handleChange(e);
  };

  useEffect(() => {
    // Only proceed if it's a manual change
    if (!isManualChange.current) return;

    if (isAddressError) {
      toast.error(error?.message ? error?.message : 'Error while fetching address. Please fill manually.');
    } else {
      setFieldValue(`${String(fieldPrefix)}.state`, addressData?.state);
      setFieldValue(`${String(fieldPrefix)}.city`, addressData?.district);
    }
  }, [addressData, isAddressError, error]);

  return (
    <>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={isRequired('pincode')}
          name={`${String(fieldPrefix)}.pincode`}
          label="Pincode"
          value={address.pincode || ''}
          handleChange={handlePincodeChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          loading={isLoading || isFetching}
          isRequired={isRequired('state')}
          name={`${String(fieldPrefix)}.state`}
          label="State"
          value={address.state || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          loading={isLoading || isFetching}
          isRequired={isRequired('city')}
          name={`${String(fieldPrefix)}.city`}
          label="City"
          value={address.city || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={isRequired('location')}
          name={`${String(fieldPrefix)}.location`}
          label="Location"
          value={address.location || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={isRequired('address1')}
          name={`${String(fieldPrefix)}.address1`}
          label="Address Line 1"
          value={address.address1 || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={isRequired('address2')}
          name={`${String(fieldPrefix)}.address2`}
          label="Address Line 2"
          value={address.address2 || ''}
          handleChange={handleChange}
        />
      </Grid2>
    </>
  );
}
