import * as yup from "yup";

export const SignupSchema = yup.object({
  email: yup.string().required("Enter your email").email("Enter a valid email"),
  password: yup
    .string()
    .required("enter your password")
    .min(8, "password should be minimum 8 letters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  firstname: yup
    .string()
    .required("Enter your First name")
    .min(4, "minimum 4 letters"),
  lastname: yup.string().required("Enter your last name"),
});
