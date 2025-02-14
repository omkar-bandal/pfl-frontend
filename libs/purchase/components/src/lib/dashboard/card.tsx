import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { FC } from "react";
type DashboardCardProps = {
    title: string;
    quantity: number;
    amount: number;
}
export const DashboardCard: FC<DashboardCardProps> = (props: DashboardCardProps) => {
    const { title, quantity, amount } = props;
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{ color: 'text.secondary', fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                         Quantity : {quantity}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                         Amount :{amount}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}