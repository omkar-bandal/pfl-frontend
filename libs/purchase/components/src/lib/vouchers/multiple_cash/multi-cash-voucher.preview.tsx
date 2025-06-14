import { useAppSelector } from '@prime-fresh/modules';
import { mcVoucherState } from '@prime-fresh/purchase/modules';
import { DataViewer, ObjectViewerConfig, PreviewContainer } from '@prime-fresh/ui_shared';

export const MCVoucherPreview = () => {
    const { mcVoucherFormPreview } = useAppSelector(mcVoucherState);
    const mcVoucherPreviewConfig: ObjectViewerConfig = {
        sections: [
            {
                sectionType: "object",
                layout: "grid",
                gridColumns: 2,
                fields: [
                    { key: "grnNo", label: "Refered GRN" },
                    { key: "challanNo", label: "Refered Delivery Challan" },
                    { key: "companyName", label: "Company Name" },
                    { key: "location", label: "Location" },
                    { key: "debitCreditTo", label: "Debit / Credit To" },
                    { key: "payReceivedFrom", label: "Pay To / Received From" },
                ]
            },
            {
                sectionType: "array",
                fieldArrayName: "particulars",
                fields: [
                    { key: "description", label: "Particulars", width: "80%" },
                    { key: "amt", label: "Amount", width: "20%" },
                ]
            },
            {
                sectionType: "object",
                layout: "grid",
                gridColumns: 3,
                fields: [
                    { key: "paymentMode", label: "Payment Mode" },
                    { key: "totalAmt", label: "Total Amount" },
                    { key: "amtWords", label: "Amount in Words" },
                    { key: "receiverName", label: "Receiver Name" },
                    { key: "remark", label: "Remark" },
                ]
            }
        ],
    }
    return (
        <PreviewContainer title='Multiple Cash Voucher'>
            <DataViewer
                config={mcVoucherPreviewConfig}
                data={mcVoucherFormPreview ? mcVoucherFormPreview : []}
            />
        </PreviewContainer>
    )
}
