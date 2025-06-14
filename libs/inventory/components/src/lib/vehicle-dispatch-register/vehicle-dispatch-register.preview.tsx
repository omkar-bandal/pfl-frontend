/* eslint-disable @typescript-eslint/no-explicit-any */
import { vehicleDispatchRegisterStates } from '@prime-fresh/inventory/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { vehicleDispatchRegisterViewConfig } from './vehicle-dispatch-register.view-config';

export const VehicleDispatchRegisterFormPreview = () => {
  const { vehicleDispatchRegisterFormPreview } = useAppSelector(vehicleDispatchRegisterStates);
  return (
    <PreviewContainer title="Vehicle Dispatch Register">
      <DataViewer data={vehicleDispatchRegisterFormPreview || []} config={vehicleDispatchRegisterViewConfig} />
    </PreviewContainer>
  );
};
