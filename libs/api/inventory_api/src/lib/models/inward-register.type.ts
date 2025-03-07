
export type PostInwardProducts = {
    product: string,  
    count: string,
    size: string,
    weight: number,
    uom: string,  
    qty: number,
    productContainerWeight: number, 
    netWeight: number,
    grossWeight: number,
}

export type GetInwardProducts = {id: string} & PostInwardProducts;

export type PostInwardRegister = {
    grnNo: string                    // approved grn id 
    deliveryChallanNo: string,       // approved delivery challan id
    inwardType: string,              // type of inward cc-cc, cc-dc, dc-dc, farm-dc, farm-cc
    companyName: string,
    location: string,
    date: string,
    totalWeightInKg: number,
    batchNo: string,
    selectedParty: string,            // selected vendor / farmer id
    inwardProducts: PostInwardProducts[],    // Relation to InwardProduct entity  
    source: "vendor" | "farmer",                  // vendor / farmer
    purchasedBy: string,
    purchasedQty: number,
    inwardQtyInKg: number,
    inwardCost: number,
    remarks: string,
    inwardBy: string,
}

export type GetInwardRegister = {
    id: string,
    grnNo: string                    // approved grn id 
    deliveryChallanNo: string,       // approved delivery challan id
    inwardType: string,              // type of inward cc-cc, cc-dc, dc-dc, farm-dc, farm-cc
    companyName: string,
    location: string,
    date: Date,
    batchNo: string,
    source: string,                  // vendor / farmer
    selectedParty: string,            // selected vendor / farmer id         
    inwardProducts: PostInwardProducts[],    // Relation to InwardProduct entity  
    totalWeightInKg: number,
    purchasedQty: number,
    purchasedBy: string,
    inwardBy: string,
    inwardQtyInKg: number,
    inwardCost: number,
    remarks: string,
}