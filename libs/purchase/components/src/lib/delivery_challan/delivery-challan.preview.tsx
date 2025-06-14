import React from 'react'
import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useAppSelector } from '@prime-fresh/modules';
import { dcState } from '@prime-fresh/purchase/modules';
import { DataViewer, formatCurrency, ObjectViewerConfig, PreviewContainer } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { Inventory } from '@mui/icons-material';
import { FormProducts } from '@prime-fresh/common_api';

export const DeliveryChallanPreview = ( ) => {
    const { previewDC } = useAppSelector(dcState);
    const dcConfig: ObjectViewerConfig = {
        sections: [
          {
            sectionType: "object",
            fields: [
              {
                key: "deliveryCType",
                label: "Challan Type",
                render: (value: string) => value ? <Typography variant='body1' component='span'>{value.toUpperCase()}</Typography> : '',
            },
            { 
                key: "companyName", 
                label: "Company",
                render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value)}</Typography> : '',
            },
            { 
                key: "office", 
                label: "Office",
                render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value)}</Typography> : '',
            },
            { 
                key: "grnNo", 
                label: "GRN Number",
                render: (value: string) => value ? <Typography variant='body1' component='span'>{value.toUpperCase()}</Typography> : '',
             },
            { 
                key: "poNumber", 
                label: "PO Number",
                render: (value: string) => value ? <Typography variant='body1' component='span'>{value.toUpperCase()}</Typography> : '',
             },
              { key: "partyName", label: "Customer Name" },
              { key: "fromLocation", label: "From Location" },
              { key: "toLocation", label: "To Location" },
            ],
            gridColumns: 3,
          },
          {
            title: "Delivery Challan Products",
            sectionType: "array",
            icon: <Inventory />,
            fieldArrayName: "deliveryChallanProducts",
            keyField: "id",
            fields: [
              {
                key: "productName",
                label: "Product",
                width: "25%",
                render: (value: string, item: FormProducts) =>
                  <Typography variant="body1" color="text.primary">
                    {`${convertInTitleCase(value || '')} ${item.count} ${item.size} ${item.variety}`}
                  </Typography>
              },
              {
                key: "uom",
                label: "Unit",
                width: "10%",
              },
              {
                key: "quantity",
                label: "Quantity",
                width: "10%",
                render: (value: number) => value ? value : 0,
              },
              {
                key: "unitPrice",
                label: "Unit Price",
                width: "10%",
                render: (value: number) => value? formatCurrency(value) : 0,
              },
              {
                key: "amount",
                label: "Amount",
                width: "10%",
                render: (value: number) => value ? formatCurrency(value) : 0,
              },
              {
                key: "netWeight",
                label: "Net Weight",
                width: "10%",
                render: (value: number) => value ? `${value} kg` : 0,
              },
            ],
          },
          {
            title: "Total Quantity & Amount",
            sectionType: "object",
            fields: [
              { key: "netProductWeight", label: "Product Net Weight" },
              { key: "totalProductAmount", label: "Total Amount of Products" },
              { key: "netPackagingMaterialWeight", label: "Packaging Material Net Weight" },
              { key: "totalPackagingMaterialAmount", label: "Total Amount of Packaging Material" },
              { key: "totalAmtInWords", label: "Product Total Amount in Words" },
            ],
            gridColumns: 4,
          },
          {
            title: "Driver Details",
            sectionType: "object",
            fields: [
              { 
                key: "driverName", 
                label: "Driver Name",
                render: (value: string) => value? convertInTitleCase(value) : '',
             },
              { 
                key: "licenseNo", 
                label: "License Number",
                render: (value: string) => value? value.toUpperCase() : '',
            },
            { 
                key: "contactNo", 
                label: "Contact Number",
                render: (value: string) => value? value : '',
            },
            { 
                key: "altContactNo", 
                label: "Alternate Contact Number",
                render: (value: string) => value? value : '',
             },
             { 
                 key: "vehicleNo", 
                 label: "Vehicle Number",
                 render: (value: string) => value? value.toUpperCase() : '',
             },
            ],
            gridColumns: 2,
          },
        ],
      }
    return (
        <PreviewContainer title='Delivery Challan Preview'>
            <DataViewer config={dcConfig} data={previewDC || []} />
        </PreviewContainer>
    )
}

