/* eslint-disable @typescript-eslint/no-explicit-any */
import { inwardRegisterStates } from '@prime-fresh/inventory/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, PreviewContainer } from '@prime-fresh/ui_shared';
import { SectionConfig, formatCurrency, formatDate } from "@prime-fresh/ui_shared"
import { Typography } from '@mui/material';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { Inventory, LocalShipping, People } from '@mui/icons-material';
import { FormProducts } from "@prime-fresh/common_api";


export const InwardRegisterFormPreview = () => {
  const { inwardRegisterFormPreview } = useAppSelector(inwardRegisterStates);

  const config: SectionConfig[] = [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 3,
      fields: [
        {
          key: 'inwardType',
          label: 'Inward Type',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'grnNo',
          label: 'Referred GRN',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'deliveryChallanNo',
          label: 'Referred Delivery Challan',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'companyName',
          label: 'Company',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'location',
          label: 'Location',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'batchNo',
          label: 'Batch Number',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'date',
          label: 'Date of Inward',
          render: (value: string) => value ? formatDate(value || '') : '',
        },
      ],
    },
    {
      title: 'Inward Products',
      sectionType: 'array',
      layout: 'table',
      icon: <Inventory />,
      fieldArrayName: 'inwardProducts',
      keyField: 'id',
      fields: [
        {
          key: 'productName',
          label: 'Product',
          width: '25%',
          render: (value: string, item: FormProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div" sx={{ fontWeight: 600 }}>
                {`${convertInTitleCase(value || '')}`}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                {`[Count: ${item?.count || '-'}, Size: ${item?.size || '-'}, Variety: ${item?.variety || '-'}, Origin: ${item?.origin || '-'}]`}
              </Typography>
            </>
          ),
        },
        {
          key: 'uom',
          label: 'Unit',
          width: '10%',
          render: (value: string) => value ?
            (<Typography variant="caption" color="text.primary" component="div">
              {`${convertInTitleCase(value || '')}`}
            </Typography>) : '',
        },
        {
          key: 'quantity',
          label: 'Quantity',
          width: '10%',
        },
        {
          key: 'unitPrice',
          label: 'Unit Price',
          width: '10%',
          render: (value: number) => value ?
            (<Typography variant="caption" color="text.primary" component="div">
              {formatCurrency(value || 0)}
            </Typography>) : 0,
        },
        {
          key: 'amount',
          label: 'Amount',
          width: '10%',
          render: (value: number) => value ?
            (<Typography variant="caption" color="text.primary" component="div">
              {formatCurrency(value || 0)}
            </Typography>) : 0,
        },
        {
          key: 'netWeight',
          label: 'Net Weight',
          width: '10%',
          render: (value: any) => (value ? `${value} Kg` : 0),
        },
      ],
    },
    {
      title: 'Inward Quantity & Cost',
      sectionType: 'object',
      icon: <LocalShipping />,
      fields: [
        {
          key: 'purchasedBy',
          label: 'Purchased By',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'inwardBy',
          label: 'Inward By',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'purchasedQty',
          label: 'Purchased Quantity',
          render: (value: number) => value ? `${value} Kg` : '',
        },
        {
          key: 'inwardQtyInKg',
          label: 'Inward Quantity in Kg',
          render: (value: number) => value ? `${value} Kg` : '',
        },
        {
          key: 'inwardCost',
          label: 'Inward Cost',
          render: (value: number) => value ? formatCurrency(value || 0) : '',
        },
        {
          key: 'remarks',
          label: 'Remarks',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
      ],
      gridColumns: 3,
    },
  ]
  const inwardSourceInfo: SectionConfig = inwardRegisterFormPreview?.source === 'vendor' ? {
    title: 'Vendor Information',
    sectionType: 'object',
    icon: <People />,
    fields: [
      {
        key: 'selectedParty.companyName',
        label: 'Vendor Name',
        render: (value: any) =>
          value ? (
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {convertInTitleCase(value)}
            </Typography>
          ) : null,
      },
      { key: 'selectedParty.category', label: 'Category' },
      { key: 'selectedParty.subcategory', label: 'Subcategory' },
      { key: 'selectedParty.vendorCode', label: 'Vendor Code' },
      { key: 'selectedParty.contactPersonName', label: 'Contact Person' },
      { key: 'selectedParty.officeContactNo', label: 'Phone' },
      { key: 'selectedParty.officeEmail', label: 'Email' },
      {
        key: 'selectedParty.officeAddress',
        label: 'Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
    ],
    gridColumns: 3,
  } : {
    title: 'Farmer Information',
    sectionType: 'object',
    icon: <People />,
    fields: [
      {
        key: 'selectedParty.fullName',
        label: 'Farmer Name',
        render: (value: any) =>
          value ? (
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {convertInTitleCase(value)}
            </Typography>
          ) : null,
      },
      { key: 'selectedParty.farmerCode', label: 'Farmer Code' },
      { key: 'selectedParty.primaryMobileNo', label: 'Phone' },
      { key: 'selectedParty.email', label: 'Email' },
      {
        key: 'selectedParty.residensialAddress',
        label: 'Residensial Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
      {
        key: 'selectedParty.farmAddress',
        label: 'Farm Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
    ],
    gridColumns: 3,
  }
  const inwardPreviewConfig: SectionConfig[] = [...config.slice(0, 1), inwardSourceInfo, ...config.slice(1)]
  return (
    <PreviewContainer title="Inward Register">
      <DataViewer data={inwardRegisterFormPreview || []} config={inwardPreviewConfig} />
    </PreviewContainer>
  );
};
