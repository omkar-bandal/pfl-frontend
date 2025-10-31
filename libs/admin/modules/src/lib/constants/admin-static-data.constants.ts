export const adminStaticData = {
  departments: [
    { id: 'purchase', label: 'Procurement' },
    { id: 'sale', label: 'Sales' },
    { id: 'operations', label: 'Operation' },
    { id: 'quality_checking', label: 'Quality Checking' },
    { id: 'business_development', label: 'Business Development' },
    { id: 'Branding_&_Marketing', label: 'Branding & Marketing' },
    { id: 'exports', label: 'Exports' },
    { id: 'farming', label: 'Farming' },
    { id: 'farming', label: 'Farming' },
    { id: 'accounts', label: 'Accounts' },
    { id: 'finance', label: 'Finance' },
    { id: 'hr', label: 'HR' },
    { id: 'it', label: 'IT' },
    { id: 'admin', label: 'Administration' },
    { id: 'other', label: 'Other' },
  ],
  typeOfUser: [
    { value: 'admin', label: 'Is going to handle Admin Module ?' },
    { value: 'verifier', label: 'Is going to verify the documents ?' },
    { value: 'approver', label: 'Is going to approve the documents ?' },
    { value: 'finalizer', label: 'Is going to finalize the documents ?' },
    { value: 'employee', label: 'None of the above' },
  ],
  branchType: {
    CC: "collection-center",
    DC: "distribution-center",
    SEASONAL_CC: "seasonal-collection-center",
    WH: "warehouse",
  },
  officeType: {
    REGISTERED_OFFICE: "registered-office",
    CORPORATE_OFFICE: "corporate-office",
  },
  documentType: {
    PURCHASE: "Procurement",
    SALES: "Sale",
    OPERATIONS: "Operation"
  }
}