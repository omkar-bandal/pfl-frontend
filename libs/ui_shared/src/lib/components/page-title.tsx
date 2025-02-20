import { Typography } from '@mui/material'

export const PageTitle = ({pagetitle}:{pagetitle: string}) => {
  return (
    <Typography component="div" variant="h5" sx={{fontWeight: 700, color: "#595959"}}>{pagetitle}</Typography>
  )
}

