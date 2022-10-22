import { Helmet } from "react-helmet";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import LoginForm from "../../modules/auth/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Button, useDisclosure } from "@chakra-ui/react";
import { GoogleIcon } from "../../components/icons";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { toast } from "react-toastify";

const schemaLogin = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  password: yup
    .string()
    .required("Please provide a password.")
    .min(8, "Your password must be at least 8 characters long."),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isOpen: isLoading,
    onClose: closeLoading,
    onOpen: openLoading,
  } = useDisclosure();
  const methods = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      openLoading();
      dispatch(login(data))
        .then((res) => {
          const { payload } = res;
          if (payload.data.isSuccess) {
            navigate("/");
          } else {
            closeLoading();
            toast.error(payload.data.message);
          }
        })
        .catch(() => {
          closeLoading();
        });
    } catch (error) {
      closeLoading();
      toast.error(error);
    }
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <p className="text-login">
        Dont have an account?{" "}
        <Link to="/register" className="text-login-link">
          Sign up
        </Link>
      </p>
      <Button variant="outline" className="btn-google" mb={5}>
        <GoogleIcon />
        <span>Sign in with Google</span>
      </Button>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <LoginForm />
          <Button
            className="link-forgot-pw"
            variant="link"
            colorScheme="purple"
          >
            Forgot Password
          </Button>
          <Button
            isLoading={isLoading}
            type="submit"
            className="btn-submit"
            colorScheme="purple"
          >
            Sign in
          </Button>
        </form>
      </FormProvider>
    </LayoutAuthentication>
  );
};

export default Login;
