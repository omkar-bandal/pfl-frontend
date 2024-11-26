import { ADMIN_ROUTES, customersState, formContainerState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, PostCustomer, useCreateCustomer, useUpdateCustomer } from "@prime-fresh/admin_api";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { CustomerFormFields } from "./customerFormField";
import { customerValidationSchema } from "./customer.schema";
import { DynamicForm, Notification } from '@prime-fresh/ui_shared';
import { initValCustomer } from "./initValCustomer";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CustomerForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { openFor, dataId } = useAppSelector(formContainerState);

    const Customers = useAppSelector(customersState);

    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateCustomer(ADMIN_API_URL.POST_CUSTOMER);

    const { mutate: mutatePatch } = useUpdateCustomer(ADMIN_API_URL.UPDATE_CUSTOMER, dataId);

    const CustomerInitValue = openFor === 'update' && dataId ? Customers.find(item => item.id === dataId) : initValCustomer;

    const handleSubmit = async (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Customer created successfully !!!" }));
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
            }, 2000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
        });
    };

    const handleUpdate = (values: PostCustomer) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData);
    };

    return (
        <>
            <Notification />
            <DynamicForm<PostCustomer>
                schema={CustomerFormFields()}
                initialValues={CustomerInitValue ? CustomerInitValue : initValCustomer}
                validationSchema={customerValidationSchema}
                handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit} />
        </>
    )
}
