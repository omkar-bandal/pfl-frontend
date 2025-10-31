import { FC, useMemo } from 'react';
import { LineChart, ValueDisplayCard, StatCard } from '../../../components';
import { Grid2, Skeleton, Slider } from '@mui/material';
import { IAdminDashboardPurchaseData } from '@prime-fresh/services';

type PurchaseSectionProps = {
  data: IAdminDashboardPurchaseData | null;
  purchaseQueryParams: { page: number; limit: number };
  onPurchaseQueryParamsChange: any;
  totalPages: number;
  isLoading?: boolean;
};
export const PurchaseSection: FC<PurchaseSectionProps> = ({
  data,
  onPurchaseQueryParamsChange,
  purchaseQueryParams,
  totalPages = 1,
  isLoading = false,
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
            title="Purchase Quantity"
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
            title="Purchase Amount"
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
            value={purchaseQueryParams.page}
            onChange={onPurchaseQueryParamsChange}
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
          <LineChart
            title="Purchase Quantity (Kg)"
            data={currentQtyPage ?? []}
            groupBy="date"
            height={300}
            color="#10893E"
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="wave" width={`100%`} height={300} />
        ) : (
          <LineChart
            title="Purchase Amount (Rs)"
            data={currentAmtPage ?? []}
            groupBy="date"
            height={300}
            color="#0063B1"
          />
        )}
      </Grid2>
    </Grid2>
  );
};
