// import React from 'react'
// import { useAppSelector } from '../../hooks';
// import { formContainerState, vendorsState } from '../../store/slice';
import vendorValidationSchema from './vendor.schema';
import { Alertbar, DynamicForm } from '@prime-fresh/ui_shared';
import { VendorFormFields } from './vendorFormField';
import { PostVendor, useCreateVendor } from '@prime-fresh/admin_api';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL } from '@prime-fresh/admin_api'
import { initValVendor } from './initValVendor';
import { appendFormData } from '@prime-fresh/shared/utils';

export const VendorForm = () => {
    const navigate = useNavigate();
    // const { openFor, dataId } = useAppSelector(formContainerState);

    // const Vendors = useAppSelector(vendorsState);

    const { isSuccess: PostSuccess, mutateAsync: mutatePost, isError: PostError, isPending, error, data } = useCreateVendor(ADMIN_API_URL.POST_VENDOR);

    // const { mutate: mutatePatch } = useUpdateVendor(URLs.UPDATE_CUSTOMER, dataId);

    // const VendorInitValue = openFor === 'update' && dataId ? Vendors.find(item => item.id === dataId) : initValVendor;

    const handleSubmit = async (values: PostVendor) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData);
        PostSuccess ? navigate(ADMIN_ROUTES.GET_ALL_VENDORS) : navigate(ADMIN_ROUTES.CREATE_VENDOR);
    };

    // const handleUpdate = (values: Vendor) => {
    //     console.log(values);
    //     // mutatePatch(values);
    // };

    return (
        <>
            <Alertbar open={isPending || PostError || PostSuccess} error={error} resMessage={data} />
            <DynamicForm<PostVendor>
                schema={VendorFormFields()}
                initialValues={initValVendor}
                validationSchema={vendorValidationSchema}
                handleSubmit={handleSubmit} />
        </>
    )
}
