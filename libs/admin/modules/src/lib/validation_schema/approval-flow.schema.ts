import * as yup from 'yup';

export const approvalFlowSchema = yup.object().shape({
  creator: yup.string().required('Please select an employee name.'),
  approvers: yup.object().shape({
    firstApprover: yup.object().shape({
      users: yup
        .array()
        .of(yup.string())
        .required('Name of first approver is required.')
        .min(1, 'Please select atleast one option'),
      minAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
      maxAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
    }),
    secondApprover: yup.object().shape({
      users: yup
        .array()
        .of(yup.string())
        .required('Name of second approver is required.')
        .min(1, 'Please select atleast one option'),
      minAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
      maxAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
    }),
    thirdApprover: yup.object().shape({
      minAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
      maxAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
    }),
    fourthApprover: yup.object().shape({
      minAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
      maxAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
    }),
    fifthApprover: yup.object().shape({
      minAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
      maxAmtCanApprove: yup.number().nullable().notRequired().min(0, 'Amount cannot be negative.'),
    }),
  }),
});

export const employeeReplacementSchema = yup.object().shape({
  oldUserId: yup.string().required('Please select employee to be replace.'),
  newUserId: yup.string().required('Please select employee replace with.'),
});
