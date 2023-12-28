import { useEffect, useState } from "react";
import Topbar from "./topbar";
import { getalldatas } from "../api calls/Details";
import PieChart from "../Charts/piechart";

const Dashboard = () => {
  const [info, setInfo] = useState([]);
  const [showTable, setShowTable] = useState(true);

  // Retrieve the value associated with the key "Key" from localStorage.
  const key = localStorage.getItem("Key");
  // parse the data
  const userid = JSON.parse(key);

  // Check whether key is there or not
  if (!userid) {
    console.log("error signin Again");
  }

  useEffect(() => {
    getalldatas(userid).then((data) => setInfo(data.data));
  }, [userid]);

  return (
    <>
      <Topbar />
      <label className="swap flex place-items-center p-x-5 m-x-5 p-3 m-3">
        <input
          type="checkbox"
          checked={showTable}
          onChange={() => setShowTable(!showTable)}
        />
        <div className="swap-on">Table</div>
        <div className="swap-off">Charts</div>
      </label>

      <div className="overflow-x-auto">
        {showTable ? (
          <table className="table">
            <thead>
              <tr>
                <th>date</th>
                <th>title</th>
                <th>category</th>
                <th>Type</th>
                <th>price</th>
                <th>quantity</th>
                <th>totalPrice</th>
              </tr>
            </thead>
            <tbody>
              {info.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.date}</td>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.type}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.totalPrice}</td>
                  <td>
                    <button
                      className="btn glass"
                      onClick={() => console.log(data._id, data.userId)}
                    >
                      edit/update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <PieChart info={info} />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
