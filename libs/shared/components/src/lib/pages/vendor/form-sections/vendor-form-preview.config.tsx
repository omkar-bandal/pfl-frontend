import { Address } from "@prime-fresh/common_api";
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";
import { formatDate, SectionConfig } from "@prime-fresh/ui_shared";

export const VendorFormPreviewConfig: SectionConfig[] = [
  {
    title: 'Primary Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'companyName',
        label: 'Company Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'category',
        label: 'Vendor Category',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'subcategory',
        label: 'Vendor Subcategory',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'inFandVBusinessSince',
        label: 'In F&V Business Since',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'dateOfIncorporation',
        label: 'Date of Incorporation',
        render: (value: string) => (value ? formatDate(value) : '-'),
      },
      {
        key: 'officeContactNo',
        label: 'Office Contact No',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'email',
        label: 'Office Email',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'officeAddress',
        label: 'Office Address',
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: 'website',
        label: 'Website',
        render: (value: string) => (value ? value : '-'),
      },
    ],
  },
  {
    title: 'Other Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 1,
    fields: [
      {
        key: 'mainProduct',
        label: 'Main Product To be Supplied',
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: 'listOfAllProducts',
        label: 'List of All Products',
        render: (value: Array<string>) => (value ? value.join(',') : '-'),
      },
      {
        key: 'dispatchCenter',
        label: 'Dispatch Center',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
    },
    {
        key: 'warehouseLocations',
        label: 'Warehouse Location',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
    },
    {
        key: 'packingCenterLocation',
        label: 'Packing Center',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
    ],
  },

];
