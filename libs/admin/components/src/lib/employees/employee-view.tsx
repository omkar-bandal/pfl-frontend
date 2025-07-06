/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home, LocalPostOffice, Person } from '@mui/icons-material';
import { Box, Button, Chip, LinearProgress, Typography } from '@mui/material';
import { adminRoutes, useGetEmployeeForView, useUpdateEmployeeStatus } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/common_api';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig, PageTitle, toast } from '@prime-fresh/ui_shared';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ViewEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const employeeId = id ? id : '';
  const { data, isLoading } = useGetEmployeeForView(employeeId);
  const employeeData = data?.data ? data.data : null;
  console.log('An Employee: ', data?.data);
  const employeeViewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        layout: 'grid',
        gridColumns: 4,
        title: 'Employee Details',
        icon: <Person />,
        fields: [
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
            key: 'status',
            label: 'Current Employee Status',
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
        ],
      },
      {
        sectionType: 'object',
        title: 'Address',
        icon: <Home />,
        layout: 'grid',
        gridColumns: 2,
        fields: [
          {
            key: 'residentialAddress',
            label: 'Residentail Address',
            render: (value: Address) =>
              value ? (
                <>
                  <Typography variant="body1" component="div">
                    {value.address1}, {value.address2}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {value.location}, {value.city}, {value.state}, {value.pincode}
                  </Typography>
                </>
              ) : null,
          },
          {
            key: 'permanentAddress',
            label: 'Permanent Address',
            render: (value: Address) =>
              value ? (
                <>
                  <Typography variant="body1" component="div">
                    {value.address1}, {value.address2}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {value.location}, {value.city}, {value.state}, {value.pincode}
                  </Typography>
                </>
              ) : null,
          },
        ],
      },
      {
        sectionType: 'object',
        title: 'Office Data',
        icon: <LocalPostOffice fontSize="small" />,
        layout: 'grid',
        gridColumns: 4,
        fields: [
          {
            key: 'companyName',
            label: 'Company Name',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'designation',
            label: 'Designation',
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
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'currentLevel',
            label: 'Employee Level',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
        ],
      },
    ],
  };
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
      <DataViewer data={employeeData || []} config={employeeViewConfig} />
    </Box>
  );
};
