import React from "react";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import { AUTH_API_URL, SignInRequest, useSignInService } from "@prime-fresh/auth_api";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { images } from "@prime-fresh/assets";
import { authRouteConstants, authState, SignInWithEmailSchema, SignInWithMobileNoSchema, stringConstants, useActions, useAppSelector } from "@prime-fresh/modules";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";

const InitValSignIn: SignInRequest = {
    uid: '',
    password: '',
}

export const SignIn = () => {
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
            if (dept === stringConstants.DEPT_ADMIN)
                navigate(ADMIN_ROUTES.DASHBOARD_ADMIN)
            if (dept === stringConstants.DEPT_PURCHASE)
                navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE)
            if(dept === stringConstants.DEPT_INVENTORY)
                navigate(inventoryRouteConstants.DASHBOARD_INVENTORY)
        } else {
            navigate(authRouteConstants.SIGN_IN)
        }
    }, [checkAuth, isLoggedIn, navigate]);

    //to show and hide the password
    const handleClickShowPassword = () => setShowPassword();
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    //to change sign in method : sign in using email or mobile number
    const changeSigninMethod = () => signinMethod === 'email' ? setSigninMethod('mobile') : setSigninMethod('email');

    //custom hook for sign in
    const { mutateAsync, isPending, isSuccess, isError, error, data } = useSignInService(AUTH_API_URL.SIGNIN);

    //submit function of sign in form.
    const handleSignIn = async (values: SignInRequest) => {
        console.log(values);
        const result = await mutateAsync(values);
        if (result) {
            if (result.department === stringConstants.DEPT_ADMIN) {
                navigate(ADMIN_ROUTES.DASHBOARD_ADMIN);
            } else if (result.department === stringConstants.DEPT_PURCHASE) {
                navigate(PURCHASE_ROUTES.DASHBOARD_PURCHASE);
            } else {
                navigate(authRouteConstants.SIGN_IN);
            }
            console.log(data);
        }
    }
    return (
        <Container maxWidth="xl" sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: 800 }}>
                <Grid container>
                    <Grid item sm={6} xs={12} padding={1}>
                        <img
                            src={images.authLogo}
                            width="100%"
                            alt="prime-fresh-logo"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Formik
                            enableReinitialize={true}
                            initialValues={InitValSignIn}
                            validationSchema={signinMethod === "email" ? SignInWithEmailSchema : SignInWithMobileNoSchema}
                            validateOnBlur={true}
                            validateOnChange={true}
                            onSubmit={(values) => handleSignIn(values)}
                        >
                            {({ values, handleChange, handleSubmit, touched, errors }) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction="column" spacing={0.5} padding={1}>
                                        <Grid item xs={12}>
                                            <Typography variant='h5' component="div" textAlign="center" sx={{ fontWeight: 600, marginBottom: 2 }}>Sign In</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='body2' sx={{ fontWeight: 500 }}>{signinMethod === "email" ? stringConstants.EMAIL : stringConstants.MOB_NO}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                type="text"
                                                id="uid"
                                                name="uid"
                                                variant="outlined"
                                                value={values.uid}
                                                error={touched.uid && Boolean(errors.uid)}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {errors.uid ? (
                                                <Typography variant='body2' color="error" sx={{ fontWeight: 500 }}>{errors.uid}</Typography>
                                            ) : null}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='body2' sx={{ fontWeight: 500 }}>{stringConstants.PASSWORD}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <OutlinedInput
                                                fullWidth
                                                size="small"
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                error={touched.password && Boolean(errors.password)}
                                                onChange={handleChange}
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
                                            {errors.password ? (
                                                <Typography variant='body2' color="error" sx={{ fontWeight: 500 }}>{errors.password}</Typography>
                                            ) : null}
                                        </Grid>
                                        {/* <Grid item xs={12} sx={{ display: "flex", alignItems: "center", marginY: 1 }}>
                                                <Checkbox
                                                size="small"
                                                name="remember"
                                                sx={{ padding: 0, marginRight: 2 }}
                                                />
                                                <Typography variant='body2'>{stringConstants.REMEMBER_ME}</Typography>
                                            </Grid> */}
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                fullWidth
                                                sx={{ my: 2, textTransform: 'none', fontSize: 15, fontWeight: 'bold' }}
                                                disableElevation
                                                disabled={(!values.uid && !values.password) || isPending || isSuccess}
                                            >
                                                {isPending ? <CircularProgress size={25} color="inherit" /> : stringConstants.SIGN_IN}
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {isError && (
                                                <Typography variant='body2' color="error" sx={{ fontWeight: "bold" }} textAlign="center">
                                                    {error?.message || stringConstants.SIGN_IN_ERROR}
                                                </Typography>
                                            )}
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                        <Button variant='text' sx={{
                            textTransform: 'none', '&:hover': {
                                backgroundColor: 'transparent',
                            }
                        }} fullWidth onClick={changeSigninMethod}>{signinMethod === 'email' ? stringConstants.USING_MOB_NO : stringConstants.USING_EMAIL}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};
