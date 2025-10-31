import { KPICard } from '../../../components';
import { People } from '@mui/icons-material';
import { Box, Grid2, Skeleton } from '@mui/material';
import { IRegistrationsData } from '@prime-fresh/services';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { FC } from 'react';

type RegistrationSectionProps = {
  data: IRegistrationsData | null;
  isLoading?: boolean;
};
export const RegistrationSection: FC<RegistrationSectionProps> = ({ data, isLoading = false }) => {
  return (
    <Box flex={1}>
      <Grid2 container spacing={1}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          {isLoading ? (
            <Skeleton variant="rounded" animation="wave" width={`100%`} height={350} />
          ) : (
            <KPICard
              title="Total Customers"
              data={data?.customers ?? null}
              icon={<People fontSize="large" sx={{color: '#FFF'}} />}
              buttonTitle="View Customers"
              navigateTo={sharedRoutes.VIEW_ALL_CUSTOMER}
              cardSx={{ background: `linear-gradient(to bottom, #C0392B 70%, #E74C3C)` }}
              textColor="#FFF"
              />
            )}
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          {isLoading ? (
            <Skeleton variant="rounded" animation="wave" width={`100%`} height={350} />
          ) : (
            <KPICard
            title="Total Vendors"
            data={data?.vendors ?? null}
            icon={<People fontSize="large" />}
            buttonTitle="View Vendors"
            navigateTo={sharedRoutes.VIEW_ALL_VENDOR}
            cardSx={{ background: `linear-gradient(135deg, #004ecc, #6666ff)` }}
            textColor="#FFF"
            />
          )}
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          {isLoading ? (
            <Skeleton variant="rounded" animation="wave" width={`100%`} height={350} />
          ) : (
            <KPICard
            title="Total Farmers"
              data={data?.farmers ?? null}
              icon={<People fontSize="large" />}
              buttonTitle="View Farmers"
              navigateTo={sharedRoutes.VIEW_ALL_FARMER}
              cardSx={{ background: `linear-gradient(135deg, #09B83E, #1ABC9C)` }}
              textColor="#FFF"
            />
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};
