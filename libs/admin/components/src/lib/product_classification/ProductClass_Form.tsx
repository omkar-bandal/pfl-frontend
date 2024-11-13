import { ADMIN_API_URL, 
    PostProductClassification, 
    useCreateProductClassification
} from "@prime-fresh/admin_api";
import { DynamicForm } from "@prime-fresh/ui_shared";
import { productClassFormFields } from "./productClassFormFields";

const initValProductClass: PostProductClassification = {
    name: '',
}

export function ProductClassForm() {
   
    const { mutateAsync: postProductClassification } = useCreateProductClassification(ADMIN_API_URL.CREATE_PRODUCT_CLASSIFICATION);

    const handleSubmit = (values: PostProductClassification) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name)
        postProductClassification(formData);
    }
    return (
        <DynamicForm<PostProductClassification>
            schema={productClassFormFields()}
            initialValues={initValProductClass}
            handleSubmit={handleSubmit} />
    )
}