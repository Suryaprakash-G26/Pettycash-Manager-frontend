/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { SigninSchema } from "../Formik/signinformik";
import { SigninUser } from "../api calls/signin";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signinuser = () => {
  const [data, setdata] = useState("");
  const [success, setsuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SigninSchema,
      onSubmit: async (user) => {
        try {
          // Set loading to true during form submission
          setLoading(true);
          const info = await SigninUser(user);
          if (info?.error) {
            setdata(info.error);
            setsuccess("");
          } else {
            setsuccess(info.data);
            setdata("");
            console.log(info);
            // Save info to localStorage
            localStorage.setItem(
              "sessiontoken",
              JSON.stringify(info.sessionToken)
            );

            localStorage.setItem("Key", JSON.stringify(info.userId));
          }
        } catch (error) {
          console.error("Error during form submission:", error);
        } finally {
          setLoading(false); // Set loading back to false after form submission
          setTimeout(() => {
            setsuccess(""), setdata("");
          }, 5000); // set to null after 10 secconds
        }
      },
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <img
          src="https://sm-s.in/assets/images/user/login.gif"
          alt="Login"
          className="h-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center m-2">
        <h1 className="text-center m-4">Sign In</h1>
        <div className="w-full max-w-xs">
          {success !== "" && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-success">
                <span>{success}</span>
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

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full m-2 p-2"
            />
            {touched.email && errors.email && (
              <div className="text-error">{errors.email}</div>
            )}
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-accent w-full m-2 p-2"
            />
            {touched.password && errors.password && (
              <div className="text-error">{errors.password}</div>
            )}
            <div className="text-end mb-5">
              {/* <Link to="/forgot-password" className="text-accent hover:underline">
                Forgot Password?
              </Link>         */}
              forgot paassword
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button
    className="btn btn-success m-2 p-2"
    type="submit"
    disabled={loading}
  >
    {loading ? (
      <div className="loading loading-spinner text-accent"></div>
    ) : (
      "Login"
    )}
  </button>
</div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Signinuser;
