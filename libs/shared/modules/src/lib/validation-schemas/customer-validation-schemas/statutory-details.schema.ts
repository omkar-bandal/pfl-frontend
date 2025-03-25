import * as yup from 'yup';

export const statutoryDetailsValidationSchema = yup.object().shape({
    panNo: yup.string().nullable(),
    panCopy: yup.mixed().nullable(),
    aadharNo: yup.string().nullable(),
    addharCopy: yup.mixed().nullable(),
    gstn: yup.string().nullable(),
    regiCertificateCopy: yup.mixed().nullable(),
    billBookCopy: yup.mixed().nullable(),
    certificationsDetails: yup.string().nullable(),
    otherCertifications: yup.string().nullable(),
    corpRegiDetails: yup.string().nullable(),
    otherCorpRegiDetails: yup.string().nullable(),
    incorpoCertificateCopy: yup.mixed().nullable(),
    cinNo: yup.string().nullable()
})