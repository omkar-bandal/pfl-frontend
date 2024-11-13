import { ADMIN_API_URL, PostProductSubcategory, useCreateProductSubcat, useGetAProductSubcat, useUpdateProductSubcat } from "@prime-fresh/admin_api";
import { DynamicForm } from "@prime-fresh/ui_shared";
import { productSubcatFormFields } from "./productSubcatFormFields";
import { useParams } from "react-router-dom";

const initValProductSubcat: PostProductSubcategory = {
    name: '',
    category: '',
}

export function ProductSubcatForm() {
    const {id} = useParams();
    const subcategoryId = id? id : '';
    
    const {data: subcategory} = useGetAProductSubcat(ADMIN_API_URL.GET_A_PRODUCT_SUBCATEGORY, subcategoryId);
    
    const ProductSubcatInitValue = subcategoryId === '' ? initValProductSubcat :  subcategory;
    
    const {mutateAsync: postProductSubcategory} = useCreateProductSubcat(ADMIN_API_URL.CREATE_PRODUCT_SUBCATEGORY);
    const {mutateAsync: patchProductSubcategory} = useUpdateProductSubcat(ADMIN_API_URL.UPDATE_PRODUCT_SUBCATEGORY, subcategoryId);
    
    const handleSubmit = (values: PostProductSubcategory) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("category", values.category);
        subcategoryId === ''? postProductSubcategory(formData) : patchProductSubcategory(formData);

    }
    return (
        <DynamicForm<PostProductSubcategory>
            schema={productSubcatFormFields()}
            initialValues={ProductSubcatInitValue ? ProductSubcatInitValue : initValProductSubcat}
            handleSubmit={handleSubmit} />
    )
}