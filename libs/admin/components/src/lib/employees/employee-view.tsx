/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckBox, CheckBoxOutlineBlank, ChecklistRtl, Home, LocalPostOffice, Person } from '@mui/icons-material';
import { Box, Button, Chip, LinearProgress, Typography } from '@mui/material';
import { adminRoutes, useGetDocumentAccessConfig, useGetEmployeeForView, useUpdateEmployeeStatus } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/services';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, PageTitle, SectionConfig, toast } from '@prime-fresh/shared/components';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const employeeViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 4,
    title: 'Employee Details',
    icon: <Person />,
    fields: [
       {
        key: 'status',
        label: 'Current Employee Status',
        width: 12,
        render: (value: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED') => {
          switch (value) {
            case 'ACTIVE':
              return <Chip label={convertInTitleCase(value)} color="success" size="small" sx={{ width: 80 }} />;
            case 'INACTIVE':
              return <Chip label={convertInTitleCase(value)} color="default" size="small" sx={{ width: 80 }} />;
            case 'SUSPENDED':
              return <Chip label={convertInTitleCase(value)} color="error" size="small" sx={{ width: 80 }} />;
            default:
              return <Chip label="INACTIVE" color="default" size="small" />;
          }
        },
      },
      {
        key: 'firstName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'middleName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'lastName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'username',
        label: 'Username',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'primaryMobNo',
        label: 'Primary Contact No',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'primaryEmail',
        label: 'Primary Email',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'secondaryMobNo',
        label: 'Secondary Contact No',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'secondaryEmail',
        label: 'Secondary Email',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'residentialAddress',
        label: 'Residentail Address',
        width: 6,
        render: (value: Address) => (value ? formatAddress(value) : ''),
      },
      {
        key: 'permanentAddress',
        label: 'Permanent Address',
        width: 6,
        render: (value: Address) => (value ? formatAddress(value) : ''),
      },
    ],
  },
  {
    sectionType: 'object',
    title: 'Office Data',
    icon: <LocalPostOffice fontSize="small" />,
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'companyName',
        label: 'Company Name',
        width: 12,
        render: (value: Array<string>) => (value.length > 0 ? value?.join(', ') : '-'),
      },
      {
        key: 'department',
        label: 'Department',
        width: 6,
        render: (value: Array<string>) => (value.length > 0 ? convertInTitleCase(value?.join(', ')) : '-'),
      },
      {
        key: 'designation',
        label: 'Designation',
        width: 6,
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'joiningDate',
        label: 'Joining Date',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'joiningLocation',
        label: 'Joining Location',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'currentWorkLocation',
        label: 'Work Location',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'accessLocation',
        label: 'Access Location',
        width: 12,
        render: (value: Array<string>) => (value.length > 0 ? value?.join(', ') : '-'),
      },
      {
        key: 'cugNo',
        label: 'CUG Number',
      },
      {
        key: 'workEmail',
        label: 'Work Email',
      },
      {
        key: 'roles',
        label: 'Type of User',
        render: (value: string) => value ? convertInTitleCase(value || '') : '-'
      },
    ],
  },
  {
    sectionType: 'array',
    fieldArrayName: 'permissions',
    title: 'Employee App Permissions',
    icon: <ChecklistRtl />,
    layout: 'table',
    fields: [
      {
        key: 'documentDefinition',
        label: 'Document Name',
        width: '50%',
      },
      {
        key: 'canCreate',
        label: 'Create',
        width: '10%',
        render: (value: boolean) => (value ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />),
      },
      {
        key: 'canEdit',
        label: 'Edit',
        width: '10%',
        render: (value: boolean) => (value ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />),
      },
      {
        key: 'canView',
        label: 'View',
        width: '10%',
        render: (value: boolean) => (value ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />),
      },
      {
        key: 'canDelete',
        label: 'Delete',
        width: '10%',
        render: (value: boolean) => (value ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />),
      },
      {
        key: 'canDownload',
        label: 'Download',
        width: '10%',
        render: (value: boolean) => (value ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />),
      },
    ],
  },
];

export const ViewEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const employeeId = id ? id : '';
  const { data, isLoading } = useGetEmployeeForView(employeeId);
  const employeeData = data?.data ? data.data : null;
  console.log('An Employee: ', data?.data);

  const { data: docAccessConfig } = useGetDocumentAccessConfig();
  const documentDetails = useMemo(() => docAccessConfig?.data ? docAccessConfig.data : [], [docAccessConfig]);
  const employeeViewData = {
    ...employeeData,
    permissions: employeeData?.permissions.map(doc => ({
      ...doc,
      documentDefinition: documentDetails.find(d => d.id === doc.documentDefinition)?.name,
    }))
  }
  const { mutateAsync, error, data: ResData } = useUpdateEmployeeStatus(employeeId);
  const changeStatusToActive = () => {
    mutateAsync('ACTIVE')
      .then(() => {
        toast.success(ResData ? ResData.message : 'Employee status change to Active.');
        setTimeout(() => {
          navigate(adminRoutes.VIEW_ALL_EMPLOYEES);
        }, 2000);
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while changing employee status.');
      });
  };
  const changeStatusToInavtive = () => {
    mutateAsync('INACTIVE')
      .then(() => {
        toast.success(ResData ? ResData.message : 'Employee status change to Inactive.');
        setTimeout(() => {
          navigate(adminRoutes.VIEW_ALL_EMPLOYEES);
        }, 2000);
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while changing employee status.');
      });
  };
  const changeStatusToSuspend = () => {
    mutateAsync('SUSPENDED')
      .then(() => {
        toast.success(ResData ? ResData.message : 'Employee status change to Suspend.');
        setTimeout(() => {
          navigate(adminRoutes.VIEW_ALL_EMPLOYEES);
        }, 2000);
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while changing employee status.');
      });
  };
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <Box flex={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageTitle pagetitle="Employee Details" />
        <Box>
          {employeeData?.status !== 'ACTIVE' && (
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={changeStatusToActive}
              sx={{ textTransform: 'none', width: 100, fontWeight: 600, mx: 2 }}
            >
              Active
            </Button>
          )}
          {employeeData?.status !== 'INACTIVE' && (
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={changeStatusToInavtive}
              sx={{ textTransform: 'none', width: 100, fontWeight: 600, mx: 2 }}
            >
              Inactive
            </Button>
          )}
          {employeeData?.status !== 'SUSPENDED' && (
            <Button
              size="small"
              variant="contained"
              color="info"
              onClick={changeStatusToSuspend}
              sx={{ textTransform: 'none', width: 100, fontWeight: 600, mx: 2 }}
            >
              Suspend
            </Button>
          )}
        </Box>
      </Box>
      <DataViewer data={employeeViewData || []} config={employeeViewConfig} />
    </Box>
  );
};
