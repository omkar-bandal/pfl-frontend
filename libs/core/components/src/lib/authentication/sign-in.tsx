/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, Grid, IconButton, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import { SignInRequest, useSignIn } from "@prime-fresh/auth_api";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { images } from "@prime-fresh/assets";
import { authRouteConstants, authState, SignInSchema, stringConstants, useActions, useAppSelector } from "@prime-fresh/modules";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { TextInput, toast } from "@prime-fresh/ui_shared";
const InitValSignIn: SignInRequest = {
    uid: '',
    password: '',
}

export const SignIn = () => {
    const theme = useTheme();
    //react-router-dom hook to navigate 
    const navigate = useNavigate();

    //states from authSlice
    const { isLoggedIn, showPassword, signinMethod } = useAppSelector(authState);

    //actions from authSlice
    const { setShowPassword, setSigninMethod, checkAuth } = useActions();

    //to check if user in already logged in, if yes then according to dept navigate to respective module dashboard
    React.useEffect(() => {
        checkAuth();
        const dept = localStorage.getItem('department');
        if (isLoggedIn && dept) {
            switch (dept) {
                case stringConstants.DEPT_ADMIN:
                    navigate(ADMIN_ROUTES.DASHBOARD_ADMIN);
                    break;
                case stringConstants.DEPT_PURCHASE:
                    navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
                    break;
                case stringConstants.DEPT_INVENTORY:
                    navigate(inventoryRouteConstants.DASHBOARD_INVENTORY);
                    break;
                case stringConstants.DEPT_SALES:
                    navigate(SALES_ROUTES.DASHBOARD_SALES);
                    break;
                default:
                    navigate(authRouteConstants.SIGN_IN);
            }
        }
    }, [checkAuth, isLoggedIn, navigate]);

    //to show and hide the password
    const handleClickShowPassword = () => setShowPassword();

    //to change sign in method : sign in using email or mobile number
    const changeSigninMethod = useCallback((resetFn: (e?: React.SyntheticEvent<any>) => void) => {
        resetFn();
        signinMethod === 'email' ? setSigninMethod('mobile') : setSigninMethod('email');
    }, [signinMethod, setSigninMethod])

    //custom hook for sign in
    const { mutateAsync, isError, error } = useSignIn();

    //submit function of sign in form.
    const handleSignIn = (values: SignInRequest) => {
        mutateAsync(values).then((result) => {
            toast.success("Signed In Successfully.")
            setTimeout(() => {
                if (result) {
                    if (result.department === stringConstants.DEPT_ADMIN) {
                        navigate(ADMIN_ROUTES.DASHBOARD_ADMIN);
                    } else if (result.department === stringConstants.DEPT_PURCHASE) {
                        navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
                    } else {
                        navigate(authRouteConstants.SIGN_IN);
                    }
                }
            }, 2000);
        }).catch(() => {
            if (isError)
                toast.error(error ? error.message : "Failed to sign in.")
        });
    }
    return (
        <Container maxWidth="xl" sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: 800, border: `1px solid ${theme.palette.primary.main}`, borderRadius: 5, padding: 2, marginTop: 5 }}>
                <Grid container>
                    <Grid item sm={7} xs={12} padding={3}>
                        <img
                            src={images.signuplogo}
                            width="100%"
                            alt="prime-fresh-logo"
                        />
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Formik
                            initialValues={InitValSignIn}
                            validationSchema={SignInSchema(signinMethod)}
                            validateOnBlur={true}
                            validateOnChange={true}
                            onSubmit={(values) => handleSignIn(values)}>
                            {({ values, handleChange, handleSubmit, handleReset, isSubmitting, touched, errors }) => (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction="column" rowSpacing={1} padding={1}>
                                            <Grid item xs={12}>
                                                <Typography variant='h4' component="div" textAlign="center" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Sign In</Typography>
                                            </Grid>
                                            <Grid item xs={12} marginY={1}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                    name="uid"
                                                    type={signinMethod === "email" ? "email" : "text"}
                                                    label={signinMethod === "email" ? stringConstants.EMAIL : stringConstants.MOB_NO}
                                                    value={values.uid}
                                                    onChange={handleChange}
                                                    error={touched.uid && Boolean(errors.uid)}
                                                    helperText={touched.uid && errors ? errors.uid : ""}
                                                    sx={{ backgroundColor: theme.palette.primary.light }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} marginY={1}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                    name="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    label="Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    error={touched.password && Boolean(errors.password)}
                                                    helperText={touched.password && errors ? errors.password : ""}
                                                    slotProps={{
                                                        input: {
                                                            endAdornment: <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    size="small"
                                                                    edge="end">
                                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>,
                                                        }
                                                    }}
                                                    sx={{ backgroundColor: theme.palette.primary.light }}
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
                                                    disabled={isSubmitting && !isError}
                                                >
                                                    {isSubmitting && !isError ? <CircularProgress size={25} color="inherit" /> : stringConstants.SIGN_IN}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                    <Typography variant="body2" component="div" color="primary" textAlign="center" sx={{ fontWeight: "bold" }}>Or</Typography>
                                    <Button
                                        fullWidth
                                        variant='text'
                                        color="primary"
                                        sx={{
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                        onClick={() => changeSigninMethod(handleReset)}>
                                        {signinMethod === 'email' ? stringConstants.USING_MOB_NO : stringConstants.USING_EMAIL}
                                    </Button>
                                </>
                            )}
                        </Formik>

                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};
