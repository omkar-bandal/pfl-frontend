import { Card, CardContent, Typography, Box } from "@mui/material"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"

interface MetricCardProps {
  title: string,
  quantity: number,
  percQuantity?: number
  amount: number,
  percAmount?: number
  cardColor?: string
}

export function MetricCard(props: MetricCardProps) {
  const { title, quantity, amount, percQuantity, percAmount, cardColor } = props;
  return (
    <Card sx={{ backgroundColor: cardColor || "#FFFFFF", color: cardColor ? "#FFFFFF" : "#595959" }}>
      <CardContent>
        <Typography gutterBottom variant="body2" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginY: 1 }}>
          <Typography variant="subtitle1" color={cardColor ? "#FFFFFF" : "#595959"} component="span" sx={{ fontSize: 20, fontWeight: 700 }}>
            Quantity
          </Typography>
          <Typography variant="subtitle1" color={cardColor ? "#FFFFFF" : "#595959"} component="div" sx={{ fontSize: 20, fontWeight: 700 }}>
            {quantity} Kg
          </Typography>
          {percQuantity && <Typography variant="subtitle1" color={cardColor ? "#FFFFFF" : "#595959"} component="div" sx={{ fontSize: 20, fontWeight: 700 }}>
            {Math.abs(percQuantity).toFixed(2)}%
            {percQuantity >= 0 ? (
              <TrendingUpIcon color="inherit" fontSize="medium" />
            ) : (
              <TrendingDownIcon color="inherit" fontSize="medium" />
            )}
          </Typography>}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginY: 1 }}>
          <Typography variant="body1" color={cardColor ? "#FFFFFF" : "#595959"} component="span" sx={{ fontSize: 20, fontWeight: 700 }}>
            Amount
          </Typography>
          <Typography variant="body1" color={cardColor ? "#FFFFFF" : "#595959"} component="div" sx={{ fontSize: 20, fontWeight: 700 }}>
            ₹ {amount}
          </Typography>
          {percAmount && <Typography variant="body1" color={cardColor ? "#FFFFFF" : "#595959"} component="div" sx={{ fontSize: 20, fontWeight: 700 }}>
            {Math.abs(percAmount).toFixed(2)}%
            {percAmount >= 0 ? (
              <TrendingUpIcon color="inherit" fontSize="medium" />
            ) : (
              <TrendingDownIcon color="inherit" fontSize="medium" />
            )}
          </Typography>}
        </Box>
      </CardContent>
    </Card>
  )
}

