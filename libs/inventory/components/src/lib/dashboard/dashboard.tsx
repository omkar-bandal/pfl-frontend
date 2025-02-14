import { Container, Grid, Typography } from '@mui/material';
import { BarChart, DefaultizedPieValueType, pieArcLabelClasses, PieChart } from '@mui/x-charts';
import { axiosInstance, COM_API_URL } from '@prime-fresh/common_api';
import { PURCHASE_API_URL, useGetAllGRN } from '@prime-fresh/purchase_api';
import { FormTabs, TabPanel } from '@prime-fresh/ui_shared';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export const DashboardInventory = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getRTVdata = async () => {
    try {
      const result = await axiosInstance.get(`${COM_API_URL.BASE_URL}/grns/getGrns/datartv`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  const { data: grns, isLoading: grnloading } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
  const { data: rtv, isLoading: rtvloading } = useQuery({ queryKey: ["rtv"], queryFn: getRTVdata })

  if (grnloading && rtvloading) {
    return <></>
  }
  console.log("grns", grns);
  console.log("RTV Data", rtv);

  const newArray = grns?.flatMap(order =>
    order.grnProducts.map(product => ({
      date: order.createdDate,
      amt: order.totalAmt,
    }))
  );
  const createdDate = grns?.map(grn => grn.createdDate);
  const totalAmt = grns?.map(grn => Number(grn.totalAmt));


  const rtvAmtData = [
    { label: 'RTV Amout', value: Number(rtv.rtvamt), color: '#0088FE' },
    { label: 'Non-RTV Amount', value: Number(rtv.nonrtvamt), color: '#00C49F' },
  ];
  const rtvQtyData = [
    { label: 'RTV Quantity', value: Number(rtv.rtvqty), color: '#0088FE' },
    { label: 'Non-RTV Quantity', value: Number(rtv.nonrtvqty), color: '#00C49F' },
  ];
  // console.log("rtv data", data);
  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };
  const TOTAL = Number(rtv.rtvamt + rtv.nonrtvamt)

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <Container maxWidth="lg">
      <FormTabs value={value} handleChange={handleChange} tabLabels={["Purchase", "Sales"]} />
      <TabPanel value={value} index={0}>
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Grid item xs={4}>
            <Grid container spacing={2} direction="column" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Grid item>
                <Typography variant='body2' component="div" sx={{ fontWeight: 600 }}>{`Total RTV Based Amount : Rs.${Number(rtv.nonrtvamt) + Number(rtv.rtvamt)}`}</Typography>
                <PieChart
                  series={[
                    {
                      outerRadius: 100,
                      data: rtvAmtData,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: 'white',
                      fontSize: 14,
                    },
                  }}
                  {...sizing}
                />
              </Grid>
              <Grid item>
                <Typography variant='body2' component="div" sx={{ fontWeight: 600 }}>{`Total RTV Based Quantity : ${Number(rtv.rtvqty) + Number(rtv.nonrtvqty)} Kg`}</Typography>
                <PieChart
                  series={[
                    {
                      outerRadius: 100,
                      data: rtvQtyData,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: 'white',
                      fontSize: 14,
                    },
                  }}
                  {...sizing}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} >
            <Typography variant='body2' component="div" sx={{ fontWeight: 600 }}>GRN Amount Distribution Per Date</Typography>
            <BarChart
              width={600}
              height={300}
              series={[{ data: totalAmt, label: 'Amount Per Day', type: 'bar' }]}
              xAxis={[{ scaleType: 'band', data: createdDate }]}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>

    </Container>
  )
}

