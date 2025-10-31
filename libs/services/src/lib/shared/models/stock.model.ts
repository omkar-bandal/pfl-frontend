export type GetStock = {
    id: string,
    companyName: string,
    location: string,
    product: string,
    varients: string,
    onHandQty: number,
    countedQty: number,
    amount: number
};
export type GetStockGlobal ={
    id: string,
    companyname: string,
    name: string,
    onHandQty: number,
    amount: number
}
export type GetStockLocationWise = {
    id: string,
    companyName: string,
    location: string,
    product: string,
    onHandQty: number,
    amount: number
}
export type GetStockProductWise = {
    id: string,
    companyName: string,
    location: string,
    product: string,
    varients: string,
    onHandQty: number,
    amount: number
}