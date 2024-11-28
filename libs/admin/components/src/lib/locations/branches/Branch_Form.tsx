import { useNavigate, useParams } from "react-router-dom";
import { BranchesFormFields } from "./branchesFormFields";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, formContainerState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useCreateBranches, useUpdateBranch, PostBranches, useGetABranch } from "@prime-fresh/admin_api";
import { DynamicForm, generateInitialValues, Notification } from "@prime-fresh/ui_shared";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useDispatch } from "react-redux";
import { Box, LinearProgress } from "@mui/material";

export const BranchForm = () => {
    const { id, branchType } = useParams<{ id: string, branchType: string }>();
    const branchId = id ? id : '';
    const branchtype = branchType ? branchType : '';
    console.log(branchId);
    console.log(branchType);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //openFor state to knonw for what action form is open: Create / Update
    //dataId if openFor state is 'update' then to get Id of data to be update
    const { openFor } = useAppSelector(formContainerState);
    const getBranchUrl = (branchType: string) => {
        if (branchType === "COLLECTION_CENTER") {
            return ADMIN_API_URL.GET_A_CC;
        } else if (branchType === "DISTRIBUTION_CENTER") {
            return ADMIN_API_URL.GET_A_DC;
        } else if (branchType === "SEASONAL_COLLECTION_CENTER") {
            return ADMIN_API_URL.GET_A_SEASONAL_CC;
        } else {
            return ADMIN_API_URL.GET_A_WAREHOUSE;
        }
    }
    const urlBranch = getBranchUrl(branchtype);

    const { data, isLoading } = useGetABranch(urlBranch, branchId)
    const branch = data? data: generateInitialValues(BranchesFormFields().fields);
    
    //Initial value for office form: Empty field if openFor state is 'create' or populated if openFor state is 'update'
    const branchesInitValue = openFor === 'update' && branchId  ? branch : generateInitialValues(BranchesFormFields().fields);

    //To create new office Data
    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateBranches(`${ADMIN_API_URL.POST_BRANCH}/${branchType}`);
    const handleCreate = (values: PostBranches) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Branch location created successfully." }));
            setTimeout(() => {
                navigate(ADMIN_ROUTES.LOCATIONS_BRANCHES_CC);
            }, 2000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
        });;
    }

    //To update existing office Data
    const { mutateAsync: mutatePatch, data: patchRes, error: patchError } = useUpdateBranch(`${ADMIN_API_URL.UPDATE_BRANCH}/${branchType}`, branchId);
    const handleUpdate = (values: PostBranches) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "Branch location updated successfully." }));
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_REGISTERED_OFFICE);
            }, 2000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
        });;
    }

    return (
        <>
            {isLoading ? (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :
                (<DynamicForm<PostBranches>
                    schema={BranchesFormFields()}
                    initialValues={
                        branchesInitValue ? branchesInitValue : generateInitialValues(BranchesFormFields().fields)}
                    handleSubmit={openFor === 'update' ? handleUpdate : handleCreate} />
                )}
            <Notification />
        </>
    )
}
