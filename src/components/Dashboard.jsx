import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faTable } from "@fortawesome/free-solid-svg-icons";
import Topbar from "./topbar";
import { getalldatas } from "../api calls/Details";
import PieChart from "../Charts/piechart";
import LineChart from "../Charts/linechart";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  library.add(faChartPie, faTable);

  const navigate = useNavigate();

  // Set data and tables
  const [info, setInfo] = useState([]);
  const [showTable, setShowTable] = useState(false);

  // Retrieve the value associated with the key "Key" from localStorage.
  const key = localStorage.getItem("Key");
  // Parse the data
  const userid = JSON.parse(key);

  // Check whether the key is there or not
  if (!userid) {
    console.log("error, sign in again");
  }

  useEffect(() => {
    getalldatas(userid).then((data) => setInfo(data.data));
  }, [userid]);

  return (
    <>
      <Topbar />
      <label className="swap flex place-items-center p-x-5 m-x-5 p-5 m-5">
        <input
          type="checkbox"
          checked={showTable}
          onChange={() => setShowTable(!showTable)}
        />
        {showTable ? (
          <FontAwesomeIcon icon={faChartPie} />
        ) : (
          <FontAwesomeIcon icon={faTable} />
        )}
      </label>
      <div className="overflow-x-auto">
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
                    <button
                      className="btn btn-warning btn-md"
                      onClick={() => navigate(`/editexpense/${data._id}`)}
                    >
                      Alter
                    </button>
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
