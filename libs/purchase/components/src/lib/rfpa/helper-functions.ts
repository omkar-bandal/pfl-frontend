/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRFPAProducts } from "@prime-fresh/purchase_api";

// export const normalizeRFPAData = (data: GetRFPA | null): PostRFPA => {
//     return data !== null ? {
//         ...data,
//         companyName: data.companyName ? data.companyName.id : null,
//         rfpaProducts: data.rfpaProducts.length > 0 ? data.rfpaProducts.map(product => ({
//             ...product,
//             productName: product.productName ? product.productName.id : product.productName,
//             uom: product.uom ? product.uom.id : product.uom,
//             purchaseDate: product.purchaseDate ? reverseDateString(product.purchaseDate) : product.purchaseDate,
//             dispatchDate: product.dispatchDate ? reverseDateString(product.dispatchDate) : product.dispatchDate,
//             deliveryDate: product.deliveryDate ? reverseDateString(product.deliveryDate) : product.deliveryDate,
//             expectedHarvestDate: product.expectedHarvestDate ? reverseDateString(product.expectedHarvestDate) : null,
//         })) : [initValRFPAItems],
//         paymentInfo: data.paymentInfo ?
//             {
//                 ...data.paymentInfo,
//                 paymentDate: reverseDateString(data.paymentInfo.paymentDate || ''),
//                 dueDate: reverseDateString(data.paymentInfo.dueDate || '')
//             } : initValPaymentInfo,
//     } : initValRFPA;
// }
// export const normalizeRFPAForView = (data: GetRFPA | null): PostRFPA => {
//     return data !== null ? {
//         ...data,
//         companyName: data.companyName ? data.companyName.companyName : null,
//         rfpaProducts: data.rfpaProducts.length > 0 ? data.rfpaProducts.map(product => ({
//             ...product,
//             productName: product.productName ? product.productName.name : null,
//             uom: product.uom ? product.uom.unit : null,
//             purchaseDate: product.purchaseDate ? reverseDateString(product.purchaseDate) : product.purchaseDate,
//             dispatchDate: product.dispatchDate ? reverseDateString(product.dispatchDate) : product.dispatchDate,
//             deliveryDate: product.deliveryDate ? reverseDateString(product.deliveryDate) : product.deliveryDate,
//             expectedHarvestDate: product.expectedHarvestDate ? reverseDateString(product.expectedHarvestDate) : null,
//         })) : [initValRFPAItems],
//         paymentInfo: data.paymentInfo ?
//             {
//                 ...data.paymentInfo,
//                 paymentDate: reverseDateString(data.paymentInfo.paymentDate || ''),
//                 dueDate: reverseDateString(data.paymentInfo.dueDate || '')
//             } : initValPaymentInfo,
//     } : initValRFPA;
// }

export const calculateTotoalPrice = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    formik: any
) => {
    const { name, value } = event.target;
    const fieldName = name.split(".").pop() as keyof IRFPAProducts;
    if (!fieldName) return; 
    const updatedProducts = [...formik.values.rfpaProducts];
    const product = updatedProducts[index];
    if (!product) return; 
    if (["quantity", "unitPrice"].includes(fieldName)) {
        const numericValue = isNaN(Number(value)) ? 0 : Number(value);
        if (fieldName === "quantity") product.quantity = numericValue;
        if (fieldName === "unitPrice") product.unitPrice = numericValue;
    } else {
        if (fieldName === "productName") product.product = value || null;
        if (fieldName === "uom") product.uom = value || null;
    }
    product.amount = (product.quantity || 0) * (product.unitPrice || 0);
    formik.setFieldValue(`rfpaProducts.${index}.amount`, product.amount);
}

export const calculateDueDate = (paymentDate: string | null, paymentTerms: number | null): string => {
    if (!paymentDate) return "";
    const date = new Date(paymentDate);
    if (paymentTerms !== null && paymentTerms !== undefined) {
        date.setDate(date.getDate() + paymentTerms);
    }
    return date.toISOString().split("T")[0];
};