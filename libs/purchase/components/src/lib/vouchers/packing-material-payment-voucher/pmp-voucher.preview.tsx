import React from 'react'
import { useAppSelector } from '@prime-fresh/modules';
import { pmpVoucherState } from '@prime-fresh/purchase/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/ui_shared';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { Address } from '@prime-fresh/common_api';

export const PMPVoucherPreview = () => {
    const { pmpVoucherFormPreview } = useAppSelector(pmpVoucherState);
    const pmpVoucherPreviewConfig: SectionConfig[] = [
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
                        key: "sellerName",
                        label: "Seller Name",
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
                    },
                    {
                        key: "address",
                        label: "Seller Address",
                        render: (value: Address) => value ? formatAddress(value) : '-',
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
                        key: "purpose",
                        label: "Purpose"
                    }
                ]
            },
            {
                sectionType: "array",
                layout: 'table',
                fieldArrayName: "materials",
                title: "Packing Material List",
                fields: [
                    { key: "itemName", label: "Material Name", width: "30%" },
                    { key: "itemQty", label: "Quantity", width: "20%" },
                    { key: "itemUom", label: "UoM", width: "20%" },
                    { key: "rate", label: "Rate", width: "10%" },
                    { key: "amt", label: "Amount", width: "20%" },
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
                        render: (value: string) => value ? convertInTitleCase(value) : '-',
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
                        key: "kyc",
                        label: "Is KYC attached? (if available)",
                        render: (value: boolean) => value === true ? "Yes" : "No"
                    },
                    {
                        key: "remark",
                        label: "Remark"
                    },
                ]
            },
        ]

    return (
        <PreviewContainer title='Packing Material Payment Voucher'>
             <DataViewer
                config={pmpVoucherPreviewConfig}
                data={pmpVoucherFormPreview ? pmpVoucherFormPreview : []}
            />
        </PreviewContainer>
    )
}
