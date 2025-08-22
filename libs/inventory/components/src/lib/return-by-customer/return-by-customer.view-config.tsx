import { Inventory } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FormProducts } from "@prime-fresh/common_api";
import { IReturnedProducts } from "@prime-fresh/inventory_api";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { SectionConfig, formatCurrency, formatDate } from "@prime-fresh/ui_shared";

export const returnByCustomerViewConfig: SectionConfig[] = [
    {
      sectionType: "object",
      fields: [
        {
          key: "deliveryChallanNo",
          label: "Challan Number",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{value?.toUpperCase()}</Typography> : '',
        },
        {
          key: "date",
          label: "Date",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{formatDate(value || '')}</Typography> : '',
        },
        {
          key: "location",
          label: "Location",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value || '')}</Typography> : '',
        },
        {
          key: "companyName",
          label: "Company Name",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value || '')}</Typography> : '',
        },
        {
          key: "customerName",
          label: "Customer Name",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value || '')}</Typography> : '',
        },
        {
          key: "remark",
          label: "Remark",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value || '')}</Typography> : '',
        },
      ],
      gridColumns: 3,
    },
    {
      title: "Returned Products From Customer",
      sectionType: "array",
      layout: 'table',
      icon: <Inventory />,
      fieldArrayName: "returnedProducts",
      keyField: "id",
      fields: [
        {
          key: "productName",
          label: "Product",
          width: "20%",
          render: (value: string, item: FormProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div" sx={{ fontWeight: 600 }}>
                {`${convertInTitleCase(value || '')}`}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                {`[Count: ${item?.count || '-'}, Size: ${item?.size || '-'}, Variety: ${item?.variety || '-'}, Origin: ${item?.origin || '-'}]`}
              </Typography>
            </>
          ),
        },
        {
          key: "saleUoM",
          label: "Sales UoM",
          width: "10%",
          render: (value: string) => value ?
            (<Typography variant="caption" color="text.primary" component="div">
              {`${convertInTitleCase(value || '')}`}
            </Typography>) : '',
        },
        {
          key: "unitPrice",
          label: "Unit Price",
          width: "10%",
          render: (value: number) => value ?
            (<Typography variant="caption" color="text.primary" component="div">
              {formatCurrency(value || 0)}
            </Typography>) : 0,
        },
        {
          key: "returnedQty",
          label: "Quantity",
          width: "15%",
          render: (value: number, item: IReturnedProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div">
                Returned: {Number(item.returnedQty).toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                Rejected: {Number(item.rejectedQty).toFixed(1)}
              </Typography>
            </>
          ),
        },
        {
          key: "returnedQtyAmt",
          label: "Amount",
          width: "15%",
          render: (value: number, item: IReturnedProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div">
                Returned: {Number(item.returnedQtyAmt).toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                Rejected: {Number(item.rejectedQtyAmt).toFixed(1)}
              </Typography>
            </>
          ),
        },
        {
          key: "returnedGrossWt",
          label: "Gross Weight",
          width: "15%",
          render: (value: number, item: IReturnedProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div">
                Returned: {Number(item.returnedGrossWt).toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                Rejected: {Number(item.rejectedGrossWt).toFixed(1)}
              </Typography>
            </>
          ),
        },
        {
          key: "netWeight",
          label: "Net Weight",
          width: "15%",
          render: (value: number, item: IReturnedProducts) => (
            <>
              <Typography variant="caption" color="text.primary" component="div">
                Returned: {Number(item.returnedNetWt).toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.primary" component="div">
                Rejected: {Number(item.rejectedNetWt).toFixed(1)}
              </Typography>
            </>
          ),
        },
      ],
    },
]