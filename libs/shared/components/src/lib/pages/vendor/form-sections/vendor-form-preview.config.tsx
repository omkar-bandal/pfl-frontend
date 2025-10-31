import { Address } from '@prime-fresh/services';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { formatDate, SectionConfig } from '../../../components';

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
        key: 'classification',
        label: 'Vendor Classification',
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
        key: 'website',
        label: 'Website',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'officeAddress',
        label: 'Office Address',
        width: 12,
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
    ],
  },
  {
    title: 'Other Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'mainProduct',
        label: 'Main Product To be Supplied',
        width: 4,
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'listOfAllProducts',
        label: 'List of All Products',
        width: 8,
        render: (value: Array<string>) => (value ? value.join(', ') : '-'),
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
      {
        key: 'ifGstnCopy',
        label: 'Is GSTN copy available?',
        render: (value: string) => (value ? (value === 'true' ? 'Yes' : 'No') : 'No'),
      },
      {
        key: 'gstn',
        label: 'GSTN',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        key: 'gstnCopy',
        label: 'GSTN copy attached?',
        render: (value: File) => (value ? value.name : ''),
      },
      {
        key: 'ifPanCardCopy',
        label: 'Is PAN card copy available?',
        render: (value: string) => (value ? (value === 'true' ? 'Yes' : 'No') : 'No'),
      },
      {
        key: 'panNo',
        label: 'PAN Card Number',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        key: 'panCardCopy',
        label: 'Attached PAN card copy',
        render: (value: File) => (value ? value.name : ''),
      },
      {
        key: 'ifMsmeCopy',
        label: 'Is MSME Cert. copy available?',
        render: (value: string) => (value ? (value === 'true' ? 'Yes' : 'No') : 'No'),
      },
      {
        key: 'msmeNo',
        label: 'MSME Number',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        key: 'msmeCopy',
        label: 'Attached MSME cert. copy',
        render: (value: File) => (value ? value.name : ''),
      },
      {
        key: 'tradeLicenseNumber',
        label: 'Trade License Number',
        render: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        key: 'paymentMode',
        label: 'Payment Mode',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'proposedPaymentTerms',
        label: 'Proposed Payment Terms',
        render: (value: number) => (value ? `${value} Days` : '-'),
      },
      {
        key: 'creditTerms',
        label: 'Credit Terms',
        width: 3,
        render: (value: number) => (value ? `${value} Days` : '-'),
      },
      {
        key: 'anyDetailsTeamAndInfra',
        label: 'Any Details Team And Infra',
        width: 9,
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
    ],
  },
  {
    title: 'Sales Contact Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'vendorSaleInfo.contactFName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorSaleInfo.contactMName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorSaleInfo.contactLName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorSaleInfo.directContactNumber',
        label: 'Contact Number',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'vendorSaleInfo.mobileNumber',
        label: 'Contact Number (Alternate)',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'vendorSaleInfo.email',
        label: 'Email',
        render: (value: string) => (value ? value : '-'),
      },
    ],
  },
  {
    title: 'Bank Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'vendorBankDetails.beneficiaryFName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorBankDetails.beneficiaryMName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorBankDetails.beneficiaryLName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorBankDetails.bankName',
        label: 'Bank Name',
        width: 4,
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
       {
        key: 'vendorBankDetails.branchAddress',
        label: 'Bank Address',
        width: 8,
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: 'vendorBankDetails.typeOfAcc',
        label: 'Type of Account',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorBankDetails.ifscCode',
        label: 'IFSC Code',
        render: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        key: 'vendorBankDetails.swiftNo',
        label: 'SWIFT Number',
        render: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        key: 'vendorBankDetails.invoiceCurrency',
        label: 'Invoice Currency',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'vendorBankDetails.cancelledChequeCopy',
        label: 'Cancelled Cheque copy attached?',
        render: (value: File) => (value ? value.name : ''),
      },
    ],
  },
  {
    title: 'References',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: '',
        label: 'Reference 1',
        isHeader: true,
        width: 12,
      },
      {
        key: 'ref1FName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref1MName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref1LName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref1PrimaryCNumb',
        label: 'Contact Number',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref1AltrCNumb',
        label: 'Contact Number (Alternate)',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref1Email',
        label: 'Email',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref1Address',
        label: 'Address',
        width: 12,
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: '',
        label: 'Reference 2',
        isHeader: true,
        width: 12,
      },
      {
        key: 'ref2FName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref2MName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref2LName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'ref2PrimaryCNumb',
        label: 'Contact Number',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref2AltrCNumb',
        label: 'Contact Number (Alternate)',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref2Email',
        label: 'Email',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'ref2Address',
        label: 'Address',
        width: 12,
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
    ],
  },
];
