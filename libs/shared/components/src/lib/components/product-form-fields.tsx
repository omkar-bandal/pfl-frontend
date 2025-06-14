/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid2 } from "@mui/material";
import { ProductPartialData } from "@prime-fresh/common_api"
import { debounce, getSelectedProductData, useGetProductsPartialDataById, useSearchProductData } from "@prime-fresh/shared/modules";
import { FormikAutocomplete, SelectInput, TextInput } from "@prime-fresh/ui_shared"
import { FC, useCallback, useMemo, useState } from "react";

interface ProductFormFieldsProps {
    productFieldName: string;
    productFieldValue?: any;
    productCountFieldName?: string;
    productSizeFieldName?: string;
    productCountFieldValue?: string;
    productSizeFieldValue?: string;
    formikHandleChange?: any;
}

export const ProductFormFields: FC<ProductFormFieldsProps> = (props) => {
    const {productFieldName, productCountFieldName, productCountFieldValue, productFieldValue, productSizeFieldName, productSizeFieldValue, formikHandleChange} = props;
    const [searchInput, setSearchInput] = useState('');
    const { data: produces, isFetching, error } = useSearchProductData(searchInput);
    const searchedProduct = useMemo(() => produces?.data ? produces.data : [], [produces]);
    const { data: product, isLoading } = useGetProductsPartialDataById(productFieldValue || '')
    const selectedProduct = useMemo(() => product?.data ? product.data : null, [product]);
    const debouncedInputChange = useCallback(
        debounce((value: string) => {
            setSearchInput(value);
        }, 2000),
        []
    );
    const productCounts = useMemo(() => getSelectedProductData(productFieldValue, searchedProduct)?.count?.map(count => {return {value: count, label: count}}), [productFieldValue, searchedProduct])
    const productSizes = useMemo(() => getSelectedProductData(productFieldValue, searchedProduct)?.size?.map(size => {return {value: size, label: size}}), [productFieldValue, searchedProduct])
    return (
        <>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FormikAutocomplete<ProductPartialData>
                    isRequired={true}
                    optionValueKey="id"
                    name={productFieldName}
                    label="Product Name"
                    options={selectedProduct ? [selectedProduct] : searchedProduct}
                    isLoading={selectedProduct ? isLoading : isFetching}
                    noOptionsText={error ? error.message : 'Enter product name'}
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
                    value={getSelectedProductData(productFieldValue, searchedProduct)?.productCode || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productOrigin"
                    label="Origin"
                    value={getSelectedProductData(productFieldValue, searchedProduct)?.productOrigin || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productBrand"
                    label="Brand"
                    value={getSelectedProductData(productFieldValue, searchedProduct)?.brand || ''} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="productDescription"
                    label="Description"
                    value={getSelectedProductData(productFieldValue, searchedProduct)?.description || ''} />
            </Grid2>
            {productCountFieldName && <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Count"
                    name={productCountFieldName || ''}
                    options={productCounts}
                    value={productCountFieldValue}
                    handleChange={formikHandleChange} />
            </Grid2>}
            {productSizeFieldName && <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    label="Size"
                    name={productSizeFieldName || ''}
                    options={productSizes}
                    value={productSizeFieldValue}
                    handleChange={formikHandleChange} />
            </Grid2>}
        </>
    )
}