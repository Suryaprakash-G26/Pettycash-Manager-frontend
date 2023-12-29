import { useNavigate } from "react-router-dom";

export default function DashboardTopar() {
  const navigate=useNavigate()
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dashboard</a>
      </div>
      <div className="flex-none">

        <ul className="menu menu-horizontal px-1">
          
            <li className="p-2 bg-base-100" onClick={()=>navigate('/addexpense')} >Add Expense</li>
            <li className="p-2 bg-base-100" onClick={()=>navigate()} >Add Income</li>
        </ul>
        <div className=" dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WwaP-RX56Uj_ftxyeEvGuuDWkiiTCYEIuw&usqp=CAU"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li className="card glass">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
