import { Close } from "@mui/icons-material"
import { Box, Dialog, Grid, IconButton, Stack, Typography } from "@mui/material"
type PreviewContainerPropTypes = {
    open: boolean,
    handleClose: ()=> void,
    title: string,
    children: React.ReactNode,
}
export const PreviewContainer: React.FC<PreviewContainerPropTypes> = ({open, title, handleClose, children}) => {
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ flex: 1, padding: 1 }}>
                <Grid container direction="column" rowSpacing={1}>
                    <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                            <Typography variant="h4" component="div">{title}</Typography>
                            <IconButton
                                edge="start"
                                color="error"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <Close fontSize='large' />
                            </IconButton>
                        </Stack>
                    </Grid>
                    {children}
                </Grid>
            </Box>
        </Dialog>
    )
}