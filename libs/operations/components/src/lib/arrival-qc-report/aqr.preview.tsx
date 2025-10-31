import { DataViewer, PreviewContainer } from "@prime-fresh/shared/components";
import { aqrViewConfig } from "./aqr.view-config";
import { useAppSelector } from "@prime-fresh/modules";
import { aqrStates } from "@prime-fresh/operations/modules";

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