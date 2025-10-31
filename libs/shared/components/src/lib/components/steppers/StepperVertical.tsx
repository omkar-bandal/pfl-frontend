import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { DocumentStatus } from '@prime-fresh/services';
import { CheckCircle, Cancel, PauseCircleFilled, HelpOutlined } from '@mui/icons-material';

export interface StepperData {
  title: string;
  subtitle?: string;
  description?: string;
  disabled?: boolean;
  status: DocumentStatus;
}

export interface VerticleStepperProps {
  steps: StepperData[];
}

export const VerticalStepper: React.FC<VerticleStepperProps> = ({ steps }) => {
  const activeStep = steps.findIndex((step) => step.status === 'hold' || step.status === 'query');

  const getStepIcon = (status: string) => {
    const receivedStatus = status ? status.toLowerCase() : status;
    if (receivedStatus === 'approved' || receivedStatus === 'complete' || receivedStatus === 'verified')
      return <CheckCircle fontSize="medium" color="success" />;
    else if (receivedStatus === 'reject') return <Cancel fontSize="medium" color="error" />;
    else if (receivedStatus === 'query') return <HelpOutlined fontSize="medium" htmlColor="purple" />;
    else return <PauseCircleFilled fontSize="medium" color="warning" />;
  };

  const getCompletedStep = (status: string) => {
    const receivedStatus = status ? status.toLowerCase() : status;

    if (receivedStatus === 'approved' || receivedStatus === 'verified' || receivedStatus === 'complete') return true;
    else if (receivedStatus === 'reject' || receivedStatus === 'hold' || receivedStatus === 'query') return false;
  };

  return (
    <Box flex={1} marginY={2}>
      <Stepper activeStep={activeStep} nonLinear orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index} completed={getCompletedStep(step.status)} disabled={step.disabled}>
            <StepLabel
              icon={step.disabled ? <Cancel /> : getStepIcon(step.status)}
              optional={
                <>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {step.subtitle}
                  </Typography>
                  <Typography variant="caption">{step.description}</Typography>
                </>
              }
            >
              {step.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
