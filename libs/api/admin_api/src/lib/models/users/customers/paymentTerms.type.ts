export type PostPaymentTerms = {
    paymentMade: string,
    otherPaymentMade: string,
    paymentMode: string,
    otherPaymentMode: string,
    marginDeposit: string,
    rtv: string,
    agreementExecuted: string,
    lc: string,
    bg: string,
    securityDepoCheqNo: string,
    securityDepoAmt: number,
    //Initial Exposure Limit (IEL)
    IELinAmt: number,
    IELRecommendedBy: string,
    IELRecommendedDate: Date,
    //Revision of Exposure Limit (REL)
    RELinAmt: number,
    RELRecommendedBy: string,
    RELRecommendedDate: Date,
    reason: string;
    docEvidenceCopy: File | null,
}

export type GetPaymentTerms = {
    id: string,
    paymentMade: string,
    otherPaymentMade: string,
    paymentMode: string,
    otherPaymentMode: string,
    marginDeposit: string,
    rtv: string,
    agreementExecuted: string,
    lc: string,
    bg: string,
    securityDepoCheqNo: string,
    securityDepoAmt: number,
    //Initial Exposure Limit (IEL)
    IELinAmt: number,
    IELRecommendedBy: string,
    IELRecommendedDate: Date,
    //Revision of Exposure Limit (REL)
    RELinAmt: number,
    RELRecommendedBy: string,
    RELRecommendedDate: Date,
    reason: string;
    docEvidenceCopy: string,
}
