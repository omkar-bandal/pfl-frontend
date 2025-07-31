import { DocumentStatus } from '../../../../api/common_api/src/index.ts';
import * as React from 'react';
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
export declare const VerticalStepper: React.FC<VerticleStepperProps>;
