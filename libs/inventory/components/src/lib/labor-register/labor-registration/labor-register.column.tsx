import { Address } from '@prime-fresh/admin_api';
import { formatAddress } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';

export const laborRegisterColumns: CustomGridColDef[] = [
  // {
  //     field: "siteName",
  //     headerName: "Site Name",
  //     width: 150,
  //     align: "center",
  //     headerAlign: "center",
  //     valueGetter: (value: GetFilteredBranchData) => value ? value.name : '-'
  // },
  {
    field: 'laborType',
    headerName: 'Labor Type',
    width: 130,
    align: 'center',
    headerAlign: 'center',
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'laborName',
    headerName: 'Labor Name',
    width: 250,
    headerAlign: 'center',
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'mobileNumber',
    headerName: 'Contact No',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    headerAlign: 'center',
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'birthDate',
    headerName: 'Birth Date',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'maritalStatus',
    headerName: 'Marital Status',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'presentAddress',
    headerName: 'Present Address',
    width: 300,
    headerAlign: 'center',
    valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
  },
  {
    field: 'permanentAddress',
    headerName: 'Permanent Address',
    width: 300,
    headerAlign: 'center',
    valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
  },
];
