import { DynamicForm, Notification } from "@prime-fresh/ui_shared"
import { UomConvMatrixFormFields } from "./uomConvMatrixFormFields"
import { ADMIN_ROUTES, initValUOMConversionMatrix, uomConversionMatrixSchema } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostUOMConversionMatrix, useCreateUOMConversionMatrix, useGetAllUOMs, useGetAUOMConversionMatrixs, useUpdateUOMConversionMatrixs } from "@prime-fresh/admin_api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification } from "@prime-fresh/modules";
import { Box, LinearProgress } from "@mui/material";

export const UOMConvMatrixForm = () => {
    const { oid } = useParams<{oid: string}>();
    const uomConvMatId = oid ? oid : '';
    const { data, isLoading } = useGetAUOMConversionMatrixs(ADMIN_API_URL.GET_A_UOM_CONVERSION, uomConvMatId);
    const { id, ...uomConvMat } = data ? data : {};
    const UOMsConvMatInitValue = uomConvMatId === '' ? initValUOMConversionMatrix : uomConvMat;
    const {data: uoms} = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUoms = uoms ? uoms : [];
    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateUOMConversionMatrix(ADMIN_API_URL.CREATE_UOM_CONVERSION);
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateUOMConversionMatrixs(ADMIN_API_URL.UPDATE_UOM_CONVERSION, uomConvMatId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values: PostUOMConversionMatrix) => {
        console.log(values);
        const formData = new FormData();
        formData.append("conversionFactor", values.conversionFactor.toString());
        formData.append("fromUOM", values.fromUOM);
        formData.append("toUOM", values.toUOM);
        uomConvMatId === '' ?
            (mutatePost(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "UOM conversion matrix created successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
            }))
            : (mutatePatch(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "UOM conversion matrix updated successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_UOMs_CONV_MATRIX);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }));
    };
    if (isLoading) {
        return (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        )
    }
    return (
        <>
            <Notification />
            <DynamicForm<PostUOMConversionMatrix>
                schema={UomConvMatrixFormFields(allUoms)}
                validationSchema={uomConversionMatrixSchema}
                initialValues={UOMsConvMatInitValue ? UOMsConvMatInitValue : initValUOMConversionMatrix}
                handleSubmit={handleSubmit} />
        </>
    )
}