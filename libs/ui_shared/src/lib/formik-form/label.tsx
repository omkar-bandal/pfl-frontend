import { Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import { InfoTooltip } from "../ui";

export type LabelProps = {
    isRequired?: boolean;
    label: string;
    name: string;
    isReadOnly?: boolean;
    isError: boolean;
    infoTipText?: string;
};

export const Label: React.FC<LabelProps> = (props) => {
    const { isRequired = false, isReadOnly = false, isError = false, label, name, infoTipText } = props;
    const getLabelColor = (): string => {
        if (isReadOnly) return "#9e9e9e";
        if (isError) return red[900];
        return "black";
    };

    return (
        <Typography
            variant="body2"
            component="label"
            htmlFor={name}
            color={getLabelColor()}
            sx={{ display: 'flex', alignItems: 'center' }}
        >
            {isRequired && (
                <Typography
                    component="span"
                    variant="body2"
                    color="error"
                    sx={{ fontWeight: 600 }}
                >
                    *&nbsp;
                </Typography>
            )}
            <InfoTooltip info={infoTipText ? infoTipText : null}>
                <span>{label}</span>
            </InfoTooltip>
        </Typography>
    )
}