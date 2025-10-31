/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { FieldArray, Formik } from 'formik';
import { Grid2, IconButton } from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import { mapToValueLabelArray, useGetBranchesPartialData } from '@prime-fresh/shared/modules';
import { useNavigate, useParams } from 'react-router-dom';
import {
  staticData,
  operationsRoutes,
  laborFamilyDetailsInitialValue,
  laborRegistrationInitialValue,
  laborWorkExperienceInitialValue,
  useCreateLaborRegistration,
  useGetLaborRegistrationById,
  useUpdateLaborRegistration,
} from '@prime-fresh/operations/modules';
import {
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  RadioGroupInput,
  SectionHeader,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/shared/components';

export const LabourRegistrationForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const laborId = id ? id : '';
  const { data } = useGetLaborRegistrationById(laborId);
  const laborData = data?.data ? data.data : laborRegistrationInitialValue;
  const laborRegistrationInitVal = laborId === '' ? laborRegistrationInitialValue : laborData;
  console.log('Labor data: ', laborRegistrationInitVal);

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations.data, 'id', 'name') : []),
    [locations]
  );

  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateLaborRegistration();
  const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateLaborRegistration(laborId);
  const handleSubmit = (values: any) => {
    laborId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(PostData ? PostData.message : 'Labor Registered Successfully.');
            setTimeout(() => {
              navigate(operationsRoutes.GET_ALL_LABOUR_REGISTER);
            }, 2000);
          })
          .catch(() => {
            toast.error(PostError ? PostError.message : 'Error while registering labor data.');
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(PatchData ? PatchData.message : 'Labor data updated Successfully.');
            setTimeout(() => {
              navigate(operationsRoutes.GET_ALL_LABOUR_REGISTER);
            }, 2000);
          })
          .catch(() => {
            toast.error(PatchError ? PatchError.message : 'Error while updating labor data.');
          });
  };

  return (
    <Formik
      key={laborId === '' ? 'create-labor-data' : 'update-labor-data'}
      enableReinitialize={true}
      initialValues={laborRegistrationInitVal}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {({ values, handleChange, handleReset, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Labor Registration Form" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="representativeName"
                label="Prime Representative Name"
                value={values.representativeName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <AutoCompleteInput isRequired={true} name="siteName" label="Site Name" options={allLocations} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
              <SelectInput
                isRequired={true}
                label="Labor Type"
                name="laborType"
                options={staticData.LABOUR_TYPES}
                value={values.laborType}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="laborName"
                label="Labor Name"
                value={values.laborName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="nameAsPerAadhar"
                label="Name As Per Aadhar"
                value={values.nameAsPerAadhar}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="nameAsPerBank"
                label="Name As Per Bank"
                value={values.nameAsPerBank}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Present Address" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="presentAddress.address1"
                label="Address Line 1"
                value={values.presentAddress?.address1 || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="presentAddress.address2"
                label="Address Line 2"
                value={values.presentAddress?.address2 || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="presentAddress.location"
                label="Location"
                value={values.presentAddress?.location || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="presentAddress.city"
                label="City"
                value={values.presentAddress?.city || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="presentAddress.state"
                label="State"
                value={values.presentAddress?.state || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="presentAddress.pincode"
                label="Pincode"
                value={values.presentAddress?.pincode || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Permanent Address" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="permanentAddress.address1"
                label="Address Line 1"
                value={values.permanentAddress?.address1 || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="permanentAddress.address2"
                label="Address Line 2"
                value={values.permanentAddress?.address2 || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="permanentAddress.location"
                label="Location"
                value={values.permanentAddress?.location || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="permanentAddress.city"
                label="City"
                value={values.permanentAddress?.city || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="permanentAddress.state"
                label="State"
                value={values.permanentAddress?.state || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="permanentAddress.pincode"
                label="Pincode"
                value={values.permanentAddress?.pincode || ''}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="mobileNumber"
                label="Mobile Number"
                value={values.mobileNumber}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="emergencyContactNo"
                label="Emergency Contact No"
                value={values.emergencyContactNo}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="emergencyContactName"
                label="Emergency Contact Person Name"
                value={values.emergencyContactName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="relationWithEmergencyContact"
                label="Emergency Contact Person Relation"
                value={values.relationWithEmergencyContact}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="healthIssues"
                label="Health Issure (if any)"
                value={values.healthIssues}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="date"
                isRequired={false}
                name="birthDate"
                label="Birth Date"
                value={values.birthDate}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <RadioGroupInput
                isRequired={false}
                name="gender"
                label="Gender"
                alignment="vertical"
                options={staticData.GENDER}
                value={values.gender}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
              <SelectInput
                isRequired={false}
                name="bloodGroup"
                label="Blood Group"
                options={staticData.BLOOD_GROUPS}
                value={values.bloodGroup}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="educationQualification"
                label="Education Qualification"
                value={values.educationQualification}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="pfUanNo"
                label="PF/UAN No"
                value={values.pfUanNo}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <RadioGroupInput
                isRequired={false}
                name="maritalStatus"
                label="Marital Status"
                alignment="vertical"
                options={staticData.MARITAL_STATUS}
                value={values.maritalStatus}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="email"
                label="Email"
                value={values.email}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <SectionHeader sectionHeader="Banking Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.bankName"
                label="Bank Name"
                value={values.bankDetails.bankName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.branchName"
                label="Branch Name"
                value={values.bankDetails.branchName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.accountNumber"
                label="Bank Account No"
                value={values.bankDetails.accountNumber}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.ifscCode"
                label="IFSC Code"
                value={values.bankDetails.ifscCode}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.aadharNo"
                label="Aadhar Number"
                value={values.bankDetails.aadharNo}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.panNo"
                label="PAN Number"
                value={values.bankDetails.panNo}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="bankDetails.electionCardNo"
                label="Electrion Card Number"
                value={values.bankDetails.electionCardNo}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <SectionHeader sectionHeader="Family Details" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="familyDetails">
                {({ remove, push }) => (
                  <>
                    {values.familyDetails.map((_, index) => (
                      <Grid2 container columnSpacing={1} key={index} alignItems="center">
                        <Grid2 size={{ xs: 12, md: 2 }}>
                          <SelectInput
                            isRequired={false}
                            name={`familyDetails.${index}.relation`}
                            label="Relation"
                            options={staticData.FAMILY_RELATIONS}
                            value={values.familyDetails[index].relation}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`familyDetails.${index}.nameAsPerAadhar`}
                            label="Name as per Aadhar"
                            value={values.familyDetails[index].nameAsPerAadhar}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`familyDetails.${index}.mobileNumber`}
                            label="Mobile Number"
                            value={values.familyDetails[index].mobileNumber}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 1 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`familyDetails.${index}.age`}
                            label="Age"
                            value={values.familyDetails[index].age}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2
                          size={{ xs: 12, md: 1 }}
                          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
                        >
                          <IconButton
                            color="success"
                            sx={{ marginTop: 3 }}
                            onClick={() => push(laborFamilyDetailsInitialValue)}
                          >
                            <Add />
                          </IconButton>
                          {values.familyDetails.length > 1 && (
                            <IconButton color="error" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                          )}
                        </Grid2>
                      </Grid2>
                    ))}
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <SectionHeader sectionHeader="Work Details" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="workExperience">
                {({ remove, push }) => (
                  <>
                    {values.workExperience.map((_, index) => (
                      <Grid2 container columnSpacing={1} key={index} alignItems="center">
                        <Grid2 size={{ xs: 12, md: 6 }}>
                          <TextInput
                            isRequired={false}
                            name={`workExperience.${index}.previousFarmOrWorkPlace`}
                            label="Name of previous farm/Place of work"
                            value={values.workExperience[index].previousFarmOrWorkPlace}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`workExperience.${index}.workType`}
                            label="Type of work (E.g. Sorting, Grading, Harvesting, Packing, Loading etc)"
                            value={values.workExperience[index].workType}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`workExperience.${index}.workLocation`}
                            label="Location of work"
                            value={values.workExperience[index].workLocation}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`workExperience.${index}.workDuration`}
                            label="Duration of Work"
                            value={values.workExperience[index].workDuration}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`workExperience.${index}.wagesPerDayOrMonth`}
                            label="Wages per Day/Month"
                            value={values.workExperience[index].wagesPerDayOrMonth}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2
                          size={{ xs: 12, md: 1 }}
                          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
                        >
                          <IconButton
                            color="success"
                            sx={{ marginTop: 3 }}
                            onClick={() => push(laborWorkExperienceInitialValue)}
                          >
                            <Add />
                          </IconButton>
                          {values.workExperience.length > 1 && (
                            <IconButton color="error" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                          )}
                        </Grid2>
                      </Grid2>
                    ))}
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="preferredWorkingLocation"
                label="Preferred Working Town/City Village"
                value={values.preferredWorkingLocation}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="preferredWorkType"
                label="Type of Work You Like"
                value={values.preferredWorkType}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="referenceName"
                label="Reference Name"
                value={values.referenceName}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="referencePosition"
                label="Reference Position"
                value={values.referencePosition}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="referenceMobileNumber"
                label="Reference Mobile number"
                value={values.referenceMobileNumber}
                handleChange={handleChange}
              />
            </Grid2>
          </Grid2>
          <Grid2
            size={{ xs: 12 }}
            marginY={2}
            sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
          >
            <FormButtonGroup
              submitLabel={laborId === '' ? 'Create' : 'Update'}
              isSubmitting={isSubmitting}
              isSubmitError={laborId === '' ? PostError : PatchError}
              resetLabel="Reset"
              onReset={handleReset}
            />
          </Grid2>
        </form>
      )}
    </Formik>
  );
};
