export interface MgntDashboardData {
  date: string,
  totalQuantity: 100,
  totalAmount: 1000000,
}

export interface VendorPurchaseData {
  data: MgntDashboardData[];
}

export interface FarmerPurchaseData {
  data: MgntDashboardData[];
}

export interface ProductPurchaseData {
  data: MgntDashboardData[];
}