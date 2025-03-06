import { Card, CardContent, Typography, Box } from "@mui/material"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"

interface MetricCardProps {
  title: string
  value: string
  percentage: number
}

export function MetricCard({ title, value, percentage }: MetricCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          {percentage >= 0 ? (
            <TrendingUpIcon color="success" fontSize="small" />
          ) : (
            <TrendingDownIcon color="error" fontSize="small" />
          )}
          <Typography variant="body2" color={percentage >= 0 ? "success.main" : "error.main"} sx={{ ml: 0.5 }}>
            {Math.abs(percentage)}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

