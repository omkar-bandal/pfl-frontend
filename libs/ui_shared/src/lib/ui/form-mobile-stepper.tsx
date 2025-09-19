import React from "react";
import { StyledButton } from "../buttons";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  MobileStepper as MuiMobileStepper,
  type MobileStepperProps as MuiMobileStepperProps,
} from "@mui/material";

export interface MobileStepperProps extends Omit<MuiMobileStepperProps, "steps" | "nextButton" | "backButton"> {
  /** Total number of steps */
  steps: number;
  /** Current active step */
  activeStep: number;
  /** Callback when next button is clicked */
  onNext: () => void;
  /** Callback when back button is clicked */
  onBack: () => void;
  /** Text for next button (last step can be overridden separately) */
  nextText?: string;
  /** Text for back button */
  backText?: string;
  /** Text for submit (last step) */
  submitText?: string;
  /** Whether the stepper should disable next button at last step */
  disableNextOnLast?: boolean;
}

export const FormMobileStepper: React.FC<MobileStepperProps> = ({
  steps,
  activeStep,
  onNext,
  onBack,
  nextText = "Next",
  backText = "Back",
  submitText = "Submit",
  disableNextOnLast = false,
  ...rest
}) => {
  const isLastStep = activeStep === steps - 1;
  const isFirstStep = activeStep === 0;
  return (
    <MuiMobileStepper
      variant="text"
      steps={steps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <StyledButton
          variant={isLastStep ? "contained" : "text"}
          color={isLastStep ? "success" : "primary"}
          disabled={isLastStep && disableNextOnLast}
          endIcon={<KeyboardArrowRight />}
          onClick={onNext}>
          {isLastStep ? submitText : nextText}
        </StyledButton>
      }
      backButton={
         <StyledButton
          variant="text"
          color="primary"
          disabled={isFirstStep}
          startIcon={<KeyboardArrowLeft />}
          onClick={onBack}>
          {backText}
        </StyledButton>
      }
      {...rest}
    />
  );
};

