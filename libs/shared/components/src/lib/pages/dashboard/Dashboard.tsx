/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { Box, Divider, Grid2 } from '@mui/material';
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames } from '@prime-fresh/shared/modules';
import { useGetDashboardData } from '@prime-fresh/purchase/modules';
import { DashboardCard, PurchaseByFarmer, PurchaseByProduct, PurchaseByVendor } from '../../components/dashboard';
import { Select } from '@prime-fresh/ui_shared';
import { DashboardDataInitValue } from '@prime-fresh/purchase_api';

type CardType = 'Total Purchase' | 'Purchase By Vendor' | 'Purchase By Farmer' | 'Total Sale' | 'Total Dump' | 'Total Rejection';
export const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState<CardType>('Total Purchase')
  const [filterParams, setFilterParams] = useState({
    filterType: 'tillDate',
    companyName: '',
    locationName: '',
    startDate: '',
    endDate: '',
    specificDate: '',
  });
  const { data: company } = useGetCompanyNames();
  const companies = useMemo(
    () => (company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : []),
    [company?.data]
  );
  const { data: loc } = useGetBranchesPartialData();
  const locations = useMemo(() => (loc?.data ? mapToValueLabelArray(loc?.data, 'id', 'name') : []), [loc?.data]);
  const filtersTypes = [
    { value: 'tillDate', label: 'Till Date' },
    { value: 'year', label: 'Current Year' },
    { value: 'month', label: 'Current Month' },
    { value: 'dateRange', label: 'By Date Range' },
    { value: 'specificDate', label: 'By Date' },
  ];
  const { data: dashData } = useGetDashboardData(filterParams);
  const dashboardData = dashData?.data ? dashData.data : DashboardDataInitValue;
  const { grns, dump, deliverychallan, rejection } = dashboardData;
  const { totalPurchase, totalpurchaseByVendor, totalPurchaseByFarmer } = grns;
  // const { totalSaleQtyAndAmount } = deliverychallan;

  const dashboardCardData = [
    {
      label: "Total Purchase",
      color: "#009933",
      quantityCount: totalPurchase.totalQuantityInKg || 0,
      quantityPercent: 100,
      amountCount: totalPurchase.totalAmount || 0,
      amountPercent: 100,
      onClickAction: () => setSelectedCard('Total Purchase')
    },
    {
      label: "Purchase By Farmer",
      color: "#ff9900",
      quantityCount: totalPurchaseByFarmer.totalQuantityInKg || 0,
      quantityPercent:
        Number((((totalPurchaseByFarmer.totalQuantityInKg || 1) /
          (totalPurchase.totalQuantityInKg || 1)) *
          100).toFixed(2)),

      amountCount: totalPurchaseByFarmer.totalAmount || 0,
      amountPercent:
        Number((((totalPurchaseByFarmer.totalAmount || 1) /
          (totalPurchase.totalAmount || 1)) *
          100).toFixed(2)),
      onClickAction: () => setSelectedCard('Purchase By Farmer')
    },
    {
      label: "Purchase By Vendor",
      color: "#99004d",
      quantityCount: dashboardData?.grns.totalpurchaseByVendor.totalQuantityInKg || 0,
      quantityPercent:
        Number(((totalpurchaseByVendor.totalQuantityInKg || 1) /
          (totalPurchase.totalQuantityInKg || 1)) *
          100).toFixed(2),
      amountCount: totalpurchaseByVendor.totalAmount || 0,
      amountPercent:
        Number(((totalpurchaseByVendor.totalAmount || 1) /
          (totalPurchase.totalAmount || 1)) *
          100).toFixed(2),
      onClickAction: () => setSelectedCard('Purchase By Vendor')
    },
    {
      label: "Total Sales",
      quantityCount: deliverychallan?.totalSaleQtyAndAmount.totalQuantityInKg || 0,
      quantityPercent: 100,
      amountCount: deliverychallan?.totalSaleQtyAndAmount.totalAmount || 0,
      amountPercent: 100,
      color: "#0044cc",
      onClickAction: () => setSelectedCard('Total Sale')
    },
    {
      label: "Total Dump",
      color: "#a3a3c2",
      quantityCount: dump.totalQuantity || 0,
      quantityPercent:
        Number(((dump.totalQuantity || 1) / (totalPurchase.totalQuantityInKg || 1)) * 100).toFixed(2),
      amountCount: dump.totalAmount || 0,
      amountPercent:
        Number(((dump.totalAmount || 1) / (totalPurchase.totalAmount || 1)) * 100).toFixed(2),
      onClickAction: () => setSelectedCard('Total Dump')
    },
    {
      label: "Total Rejection",
      quantityCount: rejection.totalQuantity || 0,
      quantityPercent:
        Number(((rejection.totalQuantity || 1) / (totalPurchase.totalQuantityInKg || 1)) * 100).toFixed(2),
      amountCount: rejection.totalAmount || 0,
      amountPercent:
        Number(((rejection.totalAmount || 1) / (totalPurchase.totalAmount || 1)) * 100).toFixed(2),
      color: "#ff3333",
      onClickAction: () => setSelectedCard('Total Rejection')
    }
  ]

  console.log('Dashboard Data: ', dashboardData);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilterParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    // isLoading ? (
    //   <Box flex={1}>
    //     <LinearProgress />
    //   </Box>
    // ) :
    <Box flex={1}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Select
            name='filterType'
            label='Duration'
            value={filterParams.filterType}
            options={filtersTypes}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Select
            name='filterParams.companyName'
            label='Company Name'
            value={filterParams.companyName}
            options={companies}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Select
            name='locationName'
            label='Location'
            value={filterParams.locationName}
            options={locations}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 container spacing={1} marginY={1}>
          {dashboardCardData.map(data => (
            <Grid2 size={{ xs: 12, md: 4 }}>
              <DashboardCard
                label={data.label}
                color={data.color}
                quantityCount={data.quantityCount}
                quantityPercent={data.quantityPercent}
                amountCount={data.amountCount}
                amountPercent={data.amountPercent}
                onClickAction={data.onClickAction}
              />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <Divider sx={{ marginY: 1 }} />
      {selectedCard=== 'Total Purchase' && <PurchaseByProduct />}
      {selectedCard=== 'Purchase By Farmer' && <PurchaseByFarmer />}
      {selectedCard=== 'Purchase By Vendor' && <PurchaseByVendor />}
    
    </Box>
  );
};
