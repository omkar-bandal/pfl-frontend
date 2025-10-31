import { Address } from './address.model';

export interface EmployeePartialData {
  id: string;
  fullName: string;
  employeeId: string;
}

export type FarmerPartialData = {
  id: string;
  fullName: string;
  primaryMobileNo: string;
  secondaryMobileNo: string;
  email: string;
  farmerCode: string;
  residensialAddress: Address;
  farmAddress: Address;
};

export type VendorPartialData = {
  id: string;
  category: string;
  subcategory: string;
  companyName: string;
  officeContactNo: string;
  contactPersonName: string;
  officeEmail: string;
  vendorCode: string;
  officeAddress: Address;
};

export type CustomerPartialData = {
  id: string;
  organisationName: string;
  billingAddress: Address;
  deliveryAddress: Address;
  gstNumber: string;
  panNumber: string;
};

export type CustomerNames = {
  id: string;
  organisationName: string;
};

export type ProductPartialData = {
  id: string;
  name: string;
  description: string | null;
  productCode: string;
  productOrigin: string[] | null;
  count: string[] | null;
  size: string[] | null;
  variety: string[] | null;
  brand: string;
};

export type VariantPartialData = {
  id: string;
  createdAt: string;
  variantName: string;
  variantCode: string;
  count: number;
  size: number;
  variety: string;
  origin: string;
  brand: string;
  thresholdStock: number;
};

export type PackagingMaterialPartialData = {
  id: string;
  packagingMaterialName: string;
  packagingMaterialWeight: number;
};

export type UOMPartialData = {
  id: string;
  unit: string;
};

export type LocationPartialData = {
  id: string;
  name: string;
  type: string;
};

export type BranchPartialData = {
  id: string;
  name: string;
  type: 'collection-center' | 'distribution-center' | 'seasonal-collection-center' | 'warehouse';
};
