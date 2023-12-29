
import PieChart from "../Charts/piechart";
import LineChart from "../Charts/linechart";
import { useNavigate } from "react-router-dom";
import { AppState } from "../contextapi/dataupdate";
import { DeleteExpense } from "../api calls/Details";
import DashboardTopar from "./dashboardsTopbar";
import FiltersandFunc from "./filters";

const DashboardPage = () => {
  const navigate = useNavigate();

  // contextapi
  const {
    info,
    setinfo,
    showTable,
    success,
    data,
    setsuccess,
    setdata,
  } = AppState();

  // Retrieve the value associated with the key "Key" from localStorage.
  const key = localStorage.getItem("Key");
  // Parse the data

  // Check whether the key is there or not
  if (!key) {
    console.log("error, sign in again");
  }

  const deleteexpense = async (id) => {
    try {
      const deleteData = await DeleteExpense(id);
      if (deleteData?.error) {
        setdata(deleteData.error);
        setsuccess("");
      } else {
        setsuccess(deleteData.data);
        setdata("");
        const newinfo = info.filter((exp) => exp._id != id);
        setinfo(newinfo);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setTimeout(() => {
        setsuccess("");
        setdata("");
        navigate("/");
      }, 1000); // set to null after 10 ----
    }
  };

  return (
    <>
    <DashboardTopar />
    <FiltersandFunc/>
    {success && (
      <div className="toast  toast-top toast-end">
        <div className="alert alert-success">
          <span>{success}</span>
        </div>
      </div>
    )}

    {data && (
      <div className="toast fixed toast-top toast-end">
        <div className="alert alert-info">
          <span>{data}</span>
        </div>
      </div>
    )}
 

    <div className="overflow-x-auto m-6 p-6">
      {showTable ? (
        <table className="table">
          <thead>
            <tr className="text-xl">
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {info.map((data, idx) => (
              <tr key={idx} className="table-row">
                <td>{data.date}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.type}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.totalPrice}</td>
                <td>
                  <div className="dropdown dropdown-left dropdown-end 	 ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-accent m-1"
                    >
                      edit/delete
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-1 m-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => navigate(`/editexpense/${data._id}`)}
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => deleteexpense(data._id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <PieChart info={info} />
          <LineChart info={info} />
        </div>
      )}
    </div>
  </>
  );
};

export default DashboardPage;
