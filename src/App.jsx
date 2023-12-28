import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signinuser from "./components/Signin";
import RegisterUser from "./components/Register";
import Addexpense from "./components/addexpense";
import EditExpense from "./components/Editexpense";
import DashboardPage from "./components/Dashboard";
import LandingPage from "./components/landingpage";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signinuser />} />
        <Route path="/login" element={<RegisterUser />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addexpense" element={<Addexpense />} />
        <Route path="/editexpense/:id" element={<EditExpense />} />
      </Routes>
    </div>
  );
}

export default App;
