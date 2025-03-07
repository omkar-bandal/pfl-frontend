export type PostStatutoryDetails = {
    panNo: string,
    panCopy: File | null,
    aadharNo: string,
    addharCopy: File | null,
    gstn: string,
    regiCertificateCopy: File | null,
    billBookCopy: File | null,
    certificationsDetails: string,
    otherCertifications: string,
    corpRegiDetails: string,
    otherCorpRegiDetails: string,
    incorpoCertificateCopy: File | null,
    cinNo: string
}

export type GetStatutoryDetails = {
    id: string,
    panNo: string,
    panCopy: string,
    aadharNo: string,
    addharCopy: string,
    gstn: string,
    regiCertificateCopy: string,
    billBookCopy: string,
    certificationsDetails: string,
    otherCertifications: string,
    corpRegiDetails: string,
    otherCorpRegiDetails: string,
    incorpoCertificateCopy: string,
    cinNo: string
}