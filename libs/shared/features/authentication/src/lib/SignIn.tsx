import { Checkbox, Grid, TextField, Typography, Button, OutlinedInput, InputAdornment, IconButton, Container, Box } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTES, STRINGS } from './constants';
import React, { useState } from 'react';
import { SignInSchema } from './validation_schema';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Logo from '../../../../../assets/logo_auth.jpg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { ADMIN_ROUTES } from '@prime-fresh/admin_modules';
import { AUTH_API_URL, SignInRequest, useSignInService } from '@prime-fresh/auth_api';

export const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [signinMethod, setSigninMethod] = useState('email');
  const { mutateAsync, isPending, isError, error, data } = useSignInService(AUTH_API_URL.SIGNIN);
  const navigate = useNavigate();
  const formik = useFormik<SignInRequest>({
    initialValues: {
      uid: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      console.log(error);
      const result = await mutateAsync(values);
      if (result) {
        if (result.role === "ADMIN") {
          navigate(ADMIN_ROUTES.DASHBOARD_ADMIN);
        } else if (result.role === "MANAGER") {
          navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
        } else if (result.role === "EMPLOYEE") {
          navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
        } else {
          navigate(AUTH_ROUTES.SIGN_IN);
        }
        console.log(data);
      }
    },
  });

  const changeSigninMethod = () => {
    if (signinMethod === 'email') {
      setSigninMethod('mobile')
    } else {
      setSigninMethod('email')
    }
  }
  return (
    <Container maxWidth="xl" sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: 800 }}>
        <Grid container>
          <Grid item sm={6} xs={12} padding={1}>
            <img
              src={Logo}
              width="100%"
              alt="prime-fresh-logo"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container direction="column" spacing={0.5} padding={1}>
                <Grid item xs={12}>
                  <Typography variant='h5' component="div" textAlign="center" sx={{ fontWeight: 600, marginBottom: 2 }}>Sign In</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 500 }}>{signinMethod === "email" ? STRINGS.EMAIL : STRINGS.MOB_NO}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    id="uid"
                    name="uid"
                    variant="outlined"
                    value={formik.values.uid}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  {formik.errors.uid ? (
                    <Typography variant='body2' color="error" sx={{fontWeight: 500}}>{formik.errors.uid}</Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 500 }}>{STRINGS.PASSWORD}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <OutlinedInput
                    fullWidth
                    size="small"
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {formik.errors.password ? (
                    <Typography variant='body2' color="error" sx={{fontWeight: 500}}>{formik.errors.password}</Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", marginY: 1 }}>
                  <Checkbox
                    size="small"
                    name="remember"
                    sx={{ padding: 0, marginRight: 2 }}
                  />
                  <Typography variant='body2'>{STRINGS.REMEMBER_ME}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    sx={{ my: 2, textTransform: 'none', fontSize: 15, fontWeight: 'bold' }}
                    disableElevation
                    disabled={!formik.values.uid && !formik.values.password}
                  >
                    {isPending ? STRINGS.SIGNING_IN : STRINGS.SIGN_IN}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {isError && (
                    <Typography variant='body2' color="error" sx={{fontWeight: "bold"}} textAlign="center">
                      {error?.message || STRINGS.SIGN_IN_ERROR}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </form>
            <Button variant='text' sx={{
              textTransform: 'none', '&:hover': {
                backgroundColor: 'transparent',
              }
            }} fullWidth onClick={changeSigninMethod}>{signinMethod === 'email' ? STRINGS.USING_MOB_NO : STRINGS.USING_EMAIL}</Button>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
};
