// import React from 'react'
import { useAppSelector } from '@prime-fresh/modules';
import { EmployeeFormFields } from './employeeFormField';
import { employeesState, employeeValidationSchema, formContainerState } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL, PostEmployee, useCreateEmployee, useUpdateEmployee } from '@prime-fresh/admin_api';
import { DynamicForm, generateInitialValues } from '@prime-fresh/ui_shared';


export const EmployeeForm = () => {

    const { openFor, dataId } = useAppSelector(formContainerState);

    const Employees = useAppSelector(employeesState);

    const { mutate: mutatePost } = useCreateEmployee(ADMIN_API_URL.CREATE_EMPLOYEE);

    const { mutate: mutatePatch } = useUpdateEmployee(ADMIN_API_URL.UPDATE_AN_EMPLOYEE, dataId);

    const EmployeeInitValue = openFor === 'update' && dataId ? Employees.find(item => item.id === dataId) : generateInitialValues(EmployeeFormFields().fields);

    const handleSubmit = (values: PostEmployee) => {
        mutatePost(values);
        console.log(values);
    };

    const handleUpdate = (values: PostEmployee) => {
        console.log(values);
        mutatePatch(values);
    };

    return (
        <DynamicForm<PostEmployee>
            schema={EmployeeFormFields()}
            initialValues={
                EmployeeInitValue ? EmployeeInitValue : generateInitialValues(EmployeeFormFields().fields)
            }
            validationSchema={employeeValidationSchema}
            handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit} />
    )
}
