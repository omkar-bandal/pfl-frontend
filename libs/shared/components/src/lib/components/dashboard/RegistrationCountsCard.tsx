import { ArrowForward, Assignment } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  linearProgressClasses,
  LinearProgressProps,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { RegistrationCounts } from '@prime-fresh/services';

interface RegistrationCountsCardProps {
  title: string;
  metrics: RegistrationCounts | null;
  cardColor?: string;
  navLink: string;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  // [`&.${linearProgressClasses.colorPrimary}`]: {
  //   backgroundColor: theme.palette.grey[200],
  //   ...theme.applyStyles('dark', {
  //     backgroundColor: theme.palette.grey[800],
  //   }),
  // },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    // backgroundColor: '#1a90ff',
    // ...theme.applyStyles('dark', {
    // backgroundColor: '#308fe8',
    // }),
  },
}));

export const RegistrationCountsCard: React.FC<RegistrationCountsCardProps> = ({
  title,
  metrics,
  cardColor = '#2C3E50',
  navLink,
}) => {
  const theme = useTheme();
  const renderStatusBox = (label: string, count: number, color: string) => (
    <Box
      sx={{
        p: 1,
        px: 2,
        borderRadius: 999,
        bgcolor: `${color}10`,
        borderLeft: `5px solid ${color}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
      }}
    >
      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ color: color, fontWeight: 700 }}>
        {count.toLocaleString()}
      </Typography>
    </Box>
  );
  function renderLiniearProgrss(label: string, count: number, barcolor: any) {
    return (
      <Stack spacing={1}>
        <Typography variant="body2" component="div" color="primary.contrastText" sx={{ fontWeight: 700 }}>
          {label} ({count})
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" color={barcolor} value={count} sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="primary.contrastText">{`${Math.round(count)}%`}</Typography>
          </Box>
        </Box>
      </Stack>
    );
  }

  return (
    <Card
      sx={{
        width: `100%`,
        height: '100%',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        border: '1px solid #E0E0E0',
        background: `linear-gradient(to right, #0f2027, #203a43, #2c5364)`,
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography color="primary.contrastText" variant="caption" sx={{ mb: 0.5, textTransform: 'uppercase' }}>
              {title}
            </Typography>
            {/* Prominent Total Count */}
            <Typography variant="h4" color="primary.contrastText" component="div" sx={{ fontWeight: 'bold' }}>
              {metrics?.total.toLocaleString() ?? 0}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              borderRadius: '50%',
              bgcolor: `${cardColor}1A`,
              display: 'flex',
            }}
          >
            <Assignment sx={{ fontSize: 25, color: cardColor }} />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          {renderLiniearProgrss('Pending', metrics?.pending ?? 0, 'warning')}

          {renderLiniearProgrss('Approved', metrics?.approved ?? 0, 'primary')}

          {renderLiniearProgrss('Not Approved', metrics?.notApproved ?? 0, 'error')}
        </Stack>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button variant="text" color="secondary" size="small" href={navLink} endIcon={<ArrowForward />}>
            Review All
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
