import { Typography } from "@mui/material"
import { red } from "@mui/material/colors";
type LabelProps = {
    isRequired?: boolean;
    label: string;
    name: string;
    isReadOnly?: boolean;
    isError: boolean;
};
export const Label: React.FC<LabelProps> = ({ isRequired = false, isReadOnly = false, isError = false, label, name }) => {
    const getLabelColor = (): string => {
        if (isReadOnly) return "#9e9e9e"; // Read-only color
        if (isError) return red[900]; // Error color
        return "black"; // Default color
      };
    return (
        <Typography 
        variant="body2" 
        component="label" 
        htmlFor={name}
        color={getLabelColor()}
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
            {label}
        </Typography>
    )
}