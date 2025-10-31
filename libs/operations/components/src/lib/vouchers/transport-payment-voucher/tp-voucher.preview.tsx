import { useAppSelector } from '@prime-fresh/modules';
import { tpVoucherState } from '@prime-fresh/operations/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/shared/components';

export const TPVoucherPreview = () => {
  const { tpVoucherFormPreview } = useAppSelector(tpVoucherState);
  const tpVoucherPreviewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 3,
      fields: [
        {
          key: 'grnNo',
          label: 'Refered GRN',
          width: 2,
          render: (value: string) => (value ? value.toUpperCase() : '-'),
        },
        {
          key: 'companyName',
          label: 'Company Name',
          width: 8,
        },
        {
          key: 'location',
          label: 'Location',
          width: 2,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'debitCreditTo',
          label: 'Debit / Credit To',
          width: 6,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'payReceivedFrom',
          label: 'Pay To / Received From',
          width: 6,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'dispatchLocation',
          label: 'Dispatch Location',
          width: 6,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'destinationLocation',
          label: 'Destination Location',
          width: 6,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'products',
          label: 'Products',
          width: 12,
          render: (value: Array<string>) => (value ? value.join(', ') : '-'),
        },
        {
          isHeader: true,
          key: '',
          label: 'Vehicle & Driver Details',
          width: 12,
        },
        {
          key: 'driverName',
          label: 'Driver Name',
          width: 3,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'contactNo',
          label: 'Contact No',
          width: 3,
        },
        {
          key: 'altContactNo',
          label: 'Alternate Contact No',
          width: 3,
        },
        {
          key: 'vehicleNo',
          label: 'Vehicle Number',
          width: 3,
          render: (value: string) => (value ? value.toUpperCase() : '-'),
        },
        {
          key: 'kyc',
          label: 'Is KYC attached? (Driver Lic. / RC Book / PAN)',
          width: 12,
          render: (value: string) => (value === 'true' ? 'Yes' : 'No'),
        },
        {
          isHeader: true,
          key: '',
          label: 'Payment Details',
          width: 12,
        },
        {
          key: 'paymentMode',
          label: 'Payment Mode',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'decidedAmt',
          label: 'Decided Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'actualAmt',
          label: 'Actual Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'advanceAmt',
          label: 'Advanced Paid Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'totalPayableAmt',
          label: 'Total Payable Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'deductionAmt',
          label: 'Any Deduction',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'extraAmt',
          label: 'Any Extra Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'freightAmt',
          label: 'Freight Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'totalAmt',
          label: 'Total Amount',
          render: (value: number) => (value ? `Rs. ${value}` : 0),
        },
        {
          key: 'amtWords',
          label: 'Amount In Words',
          width: 12,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'receiverName',
          label: 'Receiver Name',
          width: 3,
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'remark',
          label: 'Remark',
          width: 9,
        },
      ],
    },
  ];

  return (
    <PreviewContainer title="Transport Payment Voucher">
      <DataViewer config={tpVoucherPreviewConfig} data={tpVoucherFormPreview ? tpVoucherFormPreview : []} />
    </PreviewContainer>
  );
};
