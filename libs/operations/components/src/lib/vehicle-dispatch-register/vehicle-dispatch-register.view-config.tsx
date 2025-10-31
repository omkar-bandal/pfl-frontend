/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionConfig, formatCurrency, formatDate } from '@prime-fresh/shared/components';
import { Typography } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { Address } from '@prime-fresh/services';

export const vehicleDispatchRegisterViewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 4,
      fields: [
        {
          key: 'companyName',
          label: 'Company',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'dcNumber',
          label: 'Delivery Challan Number',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'date',
          label: 'Date of Inward',
          render: (value: any) => (value ? formatDate(value || '') : '-'),
        },
        {
          key: 'vehicleNo',
          label: 'Vehicle Number',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'vehicleType',
          label: 'Vehicle Type',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'driverName',
          label: 'Driver Name',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'driverMobNo',
          label: 'Driver Mobile No',
          render: (value: string) => (value ? value : '-'),
        },
        {
          key: 'paymentDiscussed',
          label: 'Payment Discussed',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : '-'),
        },
        {
          key: 'transportationBillAmt',
          label: 'Transportation Bill Amount',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : '-'),
        },
        {
          key: 'advancePaid',
          label: 'Any Advance Paid to Transporter',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : '-'),
        },
        {
          key: 'clientName',
          label: 'Client Name',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'clientGRNNo',
          label: 'Client GRN No',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'clientAddress',
          label: 'Client Address',
          render: (value: Address) =>
            value ? (
              <>
                <Typography variant="body2" component="div">
                  {value.address1}, {value.address2}
                </Typography>
                <Typography variant="body2" component="div">
                  {value.location}, {value.city}, {value.state}, {value.pincode}
                </Typography>
              </>
            ) : null,
        },
        {
          key: 'receivingPerson',
          label: 'Receiving Person At Location',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'reachingTime',
          label: 'Reaching Time',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'outTime',
          label: 'Out Time',
          render: (value: string) => (value ? value?.toUpperCase() : '-'),
        },
        {
          key: 'accDeptVerification',
          label: 'Verified By A/c Department',
          render: (value: boolean) => (value && value === true ? 'Yes' : 'No'),
        },
        {
          key: 'paymentMode',
          label: 'Payment Mode',
        },
        {
          key: 'netInwardQty',
          label: 'Net Inward Quantity',
          render: (value: number) => (value ? `${Number(value)} Kg` : '-'),
        },
        {
          key: 'rejection',
          label: 'Rejection (If Any)',
          render: (value: number) => (value ? `${Number(value)} Kg` : '-'),
        },
        {
          key: 'shrinkageDump',
          label: 'Shrinkage Dump (If Any)',
          render: (value: number) => (value ? `${Number(value)} Kg` : '-'),
        },
        {
          key: 'remarksPFL',
          label: 'Remarks (PFL Team)',
        },
        {
          key: 'feedbackbyTransporterOwner',
          label: 'Feedback By Transporter Owner',
        },
      ],
    },
]