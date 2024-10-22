import { farmersDataState, vendorsDataState } from '@prime-fresh/admin_modules';
import { grnDataState, useAppSelector } from '@prime-fresh/purchase/modules';

export const PreviewData = () => {
    const { previewGRN } = useAppSelector(grnDataState);
    const { selectedVendor } = useAppSelector(vendorsDataState);
    const { selectedFarmer } = useAppSelector(farmersDataState);
    return (
        [
            {
                variant: "title",
                title: "GRN Preview",
            },
            {
                variant: "typos",
                fields: [
                    { label: 'Bill No :', value: previewGRN?.billNo },
                    { label: 'Purchase Location :', value: previewGRN?.purchaseLocation },
                    { label: 'Purchase for which location :', value: previewGRN?.purchaseForWhich },
                    { label: 'Special Request :', value: previewGRN?.specialReq },
                    { label: 'Source: :', value: previewGRN?.source },
                ]
            },
            {
                variant: "typos",
                fields: previewGRN?.source === "vendor" ?
                    [
                        { label: 'Company Name :', value: selectedVendor?.companyName },
                        { label: 'Vendor Code :', value: selectedVendor?.vendorCode },
                        { label: 'Office Address :', value: selectedVendor?.officeAddress },
                        { label: 'Office Contact No :', value: selectedVendor?.officeContactNo },
                        { label: 'Email :', value: selectedVendor?.email },
                    ]
                    :
                    [
                        { label: 'Farmer Name :', value: `${selectedFarmer?.farmerfName} ${selectedFarmer?.farmermName} ${selectedFarmer?.farmerlName}` },
                        { label: 'Farmer Code :', value: selectedFarmer?.farmerCode },
                        { label: 'Residential Address :', value: selectedFarmer?.residensialAddress },
                        { label: 'Farm Address :', value: selectedFarmer?.farmAddress },
                        { label: 'Contact No :', value: selectedFarmer?.primaryMobileNo },
                        { label: 'Email :', value: selectedFarmer?.email },
                    ]
            },
            {
                variant: "divider",
                title: "Products Information",
            },
            {
                variant: "table",
                tableHeaders: ["Product", "Quantity", "UOM", "Rate", "Total", "Purchase Date", "Dispatch Date", "Delivery Date", "Delivery Location"],
                tableBody: previewGRN?.products,
            },
            {
                variant: "typos",
                fields: [
                    { label: 'Subtotal :', value: previewGRN?.subTotalAmt },
                    { label: 'Freight :', value: previewGRN?.freight },
                    { label: 'Other Charges :', value: previewGRN?.otherCharges },
                    { label: 'Total Amount :', value: previewGRN?.totalAmt },
                ]
            }
        ]
    )
}
