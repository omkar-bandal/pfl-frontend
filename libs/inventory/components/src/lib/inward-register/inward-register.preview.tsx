/* eslint-disable @typescript-eslint/no-explicit-any */
import { inwardRegisterStates } from '@prime-fresh/inventory/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { inwardRegisterViewConfig } from './inward-register.view-config';

export const InwardRegisterFormPreview = () => {
  const { inwardRegisterFormPreview } = useAppSelector(inwardRegisterStates);
  return (
    <PreviewContainer title="Inward Register">
      <DataViewer data={inwardRegisterFormPreview || []} config={inwardRegisterViewConfig} />
    </PreviewContainer>
  );
};
