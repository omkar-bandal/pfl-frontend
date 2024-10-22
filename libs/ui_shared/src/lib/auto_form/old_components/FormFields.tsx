import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Radios } from "./Radios";
import { DropdownMenu } from "./DropdownMenu";
import { TexteInput } from "./TextInput";
import { FormField } from "../models";
import { DateInput } from "./DateInput";
// import { ImageInput } from "./ImageInput";
import { ArrayInput } from "./ArrayInput";
import { FileInput } from "./FileInput";

interface FormFieldsProps {
  fields: FormField[];
}

export const FormFields: React.FC<FormFieldsProps> = ({ fields }) => {
  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "number":
      case "email":
      case "password":
        return (
          <Grid container item direction="column" key={field.name} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <TexteInput formField={field} />
            </Grid>
          </Grid>
        );
      case "file":
        return (
          <Grid container item direction="column" key={field.name} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <FileInput formField={field} />
            </Grid>
          </Grid>
        );
      // case "image":
      //   return (
      //     <Grid container item direction="column" sm={field.length} key={field.name}>
      //       <Grid item xs={12} sm={field.length}>
      //         <Typography
      //           variant="caption"
      //           component="h6"
      //           sx={{ fontWeight: 500 }}
      //         >
      //           {field.label}
      //         </Typography>
      //       </Grid>
      //       <Grid item xs={12} sm={field.length}>
      //         <ImageInput formField={field} />
      //       </Grid>
      //     </Grid>
      //   );
      case "date":
        return (
          <Grid container item direction="column" key={field.name} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <DateInput formField={field} />
            </Grid>
          </Grid>
        )
      case "select":
        return (
          <Grid container item direction="column" key={field.name} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <DropdownMenu formField={field} />
            </Grid>
          </Grid>
        );
      case "radio":
        return (
          <Grid container item direction="column" key={field.name} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <Radios formField={field} />
            </Grid>
          </Grid>
        );
      case "divider":
        return (
          <Grid item xs={12}>
            <Box sx={{ width: "100%", borderBottom: `1px solid #BDBDBD` }}>
              <Typography variant="caption">{field.label}</Typography>
            </Box>
          </Grid>
        );
      case "plaintext":
        return (
          <Grid item xs={12} sm={12}>
            <Box sx={{ width: '100%', padding: 1, marginY: 2 }}>
              <Typography variant="caption" textAlign="justify">{field.label}</Typography>
            </Box>
          </Grid>
        );
      case "box":
        return (
          <Grid container item direction="column" key={field.label} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: 500 }}
              >
                {field.label}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <Box sx={{ width: "100%", height: 70, border: `1px solid #BDBDBD` }}>
              </Box>
            </Grid>
          </Grid>
        );
      case "objArray":
        return (
          <Grid container item direction="column" key={field.label} sm={field.length}>
            <Grid item xs={12} sm={field.length}>
              <Box sx={{ width: "100%", borderBottom: `1px solid #BDBDBD` }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>{field.label}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={field.length}>
              <ArrayInput key={field.name} field={field} />
            </Grid>
          </Grid>
        )
      default:
        return null;
    }
  };

  return <>{fields.map((field) => renderField(field))}</>;
};

