import { Helmet } from "react-helmet";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import LoginForm from "../../modules/auth/LoginForm";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@chakra-ui/react";
import { GoogleIcon } from "../../components/icons";
import { schema  } from "./schema/schema";

const Login = () => {
  const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onSubmit",
    });

    const onSubmit = (data) => console.log(data);

    return (
        <LayoutAuthentication heading='Welcome Back!'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <p className="text-login">
                Dont have an account? {" "}
                <Link to="/register" className="text-login-link">
                    Sign up
                </Link>
            </p>
            <Button variant="outline" className="btn-google" mb={5}>
                <GoogleIcon />
                <span>Sign in with Google</span>
            </Button>

            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <LoginForm />
                    <Button className="link-forgot-pw" variant="link" colorScheme="purple">
                        Forgot Password
                    </Button>
                    <Button type="submit" className="btn-submit" colorScheme="purple">
                        Sign in
                    </Button>
                </form>

            </FormProvider>
        </LayoutAuthentication>
    );
}

export default Login;
