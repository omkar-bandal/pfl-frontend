import React, { FC } from 'react';
import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import { CheckCircle, Cancel, PauseCircleFilled } from '@mui/icons-material';
import { DocumentStatus } from '@prime-fresh/common_api';
export interface ProgressStep {
  title: string;
  subtitle?: string;
  status: DocumentStatus;
}

export interface ProgressStepperProps {
  steps: ProgressStep[];
}
export const ProgressStepper: FC<ProgressStepperProps> = (props) => {
  const { steps } = props;
  const activeStep = steps.findIndex((step) => step.status === 'hold' || step.status === 'query');
  const getStepIcon = (status: ProgressStep['status']) => {
    if (status === 'approved' || status === 'COMPLETE' || status === 'VERIFIED')
      return <CheckCircle fontSize="medium" color="success" />;
    else if (status === 'REJECT')
      return <Cancel fontSize="medium" color="error" />;
    else
      return <PauseCircleFilled fontSize="medium" color="warning" />;
  }
  const getCompletedStep = (status: DocumentStatus) => {
    if (status === 'approved' || status === 'VERIFIED' || status === 'COMPLETE')
      return true;
    else if (status === 'REJECT' || status === 'hold' || status === 'query')
      return false
  }
  return (
    <Stepper nonLinear alternativeLabel activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} completed={getCompletedStep(step.status)}>
          <StepLabel icon={getStepIcon(step.status)}>
            <Typography variant="body2" component="div" sx={{ fontWeight: 600 }}>
              {step.title}
            </Typography>
            <Typography variant="caption" component="div">
              {step.subtitle}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
