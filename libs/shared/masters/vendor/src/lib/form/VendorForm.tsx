// import React from 'react'
import vendorValidationSchema from './vendor.schema';
import { DynamicForm, Notification } from '@prime-fresh/ui_shared';
import { VendorFormFields } from './vendorFormField';
import { PostVendor, useCreateVendor } from '@prime-fresh/admin_api';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL } from '@prime-fresh/admin_api'
import { initValVendor } from './initValVendor';
import { appendFormData } from '@prime-fresh/shared/utils';
import { useDispatch } from 'react-redux';
import { showNotification } from '@prime-fresh/modules';

export const VendorForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { openFor, dataId } = useAppSelector(formContainerState);

    // const Vendors = useAppSelector(vendorsState);

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateVendor(ADMIN_API_URL.POST_VENDOR);

    // const { mutate: mutatePatch } = useUpdateVendor(URLs.UPDATE_CUSTOMER, dataId);

    // const VendorInitValue = openFor === 'update' && dataId ? Vendors.find(item => item.id === dataId) : initValVendor;

    const handleSubmit = async (values: PostVendor) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Vendor created successfully !!!" }));
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
        });
    };

    // const handleUpdate = (values: Vendor) => {
    //     console.log(values);
    //     // mutatePatch(values);
    // };

    return (
        <>
            <Notification />
            <DynamicForm<PostVendor>
                schema={VendorFormFields()}
                initialValues={initValVendor}
                validationSchema={vendorValidationSchema}
                handleSubmit={handleSubmit} />
        </>
    )
}
