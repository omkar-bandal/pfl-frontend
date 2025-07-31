export type CompanyNamesData = {
    id: string;
    name: string;
};
export type AllCompaniesData = CompanyNamesData & {
    officeAddress: string;
    gstNo: string;
    fassaiNo: string;
    logo: string;
    bankDetails: {
        id: string;
        bankName: string;
        accountNo: string;
        ifscCode: string;
        branch: string;
    }[];
};
