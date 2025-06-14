// import { Formik } from 'formik';
// import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
// import { Grid2, Typography, Box } from '@mui/material';
// import {
//   dealSlipSchema,
//   initValDealSlip,
//   PURCHASE_ARRAYS,
//   PURCHASE_ROUTES,
//   useCreateDealSlip,
//   useGetRFPAById,
// } from '@prime-fresh/purchase/modules';
// import { useDispatch } from 'react-redux';
// import { PostDealSlip, PostRFPA } from '@prime-fresh/purchase_api';
// import { useAppSelector } from '@prime-fresh/modules';
// import { useNavigate } from 'react-router-dom';
// import {
//   FarmerReadOnlyFields,
//   FormButtonGroup,
//   PageTitle,
//   RadioGroupInput,
//   SectionHeader,
//   SelectInput,
//   TextInput,
//   toast,
//   VendorFarmerInfo,
//   VendorReadOnlyFields,
// } from '@prime-fresh/ui_shared';
// import {
//   farmersDataStates,
//   setSelectedFarmerPartialData,
//   setSelectedVendorPartialData,
//   vendorsDataStates,
// } from '@prime-fresh/admin/modules';
// import {
//   mapToValueLabelArray,
//   useGetAllRFPANums,
//   useGetBranchesPartialData,
//   useGetFarmersPartialData,
//   useGetProductsPartialData,
//   useGetUOMPartialData,
//   useGetVendorsPartialData,
// } from '@prime-fresh/shared/modules';
// import {
//   normalizeRFPAData,
//   normalizeRFPAForView,
// } from '../rfpa/helper-functions';
// import { ProductFormFields } from '@prime-fresh/shared/components';

// export const DealSlipCreateForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [RFPAid, setRFPAid] = useState<string>();
//   const { data: RFPA } = useGetAllRFPANums();
//   const rfpas = RFPA?.data
//     ? mapToValueLabelArray(RFPA.data, 'id', 'rfpaId')
//     : [];

//   const { data: Farmers } = useGetFarmersPartialData();
//   const { data: Vendors } = useGetVendorsPartialData();
//   const { data: products } = useGetProductsPartialData();
//   const Products = products?.data ? products.data : [];
//   const { data: uom } = useGetUOMPartialData();
//   const UOMs = uom?.data ? uom.data : [];
//   const { data: Locations } = useGetBranchesPartialData();
//   const allPurchaseLocation = Locations?.data ? Locations.data : [];
//   const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
//   const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);

//   const handleRFPANoChange = useCallback(
//     (
//       value: string,
//       setFieldValue: (field: string, value: string | undefined) => void
//     ) => {
//       console.log('Object Id:', value);
//       setRFPAid('');
//       if (value) {
//         value ? setFieldValue('rfpa', value) : setFieldValue('rfpa', '');
//         setRFPAid(value);
//       }
//     },
//     []
//   );
//   console.log('Changed RFPA Id', RFPAid);
//   const { data } = useGetRFPAById(RFPAid ? RFPAid : '');
//   const rfpa = data?.data ? normalizeRFPAForView(data.data) : null;
//   console.log(rfpa);

//   useEffect(() => {
//     rfpa?.source === 'vendor'
//       ? dispatch(
//           setSelectedVendorPartialData(
//             Vendors?.data?.find((vendor) => vendor.id === rfpa?.selectedParty)
//           )
//         )
//       : dispatch(
//           setSelectedFarmerPartialData(
//             Farmers?.data?.find((farmer) => farmer.id === rfpa?.selectedParty)
//           )
//         );
//   }, [
//     rfpa,
//     dispatch,
//     Farmers?.data,
//     Vendors?.data,
//     selectedFarmerPartialData,
//     selectedVendorPartialData,
//   ]);

//   const { mutateAsync: mutatePost, error, data: Res } = useCreateDealSlip();

//   const handleSubmit = (values: PostDealSlip) => {
//     mutatePost(values)
//       .then(() => {
//         toast.success(Res ? Res.message : 'Deal Slip Created');
//         setTimeout(() => {
//           navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
//         }, 2000);
//       })
//       .catch(() => {
//         toast.error(error ? error.message : 'Error while creating deal slip.');
//       });
//   };

//   return (
//     <Formik
//       enableReinitialize={true}
//       initialValues={initValDealSlip}
//       validationSchema={dealSlipSchema}
//       validateOnBlur={true}
//       validateOnChange={true}
//       onSubmit={(values) => {
//         console.log(values);
//         handleSubmit(values);
//       }}
//     >
//       {({
//         values,
//         handleChange,
//         handleSubmit,
//         setFieldValue,
//         handleReset,
//         isSubmitting,
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
//             <Grid2 size={{ xs: 12 }} marginBottom={2}>
//               <PageTitle pagetitle="Deal Slip" />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 4 }}>
//               <SelectInput
//                 isRequired={true}
//                 label="Select RFPA"
//                 name="rfpa"
//                 value={values.rfpa}
//                 options={rfpas}
//                 handleChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   handleRFPANoChange(e.target.value, setFieldValue)
//                 }
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 8 }}>
//               <TextInput
//                 isRequired={false}
//                 label="Company Name"
//                 name="companyName"
//                 value={rfpa?.companyName}
//                 isReadOnly={true}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 6 }}>
//               <TextInput
//                 isRequired={false}
//                 label="Purchase Location"
//                 name="purchaseLocation"
//                 value={
//                   allPurchaseLocation.find(
//                     (loc) => loc.id === rfpa?.purchaseLocation
//                   )?.name ||
//                   rfpa?.otherPurchaseLoc ||
//                   ''
//                 }
//                 isReadOnly={true}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 6 }}>
//               <TextInput
//                 isRequired={false}
//                 label="Purchase For Sales Location"
//                 name="purchaseForSalesLocation"
//                 value={
//                   allPurchaseLocation.find(
//                     (loc) => loc.id === rfpa?.purchaseForSalesLocation
//                   )?.name ||
//                   rfpa?.otherPurchaseForSalesLoc ||
//                   ''
//                 }
//                 isReadOnly={true}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 2 }}>
//               <TextInput
//                 isRequired={true}
//                 label="Loading Location"
//                 name="loadingLocation"
//                 value={values.loadingLocation}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 2 }}>
//               <TextInput
//                 isRequired={true}
//                 label="Lot Number"
//                 name="lotNo"
//                 value={values.lotNo}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 8 }}>
//               <TextInput
//                 isRequired={false}
//                 label="Special Request"
//                 name="specialRequest"
//                 value={values.specialRequest}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <TextInput
//                 isRequired={false}
//                 label="Remark"
//                 name="remark"
//                 value={values.remark}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             {/*Vendor or Farmer info depend on selected source */}
//             <Grid2 size={{ xs: 12 }} marginY={2}>
//               <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
//                 <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                   Vendor / Farmer Information
//                 </Typography>
//               </Box>
//             </Grid2>
//             <Grid2
//               size={{ xs: 12 }}
//               sx={{ display: 'flex', alignItems: 'center' }}
//             >
//               <RadioGroupInput
//                 isRequired
//                 label="Source : "
//                 name="source"
//                 alignment="horizontal"
//                 options={PURCHASE_ARRAYS.source}
//                 value={rfpa?.source}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 4 }}>
//               {rfpa?.source === 'vendor' ? (
//                 <TextInput
//                   isReadOnly={true}
//                   name="companyname"
//                   label="Company Name"
//                   value={selectedVendorPartialData?.companyName}
//                 />
//               ) : (
//                 <TextInput
//                   isReadOnly={true}
//                   name="farmername"
//                   label="Farmer Name"
//                   value={selectedFarmerPartialData?.fullName}
//                 />
//               )}
//             </Grid2>
//             {rfpa?.source === 'vendor' ? (
//               <VendorReadOnlyFields />
//             ) : (
//               <FarmerReadOnlyFields />
//             )}

//             <Grid2 size={{ xs: 12 }} marginY={2}>
//               <SectionHeader sectionHeader="RFPA Products" />
//             </Grid2>
//             {rfpa?.rfpaProducts?.length !== undefined ? (
//               rfpa?.rfpaProducts.map((item, index) => (
//                 <Grid2
//                   container
//                   size={{ xs: 12 }}
//                   spacing={1}
//                   key={index}
//                   padding={1}
//                   sx={{
//                     border: '1px solid #BDBDBD',
//                     borderRadius: 2,
//                     marginX: 'auto',
//                     marginY: 1,
//                   }}
//                 >
//                   <Grid2 size={{ xs: 12 }}>
//                     <Typography variant="caption">
//                       Product : {index + 1}
//                     </Typography>
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 4 }}>
//                     <TextInput
//                       isRequired={false}
//                       isReadOnly={true}
//                       name="productName"
//                       label="Product Name"
//                       value={item.productName}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 8 }}>
//                     <TextInput
//                       isRequired={false}
//                       isReadOnly={true}
//                       name="productDescription"
//                       label="Description"
//                       value={item.description}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 6, md: 3 }}>
//                     <TextInput
//                       isRequired={false}
//                       isReadOnly={true}
//                       name={`rfpaProducts.${index}.grade`}
//                       label="Grade"
//                       value={item.grade}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 6, md: 3 }}>
//                     <TextInput
//                       isRequired={false}
//                       isReadOnly={true}
//                       name={`rfpaProducts.${index}.uom`}
//                       label="Unit"
//                       value={item.uom}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 4, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       isReadOnly={true}
//                       type="number"
//                       name={`rfpaProducts.${index}.quantity`}
//                       label="Quantity"
//                       value={item.quantity || ''}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 4, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       isReadOnly={true}
//                       type="number"
//                       name={`rfpaProducts.${index}.unitPrice`}
//                       label="Unit Price"
//                       value={item.unitPrice || ''}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 4, md: 3 }}>
//                     <TextInput
//                       isRequired={false}
//                       isReadOnly={true}
//                       type="number"
//                       id={`rfpaProducts.${index}.totalVal`}
//                       name={`rfpaProducts.${index}.totalVal`}
//                       label="Total Price"
//                       value={item.totalVal}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       isReadOnly={true}
//                       name={`rfpaProducts.${index}.deliveryLocation`}
//                       label="Delivery Location"
//                       value={item.deliveryLocation}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       type="date"
//                       name={`rfpaProducts.${index}.purchaseDate`}
//                       label="Purchase Date"
//                       value={item.purchaseDate}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       isReadOnly={true}
//                       type="date"
//                       name={`rfpaProducts.${index}.dispatchDate`}
//                       label="Dispatch Date"
//                       value={item.dispatchDate}
//                     />
//                   </Grid2>
//                   <Grid2 size={{ xs: 12, md: 3 }}>
//                     <TextInput
//                       isRequired={true}
//                       isReadOnly={true}
//                       type="date"
//                       name={`rfpaProducts.${index}.deliveryDate`}
//                       label="Delivery Date"
//                       value={item.deliveryDate}
//                     />
//                   </Grid2>
//                   {rfpa?.source === 'farmer' && (
//                     <Grid2 size={{ xs: 12, md: 3 }}>
//                       <TextInput
//                         isRequired={false}
//                         isReadOnly={true}
//                         type="date"
//                         name={`rfpaProducts.${index}.expectedHarvestDate`}
//                         label="Expected Harvest Date"
//                         value={item.expectedHarvestDate}
//                       />
//                     </Grid2>
//                   )}
//                 </Grid2>
//               ))
//             ) : (
//               <Typography variant="caption" color="error">
//                 No products found. Please select RFPA.
//               </Typography>
//             )}

//             <Grid2
//               size={{ xs: 12 }}
//               marginY={2}
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <FormButtonGroup
//                 submitLabel="Create"
//                 isSubmitting={isSubmitting}
//                 isSubmitError={error}
//                 resetLabel="Reset"
//                 onReset={handleReset}
//               />
//             </Grid2>
//           </Grid2>
//         </form>
//       )}
//     </Formik>
//   );
// };
