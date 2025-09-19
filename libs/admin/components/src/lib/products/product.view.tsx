/* eslint-disable @typescript-eslint/no-explicit-any */
import {ShoppingBag } from '@mui/icons-material';
import { Box, LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import {
  useGetProductClassificationById,
  useGetProductById,
  useGetProductCategoryById,
  useGetProductSubcategoryById,
  useGetUOMById,
} from '@prime-fresh/admin/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, PageTitle, SectionConfig } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';

export const ViewProduct = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { id } = useParams<{ id: string }>();
  const { data: Product, isLoading } = useGetProductById(id as string);
  const product = Product?.data ? Product.data : null;
  const { data: clas } = useGetProductClassificationById(product?.classification || '');
  const classification = clas?.data ? clas.data.name : null;
  const { data: cat } = useGetProductCategoryById(product?.category || '');
  const category = cat?.data ? cat.data.name : null;
  const { data: subcat } = useGetProductSubcategoryById(product?.subcategory || '');
  const subcategory = subcat?.data ? subcat.data.name : null;
  const { data: uom } = useGetUOMById(product?.uom || '');
  const selectedUOM = uom?.data ? uom.data.unit : null;
  console.log(Product);
  
  const productData = {
    ...product,
    classification: classification || '',
    category: category || '',
    subcategory: subcategory || '',
    uom: selectedUOM || '',
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
  
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <PageTitle pagetitle="Product" />
      <DataViewer data={productData} config={productViewConfig} />
    </Box>
  );
};
