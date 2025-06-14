/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useCallback, useEffect, useState, useMemo } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material';
import { useFormikContext } from 'formik';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export type FormAccordionPropType = {
  panel: string;
  children: React.ReactNode;
  openOnError?: boolean;
};

const FormAccordionComponent: React.FC<FormAccordionPropType> = ({ panel, children, openOnError }) => {
  const { errors } = useFormikContext<any>();

  const hasErrors = useMemo(() => openOnError && errors && Object.keys(errors).length > 0, [errors, openOnError]);

  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    if (hasErrors) {
      setExpanded(panel);
    }
  }, [hasErrors, panel]);

  const handleChange = useCallback(
    (panelName: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panelName : false);
    },
    []
  );

  return (
    <Box flex={1}>
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary aria-controls={`${panel}-content`} id={`${panel}-header`}>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {panel}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const FormAccordion = memo(FormAccordionComponent);


// type FormAccordionPropType = {
//     panel: string;
//     children: React.ReactNode;
//     openOnError?: boolean;
// }
// export const FormAccordion: React.FC<FormAccordionPropType> = (props) => {
//     const { panel, children, openOnError } = props;
//     const { errors } = useFormikContext<any>();
//     const [expanded, setExpanded] = React.useState<string | false>(false);
  
//     React.useEffect(() => {
//       if (openOnError && errors && Object.keys(errors).length > 0) {
//         setExpanded(panel);
//       }
//     }, [errors, panel, openOnError]);
  
//     const handleChange =
//       (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//         setExpanded(newExpanded ? panel : false);
//       };
  
//     return (
//         <Box flex={1}>
//             <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
//                 <AccordionSummary aria-controls={panel} id={panel}>
//                     <Typography variant='body1' sx={{ fontWeight: 700 }}>{panel}</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     {children}
//                 </AccordionDetails>
//             </Accordion>
//         </Box>
//     );
// }
