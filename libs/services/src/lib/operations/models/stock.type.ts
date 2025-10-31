export interface IStockData {
  id: string;
  productName: string | null;
  count: string | null;
  origin: string | null;
  variety: string | null;
  size: string | null;
  purchaseQty: number | null;
  purchaseAmt: number | null;
  rtvQty: number | null;
  rtvAmt: number | null;
  nonRtvQty: number | null;
  nonRtvAmt: number | null;
  inwardQty: number | null;
  inwardAmt: number | null;
  dumpQty: number | null;
  dumpAmt: number | null;
}