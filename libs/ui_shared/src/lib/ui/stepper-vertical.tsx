import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { CheckCircle, Cancel, PauseCircleFilled, HelpOutlined} from '@mui/icons-material';
import { DocumentStatus } from '@prime-fresh/common_api';

export interface StepperData {
  title: string;
  subtitle?: string;
  description?: string;
  disabled?: boolean;
  status: DocumentStatus;
}

export interface VerticleStepperProps {
  steps : StepperData[];
}

export const VerticalStepper:React.FC<VerticleStepperProps> = ({steps}) => {
  const activeStep = steps.findIndex((step) => step.status === 'hold' || step.status === 'query');
  const getStepIcon = (status: string) => {
    if (status === 'approved' || status === 'COMPLETE' || status === 'VERIFIED')
      return <CheckCircle fontSize="medium" color="success" />;
    else if (status === 'REJECT')
      return <Cancel fontSize="medium" color="error" />;
    else if(status === 'query')
      return <HelpOutlined fontSize="medium" htmlColor='purple'/>
    else
      return <PauseCircleFilled fontSize="medium" color="warning" />;
  }
  const getCompletedStep = (status: string) => {
    if (status === 'approved' || status === 'VERIFIED' || status === 'COMPLETE')
      return true;
    else if (status === 'REJECT' || status === 'hold' || status === 'query')
      return false
  }
  
  return (
    <Box flex={1} marginY={2}>
      <Stepper activeStep={activeStep} nonLinear orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index} completed={getCompletedStep(step.status)} disabled={step.disabled}>
            <StepLabel
              icon={step.disabled ? <Cancel/> : getStepIcon(step.status)}
              optional={
                <>
                  <Typography variant='body2' sx={{ fontWeight: 700 }} >{step.subtitle}</Typography>
                  <Typography variant='caption'>{step.description}</Typography>
                </>
              }
            >
              {step.title}
            </StepLabel>
            {/* <StepContent>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent> */}
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
