import { customersState, formContainerState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostCustomer, useCreateCustomer, useUpdateCustomer } from "@prime-fresh/admin_api";
import { useAppSelector } from "@prime-fresh/modules";
import { CustomerFormFields } from "./customerFormField";
import { customerValidationSchema } from "./customer.schema";
import { DynamicForm } from '@prime-fresh/ui_shared';
import { initValCustomer } from "./initValCustomer";
import { appendFormData } from "@prime-fresh/shared/utils";

export const CustomerForm = () => {

    const { openFor, dataId } = useAppSelector(formContainerState);

    const Customers = useAppSelector(customersState);

    const { mutate: mutatePost } = useCreateCustomer(ADMIN_API_URL.POST_CUSTOMER);

    const { mutate: mutatePatch } = useUpdateCustomer(ADMIN_API_URL.UPDATE_CUSTOMER, dataId);

    const CustomerInitValue = openFor === 'update' && dataId ? Customers.find(item => item.id === dataId) : initValCustomer;

    const handleSubmit = async (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData);
    };

    const handleUpdate = (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData);
    };

    return (
        <DynamicForm<PostCustomer>
            schema={CustomerFormFields()}
            initialValues={CustomerInitValue ? CustomerInitValue : initValCustomer}
            validationSchema={customerValidationSchema}
            handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit} />
    )
}
