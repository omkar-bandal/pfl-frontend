export type PostDumpProducts = {
    product: string;
    uom: string;
    quantity: number;
    dumpCost: number;
};
export type GetDumpProducts = {
    id: string;
} & PostDumpProducts;
export type PostDumpRegister = {
    companyName: string;
    location: string;
    date: string;
    batchNo: string;
    grn: string;
    dumpProducts: PostDumpProducts[];
    remark: string;
};
export type GetDumpRegister = {
    id: string;
    companyName: string;
    location: string;
    date: string;
    batchNo: string;
    grn: number;
    dumpProducts: GetDumpProducts[];
    remark: string;
};
