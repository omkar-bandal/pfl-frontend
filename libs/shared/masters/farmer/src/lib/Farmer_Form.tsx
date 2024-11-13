import { Alertbar, DynamicForm } from '@prime-fresh/ui_shared';
import { FarmerFormFields } from './farmerFormField';
import { ADMIN_ROUTES, PostFarmer, farmerValidationSchema } from '@prime-fresh/admin/modules';
import { useCreateFarmer, ADMIN_API_URL } from '@prime-fresh/admin_api';
import { initValFarmer } from './initValFarmer';
import { useNavigate } from 'react-router-dom';
import { appendFormData } from "@prime-fresh/shared/utils";

export const FarmerForm = () => {
  const navigate = useNavigate();
  // const { openFor } = useAppSelector(formContainerState);

  // const Farmers = useAppSelector(farmersState);

  const { mutateAsync: mutatePost, isSuccess: PostSuccess, isError: PostError, error, isPending, data } = useCreateFarmer(ADMIN_API_URL.POST_FARMER);

  // const { mutate: mutatePatch } = useUpdateFarmer(URLs.UPDATE_FARMER, dataId);

  const handleSubmit = async (values: PostFarmer) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData);
    PostSuccess ? navigate(ADMIN_ROUTES.GET_ALL_FARMERS) : navigate(ADMIN_ROUTES.CREATE_FARMER);
  };
  return (
    <>
      <Alertbar open={isPending || PostError || PostSuccess } error={error} resMessage={data} />
      <DynamicForm<PostFarmer>
        schema={FarmerFormFields()}
        initialValues={initValFarmer}
        validationSchema={farmerValidationSchema}
        handleSubmit={handleSubmit} />
    </>
  )
}

