import { ShoppingBag } from '@mui/icons-material';
import { Box } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { SectionConfig } from '../../../components';

export const productViewConfig: SectionConfig[] = [
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
    layout: 'grid',
    gridColumns: 3,
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
    layout: 'table',
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
        render: (value: any) =>
          value ? (
            <Box flex={1}>
              <img src={URL.createObjectURL(value)} alt=" product photo" />
            </Box>
          ) : (
            '-'
          ),
      },
    ],
  },
];
