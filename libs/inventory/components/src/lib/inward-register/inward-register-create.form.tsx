/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { FieldArray, Formik } from "formik";
import { arrayConstants, inventoryRouteConstants, InwardProductInitialValue, InwardRegisterInitialValue, useCreateInwardRegister } from "@prime-fresh/inventory/modules";
import { Button, Grid2, IconButton, InputAdornment, Typography } from "@mui/material";
import { AutoCompleteInput, FormButtonGroup, FormikAutocomplete, PageTitle, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from "@prime-fresh/ui_shared";
import { Add, Close } from '@mui/icons-material';
import { PostInwardRegister } from '@prime-fresh/inventory_api';
import { useNavigate } from 'react-router-dom';
import { debounce, getSelectedProductData, mapToValueLabelArray, useGetAllDeliveryChallanNums, useGetAllGRNNums, useGetBranchesPartialData, useGetCompanyNames, useGetUOMPartialData, useSearchProductData } from '@prime-fresh/shared/modules';
import { ProductPartialData } from '@prime-fresh/common_api';

export const InwardRegisterCreateForm = () => {
  const navigate = useNavigate();
  
  const { data: dcnum } = useGetAllDeliveryChallanNums();
  const dcNums = dcnum?.data ? mapToValueLabelArray(dcnum.data, 'id', 'challanNo') : [];
  
  const { data: grnno } = useGetAllGRNNums();
  const grnNums = grnno?.data ? mapToValueLabelArray(grnno.data, 'id', 'grnNo') : [];
  
  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
  
  const [searchInput, setSearchInput] = React.useState('');
  const { data: product, isFetching, error: productError } = useSearchProductData(searchInput);
  const searchedProduct = React.useMemo(() => product?.data ? product.data : [], [product]);

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(() => uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : [], [uoms]);
  
  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(() => locations?.data ? mapToValueLabelArray(locations.data, 'id', 'name') : [], [locations]);;

  const debouncedInputChange = React.useCallback(
    debounce((value: string) => {
      setSearchInput(value);
    }, 2000),
    []
  );

  const calculateNetWeight = (values: PostInwardRegister, setFieldValue: (field: any, value: any | undefined) => void) => {
    const updatedProducts = values.inwardProducts.map((product) => ({
      ...product,
      netWeight: product.grossWeight - ((product.productContainerWeight / 1000) * product.qty),
    }));
    setFieldValue("inwardProducts", updatedProducts);
  }

  const { mutateAsync, error, data } = useCreateInwardRegister();

  const handleCreate = (values: any) => {
    mutateAsync(values).then(() => {
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
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
              <PageTitle pagetitle='Inward Register' />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <RadioGroupInput
                isRequired={true}
                label="Inward Type"
                name="inwardType"
                alignment="horizontal"
                options={arrayConstants.INWARD_TYPE.map((type) => { return { value: type, label: type } })}
                value={values.inwardType}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Referred GRN"
                name="grnNo"
                options={grnNums}
                value={values.grnNo}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Referred Challan"
                name="deliveryChallanNo"
                options={dcNums}
                value={values.deliveryChallanNo}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <SelectInput
                isRequired={true}
                label="Company Name"
                name="companyName"
                options={companyNames}
                value={values.companyName}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="batchNo"
                label="Batch Number"
                value={values.batchNo}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={allLocations} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="date"
                isRequired={true}
                name="date"
                label="Date"
                value={values.date}
                handleChange={handleChange} />
            </Grid2>

            <VendorFarmerInfo<PostInwardRegister> />

            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="inwardProducts">
                {({ remove, push }) => (
                  <>
                    {values.inwardProducts.map((_, index) => (
                      <Grid2
                        container
                        spacing={1}
                        key={index}
                        alignItems="center"
                        sx={{
                          border: `1px solid #BDBDBD`,
                          marginY: 1,
                          padding: 1,
                          borderRadius: 2,
                        }}
                      >
                        <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <Typography variant="caption" component="div">Product: {index + 1}</Typography>
                          {values.inwardProducts.length > 1 && <IconButton
                            color="error"
                            onClick={() => remove(index)}
                          >
                            <Close />
                          </IconButton>}
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <FormikAutocomplete<ProductPartialData>
                            isRequired={true}
                            optionValueKey="id"
                            name={`inwardProducts.${index}.product`}
                            label="Product Name"
                            options={searchedProduct}
                            isLoading={isFetching}
                            noOptionsText={productError ? productError.message : 'Enter name'}
                            onInputChange={(value) => debouncedInputChange(value)}
                            getOptionLabel={(option) => option.name}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name="productCode"
                            label="Product Code"
                            value={getSelectedProductData(values.inwardProducts[index].product, searchedProduct)?.productCode || ''} />
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 3 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name="productOrigin"
                            label="Origin"
                            value={getSelectedProductData(values.inwardProducts[index].product, searchedProduct)?.productOrigin || ''} />
                        </Grid2>
                        <Grid2 size={{ xs: 6, md: 2 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name="productBrand"
                            label="Brand"
                            value={getSelectedProductData(values.inwardProducts[index].product, searchedProduct)?.brand || ''} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={true}
                            label="Count"
                            name={`inwardProducts.${index}.count`}
                            options={getSelectedProductData(values.inwardProducts[index].product, searchedProduct)?.count?.map(count => {return {label: count, value: count}}) || []}
                            value={values.inwardProducts[index].count}
                            handleChange={handleChange} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={true}
                            label="Size"
                            name={`inwardProducts.${index}.size`}
                            options={getSelectedProductData(values.inwardProducts[index].product, searchedProduct)?.size?.map(size => {return {label: size, value: size}}) || []}
                            value={values.inwardProducts[index].size}
                            handleChange={handleChange} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
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
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={true}
                            label="UOM (Inward in the form)"
                            name={`inwardProducts.${index}.uom`}
                            options={allUOMs}
                            value={values.inwardProducts[index].uom}
                            handleChange={handleChange} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={true}
                            name={`inwardProducts.${index}.qty`}
                            label="Quantity"
                            value={values.inwardProducts[index].qty}
                            handleChange={handleChange}
                            onBlur={() => calculateNetWeight(values, setFieldValue)}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
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
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
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
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
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
                        </Grid2>
                      </Grid2>
                    ))}
                    <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                      <Button
                        variant="text"
                        size="medium"
                        startIcon={<Add />}
                        onClick={() => push(InwardProductInitialValue)}
                      >
                        Add More
                      </Button>
                    </Grid2>
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="purchasedBy"
                label="Purchased By"
                value={values.purchasedBy}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                type="text"
                isRequired={true}
                name="inwardBy"
                label="Inwarded By"
                value={values.inwardBy}
                handleChange={handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
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
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
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
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
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
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
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
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FormButtonGroup
                submitLabel='Create'
                isSubmitting={isSubmitting}
                isSubmitError={error}
                resetLabel='Reset'
                onReset={handleReset}
              />
            </Grid2>
          </Grid2>
        </form>
      )}
    </Formik>
  )
}

