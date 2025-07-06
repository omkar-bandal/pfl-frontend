/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
} from '@mui/material';
import { ISignInRequest, useSignIn } from '@prime-fresh/auth_api';
import { useNavigate } from 'react-router-dom';
import { images } from '@prime-fresh/assets';
import { authRouteConstants, authState, loginSchema, stringConstants, useActions, useAppSelector } from '@prime-fresh/modules';
import { TextInput, toast } from '@prime-fresh/ui_shared';
import { adminRoutes } from '@prime-fresh/admin/modules';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { socket } from '@prime-fresh/common_api';

const InitValSignIn: ISignInRequest = {
  uid: '',
  password: '',
};

export const SignIn = () => {
  const theme = useTheme();

  //react-router-dom hook to navigate
  const navigate = useNavigate();

  //State to show or hide password
  const [showPassword, setShowPassword] = useState<boolean>(false)

  //states from authSlice
  const { isLoggedIn, loggedInUserInfo } = useAppSelector(authState);

  //actions from authSlice
  const { setLoggedInUserInfo, setEmployeePermissions, setIsLoggedIn } = useActions();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: InitValSignIn,
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => { 
      handleSignIn(values);
    },
  });

  const passwordFieldType = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);

  //Function to show and hide the password
  const handleClickShowPassword = () => { showPassword === false ? setShowPassword(true) : setShowPassword(false); }

  //custom hook for sign in
  const { mutateAsync, isError, error } = useSignIn();

  //Auth check and redirect
  useEffect(() => {
    if (isLoggedIn) {
      if(loggedInUserInfo?.department === 'admin')
          navigate(adminRoutes.DASHBOARD_ADMIN)
      else
          navigate(sharedRoutes.DASHBOARD);
    }else
    navigate(authRouteConstants.SIGN_IN)
  }, [isLoggedIn, loggedInUserInfo?.department, navigate]);

  //Submit function of sign in form.
  const handleSignIn = (values: ISignInRequest) => {
    mutateAsync(values)
      .then((result) => {
        toast.success('Signed In Successfully.');
        setTimeout(() => {
          if (result) {
            socket.connect();
            socket.emit('registerUser', result.id);
            const loggedInUserInfo = {
              id: result.id,
              userName: result.userName,
              employeeId: result.employeeId,
              department: result.department,
            };
            setIsLoggedIn(true);
            setLoggedInUserInfo(loggedInUserInfo);
            setEmployeePermissions(result.permissions);
            if (result.department === 'admin') navigate(adminRoutes.DASHBOARD_ADMIN);
            else navigate(sharedRoutes.DASHBOARD);
          }
        }, 2000);
        setShowPassword(false);
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
            <FormikProvider value={formik}>
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
                    <TextInput
                      isRequired={true}
                      autoComplete="email"
                      autoCorrect="off"
                      name="uid"
                      label="Username / Email / Mobile Number"
                      value={formik.values.uid}
                      handleChange={formik.handleChange}
                      sx={{ backgroundColor: theme.palette.primary.light }}
                    />
                  </Grid>
                  <Grid item xs={12} marginY={1}>
                    <TextInput
                      isRequired={true}
                      autoComplete="off"
                      autoCorrect="off"
                      type={passwordFieldType}
                      name="password"
                      label="Password"
                      value={formik.values.password}
                      handleChange={formik.handleChange}
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
            </FormikProvider>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
