import {
    ADMIN_API_URL,
    PostProductClassification,
    useCreateProductClassification,
    useGetAProductClassification,
    useUpdateProductClassification
} from "@prime-fresh/admin_api";
import { DynamicForm, toast } from "@prime-fresh/ui_shared";
import { productClassFormFields } from "./productClassFormFields";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, initValProductClass, productClassificationSchema } from "@prime-fresh/admin/modules";
import { Box, LinearProgress } from "@mui/material";

export function ProductClassForm() {
    const { id } = useParams<{ id: string }>();
    const classificationId = id ? id : "";
    
    const { data, isLoading } = useGetAProductClassification(ADMIN_API_URL.GET_A_PRODUCT_CLASSIFICATION, classificationId);
    const productClassVal = data ? data : initValProductClass;

    const { mutateAsync: postProductClassification, error: postError, data: postRes } = useCreateProductClassification(ADMIN_API_URL.CREATE_PRODUCT_CLASSIFICATION);
    const { mutateAsync: patchProductClassification, error: patchError, data: patchRes } = useUpdateProductClassification(ADMIN_API_URL.UPDATE_PRODUCT_CLASSIFICATION, classificationId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name)
        classificationId === "" ?
            (postProductClassification(formData).then(() => {
                toast.success(postRes ? postRes.message : "Product Classification Created")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS);
                }, 2000);
            }).catch(() => {
                toast.error(`Error: ${postError?.message}`)
            })) : (patchProductClassification(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Product Classification Updated");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS);
                }, 2000);
            }).catch(() => {
                toast.error(`Error: ${patchError?.message}`)
            }));
    }
    return (
        isLoading ?
            (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :
            (
                <DynamicForm<PostProductClassification>
                    schema={productClassFormFields()}
                    validationSchema={productClassificationSchema}
                    initialValues={productClassVal}
                    handleSubmit={handleSubmit} />
            )
    )
}