import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface KPICardProps {
    title: string;
    count: string;
    onClick?: () => void;
    color?: string; // Color for the accent border and value text
}

export const KPICard: React.FC<KPICardProps> = ({ 
    title, 
    count, 
    onClick, 
    color = "#FFFFFF"
}) => {

    const formattedCount = count.toLocaleString();

    return (
        <Card 
            sx={{ 
                // Accent line on the left
                borderLeft: `4px solid ${color}`,
                height: '100%',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-2px)', // Subtle lift on hover
                }
            }}
        >
            {/* CardActionArea makes the entire card clickable and handles ripple/focus effects */}
            <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 2 }}>
                    {/* Title */}
                    <Typography 
                        color="text.secondary" 
                        variant="subtitle2" 
                        component="div" 
                        sx={{ mb: 1, fontWeight: 500 }}
                    >
                        {title.toUpperCase()}
                    </Typography>
                    
                    {/* Count */}
                    <Typography 
                        variant="h3" 
                        component="div" 
                        sx={{ fontWeight: 'bold', color: color }}
                    >
                        {formattedCount}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
