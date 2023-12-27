import * as yup from "yup";

export const SigninSchema = yup.object({
  email: yup.string().required("Enter your email").email("Enter a valid email"),
  password: yup
    .string()
    .required("enter your password")
    .min(8, "password should be minimum 8 letters"),
});
