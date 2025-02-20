import * as React from 'react';
export declare const Accordion: import('@emotion/styled').StyledComponent<{
    children: NonNullable<React.ReactNode>;
    classes?: Partial<import('@mui/material').AccordionClasses>;
    defaultExpanded?: boolean;
    disabled?: boolean;
    disableGutters?: boolean;
    expanded?: boolean;
    onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
    sx?: import('@mui/material').SxProps<import('@mui/material').Theme>;
    TransitionComponent?: React.JSXElementConstructor<import('@mui/material/transitions').TransitionProps & {
        children?: React.ReactElement<unknown, any>;
    }>;
    TransitionProps?: import('@mui/material/transitions').TransitionProps;
} & import('@mui/material').AccordionSlotsAndSlotProps & Omit<import('@mui/material').PaperOwnProps, "onChange" | "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
}, "sx" | "children" | "onChange" | "elevation" | "disabled" | keyof import('@mui/material/OverridableComponent').CommonProps | "variant" | "TransitionComponent" | "TransitionProps" | "disableGutters" | "square" | "expanded" | "defaultExpanded" | keyof import('@mui/material').AccordionSlotsAndSlotProps> & {
    component?: React.ElementType;
} & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
export declare const AccordionSummary: import('@emotion/styled').StyledComponent<import('@mui/material').AccordionSummaryOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
}, "style" | "sx" | "children" | "className" | "tabIndex" | "disabled" | "action" | "classes" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "expandIcon"> & {
    component?: React.ElementType;
} & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
export declare const AccordionDetails: import('@emotion/styled').StyledComponent<import('@mui/material').AccordionDetailsProps & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
type FormAccordionPropType = {
    panel: string;
    children: React.ReactNode;
};
export declare const FormAccordion: React.FC<FormAccordionPropType>;
export {};
