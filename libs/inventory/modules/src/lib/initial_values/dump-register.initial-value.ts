import { PostDumpProducts, PostDumpRegister } from "@prime-fresh/inventory_api"

export const dumpProductsInitialValue: PostDumpProducts = {
    product: "",
    uom: "",
    quantity: 0,
    dumpCost: 0,
}

export const dumpRegisterInitialValue: PostDumpRegister = {
    companyName: "",
    location: "",
    date: "",
    batchNo: "",
    grn: "",
    dumpProducts: [dumpProductsInitialValue],
    remark: "",
}