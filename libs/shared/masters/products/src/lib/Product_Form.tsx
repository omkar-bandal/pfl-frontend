import { FieldArray, Formik } from "formik";
import { initValProduct } from "./initValProduct";
import { Button, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { ImageUpload, mapToValueLabelArray, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { Add, Close } from "@mui/icons-material";
import { ADMIN_API_URL, PostProduct, useCreateProduct, useGetAllProductClassification, useGetAllProductsCat, useGetAllProductSubCat, useGetAllUOMs } from "@prime-fresh/admin_api";
import { appendFormData } from '@prime-fresh/shared/utils';
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export const ProductForm = () => {
    const navigate = useNavigate();
    const { data: classifications } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);
    const { data: categories } = useGetAllProductsCat(ADMIN_API_URL.GET_ALL_PRODUCT_CATEGORY);
    const { data: subcategories } = useGetAllProductSubCat(ADMIN_API_URL.GET_ALL_PRODUCT_SUBCATEGORY);
    console.log(subcategories);
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGetCategoryAndClassification = (values: PostProduct, setFieldValue: (field: string, value: any) => void) => {
        const subcategory = subcategories?.find(subcategory => subcategory.id === values.subcategory);
        setFieldValue("category", subcategory?.category.id);
        setFieldValue("classification", subcategory?.classification.id);
    }

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateProduct(ADMIN_API_URL.CREATE_PRODUCTS);
    const handleSubmit = (values: PostProduct) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Product data created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_PRODUCTS);
            }, 2500);
        }).catch(() => {
            toast.error(postError?.message);
        });
    }
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValProduct}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
            }}>
            {({ values, handleChange, handleReset, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid container columnSpacing={2} rowSpacing={2} padding={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">Product</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" justifyContent="end" alignItems="center">
                                <Button type="submit" variant="contained" color="success" size="large" sx={{ width: 150 }}>Create</Button>
                                <Button type="reset" variant="contained" color="secondary" size="large" sx={{ width: 150, marginLeft: 2 }} onClick={handleReset}>Reset</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name="name"
                                label="Product Name"
                                value={values.name}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                type="text"
                                isRequired={false}
                                name="productOrigin"
                                label="Origin of Product"
                                value={values.productOrigin}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                type="text"
                                isRequired={false}
                                name="brand"
                                label="Brand Name of Product"
                                value={values.brand}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <SelectInput
                                isRequired={true}
                                label="UOM"
                                name="uom"
                                options={mapToValueLabelArray(uoms ? uoms : [], 'id', 'unit')}
                                value={values.uom}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={false}
                                name="packingType"
                                label="Packing Type"
                                value={values.packingType}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextInput
                                type="number"
                                isRequired={false}
                                name="shelfLife"
                                label="Shelf Life"
                                value={values.shelfLife}
                                handleChange={handleChange}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextInput
                                type="number"
                                isRequired={false}
                                name="storageTemp"
                                label="Storage Temparature"
                                value={values.storageTemp}
                                handleChange={handleChange}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end">℃</InputAdornment>,
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired={true}
                                label="Subcategory"
                                name="subcategory"
                                options={mapToValueLabelArray(subcategories ? subcategories : [], 'id', 'name')}
                                value={values.subcategory}
                                handleChange={handleChange}
                                onBlur={() => handleGetCategoryAndClassification(values, setFieldValue)}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired={true}
                                label="Category"
                                name="category"
                                options={mapToValueLabelArray(categories ? categories : [], 'id', 'name')}
                                value={values.category}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired={true}
                                label="Classification"
                                name="classification"
                                options={mapToValueLabelArray(classifications ? classifications : [], 'id', 'name')}
                                value={values.classification}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="count">
                                {({ remove, push }) => (
                                    <Grid container rowSpacing={1}>
                                        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                                            <Button
                                                color="primary"
                                                variant="text"
                                                size="small"
                                                endIcon={<Add />}
                                                onClick={() => push('')}>
                                                Add Count
                                            </Button>
                                        </Grid>
                                        {values.count.map((_, index) => (
                                            <><Grid item xs={5} md={2}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name={`count.${index}`}
                                                    label={`Count ${index + 1}`}
                                                    value={values.count[index]}
                                                    handleChange={handleChange} />
                                            </Grid>
                                                <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "start", marginTop: 3 }}>
                                                    <IconButton
                                                        color="error"
                                                        size="small"
                                                        onClick={() => remove(index)}>
                                                        <Close sx={{ fontSize: 20 }} />
                                                    </IconButton>
                                                </Grid>
                                            </>
                                        ))}
                                    </Grid>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="size">
                                {({ remove, push }) => (
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                                            <Button
                                                color="primary"
                                                variant="text"
                                                size="small"
                                                endIcon={<Add />}
                                                onClick={() => push('')}>
                                                Add Size
                                            </Button>
                                        </Grid>
                                        {values.size.map((_, index) => (
                                            <><Grid item xs={5} md={2}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name={`size.${index}`}
                                                    label={`Size ${index + 1}`}
                                                    value={values.size[index]}
                                                    handleChange={handleChange} />
                                            </Grid>
                                                <Grid item xs={1} sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                                                    <IconButton
                                                        color="error"
                                                        size="small"
                                                        onClick={() => remove(index)}>
                                                        <Close sx={{ fontSize: 20 }} />
                                                    </IconButton>
                                                </Grid>
                                            </>
                                        ))}
                                    </Grid>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="variety">
                                {({ remove, push }) => (
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                                            <Button
                                                color="primary"
                                                variant="text"
                                                size="small"
                                                endIcon={<Add />}
                                                onClick={() => push('')}>
                                                Add Variety
                                            </Button>
                                        </Grid>
                                        {values.variety.map((_, index) => (
                                            <><Grid item xs={5} md={2}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name={`variety.${index}`}
                                                    label={`Variety ${index + 1}`}
                                                    value={values.variety[index]}
                                                    handleChange={handleChange} />
                                            </Grid>
                                                <Grid item xs={1} sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                                                    <IconButton
                                                        color="error"
                                                        size="small"
                                                        onClick={() => remove(index)}>
                                                        <Close sx={{ fontSize: 20 }} />
                                                    </IconButton>
                                                </Grid>
                                            </>
                                        ))}
                                    </Grid>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                type="text"
                                multiline
                                maxRows={4}
                                isRequired={false}
                                name="description"
                                label="Description"
                                value={values.description}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ImageUpload isRequired={false} name="image" label="Product Image" />
                        </Grid>
                    </Grid>
                </form>
            )
            }
        </Formik >

    )
}