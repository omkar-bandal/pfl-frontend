/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductPartialData } from "@prime-fresh/common_api";
import { RFPA_Items } from "@prime-fresh/purchase_api";

export const getProductCode = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
    if (products !== null && productId !== null) {
        return products?.find(product => product.id === productId)?.productCode;
    } else {
        return "";
    }
}

export const calculateTotoalPrice = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: (field: string, value: string | number) => void,
    values: any
) => {
    const { name, value } = event.target;

    // Identify the field name dynamically (last part of the field name after the dot)
    const fieldName = name.split(".").pop() as keyof RFPA_Items;

    if (!fieldName) return; // Prevent invalid updates if fieldName is not found

    // Clone the products array to avoid direct mutation of state
    const updatedProducts = [...values.rfpaProducts];
    const product = updatedProducts[index];

    if (!product) return; // Ensure product exists

    // Handle numeric fields (quantity, unitPrice, grossWeight, packingMaterialWeight)
    if (["quantity", "unitPrice"].includes(fieldName)) {
        const numericValue = isNaN(Number(value)) ? 0 : Number(value);
        if (fieldName === "quantity") product.quantity = numericValue;
        if (fieldName === "unitPrice") product.unitPrice = numericValue;
    } else {
        // Handle string or nullable fields (productName, uom)
        if (fieldName === "product") product.product = value || null;
        if (fieldName === "uom") product.uom = value || null;
    }

    // Recalculate amount based on quantity and unitPrice
    product.totalVal = (product.quantity || 0) * (product.unitPrice || 0);
    setFieldValue(`rfpaProducts.${index}.totalVal`, product.totalVal);
}

// export const calculateDueDate = (paymentDate: string | null, paymentTerms: number): string => {
//     if (!paymentDate || !paymentTerms) return "";
//     const date = new Date(paymentDate);
//     date.setDate(date.getDate() + paymentTerms);
//     return date.toISOString().split("T")[0];
// };
export const calculateDueDate = (paymentDate: string | null, paymentTerms: number | null): string => {
    if (!paymentDate) return "";

    const date = new Date(paymentDate);

    if (paymentTerms !== null && paymentTerms !== undefined) {
        date.setDate(date.getDate() + paymentTerms);
    }

    return date.toISOString().split("T")[0];
};