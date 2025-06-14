import { Inventory } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FormProducts } from '@prime-fresh/common_api';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { formatCurrency, ObjectViewerConfig } from '@prime-fresh/ui_shared';

export const dcTypeCustomerViewConfig: ObjectViewerConfig = {
  sections: [
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
        {
          key: 'poNumber',
          label: 'PO Number',
          render: (value: string) =>
            value ? (
              <Typography variant="body1" component="span">
                {value.toUpperCase()}
              </Typography>
            ) : (
              ''
            ),
        },
        { key: 'customerName', label: 'Customer Name' },
        { key: 'fromLocation', label: 'From Location' },
      ],
      gridColumns: 3,
    },
    {
      title: 'Delivery Challan Products',
      sectionType: 'array',
      icon: <Inventory />,
      fieldArrayName: 'deliveryChallanProducts',
      keyField: 'id',
      fields: [
        {
          key: 'productName',
          label: 'Product',
          width: '25%',
          render: (value: string, item: FormProducts) => (
            <Typography variant="body1" color="text.primary">
              {`${convertInTitleCase(value || '')} ${item.count} ${item.size} ${item.variety}`}
            </Typography>
          ),
        },
        {
          key: 'uom',
          label: 'Unit',
          width: '10%',
        },
        {
          key: 'quantity',
          label: 'Quantity',
          width: '10%',
          render: (value: number) => (value ? value : 0),
        },
        {
          key: 'unitPrice',
          label: 'Unit Price',
          width: '10%',
          render: (value: number) => (value ? formatCurrency(value) : 0),
        },
        {
          key: 'amount',
          label: 'Amount',
          width: '10%',
          render: (value: number) => (value ? formatCurrency(value) : 0),
        },
        {
          key: 'netWeight',
          label: 'Net Weight',
          width: '10%',
          render: (value: number) => (value ? `${value} kg` : 0),
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
  ],
};
