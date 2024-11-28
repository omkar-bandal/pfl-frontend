import { ADMIN_ROUTES, initValUOM, uomSchema } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostUOM, useCreateUOM, useGetAUOM, useUpdateUOM } from "@prime-fresh/admin_api";
import { DynamicForm, Notification } from "@prime-fresh/ui_shared";
import { uomFormFields } from "./uomFormFields";
import { useNavigate, useParams } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "@prime-fresh/modules";

export const UOMForm = () => {
    const { id } = useParams<{ id: string }>();
    const uomId = id ? id : '';
    const { data: uom, isLoading } = useGetAUOM(ADMIN_API_URL.GET_A_UOM, uomId);

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOM(ADMIN_API_URL.CREATE_UOM);
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOM(ADMIN_API_URL.UPDATE_UOM, uomId);
    const UOMsInitValue = uomId === '' ? initValUOM : uom;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values: PostUOM) => {
        console.log(values);
        const formData = new FormData();
        formData.append("unit", values.unit);
        formData.append("abbreviation", values.abbreviation);
        formData.append("description", values.description);
        uomId === '' ?
            (mutatePost(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "UOM created successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
            }))
            : (mutatePatch(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "UOM updated successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }))
    };
    
    return (
        <>
            {isLoading ? (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :
                (<DynamicForm<PostUOM>
                    schema={uomFormFields()}
                    validationSchema={uomSchema}
                    initialValues={UOMsInitValue ? UOMsInitValue : initValUOM}
                    handleSubmit={handleSubmit} />)}
            <Notification />
        </>
    )
}
