import { Container, Grid, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export const ErrorPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 200 }} />
        </Grid>
        <Grid item>
          <Typography variant="h1" component="div">
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div">
            Page Not Found
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="div">
            The page you are looking for doesn't exist or another error occured.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="div">
            Go back to home page.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
