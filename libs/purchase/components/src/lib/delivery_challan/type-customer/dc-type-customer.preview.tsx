import { DataViewer, PreviewContainer } from "@prime-fresh/ui_shared";
import { dcTypeCustomerViewConfig } from "./dc-type-customer.view-config";

export const DCTypeCustomerPreview = () => {
  return (
    <PreviewContainer title="Delivery Challan: Type Customer Preview">
      <DataViewer config={dcTypeCustomerViewConfig} data={[]} />
    </PreviewContainer>
  );
};
