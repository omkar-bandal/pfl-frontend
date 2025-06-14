import React from "react"
import { Close } from "@mui/icons-material"
import { Box, Dialog, Grid2, IconButton, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { previewState, setPreview, useAppDispatch, useAppSelector } from "@prime-fresh/modules"
import { PageTitle } from "../components"

// type PreviewContainerPropTypes = {
//     title: string,
//     children: React.ReactNode,
// }

// const Transition = React.forwardRef(function Transition(
//     props: TransitionProps & {
//         children: React.ReactElement<unknown>;
//     },
//     ref: React.Ref<unknown>,
// ) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export const PreviewContainer: React.FC<PreviewContainerPropTypes> = ({ title, children }) => {
//     const dispatch = useDispatch()
//     const open = useAppSelector(previewState);
//     return (
//         <Dialog
//             fullScreen
//             open={open}
//             onClose={() => dispatch(setPreview(false))}
//             TransitionComponent={Transition}
//         >
//             <Box sx={{ flex: 1, padding: 1 }}>
//                 <Grid22 container direction="column" rowSpacing={1}>
//                     <Grid22 container>
//                         <Grid22 size={{ xs: 11.5 }}>
//                             <PageTitle pagetitle={title} />
//                         </Grid22>
//                         <Grid22 size={{ xs: 0.5 }}>
//                             <IconButton
//                                 edge="start"
//                                 color="error"
//                                 onClick={() => dispatch(setPreview(false))}
//                                 aria-label="close"
//                             >
//                                 <Close fontSize='small' />
//                             </IconButton>
//                         </Grid22>
//                     </Grid22>
//                     {children}
//                 </Grid22>
//             </Box>
//         </Dialog>
//     )
// }

type PreviewContainerPropTypes = {
  title: string;
  children: React.ReactNode;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const PreviewContainer: React.FC<PreviewContainerPropTypes> = ({ title, children }) => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(previewState);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => dispatch(setPreview(false))}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          flex: 1,
          p: { xs: 1, sm: 2, md: 3 },
          height: "100%",
          overflowY: "auto",
        }}
      >
          <Grid2 container alignItems="center" justifyContent="space-between" paddingX={{ xs: 1, sm: 2, md: 3 }}>
            <Grid2 size={{xs: 10}}>
              <PageTitle pagetitle={title} />
            </Grid2>
            <Grid2 size={{xs: 2}} sx={{ textAlign: "right" }}>
              <IconButton
                edge="start"
                color="error"
                onClick={() => dispatch(setPreview(false))}
                aria-label="close"
              >
                <Close fontSize="medium" />
              </IconButton>
            </Grid2>
          </Grid2>
        {children}
      </Box>
    </Dialog>
  );
};

