import { useParams } from "react-router-dom";
import { OfficesFormFields } from "./officesFormFields";
import { formContainerState, officesDataState, officeValidationSchema } from "@prime-fresh/admin/modules";
import { DynamicForm, generateInitialValues } from "@prime-fresh/ui_shared";
import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_API_URL, PostOffices, useCreateOffice, useUpdateOffice } from "@prime-fresh/admin_api";

export const OfficeForm = () => {
    // const navigate = useNavigate();
    const { id, officeType } = useParams<{ id: string, officeType: string }>();
    const officeId = id ? id : '';
    console.log('Office Id: ', officeId, 'Office Type: ', officeType);

    //openFor state to knonw for what action form is open: Create / Update
    //dataId if openFor state is 'update' then to get Id of data to be update
    const { openFor } = useAppSelector(formContainerState);

    //Offices: state containing all offices data
    const { offices } = useAppSelector(officesDataState);

    //Initial value for office form: Empty field if openFor state is 'create' or populated if openFor state is 'update'
    const officesInitValue = openFor === 'update' && officeId ? offices.find(item => item.id === officeId) : generateInitialValues(OfficesFormFields().fields);

    //To create new office Data
    const { mutateAsync: mutatePost, isSuccess: PostSuccess, isError: PostError } = useCreateOffice(ADMIN_API_URL.POST_CORP_OFFICES);
    const handleCreate = (values: PostOffices) => {
        mutatePost(values);
        // PostSuccess && officeType === OfficeType[0] ? navigate(ROUTES.GET_REGISTERED_OFFICE) : navigate(ROUTES.GET_CORPORATE_OFFICE);
        console.log(values);
    }

    //To update existing office Data
    const { mutateAsync: mutatePatch, isSuccess: PatchSuccess, isError: PatchError } = useUpdateOffice(ADMIN_API_URL.UPDATE_CORP_OFFICES, officeId);
    const handleUpdate = (values: PostOffices) => {
        mutatePatch(values);
        // PatchSuccess && officeType === OfficeType[0] ? navigate(ROUTES.GET_REGISTERED_OFFICE) : navigate(ROUTES.GET_CORPORATE_OFFICE);
        console.log(values);
    }
    
    return (
            <DynamicForm<PostOffices>
                schema={OfficesFormFields()}
                initialValues={
                    officesInitValue ? officesInitValue : generateInitialValues(OfficesFormFields().fields)}
                validationSchema={officeValidationSchema}
                handleSubmit={openFor === 'update' ? handleUpdate : handleCreate} />
    )
}