/* eslint-disable @typescript-eslint/no-explicit-any */
import { Receipt, Person, Inventory, LocalShipping } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { ObjectViewerConfig, formatCurrency, formatDate } from "@prime-fresh/ui_shared";
import { Address } from "cluster";

const rfpaPreviewConfig: ObjectViewerConfig = {
  sections: [
    {
      title: 'RFPA Details',
      sectionType: 'object',
      icon: <Receipt />,
      fields: [
        {
          key: 'companyName',
          label: 'Company',
        },
        {
          key: 'purchaseLocation',
          label: 'Purchase Location',
          render: (value: string) =>
            value ? convertInTitleCase(locations.find((loc) => loc.id === value)?.name || '') : '-',
        },
        {
          key: 'purchaseForSalesLocation',
          label: 'Purchase For',
          render: (value: string) =>
            value ? convertInTitleCase(locations.find((loc) => loc.id === value)?.name || '') : '-',
        },
        {
          key: 'source',
          label: 'Source',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'specialReq',
          label: 'Special Request',
        },
      ],
      gridColumns: 3,
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
            value ? <Typography variant="subtitle1">{convertInTitleCase(value)}</Typography> : null,
        },
        { key: 'selectedParty.category', label: 'Category' },
        { key: 'selectedParty.subcategory', label: 'Subcategory' },
        { key: 'selectedParty.vendorCode', label: 'Vendor Code' },
        {
          key: 'selectedParty.contactPersonName',
          label: 'Contact Person',
          render: (value: string) => (value ? convertInTitleCase(value) : ''),
        },
        { key: 'selectedParty.officeContactNo', label: 'Phone' },
        { key: 'selectedParty.officeEmail', label: 'Email' },
        {
          key: 'selectedParty.officeAddress',
          label: 'Address',
          render: (value: Address) =>
            value ? (
              <>
                <Typography variant="body2" component="div">
                  {convertInTitleCase(`${value.address1}, ${value.address2}`)}
                </Typography>
                <Typography variant="body2" component="div">
                  {convertInTitleCase(`${value.location}, ${value.city}, ${value.state}, ${value.pincode}`)}
                </Typography>
              </>
            ) : null,
        },
      ],
      gridColumns: 3,
    },
    {
      title: 'RFPA Products',
      sectionType: 'array',
      icon: <Inventory />,
      fieldArrayName: 'rfpaProducts',
      keyField: 'id',
      fields: [
        {
          key: 'productName',
          label: 'Product',
          width: '25%',
          render: (value: string) => (
            <Typography variant="body1" color="text.primary">
              {convertInTitleCase(value)}
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
          render: (value: any) => (
            <Box>
              <Typography variant="body2">{value}</Typography>
            </Box>
          ),
        },
        {
          key: 'unitPrice',
          label: 'Unit Price',
          width: '10%',
          render: (value: any) => (
            <Box>
              <Typography variant="body2">{formatCurrency(Number(value))}</Typography>
            </Box>
          ),
        },
        {
          key: 'totalVal',
          label: 'Amount',
          width: '10%',
          render: (value: any) => (value ? formatCurrency(Number(value)) : 0),
        },
        {
          key: 'purchaseDate',
          label: 'Purchase Date',
          width: '15%',
          render: (value: any, item: any) => (
            <>
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
              <Typography variant="caption" color="text.secondary" component="div">
                {item.deliveryLocation}
              </Typography>
            </>
          ),
        },
        {
          key: 'dispatchDate',
          label: 'Dispatch Date',
          width: '15%',
          render: (value: any, item: any) => (
            <>
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
              <Typography variant="caption" color="text.secondary" component="div">
                {item.deliveryLocation}
              </Typography>
            </>
          ),
        },
        {
          key: 'deliveryDate',
          label: 'Delivery',
          width: '15%',
          render: (value: any, item: any) => (
            <>
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
              <Typography variant="caption" color="text.secondary" component="div">
                {item.deliveryLocation}
              </Typography>
            </>
          ),
        },
      ],
    },
    {
      title: 'Additional Requirements',
      sectionType: 'object',
      icon: <LocalShipping />,
      fields: [
        {
          key: 'paymentInfo.paymentMode',
          label: 'Payment Mode',
          render: (value: string) => (value ? value.toUpperCase() : '-'),
        },
        { key: 'paymentInfo.paymentDate', label: 'Payment Date' },
        { key: 'paymentInfo.paymentTerms', label: 'Payment Terms' },
        { key: 'paymentInfo.dueDate', label: 'Due Date' },
        { key: 'paymentInfo.advancePaidAmt', label: 'Advance Paid Amount' },
        { key: 'paymentInfo.creditPeriod', label: 'Credit Period' },
        { key: 'paymentInfo.validityofQuote', label: 'Validity of Quote' },
        { key: 'packingInstruction', label: 'Packing Instruction' },
        { key: 'remark', label: 'Remarks' },
      ],
      gridColumns: 3,
    },
  ],
};
