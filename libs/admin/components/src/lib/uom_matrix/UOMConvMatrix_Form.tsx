import { DynamicForm} from "@prime-fresh/ui_shared"
import { uomConvMatrixFormFields } from "./uomConvMatrixFormFields"
import { initValUOMConversionMatrix } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostUOMConversionMatrix, useCreateUOMConversionMatrix, useGetAUOMConversionMatrixs, useUpdateUOMConversionMatrixs } from "@prime-fresh/admin_api";
import { useParams } from "react-router-dom";

export const UOMConvMatrixForm = () => {
    const {oid} = useParams();
    const uomConvMatId = oid? oid : '';
    const {data} = useGetAUOMConversionMatrixs(ADMIN_API_URL.GET_A_UOM_CONVERSION, uomConvMatId);
    const {id, ...uomConvMat} = data ? data : {};

    const UOMsConvMatInitValue = uomConvMatId === '' ? initValUOMConversionMatrix : uomConvMat;
    
    const { mutateAsync: mutatePost, isError: POSTError, error, isSuccess } = useCreateUOMConversionMatrix(ADMIN_API_URL.CREATE_UOM_CONVERSION);
    const { mutateAsync: mutatePatch} = useUpdateUOMConversionMatrixs(ADMIN_API_URL.UPDATE_UOM_CONVERSION, uomConvMatId);
    const handleSubmit = (values: PostUOMConversionMatrix) => {
        console.log(values);
        const formData = new FormData();
        formData.append("conversionFactor", values.conversionFactor.toString());
        formData.append("fromUOM", values.fromUOM);
        formData.append("toUOM", values.toUOM);
        uomConvMatId === '' ? mutatePost(formData) : mutatePatch(formData);
      };
      
    return(
        <DynamicForm<PostUOMConversionMatrix> 
        schema={uomConvMatrixFormFields()}
        initialValues={UOMsConvMatInitValue ? UOMsConvMatInitValue : initValUOMConversionMatrix} 
        handleSubmit={handleSubmit}/>
    )
}