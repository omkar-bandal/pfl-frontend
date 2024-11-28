import { ADMIN_API_URL, PostProductSubcategory, useCreateProductSubcat, useGetAllProductsCat, useGetAProductSubcat, useUpdateProductSubcat } from "@prime-fresh/admin_api";
import { DynamicForm, Notification } from "@prime-fresh/ui_shared";
import { productSubcatFormFields } from "./productSubcatFormFields";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification } from "@prime-fresh/modules";
import { ADMIN_ROUTES, initValProductSubcat, productSubcategorySchema } from "@prime-fresh/admin/modules";
import { Box, LinearProgress } from "@mui/material";

export function ProductSubcatForm() {
    const { id } = useParams();
    const subcategoryId = id ? id : '';

    const { data: subcategory, isLoading } = useGetAProductSubcat(ADMIN_API_URL.GET_A_PRODUCT_SUBCATEGORY, subcategoryId);

    const ProductSubcatInitValue = subcategoryId === '' ? initValProductSubcat : subcategory;

    const { data } = useGetAllProductsCat(ADMIN_API_URL.GET_ALL_PRODUCT_CATEGORY);
    const categories = data ? data : []

    const { mutateAsync: postProductSubcategory, error: postError, data: postRes } = useCreateProductSubcat(ADMIN_API_URL.CREATE_PRODUCT_SUBCATEGORY);
    const { mutateAsync: patchProductSubcategory, error: patchError, data: patchRes } = useUpdateProductSubcat(ADMIN_API_URL.UPDATE_PRODUCT_SUBCATEGORY, subcategoryId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("category", values.category);
        subcategoryId === '' ?
            (postProductSubcategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Product subcategory created successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
            }))
            : (patchProductSubcategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "Product subcategory updated successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }));

    }

    return (
        <>
            {isLoading ?
                (
                    <Box sx={{ flex: 1 }}>
                        <LinearProgress />
                    </Box>) :
                (<DynamicForm<PostProductSubcategory>
                    schema={productSubcatFormFields(categories)}
                    validationSchema={productSubcategorySchema}
                    initialValues={ProductSubcatInitValue ? ProductSubcatInitValue : initValProductSubcat}
                    handleSubmit={handleSubmit} />)}
            <Notification />
        </>
    )
}