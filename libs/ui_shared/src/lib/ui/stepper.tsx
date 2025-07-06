import React, { FC } from 'react';
import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import { CheckCircle, Cancel, PauseCircleFilled } from '@mui/icons-material';
export interface ProgressStep {
  title: string;
  subtitle?: string;
  status: 'approved' | 'rejected' | 'pending';
}

export interface ProgressStepperProps {
  steps: ProgressStep[];
}
export const ProgressStepper: FC<ProgressStepperProps> = (props) => {
  const { steps } = props;
  const activeStep = steps.findIndex((step) => step.status === 'pending');
  const getStepIcon = (status: ProgressStep['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle fontSize="medium" color="success" />;
      case 'rejected':
        return <Cancel fontSize="medium" color="error" />;
      case 'pending':
      default:
        return <PauseCircleFilled fontSize="medium" color="warning" />;
    }
  };
  return (
    <Stepper nonLinear alternativeLabel activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} completed={step.status === 'approved' ? true : false}>
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
