import { DataViewer, PreviewContainer } from "@prime-fresh/ui_shared";
import { dcTypeCustomerViewConfig } from "./dc-type-customer.view-config";
import { useAppSelector } from "@prime-fresh/modules";
import { dcState } from "@prime-fresh/purchase/modules";

export const DCTypeCustomerPreview = () => {
  const { previewDCTypeCustomer } = useAppSelector(dcState)
  return (
    <PreviewContainer title="Delivery Challan: Type Customer Preview">
      <DataViewer config={dcTypeCustomerViewConfig} data={previewDCTypeCustomer || []} />
    </PreviewContainer>
  );
};
