/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddExpense } from "../Formik/addexpense";
import { useFormik } from "formik";
import { AddnewExpense } from "../api calls/Details";
import { AppState } from "../contextapi/dataupdate";
import { useNavigate } from "react-router-dom";

const Addexpense = () => {
const navigate=useNavigate()
  //context api
  const { data, setdata, success, setsuccess, loading, setloading ,setinfo} = AppState();

   // Retrieve the value associated with the key "Key" from localStorage.
   const key = localStorage.getItem("Key");
   // parse the data
   const userid = JSON.parse(key);

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        title: "",
        category: "",
        price: "",
        type:"expense",
        quantity: 1,
        date: "",
        userId: userid,
      },
      validationSchema: AddExpense,
      onSubmit: async (expense) => {

        console.log("Form submitted:", expense);
        try {
            // Set loading to true during form submission
            setloading(true);
            const info = await AddnewExpense(expense);
            if (info?.error) {
              setdata(info.error);
              setsuccess("");
            } else {
              setsuccess(info.data);
              setdata("");
              console.log(info);
              setinfo(info.newdata)
            }
          } catch (error) {
            console.error("Error during form submission:", error);
          } finally {
            setloading(false); // Set loading back to false after form submission
            setTimeout(() => {
              setsuccess(""), setdata("");
navigate('/')
            }, 1000); // set to null after 10 secconds
          }

      },
    });

  return (
    <div className="flex flex-col justify-center items-center m-5 max-w-lg mx-auto">
    <div className="card m-5 p-5 bg-base-100 shadow-xl image-full">
  
        <figure>
          <img
            src="https://cdn.zeebiz.com/sites/default/files/2018/08/30/50690-indian-currency-dna.jpg"
            alt="Money"
          />
        </figure>
        <div className="card-body text-center flex flex-col justify-center items-center ">
          <h2 className="card-title">New Expense</h2>
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
          <div className="flex flex-col justify-center items-center m-2">
            <div className="w-full max-w-xs">
              <form onSubmit={handleSubmit}>
                <div className="m-2">
                  <input
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full p-2"
                  />
                  {touched.title && errors.title && (
                    <div className="text-error">{errors.title}</div>
                  )}
                </div>

                <div className="m-2">
                  <select
                    name="category"
                    value={values.category}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full p-2"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Others">Others</option>
                  </select>

                  {touched.category && errors.category && (
                    <div className="text-error">{errors.category}</div>
                  )}
                </div>
                <div className="m-2">
                  <input
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    value={values.date}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full p-2"
                  />
                  {touched.date && errors.date && (
                    <div className="text-error">{errors.date}</div>
                  )}
                </div>
                <div className="m-2">
                  <input
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    value={values.quantity}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full p-2"
                  />
                  {touched.quantity && errors.quantity && (
                    <div className="text-error">{errors.quantity}</div>
                  )}
                </div>
                <div className="m-2">
                  <input
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={values.price}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full p-2"
                  />
                  {touched.price && errors.price && (
                    <div className="text-error">{errors.price}</div>
                  )}
                </div>

                <button
                  className="btn btn-success m-2 p-2 "
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading loading-spinner text-accent"></div>
                  ) : (
                    "Add new expense"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addexpense;
