import { Box, Button, Grid, Typography } from "@mui/material";
import { FormSchema } from "../models";
import { useAppSelector } from "@prime-fresh/modules";
import { formContainerState } from "@prime-fresh/admin_modules";


type FormHeaderProp = {
  schema: FormSchema;
};
export const FormHeader: React.FC<FormHeaderProp> = ({ schema }) => {
  const {openFor} = useAppSelector(formContainerState);
  return (
    <Box sx={{ flex: 1, paddingX: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 500 }}>
            {schema.title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ fontWeight: 500 }}
          >
            {schema.subtitle}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="medium"
            type="reset"
            color="secondary"
            sx={{ marginRight: 5 }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="medium"
            type="submit"
          >
            {openFor === 'create' ? `Create` : `Update`}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
