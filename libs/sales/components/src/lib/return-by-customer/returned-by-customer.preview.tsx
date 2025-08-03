import React from 'react'
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared'
import { returnByCustomerViewConfig } from './return-by-customer.view-config'
import { useSelector } from 'react-redux';
import { rbcFormPreviewStates } from '@prime-fresh/sales/modules';

export const ReturnedByCustomerFormPreview = () => {
  const rbcState  = useSelector(rbcFormPreviewStates);
  return (
    <PreviewContainer title="Returned By Customer">
      <DataViewer config={returnByCustomerViewConfig || []} data={rbcState || []} />
    </PreviewContainer>
  )
}
