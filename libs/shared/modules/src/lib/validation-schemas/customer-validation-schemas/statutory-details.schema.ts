import * as yup from 'yup';

export const statutoryDetailsValidationSchema = yup.object().shape({
    panNo: yup.string().notRequired().nullable(),
    panCopy: yup.mixed().notRequired().nullable(),
    aadharNo: yup.string().notRequired().nullable(),
    addharCopy: yup.mixed().notRequired().nullable(),
    gstn: yup.string().notRequired().nullable(),
    regiCertificateCopy: yup.mixed().notRequired().nullable(),
    billBookCopy: yup.mixed().notRequired().nullable(),
    certificationsDetails: yup.string().notRequired().nullable(),
    otherCertifications: yup.string().notRequired().nullable(),
    corpRegiDetails: yup.string().notRequired().nullable(),
    otherCorpRegiDetails: yup.string().notRequired().nullable(),
    incorpoCertificateCopy: yup.mixed().notRequired().nullable(),
    cinNo: yup.string().notRequired().nullable()
})