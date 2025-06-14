import {
  FormProductQtyAmt,
  FormProducts,
  FormProductWeight,
} from '@prime-fresh/common_api';

export type ReturnedProducts = {
  saleUoM: string | null;
  returnedUOM: string | null;
} & FormProducts &
  FormProductQtyAmt &
  FormProductWeight;

export type PostReturnByCustomer = {
  proformaInvNo: string | null;
  deliveryChallanNo: string | null;
  companyName: string | null;
  date: string | null;
  returnedProducts: ReturnedProducts[];
  remark: string | null;
};

export type GetReturnByCustomer = { id: string } & PostReturnByCustomer;
