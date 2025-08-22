/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@prime-fresh/modules';
import { mcVoucherState } from '@prime-fresh/purchase/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, formatCurrency, SectionConfig, PreviewContainer } from '@prime-fresh/ui_shared';

export const MCVoucherPreview = () => {
    const { mcVoucherFormPreview } = useAppSelector(mcVoucherState);
    const mcVoucherPreviewConfig: SectionConfig[] = [
        {
            sectionType: "object",
            layout: "grid",
            gridColumns: 2,
            fields: [
                {
                    key: "grnNo",
                    label: "Refered GRN",
                    render: (value: string) => value ? value.toUpperCase() : ''
                },
                {
                    key: "challanNo",
                    label: "Refered Delivery Challan",
                    render: (value: string) => value ? value.toUpperCase() : ''
                },
                {
                    key: "companyName",
                    label: "Company Name",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "location",
                    label: "Location",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "debitCreditTo",
                    label: "Debit / Credit To",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "payReceivedFrom",
                    label: "Pay To / Received From",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
            ]
        },
        {
            sectionType: "array",
            layout: 'table',
            fieldArrayName: "particulars",
            fields: [
                { key: "description", label: "Particulars", width: "80%" },
                { key: "amt", label: "Amount (Rs.)", width: "20%" },
            ]
        },
        {
            sectionType: "object",
            layout: "grid",
            gridColumns: 3,
            fields: [
                {
                    key: "paymentMode",
                    label: "Payment Mode",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "totalAmt",
                    label: "Total Amount",
                    render: (value: any) => value ? formatCurrency(Number(value) || 0) : ''
                },
                {
                    key: "amtWords",
                    label: "Amount in Words",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "receiverName",
                    label: "Receiver Name",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
                {
                    key: "remark",
                    label: "Remark",
                    render: (value: string) => value ? convertInTitleCase(value || '') : ''
                },
            ]
        }
    ]

    return (
        <PreviewContainer title='Multiple Cash Voucher'>
            <DataViewer
                config={mcVoucherPreviewConfig}
                data={mcVoucherFormPreview ? mcVoucherFormPreview : []}
            />
        </PreviewContainer>
    )
}
