import { useAppSelector } from '@prime-fresh/modules';
import { lpVoucherState } from '@prime-fresh/purchase/modules';
import { DataViewer, ObjectViewerConfig, PreviewContainer } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const LPVoucherPreview = () => {
    const { lpVoucherFormPreview } = useAppSelector(lpVoucherState);
    const lpVoucherPreviewConfig: ObjectViewerConfig = {
        sections: [
            {
                sectionType: "object",
                layout: "grid",
                gridColumns: 3,
                fields: [
                    {
                        key: "grnNo",
                        label: "Refered GRN",
                        render: (value: string) => value ? value.toUpperCase() : '-',
                    },
                    {
                        key: "companyName",
                        label: "Company Name"
                    },
                    {
                        key: "location",
                        label: "Location",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                    {
                        key: "debitCreditTo",
                        label: "Debit / Credit To",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                    {
                        key: "payReceivedFrom",
                        label: "Pay To / Received From",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                ]
            },
            {
                sectionType: "object",
                layout: "table",
                tableHeadings: ["Titles", "Values"],
                fields: [
                    {
                        key: "noOfLabours",
                        label: "No of Labors",
                        render: (value: string) => value ? value : 0,
                    },
                    {
                        key: "loadingDate",
                        label: "Day of Loading/Unloading",
                        render: (value: string) => value ? value : '-',
                    },
                    {
                        key: "ratePerLabour",
                        label: "Per Day of Labour",
                        render: (value: string) => value ? `Rs. ${value}` : 0,
                    },
                    {
                        key: "paymentMode",
                        label: "Payment Mode",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                    {
                        key: "kyc",
                        label: "Is Labour KYC Attached ? (If available) ",
                        render: (value: boolean) => value === true ? "Yes" : "No"
                    },
                    {
                        key: "contactNo",
                        label: "Contact No",
                        render: (value: string) => value ? `+91 ${value}` : '-',
                    },
                    {
                        key: "altContactNo",
                        label: "Alternate Contact No",
                        render: (value: string) => value ? `+91 ${value}` : '-',
                    },
                    {
                        key: "products",
                        label: "Products",
                        render: (value: string) => value ? value : '-',
                    },
                ]
            },
            {
                sectionType: "object",
                layout: "grid",
                gridColumns: 3,
                fields: [
                    {
                        key: "totalAmt",
                        label: "Total Amount",
                        render: (value: number) => value ? `Rs. ${value}` : 0,
                    },
                    {
                        key: "amtWords",
                        label: "Amount In Words"
                    },
                    {
                        key: "receiverName",
                        label: "Receiver Name",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                    {
                        key: "remark",
                        label: "Remark"
                    },
                ]
            },
        ]
    }
    return (
        <PreviewContainer title='Labour Payment Voucher'>
            <DataViewer config={lpVoucherPreviewConfig} data={lpVoucherFormPreview ? lpVoucherFormPreview : []} />
        </PreviewContainer>
    )
}
