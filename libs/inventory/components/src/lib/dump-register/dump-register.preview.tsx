import { dumpRegisterStates } from "@prime-fresh/inventory/modules"
import { useAppSelector } from "@prime-fresh/modules"
import { DataViewer, PreviewContainer } from "@prime-fresh/ui_shared"
import { dumpRegisterViewConfig } from "./dump-register.view-config"

export const DumpRegisterFormPreview = () => {
    const {dumpRegisterFormPreview} = useAppSelector(dumpRegisterStates);
    
    return(
        <PreviewContainer title="Dump Register">
        <DataViewer
          data={dumpRegisterFormPreview || []}
          config={dumpRegisterViewConfig}
        />
      </PreviewContainer>
    )
}