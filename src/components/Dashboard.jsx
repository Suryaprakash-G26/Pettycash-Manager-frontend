import  { useEffect, useState } from "react";
import Topbar from "./topbar";
import { getalldatas } from "../api calls/Details";

const Dashboard = () => {
  const [info, setInfo] = useState([]);
 // Retrieve the value associated with the key "Key" from localStorage.
const key = localStorage.getItem("Key");

// Check whether key is there or not
if(!key){
    console.log("error signin Again")
}else{
    console.log("Key",key)
}

const userid = JSON.parse(key);
  useEffect(() => {
    getalldatas(userid).then((data) => setInfo(data.data));
  }, []);
console.log(info)
  return (
    <>
      <Topbar />
      <div className="overflow-x-auto">
        {info && (
  <table className="table">
  <thead>
              <tr>
                <th>date</th>
                <th>title</th>
                <th>category</th>
                <th>description</th>
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
                  <td>{data.description}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.totalPrice}</td>
                  <td><button className="btn glass" onClick={()=>(console.log(data._id,data.userId))}>edit/update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Dashboard;
