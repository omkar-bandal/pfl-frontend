/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FormikProvider, setIn, useFormik } from 'formik';
import { Box, Button, Grid2, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { BtnSmall, FormMobileStepper, FormScrollContainer, FormStepper, PageTitle, toast } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useCreateProduct } from '@prime-fresh/admin/modules';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import { appendFormData, initValProduct, productValidationSchema } from '@prime-fresh/shared/modules';
import { ProductDetails, ProductFormPreview, ProductImage, QCParameters, VariantDetails } from './form-section';

export const ProductCreateForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const productFormSteps = ['Product Details', 'Variants Details', 'QC Parameters', 'Product Image', 'Preview'];
  const LAST_STEP = productFormSteps.length - 1;

  const formik = useFormik({
    initialValues: initValProduct,
    validationSchema: productValidationSchema[activeStep],
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      if (activeStep === LAST_STEP) {
        console.log('Final Submit', values);
        handleSubmit(values);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    },
  });

    const handleNext = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    } else {
      // Deeply set all error fields as touched
      let touched: any = {};
      const markTouched = (errObj: any, path: string[] = []) => {
        Object.keys(errObj).forEach(key => {
          if (typeof errObj[key] === 'object' && errObj[key] !== null) {
            markTouched(errObj[key], [...path, key]);
          } else {
            touched = setIn(touched, [...path, key].join('.'), true);
          }
        });
      };
      markTouched(errors);
      formik.setTouched(touched, true);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    formik.handleReset(formik.values);
    setActiveStep(0);
  };
  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateProduct();

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData)
      .then(() => {
        toast.success(postRes ? postRes.message : 'Product created successfully.');
        setTimeout(() => {
          navigate(ADMIN_ROUTES.GET_ALL_PRODUCTS);
        }, 2000);
      })
      .catch(() => {
        toast.error(postError ? postError.message : 'Error while registering farmer.');
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{
          p: 1,
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1,
        }}
      >
        <Grid2 container spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
          <Grid2 size={{ xs: 11, md: 6 }}>
            <PageTitle pagetitle="Product" />
          </Grid2>
          <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            {isMobile ? (
              <IconButton color="secondary" onClick={() => handleReset()}>
                <RestartAlt />
              </IconButton>
            ) : (
              <BtnSmall label="Reset" color="secondary" onClick={() => handleReset()} />
            )}
          </Grid2>
          <Grid2 size={12}>{!isMobile && <FormStepper activeStep={activeStep} steps={productFormSteps} />}</Grid2>
        </Grid2>
      </Box>
      <FormScrollContainer>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              {activeStep === 0 && <ProductDetails />}
              {activeStep === 1 && <VariantDetails />}
              {activeStep === 2 && <QCParameters />}
              {activeStep === 3 && <ProductImage />}
              {activeStep === 4 && <ProductFormPreview />}
              {/* {activeStep === 4 && <DataViewer config={FarmerFormPreviewConfig} data={formik.values} />} */}
            </Grid2>
          </form>
        </FormikProvider>
      </FormScrollContainer>
      {!isMobile && (
        <Box
          sx={{
            py: 1,
            borderTop: '1px solid #ccc',
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="text" startIcon={<KeyboardArrowLeft />} disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant={activeStep === LAST_STEP ? 'contained' : 'text'}
            endIcon={<KeyboardArrowRight />}
            color={activeStep === LAST_STEP ? 'success' : 'primary'}
            onClick={handleNext}
          >
            {activeStep === LAST_STEP ? 'Submit' : 'Next'}
          </Button>
        </Box>
      )}
      {isMobile && (
        <FormMobileStepper
          steps={productFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};

// export const ProductCreateForm = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: initValProduct,
//     validateOnChange: true,
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       console.log(values);
//       handleSubmit(values);
//     },
//   });
//   const { data: productclass } = useGetAllProductClassifications();
//   const classifications = useMemo(() => {
//     return productclass !== null && productclass?.data ? mapToValueLabelArray(productclass.data, 'id', 'name') : [];
//   }, [productclass]);

//   const { data: productcat } = useGetAllProductCategories();
//   const categories = useMemo(() => {
//     return productcat !== null && productcat?.data ? mapToValueLabelArray(productcat.data, 'id', 'name') : [];
//   }, [productcat]);

//   const { data: productsubcategories } = useGetAllProductSubcategories();
//   const subcategories = useMemo(() => {
//     return productsubcategories !== null && productsubcategories?.data
//       ? mapToValueLabelArray(productsubcategories.data, 'id', 'name')
//       : [];
//   }, [productsubcategories]);

//   const { data: units } = useGetUOMPartialData();
//   const uoms = useMemo(() => {
//     return units !== null && units?.data ? mapToValueLabelArray(units.data, 'id', 'unit') : [];
//   }, [units]);

//   const qcParamsType = ['good', 'bad', 'average'].map((type) => {
//     return { value: type, label: type };
//   });

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleGetCategoryAndClassification = useCallback(
//     (values: Omit<IProduct, 'id'>, setFieldValue: (field: string, value: any) => void) => {
//       const subcategory = productsubcategories?.data?.find((subcategory) => subcategory.id === values.subcategory);
//       setFieldValue('category', subcategory?.category.id);
//       setFieldValue('classification', subcategory?.classification.id);
//     },
//     [productsubcategories?.data]
//   );

//   const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateProduct();

//   const handleSubmit = (values: any) => {
//     const formData = new FormData();
//     appendFormData(formData, values);
//     mutatePost(formData)
//       .then(() => {
//         toast.success(postRes ? postRes.message : 'Product data created successfully.');
//         setTimeout(() => {
//           navigate(ADMIN_ROUTES.GET_ALL_PRODUCTS);
//         }, 2000);
//       })
//       .catch(() => {
//         console.log(postError);
//         toast.error(postError ? postError.message : 'Error while creating product data.');
//       });
//   };
//   return (
//     <Formik
//       enableReinitialize={true}
//       initialValues={initValProduct}
//       validateOnBlur={true}
//       validateOnChange={true}
//       onSubmit={(values) => {
//         console.log(values);
//         handleSubmit(values);
//       }}
//     >
//       {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <Grid2 container spacing={1} padding={1}>
//             <Grid2 size={{ xs: 12 }}>
//               <PageTitle pagetitle="Product" />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 9 }}>
//               <TextInput
//                 type="text"
//                 isRequired={true}
//                 name="name"
//                 label="Product Name"
//                 value={values.name}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 3 }}>
//               <TextInput
//                 type="text"
//                 isRequired={true}
//                 name="prefix"
//                 label="Product Code Prefix"
//                 value={values.prefix ? values.prefix.toUpperCase() : values.prefix}
//                 handleChange={handleChange}
//                 infoTipText={`Enter prefix to generate product code. For example, if product name is Royal Gala Apple enter prefix as RGA`}
//               />
//             </Grid2>
//             {/* <Grid2 size={{ xs: 12, md: 3 }}>
//               <TextInput
//                 type="text"
//                 isRequired={false}
//                 name="brand"
//                 label="Brand Name of Product"
//                 value={values.brand}
//                 handleChange={handleChange}
//               />
//             </Grid2> */}
//             <Grid2 size={{ xs: 12, md: 3 }}>
//               <SelectInput
//                 isRequired={true}
//                 label="UOM"
//                 name="uom"
//                 options={uoms}
//                 value={values.uom}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 3 }}>
//               <TextInput
//                 type="text"
//                 isRequired={false}
//                 name="packingType"
//                 label="Packing Type"
//                 value={values.packingType}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 6, md: 3 }}>
//               <TextInput
//                 type="number"
//                 isRequired={false}
//                 name="shelfLife"
//                 label="Shelf Life"
//                 value={values.shelfLife}
//                 handleChange={handleChange}
//                 slotProps={{
//                   input: {
//                     endAdornment: <InputAdornment position="end">Days</InputAdornment>,
//                   },
//                 }}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 6, md: 3 }}>
//               <TextInput
//                 type="number"
//                 isRequired={false}
//                 name="storageTemp"
//                 label="Storage Temparature"
//                 value={values.storageTemp}
//                 handleChange={handleChange}
//                 slotProps={{
//                   input: {
//                     endAdornment: <InputAdornment position="end">℃</InputAdornment>,
//                   },
//                 }}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 4 }}>
//               <SelectInput
//                 isRequired={true}
//                 label="Subcategory"
//                 name="subcategory"
//                 options={subcategories}
//                 value={values.subcategory}
//                 handleChange={handleChange}
//                 onBlur={() => handleGetCategoryAndClassification(values, setFieldValue)}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 4 }}>
//               <SelectInput
//                 isRequired={true}
//                 label="Category"
//                 name="category"
//                 options={categories}
//                 value={values.category}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12, md: 4 }}>
//               <SelectInput
//                 isRequired={true}
//                 label="Classification"
//                 name="classification"
//                 options={classifications}
//                 value={values.classification}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             {/* <Grid2 size={{ xs: 12 }}>
//               <MultipleTextInput
//                 isRequired={false}
//                 name="productOrigin"
//                 label="Product Origins"
//                 values={values.productOrigin}
//                 setFieldValue={setFieldValue}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <MultipleTextInput
//                 isRequired={false}
//                 name="count"
//                 label="Counts of product"
//                 values={values.count}
//                 setFieldValue={setFieldValue}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <MultipleTextInput
//                 isRequired={false}
//                 name="size"
//                 label="Sizes of product"
//                 values={values.size}
//                 setFieldValue={setFieldValue}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <MultipleTextInput
//                 isRequired={false}
//                 name="variety"
//                 label="Varieties of product"
//                 values={values.variety}
//                 setFieldValue={setFieldValue}
//               />
//             </Grid2> */}
//             <Grid2 size={{ xs: 12 }}>
//               <TextInput
//                 type="text"
//                 multiline
//                 maxRows={4}
//                 isRequired={false}
//                 name="description"
//                 label="Description"
//                 value={values.description}
//                 handleChange={handleChange}
//               />
//             </Grid2>
//             <Grid2 size={12} marginY={1}>
//               <SectionHeader sectionHeader="Product Variants" />
//             </Grid2>
//             <Grid2 size={12}>
//               <FieldArray name="variant">
//                 {({ push, remove }) => (
//                   <>
//                     {values.variant.map((_, index) => (
//                       <Grid2
//                         container
//                         spacing={1}
//                         padding={1}
//                         marginY={1}
//                         sx={{ border: `1px solid #BDBDBD`, borderRadius: 3 }}
//                       >
//                         <Grid2 size={{ xs: 11.5 }}>
//                           <Typography variant="caption" sx={{ fontWeight: 600 }}>
//                             Variant {index + 1}
//                           </Typography>
//                         </Grid2>
//                         <Grid2 size={{ xs: 0.5 }}>
//                           {values.variant.length > 1 && (
//                             <IconButton color="error" size="small" onClick={() => remove(index)}>
//                               <Close fontSize="small" />
//                             </IconButton>
//                           )}
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="text"
//                             isRequired={false}
//                             name={`variant.${index}.count`}
//                             label="Count"
//                             value={values.variant[index].count}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="text"
//                             isRequired={false}
//                             name={`variant.${index}.size`}
//                             label="Size"
//                             value={values.variant[index].size}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="text"
//                             isRequired={false}
//                             name={`variant.${index}.origin`}
//                             label="Origin"
//                             value={values.variant[index].origin}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="text"
//                             isRequired={false}
//                             name={`variant.${index}.variety`}
//                             label="Variety"
//                             value={values.variant[index].variety}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="text"
//                             isRequired={false}
//                             name={`variant.${index}.brand`}
//                             label="Brand"
//                             value={values.variant[index].brand}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 2 }}>
//                           <TextInput
//                             type="number"
//                             isRequired={false}
//                             name={`variant.${index}.thresholdStock`}
//                             label="Threshold Quantity"
//                             value={values.variant[index].thresholdStock}
//                             handleChange={handleChange}
//                             slotProps={{
//                               input: {
//                                 endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
//                               },
//                             }}
//                             infoTipText="Minimum quantity of product in kg to be maintain in the stock."
//                           />
//                         </Grid2>
//                       </Grid2>
//                     ))}
//                     <Grid2
//                       size={{ xs: 12 }}
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'end',
//                       }}
//                     >
//                       <AddFieldButton label="Add Variant" onClickFn={() => push(initValProductVariant)} />
//                     </Grid2>
//                   </>
//                 )}
//               </FieldArray>
//             </Grid2>
//             <Grid2 size={{ xs: 12 }} marginY={1}>
//               <SectionHeader
//                 sectionHeader="Quality Check Parameters"
//                 infoTipText={`These quality check parameters will be use for arrival quality report (AQR)`}
//               />
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <FieldArray name="qualityParameters">
//                 {({ push, remove }) => (
//                   <>
//                     {values.qualityParameters.map((_, index) => (
//                       <Grid2 container spacing={1}>
//                         <Grid2 size={{ xs: 12, md: 4 }}>
//                           <RadioGroupInput
//                             isRequired={true}
//                             alignment="vertical"
//                             name={`qualityParameters.${index}.type`}
//                             label="Parameter Type"
//                             value={values.qualityParameters[index].type}
//                             options={qcParamsType}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 7 }}>
//                           <TextInput
//                             isRequired={true}
//                             name={`qualityParameters.${index}.name`}
//                             label="Parameter Name"
//                             value={values.qualityParameters[index].name}
//                             handleChange={handleChange}
//                           />
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 1 }}>
//                           <IconButton
//                             color="success"
//                             size="small"
//                             sx={{ marginTop: 3 }}
//                             onClick={() => push({ name: '', type: '' })}
//                           >
//                             <Add />
//                           </IconButton>
//                           {values.qualityParameters.length > 1 && (
//                             <IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
//                               <Close />
//                             </IconButton>
//                           )}
//                         </Grid2>
//                       </Grid2>
//                     ))}
//                   </>
//                 )}
//               </FieldArray>
//             </Grid2>
//             <Grid2 size={{ xs: 12 }}>
//               <ImageUpload isRequired={false} name="image" label="Product Image" />
//             </Grid2>
//             <Grid2
//               size={{ xs: 12 }}
//               marginY={2}
//               sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//             >
//               <FormButtonGroup
//                 submitLabel="Create"
//                 isSubmitting={isSubmitting}
//                 isSubmitError={postError}
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
