/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid2 } from "@mui/material";
import { ProductPartialData } from "@prime-fresh/common_api"
import { debounce, getSelectedProductData, useGetProductsPartialDataById, useSearchProductData } from "@prime-fresh/shared/modules";
import { FormikAutocomplete, SelectInput, TextInput } from "@prime-fresh/ui_shared"
import { memo, useCallback, useMemo, useState } from "react";

interface ProductFormFieldsProps {
   fieldArrayName: string;
   index: number;
   formik: any;
}

export const ProductFormFields = memo((props: ProductFormFieldsProps) => {
    const { fieldArrayName, index, formik} = props;
    const [searchInput, setSearchInput] = useState('');
    const { data: produces, isFetching, error } = useSearchProductData(searchInput);
    const searchedProduct = useMemo(() => produces?.data ? produces.data : [], [produces]);
    const { data: product, isLoading } = useGetProductsPartialDataById(formik.values[fieldArrayName][index].productName || '')
    const selectedProduct = useMemo(() => product?.data ? product.data : null, [product]);
    const debouncedInputChange = useCallback(
        debounce((value: string) => {
            setSearchInput(value);
        }, 2000),
        []
    );
    const productCounts = useMemo(() => getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.count, [fieldArrayName, formik.values, index, searchedProduct])
    const productSizes = useMemo(() => getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.size, [fieldArrayName, formik.values, index, searchedProduct])
    const productOrigins = useMemo(() => getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.productOrigin, [fieldArrayName, formik.values, index, searchedProduct])
    const productVarities = useMemo(() => getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.variety, [fieldArrayName, formik.values, index, searchedProduct])
    return (
        <>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <FormikAutocomplete<ProductPartialData>
                    isRequired={true}
                    optionValueKey="id"
                    name={`${fieldArrayName}.${index}.productName`}
                    label="Product Name"
                    options={selectedProduct ? [selectedProduct] : searchedProduct}
                    isLoading={selectedProduct ? isLoading : isFetching}
                    noOptionsText={error ? error.message : 'Enter product name'}
                    onInputChange={(value) => debouncedInputChange(value)}
                    getOptionLabel={(option) => option.name}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productDescription"
                    label="Description"
                    value={getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.description || ''} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Origin"
                    name={`${fieldArrayName}.${index}.origin`}
                    options={productOrigins || []}
                    value={formik.values[fieldArrayName][index].origin}
                    handleChange={formik.handleChange}
                    disable={productOrigins !== null || productOrigins ? false : true}
                     />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Variety"
                    name={`${fieldArrayName}.${index}.variety`}
                    options={productVarities || []}
                    value={formik.values[fieldArrayName][index].variety}
                    handleChange={formik.handleChange}
                    disable={productVarities !== null || productVarities ? false : true}
                    />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Count"
                    name={`${fieldArrayName}.${index}.count`}
                    options={productCounts || []}
                    value={formik.values[fieldArrayName][index].count}
                    handleChange={formik.handleChange}
                    disable={productCounts !== null || productCounts ? false : true}
                     />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Size"
                    name={`${fieldArrayName}.${index}.size`}
                    options={productSizes || []}
                    value={formik.values[fieldArrayName][index].size}
                    handleChange={formik.handleChange}
                    disable={productSizes !== null || productSizes ? false : true}
                     />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productCode"
                    label="Product Code"
                    value={getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.productCode || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productBrand"
                    label="Brand"
                    value={getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct)?.brand || ''} />
            </Grid2>
            
        </>
    )
});