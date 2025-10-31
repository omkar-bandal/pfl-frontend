import { FC, useMemo } from 'react';
import { LineChart, ValueDisplayCard } from '../../../components';
import { Grid2, Skeleton, Slider } from '@mui/material';
import { IAdminDashboardSalesData } from '@prime-fresh/services';

type SalesSectionProps = {
  data: IAdminDashboardSalesData | null;
  salesQueryParams: { page: number; limit: number };
  onSalesQueryParamsChange: any;
  totalPages: number;
  isLoading?: boolean;
};
export const SalesSection: FC<SalesSectionProps> = ({
  data,
  salesQueryParams,
  onSalesQueryParamsChange,
  totalPages,
  isLoading,
}) => {
  const currentQtyPage = useMemo(() => data?.dateWise.map((q) => ({ x: q.date, y: q.totalQty })), [data]);
  const currentAmtPage = useMemo(() => data?.dateWise.map((a) => ({ x: a.date, y: a.totalAmount })), [data]);

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={100} />
        ) : (
          <ValueDisplayCard
            title="Sales Quantity"
            value={data?.overallTotalQty ?? 0}
            unit="Kg"
            boxSx={{ borderLeft: `10px solid #153010` }}
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={100} />
        ) : (
          <ValueDisplayCard
            title="Sales Amount"
            value={data?.overallTotalAmount ?? 0}
            unit="Rs"
            boxSx={{ borderLeft: `10px solid #01263E` }}
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12 }} paddingX={1}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={40} />
        ) : (
          <Slider
            value={salesQueryParams.page}
            onChange={onSalesQueryParamsChange}
            size="small"
            color="info"
            min={1}
            max={totalPages}
            step={1}
            valueLabelDisplay="auto"
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={300} />
        ) : (
          <LineChart title="Sales Quantity" data={currentQtyPage ?? []} groupBy="date" height={300} color="#00C300" />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={300} />
        ) : (
          <LineChart title="Sales Amount" data={currentAmtPage ?? []} groupBy="date" height={300} color="#0061FF" />
        )}
      </Grid2>
    </Grid2>
  );
};
