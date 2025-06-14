/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectViewerConfig, formatCurrency } from "@prime-fresh/ui_shared"
import { Typography } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { Inventory, LocalShipping, Person } from '@mui/icons-material';
import { Address } from "@prime-fresh/common_api";

export const inwardRegisterViewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        layout: 'grid',
        gridColumns: 3,
        fields: [
          {
            key: 'inwardType',
            label: 'Inward Type',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'grnNo',
            label: 'Referred GRN',
            render: (value: string) => (value ? value.toUpperCase() : '-'),
          },
          {
            key: 'deliveryChallanNo',
            label: 'Referred Delivery Challan',
            render: (value: string) => (value ? value.toUpperCase() : '-'),
          },
          {
            key: 'companyName',
            label: 'Company',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'location',
            label: 'Location',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'batchNo',
            label: 'Batch Number',
            render: (value: string) => (value ? value.toUpperCase() : '-'),
          },
          {
            key: 'date',
            label: 'Date of Inward',
          },
        ],
      },
      {
        title: 'Vendor / Farmer Information',
        sectionType: 'object',
        icon: <Person />,
        fields: [
          {
            key: 'selectedParty.companyName',
            label: 'Vendor Name',
            render: (value: any) =>
              value ? (
                <Typography variant="subtitle2" color="primary">
                {value}
              </Typography>
              ) : null
          },
          { key: 'selectedParty.category', label: 'Category' },
          { key: 'selectedParty.subcategory', label: 'Subcategory' },
          { key: 'selectedParty.vendorCode', label: 'Vendor Code' },
          { key: 'selectedParty.contactPersonName', label: 'Contact Person' },
          { key: 'selectedParty.officeContactNo', label: 'Phone' },
          { key: 'selectedParty.officeEmail', label: 'Email' },
          {
            key: 'selectedParty.officeAddress',
            label: 'Address',
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
        ],
        gridColumns: 3,
      },
      {
        title: 'Inward Products',
        sectionType: 'array',
        icon: <Inventory />,
        fieldArrayName: 'inwardProducts',
        keyField: 'id',
        fields: [
          {
            key: 'productName',
            label: 'Product',
            width: '25%',
            render: (value: string) => (
              <Typography variant="body1" color="text.primary">
                {convertInTitleCase(value) || ''}
              </Typography>
            ),
          },
          {
            key: 'uom',
            label: 'Unit',
            width: '10%',
          },
          {
            key: 'quantity',
            label: 'Quantity',
            width: '10%',
          },
          {
            key: 'unitPrice',
            label: 'Unit Price',
            width: '10%',
          },
          {
            key: 'amount',
            label: 'Amount',
            width: '10%',
            render: (value: any) => (value ? formatCurrency(value) : 0),
          },
          {
            key: 'netWeight',
            label: 'Net Weight',
            width: '10%',
            render: (value: any) => (value ? `${value} kg` : 0),
          },
        ],
      },
      {
        title: 'Inward Quantity & Cost',
        sectionType: 'object',
        icon: <LocalShipping />,
        fields: [
          { key: 'purchasedBy', label: 'Purchased By' },
          { key: 'totalWeightInKg', label: 'Total Weight in Kg' },
          { key: 'purchasedQty', label: 'Purchased Quantity' },
          { key: 'inwardQtyInKg', label: 'Inward Quantity in Kg' },
          { key: 'inwardCost', label: 'Inward Cost' },
          { key: 'remarks', label: 'Remarks' },
          { key: 'inwardBy', label: 'Inward By' },
        ],
        gridColumns: 3,
      },
    ],
  };