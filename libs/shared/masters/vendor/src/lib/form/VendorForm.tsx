// import React from 'react'
import vendorValidationSchema from './vendor.schema';
import { DynamicForm, toast } from '@prime-fresh/ui_shared';
import { VendorFormFields } from './vendorFormField';
import { PostVendor, useCreateVendor, useGetAllVendorCat, useGetAllVendorSubCat } from '@prime-fresh/admin_api';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL } from '@prime-fresh/admin_api'
import { initValVendor } from './initValVendor';
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils';

export const VendorForm = () => {
    const navigate = useNavigate();

    const { data: VendorCat } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCategories = VendorCat ? mapToValueLabelArray(VendorCat, 'id', 'name') : [];

    const { data: VendorSubcat } = useGetAllVendorSubCat(ADMIN_API_URL.GET_ALL_VENDOR_SUBCAT);
    const VendorSubcategories = VendorSubcat ? mapToValueLabelArray(VendorSubcat, 'id', 'name') : [];

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateVendor(ADMIN_API_URL.POST_VENDOR);

    const handleSubmit = async (values: PostVendor) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Vendor created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2400);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while registering vendor.");
        });
    };


    return (
        <DynamicForm<PostVendor>
            schema={VendorFormFields(vendorCategories, VendorSubcategories)}
            initialValues={initValVendor}
            validationSchema={vendorValidationSchema}
            handleSubmit={handleSubmit} />
    )
}
