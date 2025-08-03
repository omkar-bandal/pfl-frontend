import { Inventory } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FormProducts } from "@prime-fresh/common_api";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { ObjectViewerConfig, formatCurrency, formatDate } from "@prime-fresh/ui_shared";

export const returnByCustomerViewConfig: ObjectViewerConfig = {
  sections: [
    {
      sectionType: "object",
      fields: [
        {
          key: "deliveryChallanNo",
          label: "Challan Number",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{value?.toUpperCase()}</Typography> : '',
        },
        {
          key: "companyName",
          label: "Company Name",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{convertInTitleCase(value || '')}</Typography> : '',
        },
        {
          key: "date",
          label: "Date",
          render: (value: string) => value ? <Typography variant='body1' component='span'>{formatDate(value || '')}</Typography> : '',
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
      icon: <Inventory />,
      fieldArrayName: "returnedProducts",
      keyField: "id",
      fields: [
        {
          key: "productName",
          label: "Product",
          width: "40%",
          render: (value: string, item: FormProducts) => (
            <Typography variant="body1" color="text.primary">
              {`${convertInTitleCase(value || '')} ${item.count} ${item.size} ${item.variety}`}
            </Typography>
          ),
        },
        {
          key: "saleUoM",
          label: "Sales UoM",
          width: "10%",
        },
        {
          key: "returnedUOM",
          label: "Returned UoM",
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
          render: (value: number) => value ? formatCurrency(value) : 0,
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
  ],
}