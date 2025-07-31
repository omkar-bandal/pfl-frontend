import React from 'react';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { dcTypeStockTransferViewConfig } from './dc-type-stock-transfer.view-config';
import { useAppSelector } from '@prime-fresh/modules';
import { dcState } from '@prime-fresh/purchase/modules';

export const DCTypeStockTransferPreview = () => {
  const { previewDCTypeStockTransfer } = useAppSelector(dcState)
  return (
    <PreviewContainer title="Delivery Challan: Type Stock Transfer Preview">
      <DataViewer config={dcTypeStockTransferViewConfig} data={previewDCTypeStockTransfer || []} />
    </PreviewContainer>
  );
};
