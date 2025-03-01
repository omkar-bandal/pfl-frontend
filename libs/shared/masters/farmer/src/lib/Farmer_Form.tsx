import { DynamicForm, toast } from '@prime-fresh/ui_shared';
import { FarmerFormFields } from './farmerFormField';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { useCreateFarmer, ADMIN_API_URL, PostFarmer } from '@prime-fresh/admin_api';
import { initValFarmer } from './initValFarmer';
import { useNavigate } from 'react-router-dom';
import { farmerValidationSchema } from './farmer.schema';
import { appendFormData } from '@prime-fresh/shared/modules';

export const FarmerCreateForm = () => {
  const navigate = useNavigate();
  // const { openFor } = useAppSelector(formContainerState);

  // const Farmers = useAppSelector(farmersState);

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateFarmer(ADMIN_API_URL.POST_FARMER);

  // const { mutate: mutatePatch } = useUpdateFarmer(URLs.UPDATE_FARMER, dataId);

  const handleSubmit = async (values: PostFarmer) => {
    console.log(values);
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast(postRes ? postRes.message : "Farmer created successfully !!!");
      setTimeout(() => {
        navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
      }, 2000);
    }).catch(() => {
      toast(postError ? postError.message : "Error while creating farmer data");
    })
  };
  return (
    <DynamicForm<PostFarmer>
      schema={FarmerFormFields()}
      initialValues={initValFarmer}
      validationSchema={farmerValidationSchema}
      handleSubmit={handleSubmit} />
  )
}
