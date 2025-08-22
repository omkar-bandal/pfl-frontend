import { useAppSelector } from '@prime-fresh/modules';
import { tpVoucherState } from '@prime-fresh/purchase/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/ui_shared';

export const TPVoucherPreview = () => {
    const { tpVoucherFormPreview } = useAppSelector(tpVoucherState);
    const tpVoucherPreviewConfig: SectionConfig[] = [
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
                {
                    key: "dispatchLocation",
                    label: "Dispatch Location",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "destinationLocation",
                    label: "Destination Location",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "driverName",
                    label: "Driver Name",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "contactNo",
                    label: "Contact No",
                },
                {
                    key: "altContactNo",
                    label: "Alternate Contact No"
                },
                {
                    key: "vehicleNo",
                    label: "Vehicle Number",
                    render: (value: string) => value ? value.toUpperCase() : '-',
                },
                {
                    key: "kyc",
                    label: "Is KYC attached? (Driver Lic. / RC Book / PAN)",
                    render: (value: boolean) => value === true ? "Yes" : "No"
                },
                {
                    key: "paymentMode",
                    label: "Payment Mode",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "freightAmt",
                    label: "Freight Amount",
                    render: (value: number) => value ? `Rs. ${value}` : 0,
                },
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

    return (
        <PreviewContainer title='Transport Payment Voucher'>
            <DataViewer
                config={tpVoucherPreviewConfig}
                data={tpVoucherFormPreview ? tpVoucherFormPreview : []}
            />
        </PreviewContainer>
    )
}
