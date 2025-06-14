import React from 'react';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { dcTypeStockTransferViewConfig } from './dc-type-stock-transfer.view-config';

export const DCTypeStockTransferPreview = () => {
  return (
    <PreviewContainer title="Delivery Challan: Type Stock Transfer Preview">
      <DataViewer config={dcTypeStockTransferViewConfig} data={previewDC || []} />
    </PreviewContainer>
  );
};
