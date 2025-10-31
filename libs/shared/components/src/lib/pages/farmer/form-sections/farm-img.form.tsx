import { Grid2 } from '@mui/material'
import { ImageUpload } from '../../../components'

export const FarmerImageSection = () => {
    return (
        <Grid2 size={12} container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <ImageUpload
                    isRequired={false}
                    name="farmerPhoto"
                    label="Farmer Photo" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <ImageUpload
                    isRequired={false}
                    name="farmPhoto"
                    label="Farm Photo" />
            </Grid2>
        </Grid2>
    )
}
