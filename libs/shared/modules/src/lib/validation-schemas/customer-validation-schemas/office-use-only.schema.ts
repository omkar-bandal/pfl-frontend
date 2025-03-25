import * as yup from 'yup';

export const officeUseOnlyValidationSchema = yup.object().shape({
    proposerBDName: yup.string().nullable(),
    pflCoordinator: yup.string().nullable(),
    recommendedBy: yup.string().nullable(),
    dispatchLocationPfl: yup.string().nullable(),
    approvedBy: yup.string().nullable(),
    relationshipManager: yup.string().nullable(),
    avgBillingMonthly: yup.number().positive('Average cannot be negative.'),
    volumeMonthly: yup.number().positive('Volume cannot be negative.'),
    customerVerification: yup.string().nullable(),
    verificationAgency: yup.string().nullable(),
    validityPeriod: yup.string().nullable(),
    dueDiligenceDone: yup.string().nullable(),
    creditWorthinessDue: yup.string().nullable(),
    keyAccountPersonAssigned: yup.string().nullable(),
    sinceWhen: yup.string().nullable(),
    ledgerCreatedDate: yup.string().nullable(),
    ledgerCreatedBy: yup.string().nullable(),
    ledgerVerifiedApprovedBy: yup.string().nullable(),
    additionalNotes: yup.string().nullable()
})