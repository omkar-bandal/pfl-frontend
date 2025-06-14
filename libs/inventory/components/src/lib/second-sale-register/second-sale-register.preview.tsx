/* eslint-disable @typescript-eslint/no-explicit-any */
import { secondSaleRegisterStates } from '@prime-fresh/inventory/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { secondSaleRegisterViewConfig } from './second-sale-register.view-config';

export const SecondSaleRegisterFormPreview = () => {
  const { secondSaleRegisterFormPreview } = useAppSelector(secondSaleRegisterStates);
  return (
    <PreviewContainer title="Second Sale Register">
      <DataViewer data={secondSaleRegisterFormPreview || []} config={secondSaleRegisterViewConfig} />
    </PreviewContainer>
  );
};
