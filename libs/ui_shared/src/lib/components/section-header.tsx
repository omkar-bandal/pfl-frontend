import { Box, Typography } from '@mui/material'

export const SectionHeader = ({ sectionHeader }: { sectionHeader: string }) => {
    return (
        <Box sx={{ width: "100%", borderBottom: `1px solid #BDBDBD` }}>
            <Typography
                variant='body2'
                component="div"
                sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>
                {sectionHeader}
            </Typography>
        </Box>
    )
}
