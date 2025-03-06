import { Close } from "@mui/icons-material"
import { Box, Dialog, Grid2, IconButton, Slide, useMediaQuery, useTheme } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { previewState, setPreview } from "@prime-fresh/modules"
import { useAppSelector } from "@prime-fresh/purchase/modules"
import React from "react"
import { useDispatch } from "react-redux"
import { PageTitle } from "../components"

type PreviewContainerPropTypes = {
    title: string,
    children: React.ReactNode,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const PreviewContainer: React.FC<PreviewContainerPropTypes> = ({ title, children }) => {
    const dispatch = useDispatch()
    const open = useAppSelector(previewState);
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={() => dispatch(setPreview(false))}
            TransitionComponent={Transition}
        >
            <Box sx={{ flex: 1, padding: 1 }}>
                <Grid2 container direction="column" rowSpacing={1}>
                    <Grid2 container>
                        <Grid2 size={{ xs: 11.5 }}>
                            <PageTitle pagetitle={title} />
                        </Grid2>
                        <Grid2 size={{ xs: 0.5 }}>
                            <IconButton
                                edge="start"
                                color="error"
                                onClick={() => dispatch(setPreview(false))}
                                aria-label="close"
                            >
                                <Close fontSize='small' />
                            </IconButton>
                        </Grid2>
                    </Grid2>
                    {children}
                </Grid2>
            </Box>
        </Dialog>
    )
}