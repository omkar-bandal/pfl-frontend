import { useNavigate, useParams } from "react-router-dom";
import { OfficesFormFields } from "./officesFormFields";
import { ADMIN_ROUTES, formContainerState, officeValidationSchema } from "@prime-fresh/admin/modules";
import { DynamicForm, generateInitialValues, toast } from "@prime-fresh/ui_shared";
import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_API_URL, PostOffices, useCreateOffice, useGetAOffice, useUpdateOffice } from "@prime-fresh/admin_api";
import { Box, LinearProgress } from "@mui/material";
import { appendFormData } from "@prime-fresh/shared/utils";

export const OfficeForm = () => {
    const { id, type } = useParams<{ id: string, type: string }>();
    const officeId = id ? id : '';
    const officeType = type ? type : '';

    //openFor state to knonw for what action form is open: Create / Update
    //dataId if openFor state is 'update' then to get Id of data to be update
    const { openFor } = useAppSelector(formContainerState);

    const GetURL = officeType === 'CORPORATE_OFFICE' ? ADMIN_API_URL.GET_A_CORP_OFFICES : ADMIN_API_URL.GET_A_REGI_OFFICES;
    const CreateURL = officeType === 'CORPORATE_OFFICE' ? ADMIN_API_URL.POST_CORP_OFFICES : ADMIN_API_URL.POST_REGI_OFFICES;
    const UpdateURL = officeType === 'CORPORATE_OFFICE' ? ADMIN_API_URL.UPDATE_CORP_OFFICES : ADMIN_API_URL.UPDATE_REGI_OFFICES;
    const GetAllRoutes = officeType === 'CORPORATE_OFFICE' ? ADMIN_ROUTES.LOCATIONS_CORPORATE_OFFICE : ADMIN_ROUTES.LOCATIONS_REGISTERED_OFFICE;

    const { data, isLoading } = useGetAOffice(GetURL, officeId);
    const officeData = data ? data : generateInitialValues(OfficesFormFields(openFor).fields);

    const navigate = useNavigate();

    //To create new office Data
    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateOffice(CreateURL);
    const handleCreate = (values: PostOffices) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Office location created successfully.")
            setTimeout(() => {
                navigate(GetAllRoutes);
            }, 2500);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while creating office data.");
        });
    }

    //To update existing office Data
    const { mutateAsync: mutatePatch, data: patchRes, error: patchError } = useUpdateOffice(UpdateURL, officeId);
    const handleUpdate = (values: PostOffices) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(patchRes ? patchRes.message : "Office location updated successfully");
            setTimeout(() => {
                navigate(GetAllRoutes);
            }, 2500);
        }).catch(() => {
            toast.error(patchError ? patchError.message : "Error while updating office data.");
        });
    }

    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            (
                <DynamicForm<PostOffices>
                    schema={OfficesFormFields(openFor)}
                    initialValues={openFor === "create" ? generateInitialValues(OfficesFormFields(openFor).fields) : officeData}
                    validationSchema={officeValidationSchema}
                    handleSubmit={openFor === 'update' ? handleUpdate : handleCreate} />
            )
    )
}