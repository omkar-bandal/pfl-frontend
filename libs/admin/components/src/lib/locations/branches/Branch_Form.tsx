import { useNavigate, useParams } from "react-router-dom";
import { BranchesFormFields } from "./branchesFormFields";
import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, branchesDataState, formContainerState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useCreateBranches, useUpdateBranch, PostBranches } from "@prime-fresh/admin_api";
import { DynamicForm, generateInitialValues } from "@prime-fresh/ui_shared";


export const BranchForm = () => {
    const { id, branchType } = useParams<{ id: string, branchType: string }>();
    const branchId = id ? id : '';
    console.log(branchId);
    console.log(branchType);
    const navigate = useNavigate()
    //openFor state to knonw for what action form is open: Create / Update
    //dataId if openFor state is 'update' then to get Id of data to be update
    const { openFor } = useAppSelector(formContainerState);

    //Offices: state containing all offices data
    const { branches } = useAppSelector(branchesDataState);

    //Initial value for office form: Empty field if openFor state is 'create' or populated if openFor state is 'update'
    const branchesInitValue = openFor === 'update' && branchId ? branches.find(item => item.id === branchId) : generateInitialValues(BranchesFormFields().fields);

    //To create new office Data
    const { mutateAsync: mutatePost, isSuccess } = useCreateBranches(`${ADMIN_API_URL.POST_BRANCH}/${branchType}`);
    const handleCreate = (values: PostBranches) => {
        const formData = new FormData();
        
        mutatePost(values);
        isSuccess && navigate(ADMIN_ROUTES.LOCATIONS_BRANCHES_CC);
        console.log(values);
    }

    //To update existing office Data
    const { mutate: mutatePatch } = useUpdateBranch(`${ADMIN_API_URL.UPDATE_BRANCH}/${branchType}`, branchId);
    const handleUpdate = (values: PostBranches) => {
        mutatePatch(values);
        console.log(values);
    }

    return (
        <DynamicForm<PostBranches>
            schema={BranchesFormFields()}
            initialValues={
                branchesInitValue ? branchesInitValue : generateInitialValues(BranchesFormFields().fields)}
            handleSubmit={openFor === 'update' ? handleUpdate : handleCreate} />
    )
}
