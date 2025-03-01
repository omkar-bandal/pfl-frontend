import { ADMIN_ROUTES, customersState, formContainerState, useCreateCustomer, useUpdateCustomerById } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostCustomer } from "@prime-fresh/admin_api";
import {  useAppSelector } from "@prime-fresh/modules";
import { CustomerFormFields } from "./customerFormField";
import { customerValidationSchema } from "./customer.schema";
import { DynamicForm, toast } from '@prime-fresh/ui_shared';
import { initValCustomer } from "./initValCustomer";
import { useNavigate } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/modules";

export const CustomerForm = () => {
    const navigate = useNavigate();

    const { openFor, dataId } = useAppSelector(formContainerState);

    const Customers = useAppSelector(customersState);

    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateCustomer();

    const { mutate: mutatePatch } = useUpdateCustomerById(dataId);

    const CustomerInitValue = openFor === 'update' && dataId ? Customers.find(item => item.id === dataId) : initValCustomer;

    const handleSubmit = async (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Customer created successfully");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError?.message : "Error while creating customer record.");
        });
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
            // validationSchema={customerValidationSchema}
            handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit} />
    )
}
