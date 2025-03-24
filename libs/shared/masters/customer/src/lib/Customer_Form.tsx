import { ADMIN_ROUTES, customersState, formContainerState, useCreateCustomer, useGetAllCustomerCategories, useGetAllCustomerTypes, useUpdateCustomerById } from "@prime-fresh/admin/modules";
import { PostCustomer } from "@prime-fresh/admin_api";
import {  useAppSelector } from "@prime-fresh/modules";
import { CustomerFormFields } from "./customerFormField";
import { DynamicForm, toast } from '@prime-fresh/ui_shared';
import { initValCustomer } from "./initValCustomer";
import { useNavigate } from "react-router-dom";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/modules";
import { useMemo } from "react";
import { customerValidationSchema } from "./customer.schema";

export function CustomerForm() {
    const navigate = useNavigate();

    const { openFor, dataId } = useAppSelector(formContainerState);

    const Customers = useAppSelector(customersState);

    const { data: cat } = useGetAllCustomerCategories();
    const customerCategory = useMemo(() => cat?.data ? mapToValueLabelArray(cat.data, 'id', 'name') : [],[cat?.data]);

    const { data: types } = useGetAllCustomerTypes();
    const customerTypes = useMemo(() => types?.data ? mapToValueLabelArray(types.data, 'id', 'name') : [], [types?.data]);

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
            schema={CustomerFormFields(customerTypes, customerCategory)}
            initialValues={CustomerInitValue ? CustomerInitValue : initValCustomer}
            validationSchema={customerValidationSchema}
            handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit}
            isSubmitError={postError || null} />
    )
}
