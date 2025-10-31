import { Grid2 } from '@mui/material';
import { ImageUpload } from '../../../components';

export const ProductImage = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12 }}>
        <ImageUpload isRequired={false} name="image" label="Product Image" />
      </Grid2>
    </Grid2>
  );
};
