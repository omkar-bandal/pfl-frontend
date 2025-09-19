import { Box, useMediaQuery, useTheme } from '@mui/material';
import { DataViewer, SectionConfig } from '@prime-fresh/ui_shared';
import { useFormikContext } from 'formik';
import { IProduct } from '@prime-fresh/admin_api';
import { ShoppingBag } from '@mui/icons-material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { useGetProductCategoryById, useGetProductClassificationById, useGetProductSubcategoryById, useGetUOMById } from '@prime-fresh/admin/modules';

export const ProductFormPreview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { values } = useFormikContext<IProduct>();
  const {data: classification} = useGetProductClassificationById(values.classification || '');
  const {data: category} = useGetProductCategoryById(values.category || '');
  const {data: subcategory} = useGetProductSubcategoryById(values.subcategory || '');
  const {data: uom} = useGetUOMById(values.uom || '');

  const previewData = {
    ...values,
    classification: classification?.data?.name || '',
    category: category?.data?.name || '',
    subcategory: subcategory?.data?.name || '',
    uom: uom?.data?.unit || '',
  }

  const productViewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      title: `Product Details`,
      layout: 'grid',
      gridColumns: 3,
      icon: <ShoppingBag />,
      fields: [
        {
          key: 'name',
          label: 'Product Name',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'prefix',
          label: 'Prefix',
          render: (value: string) => (value ? value.toUpperCase() : ''),
        },
        {
          key: 'uom',
          label: 'UoM',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'classification',
          label: 'Classification',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'category',
          label: 'Category',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'subcategory',
          label: 'Subcategory',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'description',
          label: 'Description',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
      ],
    },
    {
      sectionType: 'array',
      layout: isMobile ? 'grid' : 'table',
      fieldArrayName: 'variant',
      fields: [
        { key: 'count', label: 'Count', width: '15%' },
        { key: 'size', label: 'Size', width: '15%' },
        { key: 'origin', label: 'Origin', width: '15%' },
        { key: 'variety', label: 'Variety', width: '15%' },
        { key: 'brand', label: 'Brand', width: '15%' },
        {
          key: 'thresholdStock',
          label: 'Threshold Qty',
          width: '25%',
          render: (value: any) => (value ? `${value} Kg` : ''),
        },
      ],
    },
    {
      sectionType: 'array',
      layout: isMobile ? 'grid' : 'table',
      fieldArrayName: 'qualityParameters',
      fields: [
        { key: 'type', label: 'Type', width: '20%' },
        { key: 'name', label: 'Name', width: '80%' },
      ],
    },
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 1,
      fields: [
        {
          key: 'image',
          label: 'Product Image',
          render: (value: string | File) => {
            const url = typeof value === 'string' ? value : URL.createObjectURL(value);
            return (
              <Box flex={1}>
                <img src={url} alt=" product photo" style={{width: 200 , height: 200}} />
              </Box>
            );
          },
        },
      ],
    },
  ];

  return (
    <Box flex={1}>
      <DataViewer data={previewData} config={productViewConfig} />
    </Box>
  );
};
