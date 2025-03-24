import React from 'react'
import { Grid2, IconButton, Typography } from '@mui/material'
import { ProductPartialData } from '@prime-fresh/common_api'
import { FormikAutocomplete, RadioGroupInput, SelectInput, TextInput } from '@prime-fresh/ui_shared'
import { PostGRN } from '@prime-fresh/purchase_api'
import { handleGRNProductsChange, handleRemoveProduct } from './helper-functions'
import { useFormikContext } from 'formik'
import { Close } from '@mui/icons-material'
import { debounce, getSelectedProductData, mapToValueLabelArray, useGetProductsPartialDataById, useGetUOMPartialData, useSearchProductData } from '@prime-fresh/shared/modules'

export const GRNProductArray: React.FC<{ index: number }> = ({ index }) => {
    const { values, handleChange, setFieldValue } = useFormikContext<PostGRN>();
    
    const [searchInput, setSearchInput] = React.useState('');
    const { data: produces, isFetching, error } = useSearchProductData(searchInput);
    const searchedProduct = React.useMemo(() => produces?.data ? produces.data : [], [produces]);
   
    const {data: product, isLoading} = useGetProductsPartialDataById(values.grnProducts[index].productName || '')
    const selectedProduct = React.useMemo(() => product?.data ? product.data : null, [product]);
    
    const { data: UOMs } = useGetUOMPartialData();
    const allUOMs = UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [];

    const debouncedInputChange = React.useCallback(
        debounce((value: string) => {
            setSearchInput(value);
        }, 2000),
        []
    );

    return (
        <Grid2 container spacing={1} key={index} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
            <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="caption">Product : {index + 1}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                {values.grnProducts.length > 1 &&
                    <IconButton color='error' size='medium'
                        onClick={() => {
                            handleRemoveProduct(index, values, setFieldValue);
                        }}>
                        <Close />
                    </IconButton>}
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
                <FormikAutocomplete<ProductPartialData>
                    isRequired={true}
                    optionValueKey="id"
                    name={`grnProducts.${index}.productName`}
                    label="Product Name"
                    options={selectedProduct ? [selectedProduct] : searchedProduct}
                    isLoading={selectedProduct ? isLoading : isFetching}
                    noOptionsText={error ? error.message : 'Enter name'}
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
                    value={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.productCode || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productOrigin"
                    label="Origin"
                    value={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.productOrigin || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productBrand"
                    label="Brand"
                    value={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.brand || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2 }}>
                <SelectInput
                    isRequired={false}
                    id={`grnProducts.${index}.uom`}
                    name={`grnProducts.${index}.uom`}
                    label="Unit"
                    options={allUOMs}
                    value={values.grnProducts[index].uom}
                    handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 1.5 }}>
                <SelectInput
                    isRequired={false}
                    id={`grnProducts.${index}.size`}
                    name={`grnProducts.${index}.size`}
                    label="Size"
                    options={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.size?.map(size => {return {label: size, value: size}}) || []}
                    value={values.grnProducts[index].size}
                    handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 1.5 }}>
                <SelectInput
                    isRequired={false}
                    id={`grnProducts.${index}.count`}
                    name={`grnProducts.${index}.count`}
                    label="Count"
                    value={values.grnProducts[index].count}
                    options={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.count?.map(count => {return {label: count, value: count}}) || []}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2 }}>
                <TextInput
                    isRequired={true}
                    label='Quantity'
                    name={`grnProducts.${index}.quantity`}
                    type='number'
                    value={values.grnProducts[index].quantity || null}
                    handleChange={(event) => handleGRNProductsChange(index, "quantity", Number(event.target.value), values, setFieldValue)}
                />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2 }}>
                <TextInput
                    isRequired={true}
                    type='number'
                    label='Rate'
                    id={`grnProducts.${index}.unitPrice`}
                    name={`grnProducts.${index}.unitPrice`}
                    value={values.grnProducts[index].unitPrice || null}
                    handleChange={(event) => handleGRNProductsChange(index, "unitPrice", Number(event.target.value), values, setFieldValue)}
                />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    type='number'
                    label='Amount'
                    id={`grnProducts.${index}.amount`}
                    name={`grnProducts.${index}.amount`}
                    value={values.grnProducts[index].amount || ""} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
                <TextInput
                    type="number"
                    isRequired={true}
                    id={`grnProducts.${index}.packingMaterialWeight`}
                    name={`grnProducts.${index}.packingMaterialWeight`}
                    label="Packing Material Weight (in grams)"
                    value={values.grnProducts[index].packingMaterialWeight || null}
                    handleChange={(event) => handleGRNProductsChange(index, "packingMaterialWeight", Number(event.target.value), values, setFieldValue)} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
                <TextInput
                    type="number"
                    isRequired={true}
                    id={`grnProducts.${index}.grossWeight`}
                    name={`grnProducts.${index}.grossWeight`}
                    label="Gross Weight (in kg)"
                    value={values.grnProducts[index].grossWeight || null}
                    handleChange={(event) => handleGRNProductsChange(index, "grossWeight", Number(event.target.value), values, setFieldValue)} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
                <TextInput
                    type="number"
                    isRequired={false}
                    isReadOnly={true}
                    id={`grnProducts.${index}.netWeight`}
                    name={`grnProducts.${index}.netWeight`}
                    label="Net Weight (in kg)"
                    value={values.grnProducts[index].netWeight} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput isRequired={false} label='Purchase Date' name={`grnProducts.${index}.purchaseDate`} type='date' value={values.grnProducts[index].purchaseDate} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput isRequired={false} label='Dispatch Date' name={`grnProducts.${index}.dispatchDate`} type='date' value={values.grnProducts[index].dispatchDate} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput isRequired={false} label='Delivery Date' name={`grnProducts.${index}.deliveryDate`} type='date' value={values.grnProducts[index].deliveryDate} handleChange={handleChange} />
            </Grid2>
            {values.source === "farmer" ?
                (<Grid2 size={{ xs: 6, md: 3 }}>
                    <TextInput isRequired={false} label='Expected Harvest Date' name={`grnProducts.${index}.expectedHarvestDate`} type='date' value={values.grnProducts[index].expectedHarvestDate} handleChange={handleChange} />
                </Grid2>) : ('')}
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput isRequired={false} label='Delivery Location' name={`grnProducts.${index}.deliveryLocation`} type='text' value={values.grnProducts[index].deliveryLocation} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 9 }}>
                <RadioGroupInput
                    isRequired={true}
                    label="RTV"
                    alignment="vertical"
                    name={`grnProducts.${index}.rtv`}
                    options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                    value={values.grnProducts[index].rtv}
                    onChange={handleChange} />
            </Grid2>
        </Grid2>
    )
}

