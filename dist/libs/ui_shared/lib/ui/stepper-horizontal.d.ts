import { DocumentStatus } from '../../../../api/common_api/src/index.ts';
import { FC } from 'react';

export interface ProgressStep {
    title: string;
    subtitle?: string;
    status: DocumentStatus;
}
export interface ProgressStepperProps {
    steps: ProgressStep[];
}
export declare const ProgressStepper: FC<ProgressStepperProps>;
