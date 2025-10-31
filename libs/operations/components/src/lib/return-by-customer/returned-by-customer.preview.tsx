import React from 'react'
import { DataViewer, PreviewContainer } from '@prime-fresh/shared/components'
import { returnByCustomerViewConfig } from './return-by-customer.view-config'
import { useAppSelector } from '@prime-fresh/modules';
import { rbcStates } from '@prime-fresh/operations/modules';

export const ReturnedByCustomerFormPreview = () => {
  const rbcState  = useAppSelector(rbcStates);
  return (
    <PreviewContainer title="Returned By Customer">
      <DataViewer config={returnByCustomerViewConfig || []} data={rbcState || []} />
    </PreviewContainer>
  )
}
