import React from 'react'
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared'
import { returnByCustomerViewConfig } from './return-by-customer.view-config'
import { useAppSelector } from '@prime-fresh/modules';
import { rbcStates } from '@prime-fresh/inventory/modules';

export const ReturnedByCustomerFormPreview = () => {
  const rbcState  = useAppSelector(rbcStates);
  return (
    <PreviewContainer title="Returned By Customer">
      <DataViewer config={returnByCustomerViewConfig || []} data={rbcState || []} />
    </PreviewContainer>
  )
}
