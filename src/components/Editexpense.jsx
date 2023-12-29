/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { Editexpenses } from "../Formik/editexpense";
import { AppState } from "../contextapi/dataupdate";
import { useEffect } from "react";
import { UpdateExpense } from "../api calls/Details";
import { useNavigate } from "react-router-dom";

const EditExpense = ({ id, edit, index }) => {
  //navigate
  const navigate = useNavigate();
  // Context API
  const {
    info,
    setinfo,
    data,
    setdata,
    loading,
    setloading,
    success,
    setsuccess,
  } = AppState();

  // Local Storage
  const key = localStorage.getItem("Key");
  const userid = JSON.parse(key);

  // Initialize update object
  const initialUpdate = {
    title: "",
    category: "",
    price: "",
    type: "expense",
    quantity: 1,
    date: "",
    userId: userid,
  };

  // If edit exists, update the fields in the update object
  const update = edit
    ? {
        title: edit.title,
        category: edit.category,
        price: edit.price,
        type: "expense",
        quantity: edit.quantity,
        date: edit.date,
        userId: userid,
      }
    : initialUpdate;

  // Formik hook
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    setValues, // This function allows you to dynamically update form values
  } = useFormik({
    initialValues: { ...update },
    validationSchema: Editexpenses,
    onSubmit: async (expense) => {
      try {
        // Set loading to true during form submission
        setloading(true);
        const dbupdate = await UpdateExpense(id, expense);

        if (dbupdate?.error) {
          setdata(dbupdate.error);
          setsuccess("");
        } else {
          setsuccess(dbupdate.data);
          setdata("");
          info[index] = dbupdate.edited;
          setinfo(info);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      } finally {
        setloading(false); // Set loading back to false after form submission
        setTimeout(() => {
          setsuccess("");
          setdata("");
          navigate("/");

        }, 1000); // set to null after 10 seconds
      }
    },
  });

  // Update form values when 'edit' prop changes
  useEffect(() => {
    if (edit) {
      setValues({ ...update });
    }
  }, [edit]);

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
          <h2 className="card-title">Edit Expense</h2>
          {success && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-success">
                <span>{success}</span>
              </div>
            </div>
          )}

          {data && (
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
                  className="btn btn-accent m-2 p-2 "
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading loading-spinner text-accent"></div>
                  ) : (
                    "Update expense"
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

export default EditExpense;
