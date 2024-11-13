import { initValUOM } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostUOM, useCreateUOM, useGetAUOM, useUpdateUOM } from "@prime-fresh/admin_api";
import { DynamicForm } from "@prime-fresh/ui_shared";
import { uomFormFields } from "./uomFormFields";
import { useParams } from "react-router-dom";

export const UOMForm = () => {
    const {id} = useParams();
    const uomId = id ? id : '';
    const {data: uom} = useGetAUOM(ADMIN_API_URL.GET_A_UOM, uomId);

    const { mutateAsync: mutatePost, isError: errorPost, isSuccess: successPost, data } = useCreateUOM(ADMIN_API_URL.CREATE_UOM);
    const {mutateAsync: mutatePatch} = useUpdateUOM(ADMIN_API_URL.UPDATE_UOM, uomId);
    const UOMsInitValue = uomId === '' ? initValUOM:  uom;

    const handleSubmit = (values: PostUOM) => {
        console.log(values);
        const formData = new FormData();
        formData.append("unit", values.unit);
        formData.append("abbreviation", values.abbreviation);
        formData.append("description", values.description);
        uomId === ''? mutatePost(formData) : mutatePatch(formData);
    }

    return (
        <DynamicForm<PostUOM>
            schema={uomFormFields()}
            initialValues={UOMsInitValue? UOMsInitValue : initValUOM}
            handleSubmit={handleSubmit} />
    )
}
