import React from "react";
import { Helmet } from "react-helmet";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import RegisterForm from "../../modules/auth/RegisterForm";
import { Link } from "react-router-dom";
import './style.css';
import { Button } from "@chakra-ui/react";
import { GoogleIcon } from "../../components/icons";

const schema = yup.object({
  firstName: yup.string().required("Please provide a full name."),
  email: yup.string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  password: yup.string()
    .required("Please provide a password.")
    .min(6, "Your password must be at least 6 characters long."),
  confirmPassword: yup.string()
    .required("Please provide a confirm password.")
    .oneOf([yup.ref("password")], "Confirm Password must match with Password."),
});

function Register()  {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fulllName: '',
      email: '',
      pass: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = () => {

  }

  return (
    <LayoutAuthentication heading="Sign Up">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <p className="text-register">Already have an account? <Link to='/sign-in' className="text-register-link">Sign in</Link></p>
      <Button variant='outline' className="btn-google" mb={5}>
        <GoogleIcon />
        <span>Sign up with google</span>
      </Button>
      <Button className="link-email" variant='link'>Or sign up with email</Button>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RegisterForm />
          <Button type="submit" className="btn-submit" colorScheme='purple' >Create my account</Button>
        </form>
      </FormProvider>
    </LayoutAuthentication>
  );
};

export default Register;
