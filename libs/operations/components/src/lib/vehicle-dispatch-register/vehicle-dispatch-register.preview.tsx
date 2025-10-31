/* eslint-disable @typescript-eslint/no-explicit-any */
import { vehicleDispatchRegisterStates } from '@prime-fresh/operations/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/shared/components';
import { vehicleDispatchRegisterViewConfig } from './vehicle-dispatch-register.view-config';

export const VehicleDispatchRegisterFormPreview = () => {
  const { vehicleDispatchRegisterFormPreview } = useAppSelector(vehicleDispatchRegisterStates);
  return (
    <PreviewContainer title="Vehicle Dispatch Register">
      <DataViewer data={vehicleDispatchRegisterFormPreview || []} config={vehicleDispatchRegisterViewConfig} />
    </PreviewContainer>
  );
};
