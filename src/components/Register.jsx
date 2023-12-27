import { useFormik } from "formik";
import { SignupSchema } from "../Formik/Signupformik";
import { RegisternewUser } from "../api calls/signin";
import { useState } from "react";

const RegisterUser = () => {
  const [message, setmessage] = useState("");
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState(false);
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      },
      validationSchema: SignupSchema,
      onSubmit: async (newuser) => {
        try {
          // Set loading to true just before the API call
          setLoading(true);
          const user = await RegisternewUser(newuser);
          if (user?.error) {
            setdata(user.error);
            setmessage("");
          } else {
            setmessage(user.message);
            setdata("");
          }
        } catch (error) {
          console.error("Error during form submission:", error);
        } finally {
          // Set loading back to false after form submission
          setLoading(false);
          setTimeout(() => {
            setmessage(""), setdata("");
          }, 10000);
        }
      },
    });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 h-50 ">
      <div>
        <img
          src="https://www.shutterstock.com/image-vector/register-new-user-account-registration-600nw-2297129373.jpg"
          alt="Login"
          className="h-full"
        />
      </div>

      <div>
        <h1 className="m-2 p-2">Sign Up </h1>
        <div>
          {message !== "" && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-success">
                <span>{message}</span>
              </div>
            </div>
          )}

          {data !== "" && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-info">
                <span>{data}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center ">
          <form
            className="form-control items-center w-full max-w-xs flex flex-col justify-center items-center m-5 p-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Firstname "
              name="firstname"
              value={values.firstname}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full max-w-xs m-2"
            />
            {touched.firstname && errors.firstname ? (
              <div> {errors.firstname} </div>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Enter Lastname "
              name="lastname"
              value={values.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full max-w-xs m-2"
            />
            {touched.lastname && errors.lastname ? (
              <div> {errors.lastname} </div>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Enter email "
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full max-w-xs m-2"
            />
            {touched.email && errors.email ? <div> {errors.email} </div> : ""}
            <input
              type="text"
              placeholder="Enter password "
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full max-w-xs m-2 mb-5"
            />
            {touched.password && errors.password ? (
              <div> {errors.password} </div>
            ) : (
              ""
            )}

            <button
              className="btn btn-success  m-2 p-2 place-items-center"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-ball text-accent loading-xs"></span>
                  <span className="loading loading-ball text-accent loading-sm"></span>
                  <span className="loading loading-ball text-accent loading-md"></span>
                  <span className="loading loading-ball text-accent loading-lg"></span>
                </>
              ) : (
                "Register "
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
