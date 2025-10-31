import React from 'react'
import { useGetUserNotifications } from '@prime-fresh/shared/modules';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material'

export const AllNotifications = () => {
  const { data } = useGetUserNotifications();
  const notifications = React.useMemo(() => data?.data ? data.data.map(noti => noti).reverse() : [], [data]);

  return (
    <Box flex={1} padding={2}>
      <Paper elevation={1} sx={{padding: 1}}>
        {notifications.map((noti, index) => (
          <Card key={index} sx={{marginY: 1}}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} paddingY={2}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }} component='div'>{noti.message}</Typography>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                  <Typography variant='caption' component='div'>{noti.date}</Typography>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <Typography variant='caption' component='div'>{noti.time}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </Box>
  )
}
