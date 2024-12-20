import React from 'react'
import { FieldArray, Formik } from 'formik'
import { dumpProductsInitialValue, dumpRegisterInitialValue, dumpRegisterSchema, inventoryRouteConstants } from '@prime-fresh/inventory/modules'
import { Button, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { AutoCompleteInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules'
import { PURCHASE_API_URL, useGetAllGRN } from '@prime-fresh/purchase_api'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils'
// import { Add, Close } from '@mui/icons-material'
import { ADMIN_API_URL, useGetAllFilteredBranches, useGetAllProducts, useGetAllUOMs } from '@prime-fresh/admin_api'
// import { useAppSelector } from '@prime-fresh/modules'
import { Add, Close } from '@mui/icons-material'
import { INVENTORY_API_URL, PostDumpRegister, useCreateDumpRegister } from '@prime-fresh/inventory_api'
import { useNavigate } from 'react-router-dom'

export const DumpRegisterCreateForm = () => {
  const navigate = useNavigate();
  // Fetch Data
  const { data: grns } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
  const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);

  // Memoize derived values
  const grnNums = React.useMemo(() => mapToValueLabelArray(grns || [], 'id', 'grnNo'), [grns]);
  const allProducts = React.useMemo(() => mapToValueLabelArray(products || [], 'id', 'name'), [products]);
  const allUOMs = React.useMemo(() => mapToValueLabelArray(uoms || [], 'id', 'unit'), [uoms]);
  const allLocations = React.useMemo(() => mapToValueLabelArray(locations || [], 'id', 'name'), [locations]);

  // Selectors
  // const { selectedGRN } = useAppSelector(grnDataState);

  // Handlers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleGRNnumChange = (grnid: any, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
  //   const selected = grns?.find((grn) => grn.id === grnid);
  //   dispatch(setSelectedGRN(selected));

  //   if (selected?.products) {
  //     const dumpProducts = selected.products.map((grnProduct) => ({
  //       product: products.find((item) => item.id === grnProduct.product)?.productName || '',
  //       uom: '',
  //       quantity: 0,
  //       dumpCost: 0,
  //     }));
  //     setFieldValue('dumpProducts', dumpProducts);
  //   } else {
  //     setFieldValue('dumpProducts', dumpProductsInitialValue);
  //   }
  // };
  const { mutateAsync, isPending, error, data } = useCreateDumpRegister(INVENTORY_API_URL.POST_DUMP_REGISTER);
  const handleSubmit = (values: PostDumpRegister) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      toast.success(data ? data.message : "Dump record created sucessfully.");
      setTimeout(() => {
        navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
      }, 2500);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating dump record.");
    })
  }
  return (
    <Formik
      initialValues={dumpRegisterInitialValue}
      validationSchema={dumpRegisterSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(values) => {
        console.log(values)
        handleSubmit(values);
      }}>
      {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Dump Register</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                disabled={isSubmitting} sx={{
                  width: 150, textTransform: 'none', '&:disabled': {
                    backgroundColor: "#A5D6A7",
                  },
                }}>
                {isSubmitting && isPending ? <CircularProgress color='inherit' size={25} /> : "Create"}
              </Button>
              <Button type="reset" variant="contained" color="secondary"
                size="large"
                sx={{ width: 150, textTransform: 'none' }}
                onClick={handleReset}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                isRequired
                label="Company Name"
                name="companyName"
                options={PURCHASE_ARRAYS.companyNames}
                value={values.companyName}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={allLocations}
                handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextInput
                type="date"
                isRequired
                name="date"
                label="Date"
                value={values.date}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="text"
                isRequired={false}
                name="batchNo"
                label="Batch Number"
                value={values.batchNo}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                isRequired={false}
                label="Referred GRN"
                name="grn"
                options={grnNums}
                value={values.grn}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FieldArray name="dumpProducts">
                {({ push, remove }) => (
                  <>
                    {values.dumpProducts.map((_, index) => (
                      <Grid container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                        <Grid item xs={12} md={5}>
                          <AutoCompleteInput
                            isRequired={true}
                            name={`dumpProducts.${index}.product`}
                            label="Product Name"
                            options={allProducts}
                            handleChange={(event, newValue) => {
                              if (newValue) {
                                setFieldValue(`dumpProducts.${index}.product`, newValue.value);
                              } else {
                                setFieldValue(`dumpProducts.${index}.product`, '');
                              }
                            }} />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <SelectInput
                            isRequired
                            name={`dumpProducts.${index}.uom`}
                            label="UOM"
                            options={allUOMs}
                            value={values.dumpProducts[index].uom}
                            handleChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <TextInput
                            type="number"
                            isRequired
                            name={`dumpProducts.${index}.quantity`}
                            label="Quantity"
                            value={values.dumpProducts[index].quantity}
                            handleChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <TextInput
                            type="number"
                            isRequired
                            name={`dumpProducts.${index}.dumpCost`}
                            label="Dump Cost"
                            value={values.dumpProducts[index].dumpCost}
                            handleChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                          <IconButton color="success" size="small" sx={{ marginTop: 3 }} onClick={() => push(dumpProductsInitialValue)}>
                            <Add />
                          </IconButton>
                          {values.dumpProducts.length > 1 && (<IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                            <Close />
                          </IconButton>)}
                        </Grid>
                      </Grid>
                    ))}
                  </>
                )}
              </FieldArray>
            </Grid>
            <Grid item xs={12}>
              <TextInput
                isRequired={false}
                name="remark"
                label="Remark"
                value={values.remark}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
