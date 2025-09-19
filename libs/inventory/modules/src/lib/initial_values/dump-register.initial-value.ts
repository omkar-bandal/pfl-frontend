import { IDumpProducts, IDumpRegister } from "@prime-fresh/inventory_api"

export const dumpProductsInitialValue: IDumpProducts = {
    productName: null,
    variant: null,
    // origin: null,
    // variety: null,
    // count: null,
    // size: null,
    uom: null,
    quantity: null,
    unitPrice: null,
    amount: null
}

export const dumpRegisterInitialValue: Omit<IDumpRegister, 'id'> = {
    companyName: null,
    location: null,
    date: null,
    batchNo: null,
    grn: null,
    dumpProducts: [dumpProductsInitialValue],
    totalDumpCost: null,
    totalCostInWords: null,
    remark: null,
}