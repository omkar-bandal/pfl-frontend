import { eodReportStates } from '@prime-fresh/operations/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/shared/components';
import { eodReportViewConfig } from './eod-report.view-config';

export const EODReportFormPreview = () => {
  const { eodReportFormPreview } = useAppSelector(eodReportStates);
  return (
    <PreviewContainer title="EOD Report">
      <DataViewer data={eodReportFormPreview || []} config={eodReportViewConfig} />
    </PreviewContainer>
  );
};
