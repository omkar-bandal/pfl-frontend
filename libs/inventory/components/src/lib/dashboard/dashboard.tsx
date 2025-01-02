import React from 'react'
import { Box, Grid, LinearProgress, TextField, Typography } from '@mui/material'
import { GetGRN, PURCHASE_API_URL, useGetAllGRN } from '@prime-fresh/purchase_api';
import { TextInput } from '@prime-fresh/ui_shared';

export const DashboardInventory = () => {
  const [date, setDate] = React.useState<string>();
  const { data: grns, isLoading } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
  console.log("GRNs : ", grns)
  const results = grns?.reduce(
    (acc, grn) => {
      // Add total quantity of all products in this GRN
      const totalQuantity = grn.products.reduce((sum, product) => sum + (product.quantity || 0), 0);
      acc.totalQuantity += totalQuantity;
  
      // Add total amount of this GRN
      acc.totalAmount += grn.totalAmt || 0;
  
      // Count products with rtv "Yes" or "No"
      grn.products.forEach(product => {
        if (product.rtv === "yes") acc.rtvYesCount += 1;
        if (product.rtv === "no") acc.rtvNoCount += 1;
      });
  
      return acc;
    },
    {
      totalQuantity: 0, // Ensure these are numbers
      totalAmount: 0, // Ensure these are numbers
      rtvYesCount: 0,
      rtvNoCount: 0,
    }
  );
  const calculateTotalQuantity = (grns: GetGRN[]): number => {
    return grns.reduce((total, grn) => {
      const grnQuantity = grn.products.reduce((sum, product) => sum + Number(product.quantity || 0), 0);      return total + grnQuantity;
    }, 0);
  };
  const calculateTotalAmount = (grns: GetGRN[]): number => {
    return grns.reduce((total, grn) => total + Number(grn.totalAmt || 0), 0);
};

  return (
    isLoading ? (
      <Box sx={{ flex: 1 }}>
        <LinearProgress />
      </Box>
    ) :
      (<Box sx={{ flex: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              type="date"
              name="date"
              label="Date"
              value={date}
              size="small"
              InputLabelProps={{ shrink: true }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDate(event.target.value);
              }} />
          </Grid>
        </Grid>
        <Typography variant='body2' component="div"> Quantity: {calculateTotalQuantity(grns? grns : [])}</Typography>
        <Typography variant='body2' component="div">Total Amount: {calculateTotalAmount(grns? grns : [])}</Typography>
        <Typography variant='body2' component="div">Total RTV based GRN Products: {results?.rtvYesCount}</Typography>
        <Typography variant='body2' component="div">Total Non - RTV based GRN Products : {results?.rtvNoCount}</Typography>
      </Box>)
  )
}

