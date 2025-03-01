import React from 'react'
import { FieldArray, Formik } from "formik";
import { arrayConstants, inventoryRouteConstants, InwardProductInitialValue, InwardRegisterInitialValue } from "@prime-fresh/inventory/modules";
import { Button, Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from "@prime-fresh/ui_shared";
import { Add, Close } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { productsDataState, setProducts, setSelectedProduct, setUOMs, uomsDataState } from '@prime-fresh/admin/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { INVENTORY_API_URL, PostInwardRegister, useCreateInwardRegister } from '@prime-fresh/inventory_api';
import { useNavigate } from 'react-router-dom';
import { appendFormData, mapToValueLabelArray, useGetBranchesPartialData, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules';


export const InwardRegisterCreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: Products } = useGetProductsPartialData();
  const { data: UOMs } = useGetUOMPartialData();
  const { data: locations } = useGetBranchesPartialData();
  const Locations = locations ? locations : [];
  const { allProducts, selectedProduct } = useAppSelector(productsDataState);
  const { allUOMs } = useAppSelector(uomsDataState);

  // React.useEffect(() => {
  //   dispatch(setSelectedProduct(null));
  //   dispatch(setProducts(Products ? Products : []));
  //   dispatch(setUOMs(UOMs ? UOMs : []));
  // }, [dispatch, Products, UOMs]);

  // const handleProductNameChange = (dataId: string) => {
  //   const selectedProduct: GetProduct | undefined = allProducts.find((products) => products.id === dataId);
  //   dispatch(setSelectedProduct(selectedProduct));
  // }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateNetWeight = (values: PostInwardRegister, setFieldValue: (field: any, value: any | undefined) => void) => {
    const updatedProducts = values.inwardProducts.map((product) => ({
      ...product,
      netWeight: product.grossWeight - ((product.productContainerWeight / 1000) * product.qty),
    }));
    setFieldValue("inwardProducts", updatedProducts);
  }
  const { mutateAsync, error, data } = useCreateInwardRegister(INVENTORY_API_URL.POST_INWARD_REGISTER);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreate = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      console.log(data)
      toast.success(data ? data.message : "Inward register record created successfully.");
      setTimeout(() => {
        navigate(inventoryRouteConstants.GET_ALL_INWARD_REGISTERS);
      }, 2000)
    }).catch(() => {
      console.log(error)
      toast.error(error ? error.message : "Error while creating inward record.")
    })
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={InwardRegisterInitialValue}
      onSubmit={(values) => handleCreate(values)}>
      {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
                Inward Register
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
              <FormResetBtn label="Reset" handleReset={handleReset} />
            </Grid>
            <Grid item xs={12}>
              <RadioGroupInput
                isRequired={true}
                label="Inward Type"
                name="inwardType"
                alignment="horizontal"
                options={arrayConstants.INWARD_TYPE.map((type) => { return { value: type, label: type } })}
                value={values.inwardType}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectInput
                isRequired={false}
                label="Referred GRN"
                name="grnNo"
                options={[{ value: '', label: '' }]}
                value={values.grnNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectInput
                isRequired={false}
                label="Referred Challan"
                name="deliveryChallanNo"
                options={[{ value: '', label: '' }]}
                value={values.deliveryChallanNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                isRequired={true}
                label="Company Name"
                name="companyName"
                options={arrayConstants.COMPANY_NAMES}
                value={values.companyName}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={true}
                name="batchNo"
                label="Batch Number"
                value={values.batchNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={mapToValueLabelArray<GetFilteredBranchData>(Locations, 'id', 'name')}/>
             */}
            </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="date"
                  isRequired={true}
                  name="date"
                  label="Date"
                  value={values.date}
                  handleChange={handleChange} />
              </Grid>

              <VendorFarmerInfo<PostInwardRegister> />

              <Grid item xs={12}>
                <FieldArray name="inwardProducts">
                  {({ remove, push }) => (
                    <>
                      {values.inwardProducts.map((_, index) => (
                        <Grid
                          container
                          columnSpacing={1}
                          key={index}
                          alignItems="center"
                          sx={{
                            border: `1px solid #BDBDBD`,
                            marginY: 1,
                            padding: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography variant="body1" component="div">Product: {index + 1}</Typography>
                            {values.inwardProducts.length > 1 && <IconButton
                              color="error"
                              onClick={() => remove(index)}
                            >
                              <Close />
                            </IconButton>}
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <AutoCompleteInput
                              isRequired={true}
                              name={`inwardProducts.${index}.product`}
                              label="Product Name"
                              options={mapToValueLabelArray(allProducts, 'id', 'name')}
                              handleChange={(event, newValue) => {
                                if (newValue !== null) {
                                  if (typeof newValue === 'string')
                                    setFieldValue(`inwardProducts.${index}.product`, null);
                                  else {
                                    setFieldValue(`inwardProducts.${index}.product`, newValue.value);
                                  }
                                } else
                                  setFieldValue(`inwardProducts.${index}.product`, null);
                              }
                              }
                            // handleBlur={handleProductNameChange(values.inwardProducts[index].product)}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextInput
                              isRequired={false}
                              isReadOnly={true}
                              type="text"
                              name="origin"
                              label="Origin"
                              value={selectedProduct?.productOrigin ? selectedProduct.productOrigin : ""} />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextInput
                              isRequired={false}
                              isReadOnly={true}
                              type="text"
                              name="brand"
                              label="Brand"
                              value={selectedProduct?.brand} />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <SelectInput
                              isRequired={true}
                              label="Count"
                              name={`inwardProducts.${index}.count`}
                              options={selectedProduct?.count !== null ? selectedProduct?.count.map((count) => ({ value: count, label: count })) : []}
                              value={values.inwardProducts[index].count}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <SelectInput
                              isRequired={true}
                              label="Size"
                              name={`inwardProducts.${index}.size`}
                              options={selectedProduct?.size !== null ? selectedProduct?.size.map((size) => ({ value: size, label: size })) : []}
                              value={values.inwardProducts[index].size}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              isRequired={true}
                              type="number"
                              label="Weight"
                              name={`inwardProducts.${index}.weight`}
                              value={values.inwardProducts[index].weight}
                              handleChange={handleChange}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                },
                              }} />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <SelectInput
                              isRequired={true}
                              label="UOM (Inward in the form)"
                              name={`inwardProducts.${index}.uom`}
                              options={mapToValueLabelArray(allUOMs, 'id', 'unit')}
                              value={values.inwardProducts[index].uom}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`inwardProducts.${index}.qty`}
                              label="Quantity"
                              value={values.inwardProducts[index].qty}
                              handleChange={handleChange}
                              onBlur={() => calculateNetWeight(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`inwardProducts.${index}.productContainerWeight`}
                              label="Container Weight (in grams)"
                              value={values.inwardProducts[index].productContainerWeight}
                              handleChange={handleChange}
                              onBlur={() => calculateNetWeight(values, setFieldValue)}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">grams</InputAdornment>,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`inwardProducts.${index}.grossWeight`}
                              label="Gross Weight"
                              value={values.inwardProducts[index].grossWeight}
                              handleChange={handleChange}
                              onBlur={() => calculateNetWeight(values, setFieldValue)}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              isReadOnly={true}
                              name={`inwardProducts.${index}.netWeight`}
                              label="Net Weight"
                              value={values.inwardProducts[index].netWeight}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      ))}
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <Button
                          variant="text"
                          startIcon={<Add />}
                          onClick={() => push(InwardProductInitialValue)}
                        >
                          Add More
                        </Button>
                      </Grid>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="purchasedBy"
                  label="Purchased By"
                  value={values.purchasedBy}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="inwardBy"
                  label="Inwarded By"
                  value={values.inwardBy}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="number"
                  isRequired={true}
                  name="purchasedQty"
                  label="Purchased Quantity (in Kg)"
                  value={values.purchasedQty}
                  handleChange={handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="number"
                  isRequired={true}
                  name="inwardQtyInKg"
                  label="Inward Quantity (in Kg)"
                  value={values.inwardQtyInKg}
                  handleChange={handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="number"
                  isRequired={true}
                  name="inwardCost"
                  label="Inward Cost"
                  value={values.inwardCost}
                  handleChange={handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  type="text"
                  multiline
                  maxRows={2}
                  isRequired={false}
                  name="remarks"
                  label="Remark"
                  value={values.remarks}
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
        </form>
      )}
    </Formik>
  )
}

