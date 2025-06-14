import { Inventory } from '@mui/icons-material';
import { Box, LinearProgress } from '@mui/material';
import { convertInTitleCase, useGetStockById } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig } from '@prime-fresh/ui_shared';
import { useParams } from 'react-router-dom';

export const StockView = () => {
  const { id } = useParams<{ id: string }>();
  const stockDetailId = id ? id : '';
  const { data, isLoading } = useGetStockById(stockDetailId);
  const stockData = data?.data ? data.data : null;
  const stockDataConfig: ObjectViewerConfig = {
    sections: [
        {
            sectionType: "object",
            icon: <Inventory />,
            title: "Stock Details",
            layout: "list",
            fields: [
                {
                    key: "companyName",
                    label: "Company Name",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "location",
                    label: "Location",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "product",
                    label: "Product Name",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "varients",
                    label: "Varient",
                    render: (value: string) => value ? convertInTitleCase(value) : '-',
                },
                {
                    key: "onHandQty",
                    label: "In Hand Quantity",
                    render: (value: number) => value ? `${value} Kg` : 0,
                },
                {
                    key: "amount",
                    label: "Amount",
                    render: (value: number) => value ? `Rs. ${value}` : 0,
                },
                {
                    key: "countedQty",
                    label: "Counted Quntity",
                    render: (value: number) => value ? `${value} Kg` : 0,
                },
            ]
        },
    ]
  };
  return (
    <Box flex={1}>
      {isLoading ? (
        <Box flex={1}>
          <LinearProgress />
        </Box>
      ) : (
          <DataViewer
            config={stockDataConfig}
            data={stockData !== null ? stockData : {}}
          />
      )}
    </Box>
  );
};
