import { useMemo } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { AutoCompleteInput, toast } from '@prime-fresh/shared/components';
import { useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { IDocumentType, IEmployeeReplacementReq, queryClient } from '@prime-fresh/services';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2 } from '@mui/material';
import {
  approvalFlowStates,
  employeeReplacementInitialValue,
  employeeReplacementSchema,
  setShowReplaceForm,
  useGetAllEmployees,
  useReplaceEmployee,
} from '@prime-fresh/admin/modules';

export const EmployeeReplacementForm = ({ docType }: { docType?: IDocumentType }) => {
  const dispatch = useAppDispatch();
  const { showReplaceForm } = useAppSelector(approvalFlowStates);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: employeeReplacementInitialValue,
    validationSchema: employeeReplacementSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  const { data: emps, isLoading: empLoading, isFetching: empFetching } = useGetAllEmployees();
  const employees = useMemo(
    () =>
      emps?.data
        ? emps.data.map((emp) => {
          return { value: emp.id, label: `${emp.firstName} ${emp.lastName}` };
        })
        : [],
    [emps?.data]
  );
  const { mutateAsync, error, data } = useReplaceEmployee();
  const handleSubmit = (values: IEmployeeReplacementReq) => {
    mutateAsync(values)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['get-all-approval-flows', docType], exact: true });
        toast.success(data?.message ? data.message : 'Employee Replaced Successfully.');
        setTimeout(() => {
          dispatch(setShowReplaceForm());
        }, 2000);
      })
      .catch(() => {
        toast.error(error?.message ? error.message : 'Error while replacing employee.');
      });
  };
  return (
    <Dialog open={showReplaceForm} onClose={() => dispatch(setShowReplaceForm())}>
      <DialogTitle sx={{ color: '#7F8C8D', fontWeight: 600 }}>Replace Form</DialogTitle>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <DialogContentText>
              Replace form to replace employee from every approval flow by another employee.
            </DialogContentText>
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <AutoCompleteInput
                  isRequired={true}
                  loading={empLoading || empFetching}
                  name="oldUserId"
                  label="Employee to be replace"
                  options={employees}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <AutoCompleteInput
                  isRequired={true}
                  loading={empLoading || empFetching}
                  name="newUserId"
                  label="Replace with employee"
                  options={employees}
                />
              </Grid2>
            </Grid2>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={() => dispatch(setShowReplaceForm())} sx={{ fontWeight: 500 }}>
              Cancel
            </Button>
            <Button color="success" type="submit" sx={{ fontWeight: 500 }} disabled={formik.isSubmitting}>
              Replace
            </Button>
          </DialogActions>
        </form>
      </FormikProvider>
    </Dialog>
  );
};
