import { FC } from 'react';
import { Step, StepLabel, Stepper, StepperProps } from '@mui/material';

export interface FormStepperProps extends Omit<StepperProps, 'activeStep' > {
  steps: string[];
  activeStep: number;
}
export const FormStepper: FC<FormStepperProps> = ({ steps, activeStep, ...rest }) => {
  return (
    <Stepper {...rest} activeStep={activeStep} sx={{ marginY: 2 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
};