import { useAppSelector } from '@prime-fresh/modules';
import { lpVoucherState } from '@prime-fresh/operations/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, formatCurrency, formatDate, PreviewContainer, SectionConfig } from '@prime-fresh/shared/components';

export const LPVoucherPreview = () => {
  const { lpVoucherFormPreview } = useAppSelector(lpVoucherState);
  const lpVoucherPreviewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 3,
      fields: [
        {
          key: 'grnNo',
          label: 'Refered GRN',
          render: (value: string) => (value ? value.toUpperCase() : '-'),
        },
        {
          key: 'companyName',
          label: 'Company Name',
        },
        {
          key: 'location',
          label: 'Location',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'debitCreditTo',
          label: 'Debit / Credit To',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'payReceivedFrom',
          label: 'Pay To / Received From',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
      ],
    },
    {
      sectionType: 'object',
      layout: 'table',
      tableHeadings: ['Titles', 'Values'],
      fields: [
        {
          key: 'noOfLabours',
          label: 'No of Labors',
          render: (value: string) => (value ? value : 0),
        },
        {
          key: 'loadingDate',
          label: 'Day of Loading/Unloading',
          render: (value: string) => (value ? formatDate(value || '') : '-'),
        },
        {
          key: 'ratePerLabour',
          label: 'Per Day of Labour',
          render: (value: string) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        {
          key: 'paymentMode',
          label: 'Payment Mode',
          render: (value: string) => (value ? value.toUpperCase() : '-'),
        },
        {
          key: 'kyc',
          label: 'Is Labour KYC Attached ? (If available) ',
          render: (value: boolean) => (value === true ? 'Yes' : 'No'),
        },
        {
          key: 'contactNo',
          label: 'Contact No',
          render: (value: string) => (value ? value : '-'),
        },
        {
          key: 'altContactNo',
          label: 'Alternate Contact No',
          render: (value: string) => (value ? value : '-'),
        },
        {
          key: 'products',
          label: 'Products',
          render: (value: string) => (value ? value : '-'),
        },
      ],
    },
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 3,
      fields: [
        {
          key: 'totalAmt',
          label: 'Total Amount',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        {
          key: 'amtWords',
          label: 'Amount In Words',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'receiverName',
          label: 'Receiver Name',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'remark',
          label: 'Remark',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
      ],
    },
  ];

  return (
    <PreviewContainer title="Labour Payment Voucher">
      <DataViewer config={lpVoucherPreviewConfig} data={lpVoucherFormPreview ? lpVoucherFormPreview : []} />
    </PreviewContainer>
  );
};
