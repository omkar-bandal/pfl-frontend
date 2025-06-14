/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { SignInRequest, useSignIn } from '@prime-fresh/auth_api';
import { useNavigate } from 'react-router-dom';
import { images } from '@prime-fresh/assets';
import { authState, SignInSchema, stringConstants, useActions, useAppSelector } from '@prime-fresh/modules';
import { toast } from '@prime-fresh/ui_shared';
import { adminRoutes } from '@prime-fresh/admin/modules';
import { sharedRoutes } from '@prime-fresh/shared/modules';

const InitValSignIn: SignInRequest = {
  uid: '',
  password: '',
};

export const SignIn = () => {
  const theme = useTheme();

  //react-router-dom hook to navigate
  const navigate = useNavigate();

  //states from authSlice
  const { showPassword, signinMethod, employeeLevel } = useAppSelector(authState);

  //actions from authSlice
  const { setShowPassword, setSigninMethod, setLoggedInUserInfo, setEmployeeLevel, setEmployeePermissions } =
    useActions();
  const validationSchema = SignInSchema(signinMethod);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: InitValSignIn,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => handleSignIn(values),
  });
  const uidFieldType = useMemo(() => (signinMethod === 'email' ? 'email' : 'text'), [signinMethod]);
  const uidLabel = useMemo(
    () => (signinMethod === 'email' ? stringConstants.EMAIL : stringConstants.MOB_NO),
    [signinMethod]
  );
  const passwordFieldType = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);
  //to show and hide the password
  const handleClickShowPassword = () => setShowPassword(true);

  //to change sign in method : sign in using email or mobile number
  const changeSigninMethod = useCallback(
    (resetFn: (e?: React.SyntheticEvent<any>) => void) => {
      resetFn();
      signinMethod === 'email' ? setSigninMethod('mobile') : setSigninMethod('email');
    },
    [signinMethod, setSigninMethod]
  );

  //custom hook for sign in
  const { mutateAsync, isError, error } = useSignIn();

  // useEffect(() => {
  //   if (employeeLevel) {
  //     if(employeeLevel.name === 'admin')
  //         navigate(adminRoutes.DASHBOARD_ADMIN)
  //     else
  //         navigate(sharedRoutes.DASHBOARD);
  //   }
  // }, [employeeLevel, navigate]);

  //submit function of sign in form.
  const handleSignIn = (values: SignInRequest) => {
    mutateAsync(values)
      .then((result) => {
        console.log(result);
        toast.success('Signed In Successfully.');
        setTimeout(() => {
          if (result) {
            const loggedInUserInfo = {
              id: result.id,
              userName: result.userName,
              employeeId: result.employeeId,
            };
            setLoggedInUserInfo(loggedInUserInfo);
            setEmployeeLevel(result.level);
            setEmployeePermissions(result.permissions);
            if (result.level.name === 'admin') navigate(adminRoutes.DASHBOARD_ADMIN);
            else navigate(sharedRoutes.DASHBOARD);
          }
        }, 2000);
      })
      .catch(() => {
        if (isError) toast.error(error ? error.message : 'Failed to sign in.');
      });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 800,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: 5,
          padding: 2,
          marginTop: 5,
        }}
      >
        <Grid container>
          <Grid item sm={7} xs={12} padding={3}>
            <img src={images.signuplogo} width="100%" alt="prime-fresh-logo" />
          </Grid>
          <Grid item sm={5} xs={12}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container direction="column" rowSpacing={1} padding={1}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    component="div"
                    textAlign="center"
                    color="primary"
                    sx={{ fontWeight: 600, marginBottom: 2 }}
                  >
                    Sign In
                  </Typography>
                </Grid>
                <Grid item xs={12} marginY={1}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    autoCorrect="off"
                    name="uid"
                    type={uidFieldType}
                    label={uidLabel}
                    value={formik.values.uid}
                    onChange={formik.handleChange}
                    error={formik.touched.uid && Boolean(formik.errors.uid)}
                    sx={{ backgroundColor: theme.palette.primary.light }}
                  />
                  <Typography variant="caption" component="div" color="error">
                    {formik.touched.uid && formik.errors.uid}
                  </Typography>
                </Grid>
                <Grid item xs={12} marginY={1}>
                  <TextField
                    fullWidth
                    size="small"
                    autoComplete="off"
                    autoCorrect="off"
                    name="password"
                    type={passwordFieldType}
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    // helperText={formik.touched.password && formik.errors.password}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              size="small"
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      // Disable Edge/IE built-in password reveal button
                      '& input::-ms-reveal': {
                        display: 'none',
                      },
                      '& input::-ms-clear': {
                        display: 'none',
                      },
                    }}
                  />
                  <Typography variant="caption" component="div" color="error">
                    {formik.touched.password && formik.errors.password}
                  </Typography>
                </Grid>
                <Grid item xs={12} marginY={2}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}
                    disableElevation
                    disabled={formik.isSubmitting && !isError}
                  >
                    {formik.isSubmitting && !isError ? (
                      <CircularProgress size={25} color="inherit" />
                    ) : (
                      stringConstants.SIGN_IN
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Typography variant="body2" component="div" color="primary" textAlign="center" sx={{ fontWeight: 'bold' }}>
              Or
            </Typography>
            <Button
              fullWidth
              variant="text"
              color="primary"
              sx={{
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onClick={() => changeSigninMethod(formik.handleReset)}
            >
              {signinMethod === 'email' ? stringConstants.USING_MOB_NO : stringConstants.USING_EMAIL}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
