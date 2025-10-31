export interface ICustomerPaymentTerms {
    id?: string;
    paymentMade: string | null;
    otherPaymentMade: string | null;
    paymentMode: string | null;
    otherPaymentMode: string | null;
    marginDeposit: string | null;
    rtv: string | null;
    agreementExecuted: string | null;
    lc: string | null;
    bg: string | null;
    securityDepoCheqNo: string | null;
    securityDepoAmt: number;
    //Initial Exposure Limit (IEL)
    IELinAmt: number;
    IELRecommendedBy: string | null;
    IELRecommendedDate: string | null;
    //Revision of Exposure Limit (REL)
    RELinAmt: number;
    RELRecommendedBy: string | null;
    RELRecommendedDate: string | null;
    reason: string | null;
    docEvidenceCopy: string | null;
}
