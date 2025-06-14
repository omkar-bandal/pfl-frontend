export type GetProformaInvoice = {
  id: string;
  deliveryChallan: string;
  pdfData: string;
  location: string;
  type: string;
  invoiceDate: string;
  invoiceNo: string;
};
export type GetFinalInvoice = {
  id: string;
  deliveryChallan: string;
  invoiceDate: string;
  invoiceNo: string;
  pdfData: string;
};
