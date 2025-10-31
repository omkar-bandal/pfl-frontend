import { packagingMaterialDataStates } from '@prime-fresh/admin/modules';
import { useAppSelector } from '@prime-fresh/modules';
import {
  DataViewer,
  ObjectViewerConfig,
  PreviewContainer,
} from '@prime-fresh/shared/components';

export const PackagingMaterialPreview = () => {
  const packagingMaterialPreview = useAppSelector(packagingMaterialDataStates);
  const packagingMaterialPreviewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        layout: 'list',
        fields: [
          { key: 'packagingMaterialName', label: 'Packaging Material Name' },
          { key: 'useFor', label: 'Packaging Material Used For' },
          {
            key: 'packagingMaterialWeight',
            label: 'Packaging Material Weight',
          },
          { key: 'containsQuantity', label: 'Can Contain Quantity' },
          { key: 'uom', label: 'Reference UoM' },
          { key: 'packagingMaterialDescription', label: 'Description' },
        ],
      },
    ],
  };
  return (
    <PreviewContainer title="Packaging Material">
      <DataViewer
        config={packagingMaterialPreviewConfig}
        data={packagingMaterialPreview}
      />
    </PreviewContainer>
  );
};
