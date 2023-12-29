import { useNavigate } from "react-router-dom";

export default function DashboardTopar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="grid card rounded-box place-items-center m-1">
      <div className="navbar bg-base-100 m-2">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="p-2 btn-sm bg-base-100" onClick={() => navigate('/addexpense')}>Add Expense</li>
            <li className="p-2 btn-sm bg-base-100" onClick={() => navigate('/addincome')}>Add Income</li>
            <li className="p-2 btn-sm bg-base-100" onClick={() => logout()}>Logout</li>
          </ul>
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WwaP-RX56Uj_ftxyeEvGuuDWkiiTCYEIuw&usqp=CAU"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
