import { DataViewer, PreviewContainer } from "@prime-fresh/ui_shared";
import { aqrViewConfig } from "./aqr.view-config";
import { useAppSelector } from "@prime-fresh/modules";
import { aqrStates } from "@prime-fresh/inventory/modules";

export const AQRFormPreview = () =>{
    const { aqrFormPreview } = useAppSelector(aqrStates);
    return (
        <PreviewContainer title="Arrival Quality Report">
          <DataViewer
            data={aqrFormPreview || []}
            config={aqrViewConfig}
          />
        </PreviewContainer>
      );
}