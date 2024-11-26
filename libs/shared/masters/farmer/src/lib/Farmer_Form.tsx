import { DynamicForm, Notification } from '@prime-fresh/ui_shared';
import { FarmerFormFields } from './farmerFormField';
import { ADMIN_ROUTES, farmerValidationSchema } from '@prime-fresh/admin/modules';
import { useCreateFarmer, ADMIN_API_URL, PostFarmer } from '@prime-fresh/admin_api';
import { initValFarmer } from './initValFarmer';
import { useNavigate } from 'react-router-dom';
import { appendFormData } from "@prime-fresh/shared/utils";
import { useDispatch } from 'react-redux';
import { showNotification } from '@prime-fresh/modules';

export const FarmerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { openFor } = useAppSelector(formContainerState);

  // const Farmers = useAppSelector(farmersState);

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateFarmer(ADMIN_API_URL.POST_FARMER);

  // const { mutate: mutatePatch } = useUpdateFarmer(URLs.UPDATE_FARMER, dataId);

  const handleSubmit = async (values: PostFarmer) => {
    console.log(values);
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Farmer created successfully !!!" }));
      setTimeout(() => {
        navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
      }, 2000);
    }).catch(() => {
      dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
    })
  };
  return (
    <>
      <Notification />
      <DynamicForm<PostFarmer>
        schema={FarmerFormFields()}
        initialValues={initValFarmer}
        validationSchema={farmerValidationSchema}
        handleSubmit={handleSubmit} />
    </>
  )
}

