import React from 'react';
import { DataViewer, PreviewContainer } from '@prime-fresh/shared/components';
import { dcTypeStockTransferViewConfig } from './dc-type-stock-transfer.view-config';
import { useAppSelector } from '@prime-fresh/modules';
import { dcState } from '@prime-fresh/operations/modules';

export const DCTypeStockTransferPreview = () => {
  const { previewDCTypeStockTransfer } = useAppSelector(dcState)
  return (
    <PreviewContainer title="Delivery Challan: Type Stock Transfer Preview">
      <DataViewer config={dcTypeStockTransferViewConfig} data={previewDCTypeStockTransfer || []} />
    </PreviewContainer>
  );
};
