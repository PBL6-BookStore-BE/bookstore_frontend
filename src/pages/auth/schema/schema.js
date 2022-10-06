
import * as yup from "yup";

export const schema = yup.object({
  fullname: yup.string().required("Please provide a full name."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  password: yup
    .string()
    .required("Please provide a password.")
    .min(8, "Your password must be at least 8 characters long."),
  // confirmPassword: yup
  //   .string()
  //   .required("Please provide a confirm password.")
  //   .oneOf([yup.ref("password")], "Confirm Password must match with Password."),
});
