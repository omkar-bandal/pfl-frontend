import React, { useMemo, useState } from 'react'
import { Box, Card, CardContent, FormControl, FormHelperText, Grid2, InputAdornment, LinearProgress, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import { DashboardCard } from './card'
import { useGetPurchaseQtyAmtData, useGetPurchaseQtyAmtDateRangeWise, useGetPurchaseTotalQtyAmt, useGetSaleQtyAmtDateRangeWise } from '@prime-fresh/purchase/modules'
import { FormTabs, Label, TabPanel } from '@prime-fresh/ui_shared'
import { mapToValueLabelArray, useGetCompanyNames } from '@prime-fresh/shared/modules'
import { Gauge } from '@mui/x-charts'
import { LineGraph } from './bar-chart'

export const DashboardPurchase = () => {
  const [tab, setTab] = useState<number>(0);
  const [filterType, setFilterType] = useState<string>("source");
  const [filterValue, setFilterValue] = useState<string>("vendor");
  const [period, setPeriod] = useState<string>("tillDate");
  const [startDate, setStartDate] = useState<string | null>("");
  const [endDate, setEndDate] = useState<string | null>("");

  const { data: company } = useGetCompanyNames();
  const companies = company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [];

  const { data: allPurchaseData, isLoading } = useGetPurchaseTotalQtyAmt();
  const { data: allSaleData } = useGetPurchaseTotalQtyAmt();

  const { data: dataByFilters } = useGetPurchaseQtyAmtData(filterType, filterValue);

  const { data: purchaseByDate } = useGetPurchaseQtyAmtDateRangeWise(period, startDate, endDate);
  const { data: saleByDate } = useGetSaleQtyAmtDateRangeWise(period, startDate, endDate);

  const filteredTotalQty = useMemo(() => dataByFilters?.data ? Number(dataByFilters.data.totalQuantityInKg.toFixed(2)) : 0, [dataByFilters]);
  const filteredQuantities = useMemo(() => dataByFilters?.data ? dataByFilters?.data.dateWise.map(data => Number(data.quantity.toFixed(2))) : [], [dataByFilters]);
  console.log("Quantity arr", filteredQuantities);

  const filteredTotalAmt = useMemo(() => dataByFilters?.data ? Number(dataByFilters.data.totalAmount.toFixed(2)) : 0, [dataByFilters]);
  const filteredAmounts = useMemo(() => dataByFilters?.data ? dataByFilters?.data.dateWise.map(data => Number(data.amount.toFixed(2))) : [], [dataByFilters]);
  console.log("Amt arr: ", filteredAmounts);

  const filteredDates = useMemo(() => dataByFilters?.data ? dataByFilters?.data.dateWise.map(data => data.date) : [], [dataByFilters]);
  console.log("Date arr: ", filteredDates);

  const totalPurchaseQty = useMemo(() => allPurchaseData?.data ? Number(allPurchaseData?.data?.totalQuantityInKg.toFixed(2)) : 0, [allPurchaseData]);
  const totalPurchaseAmt = useMemo(() => allPurchaseData?.data ? Number(allPurchaseData?.data?.totalAmount.toFixed(2)) : 0, [allPurchaseData]);

  const totalSaleQty = useMemo(() => allSaleData?.data ? Number(allSaleData?.data?.totalQuantityInKg.toFixed(2)) : 0, [allSaleData]);
  const totalSaleAmt = useMemo(() => allSaleData?.data ? Number(allSaleData?.data?.totalAmount.toFixed(2)) : 0, [allSaleData]);

  const purchaseQtyByDate = useMemo(() => purchaseByDate?.data?.quantity ? Number(purchaseByDate?.data?.quantity.toFixed(2)) : 0, [purchaseByDate])
  const purchaseAmtByDate = useMemo(() => purchaseByDate?.data?.amount ? Number(purchaseByDate?.data?.amount.toFixed(2)) : 0, [purchaseByDate])

  const saleQtyByDate = useMemo(() => saleByDate?.data?.quantity ? Number(saleByDate?.data?.quantity.toFixed(2)) : 0, [saleByDate])
  const saleAmtByDate = useMemo(() => saleByDate?.data?.amount ? Number(saleByDate?.data?.amount.toFixed(2)) : 0, [saleByDate])

  const periodData = [
    { value: "tillDate", label: "Till Date" },
    { value: "today", label: "Today" },
    { value: "financialYear", label: "This Year" },
    { value: "dateRange", label: "Select By Date" }
  ]
  const filterTypes = [{ value: "source", label: "Source" }, { value: "companyName", label: "Company Name" }];
  const filterValues = filterType === "source" ? [{ value: "vendor", label: "Vendor" }, { value: "farmer", label: "Farmer" }] : companies;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const handlePeriodChange = (e: SelectChangeEvent) => {
    if (["today", "financialYear", "tillDate"].includes(e.target.value)) {
      setStartDate(null);
      setEndDate(null);
      setPeriod(e.target.value);
    } else {
      setPeriod(e.target.value);
    }
  }
  return (
    isLoading ? (
      <Box flex={1}>
        <LinearProgress />
      </Box>
    ) :
      (< Box flex={1} >
        <FormTabs tabLabels={["Overview", "Purchase", "Sales"]} value={tab} handleChange={handleTabChange} />
        {/* Overview Section */}
        <TabPanel index={0} value={tab} key={0}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            {period === "dateRange" &&
              <Stack direction="row">
                <FormControl sx={{ width: 200, marginX: 1 }} >
                  <Label name='startDate' label='Start Date' isError={false} />
                  <TextField
                    size="small"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }} />
                </FormControl>
                <FormControl sx={{ width: 200, marginX: 1 }} >
                  <Label name='endDate' label='End Date' isError={false} />
                  <TextField
                    size="small"
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    InputLabelProps={{ shrink: true }} />
                </FormControl>
              </Stack>}
            <FormControl sx={{ width: 200, marginX: 1 }}>
              <Label name='period' label='Period' isError={false} />
              <Select
                labelId="range"
                id="range"
                size="small"
                value={period}
                onChange={e => handlePeriodChange(e)}>
                {periodData.map(period =>
                  <MenuItem key={period.value} value={period.value}>
                    {period.label}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
          <Grid2 container alignItems="center" spacing={1}>
            <Grid2 size={{ xs: 12, md: 2 }} marginTop={2}>
              <Typography variant='h6' component="div" sx={{ fontWeight: 600 }}>Purchase</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-qty">Total Quantity</FormHelperText>
                <OutlinedInput
                  id="total-qty"
                  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  value={purchaseQtyByDate}
                  readOnly />
              </FormControl>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-amt">Total Amount</FormHelperText>
                <OutlinedInput
                  id="total-amt"
                  startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                  value={purchaseAmtByDate}
                  readOnly />
              </FormControl>
            </Grid2>
          </Grid2>
          <Grid2 container alignItems="center" spacing={1}>
            <Grid2 size={{ xs: 12, md: 2 }} marginTop={2}>
              <Typography variant='h6' component="div" sx={{ fontWeight: 600 }}>Sale</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-qty">Total Quantity</FormHelperText>
                <OutlinedInput
                  id="total-qty"
                  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  value={saleQtyByDate}
                  readOnly />
              </FormControl>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-amt">Total Amount</FormHelperText>
                <OutlinedInput
                  id="total-amt"
                  startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                  value={saleAmtByDate}
                  readOnly />
              </FormControl>
            </Grid2>
          </Grid2>
        </TabPanel>

        {/* Purchase Section */}
        <TabPanel index={1} value={tab} key={1}>
          <Grid2 container alignItems="center" spacing={1} sx={{ border: `1px solid #ccc`, borderRadius: 2, padding: 1 }}>
            <Grid2 size={{ xs: 12, md: 2 }} marginTop={2}>
              <Typography variant='h6' component="div" sx={{ fontWeight: 600 }}>Total Purchase</Typography>
              <Typography variant='caption' component="div">(Till Date)</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-qty">Total Quantity</FormHelperText>
                <OutlinedInput
                  id="total-qty"
                  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="total-qty"
                  value={totalPurchaseQty}
                  readOnly
                  inputProps={{
                    'aria-label': 'total-qty',
                  }}
                />
              </FormControl>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <FormControl variant="outlined" fullWidth size='small'>
                <FormHelperText id="total-amt">Total Amount</FormHelperText>
                <OutlinedInput
                  id="total-amt"
                  startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                  aria-describedby="total-amt"
                  value={totalPurchaseAmt}
                  readOnly
                  inputProps={{
                    'aria-label': 'total-amt',
                  }}
                />
              </FormControl>
            </Grid2>
          </Grid2>

          <Box sx={{ display: "flex", alignItems: "center", marginY: 1 }}>
            <FormControl sx={{ width: 200, marginX: 1 }}>
              <Label name='type' label='Type' isError={false} />
              <Select
                labelId="range"
                id="range"
                size="small"
                value={filterType}
                onChange={e => setFilterType(e.target.value)}>
                {filterTypes.map(period =>
                  <MenuItem key={period.value} value={period.value}>
                    {period.label}
                  </MenuItem>
                )}
              </Select>
            </FormControl>

            <FormControl sx={{ width: 500, marginX: 1 }}>
              <Label name='filterValue' label='Subtype' isError={false} />
              <Select
                labelId="filterValue"
                id="filterValue"
                size="small"
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}>
                {filterValues.map(period =>
                  <MenuItem key={period.value} value={period.value}>
                    {period.label}
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
          <Grid2 container spacing={1}>
            <Grid2 size={4}>
              <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" textAlign="center" sx={{ color: 'text.secondary', fontWeight: "bold" }}>
                    Purchase by {filterValue}
                  </Typography>
                  <Typography variant="caption" component="div" textAlign="center" sx={{ fontWeight: 700 }}>
                    Quantity
                  </Typography>
                  <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 700 }}>
                    {filteredTotalQty} Kg
                  </Typography>
                  <Gauge width={200} height={200} value={Math.round((filteredTotalQty / totalPurchaseQty) * 100) || 0} startAngle={-90} endAngle={90} />
                  <Typography variant="caption" component="div" textAlign="center" sx={{ fontWeight: 700 }}>
                    Amount
                  </Typography>
                  <Typography variant="h6" component="div" textAlign="center" sx={{ fontWeight: 700 }}>
                    ₹{filteredTotalAmt}
                  </Typography>
                  <Gauge width={200} height={200} value={Math.round((filteredTotalAmt / totalPurchaseAmt) * 100) || 0} startAngle={-90} endAngle={90} />
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={8}>
              <Grid2 container direction="column">
                <Grid2 size={12} sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <LineGraph label='Quantity' xData={filteredDates} yData={filteredQuantities} />
                </Grid2>
                <Grid2 size={12} sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <LineGraph label='Amount' xData={filteredDates} yData={filteredAmounts} />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </TabPanel>
      </Box >)
  )
}
