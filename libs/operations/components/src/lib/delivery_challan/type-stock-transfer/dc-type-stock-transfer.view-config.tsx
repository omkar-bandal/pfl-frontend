import { Inventory } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { formatCurrency, SectionConfig } from '@prime-fresh/shared/components';

export const dcTypeStockTransferViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    fields: [
      {
        key: 'companyName',
        label: 'Company',
        render: (value: string) =>
          value ? (
            <Typography variant="body1" component="span">
              {convertInTitleCase(value)}
            </Typography>
          ) : (
            ''
          ),
      },
      {
        key: 'grnNo',
        label: 'GRN Number',
        render: (value: string) =>
          value ? (
            <Typography variant="body1" component="span">
              {value.toUpperCase()}
            </Typography>
          ) : (
            ''
          ),
      },
      { key: 'fromLocation', label: 'From Location' },
      { key: 'toLocation', label: 'To Location' },
    ],
    gridColumns: 3,
  },
  {
    title: 'Delivery Challan Products',
    sectionType: 'array',
    layout: 'grid',
    gridColumns: 5,
    icon: <Inventory />,
    fieldArrayName: 'deliveryChallanProducts',
    keyField: 'id',
    fields: [
      {
        key: 'productName',
        label: 'Product',
        render: (value: string) => (
          <Typography variant="body2" color="text.primary" sx={{ fontWeigt: 700 }}>
            {convertInTitleCase(value)}
          </Typography>
        ),
      },
      {
        key: 'saleUoM',
        label: 'Unit',
      },
      {
        key: 'quantity',
        label: 'Quantity',
        render: (value: number) => (value ? value : 0),
      },
      {
        key: 'unitPrice',
        label: 'Unit Price',
        render: (value: number) => (value ? formatCurrency(value) : 0),
      },
      {
        key: 'amount',
        label: 'Amount',
        render: (value: number) => (value ? formatCurrency(value) : 0),
      },
      {
        key: 'grossWeight',
        label: 'Gross Weight',
        render: (value: number) => (value ? `${value} kg` : 0),
      },
      {
        key: 'netWeight',
        label: 'Net Weight',
        render: (value: number) => (value ? `${value} kg` : 0),
      },
      {
        key: 'packagingMaterial',
        label: 'Packaging Material',
      },
      {
        key: 'packagingMaterialUoM',
        label: 'Packaging Material UoM',
      },
      {
        key: 'packagingMaterialQuantity',
        label: 'Packaging Material Quantity',
      },
      {
        key: 'packagingMaterialUnitPrice',
        label: 'Packaging Material Unit Price',
      },
      {
        key: 'packagingMaterialAmount',
        label: 'Packaging Material Amount',
      },
      {
        key: 'packagingMaterialTotalWeight',
        label: 'Packaging Material Total Weight',
      },
    ],
  },
  {
    title: 'Total Quantity & Amount',
    sectionType: 'object',
    fields: [
      { key: 'netProductWeight', label: 'Product Net Weight' },
      { key: 'totalProductAmount', label: 'Total Amount of Products' },
      { key: 'netPackagingMaterialWeight', label: 'Packaging Material Net Weight' },
      { key: 'totalPackagingMaterialAmount', label: 'Total Amount of Packaging Material' },
      { key: 'totalAmtInWords', label: 'Product Total Amount in Words' },
    ],
    gridColumns: 4,
  },
  {
    title: 'Driver Details',
    sectionType: 'object',
    fields: [
      {
        key: 'driverName',
        label: 'Driver Name',
        render: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        key: 'licenseNo',
        label: 'License Number',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        key: 'contactNo',
        label: 'Contact Number',
        render: (value: string) => (value ? value : ''),
      },
      {
        key: 'altContactNo',
        label: 'Alternate Contact Number',
        render: (value: string) => (value ? value : ''),
      },
      {
        key: 'vehicleNo',
        label: 'Vehicle Number',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
    ],
    gridColumns: 2,
  },
]