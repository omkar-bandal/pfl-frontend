export type PostStatutoryDetails = {
    panNo: string | null,
    panCopy: File | null,
    aadharNo: string | null,
    aadharCopy: File | null,
    gstn: string | null,
    regiCertificateCopy: File | null,
    billBookCopy: File | null,
    certificationsDetails: string | null,
    otherCertifications: string | null,
    corpRegiDetails: string | null,
    otherCorpRegiDetails: string | null,
    incorpoCertificateCopy: File | null,
    cinNo: string | null
}

export type GetStatutoryDetails = {
    id: string,
    panNo: string | null,
    panCopy: string | null,
    aadharNo: string | null,
    addharCopy: string | null,
    gstn: string | null,
    regiCertificateCopy: string | null,
    billBookCopy: string | null,
    certificationsDetails: string | null,
    otherCertifications: string | null,
    corpRegiDetails: string | null,
    otherCorpRegiDetails: string | null,
    incorpoCertificateCopy: string | null,
    cinNo: string | null
}