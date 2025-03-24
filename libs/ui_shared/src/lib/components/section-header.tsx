import { Box, Typography } from '@mui/material'

export const SectionHeader = ({sectionHeader} : {sectionHeader: string}) => {
    return (
        <Box sx={{ width: "100%", borderBottom: `1px solid #BDBDBD` }}>
            <Typography variant="body2">{sectionHeader}</Typography>
        </Box>
    )
}
