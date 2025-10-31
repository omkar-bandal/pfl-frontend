import { Grid2 } from '@mui/material';
import { ICustomer } from '@prime-fresh/services';
import { sharedData } from '@prime-fresh/shared/modules';
import { FileUpload, RadioGroupInput, SectionHeader, TextInput } from '../../../components';
import { useFormikContext } from 'formik';

export const CustomerKeyMobileNo = () => {
  const { values, handleChange } = useFormikContext<ICustomer>();
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Account Department Person Details" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.accDeptFName"
          label="First Name"
          value={values.keyMobileNumbers.accDeptFName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.accDeptMName"
          label="Middle Name"
          value={values.keyMobileNumbers.accDeptMName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.accDeptLName"
          label="Last Name"
          value={values.keyMobileNumbers.accDeptLName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.accDeptMobileNo"
          label="Mobile Number"
          value={values.keyMobileNumbers.accDeptMobileNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Owner or decision Maker Details" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.ownerFName"
          label="First Name"
          value={values.keyMobileNumbers.ownerFName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.ownerMName"
          label="Middle Name"
          value={values.keyMobileNumbers.ownerMName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.ownerLName"
          label="Last Name"
          value={values.keyMobileNumbers.ownerLName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="keyMobileNumbers.ownerMobileNo"
          label="Mobile Number"
          value={values.keyMobileNumbers.ownerMobileNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.mandiLicenceNo"
          label="Mandi licence Number"
          value={values.keyMobileNumbers.mandiLicenceNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <FileUpload isRequired={false} name="mandiLicenceCopy" label="Copy of Mandi Licence (if available)" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.regiNo"
          label="Registration Number of Shops & Est. Cert."
          value={values.keyMobileNumbers.regiNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <FileUpload isRequired={false} name="regiCopy" label="Copy of Est. Cert. (if available)" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <RadioGroupInput
          isRequired={true}
          alignment="vertical"
          name="keyMobileNumbers.electricityBill"
          label="Electricity Bill (recent) available?"
          value={values.keyMobileNumbers.electricityBill}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.consumenrNo"
          label="Consumer Number"
          value={values.keyMobileNumbers.consumenrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FileUpload isRequired={false} name="electricityBillCopy" label="Copy of Electricity Bill (recent)" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.notElectricityBillReason"
          label="Reason to not attach electricity bill"
          value={values.keyMobileNumbers.notElectricityBillReason}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <RadioGroupInput
          isRequired={true}
          alignment="vertical"
          name="keyMobileNumbers.customerBlacklisted"
          label="Whether Customer was blacklisted by any company or authority?"
          value={values.keyMobileNumbers.customerBlacklisted}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.blackListedBy"
          label="Blacklisted By"
          value={values.keyMobileNumbers.blackListedBy}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.ifBlacklistedReason"
          label="Reason of blacklisting"
          value={values.keyMobileNumbers.ifBlacklistedReason}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <RadioGroupInput
          isRequired={true}
          alignment="vertical"
          name="keyMobileNumbers.visitingCard"
          label="Visiting Card Collected?"
          value={values.keyMobileNumbers.visitingCard}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.visitinContactNo"
          label="Contact Number"
          value={values.keyMobileNumbers.visitinContactNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FileUpload isRequired={false} name="visitingCardCopy" label="Copy of Visiting Card" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="keyMobileNumbers.notVisitingCardReason"
          label="Reason for not attaching visiting card"
          value={values.keyMobileNumbers.notVisitingCardReason}
          handleChange={handleChange}
        />
      </Grid2>
    </Grid2>
  );
};
