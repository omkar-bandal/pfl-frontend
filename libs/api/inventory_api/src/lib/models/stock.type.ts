export interface IStockData {
  id: string;
  productId: string;
  productName: string | null;
  count: string | null;
  origin: string | null;
  variety: string | null;
  size: string | null;
  onHandQty: number | null;
  amount: number | null;
}