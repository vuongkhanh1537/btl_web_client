// import { FaBars } from "react-icons/fa";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoMoonOutline } from "react-icons/io5";
// import TopBarItem from "./TopBarItem";
// function TopBar({ showSideBar, setShowSideBar }) {
//   function handleToggleSideBar() {
//     setShowSideBar((prev) => !prev);
    
//   }

//   return (
//     <div className="topbar">
//       <div className="h-flex">
//         {/* <button>
//             <FaBars />
//           </button> */}
//         <div className="topbar-item ">
//           <button className="topbar-button" onClick={handleToggleSideBar} title="Toggle Sidebar">
//             <div className="topbar-icon">
//               <FaBars />
//             </div>
//           </button>
//         </div>

//         <input className="form-control" type="text" placeholder="Search" />
//       </div>
//       <div className="h-flex">
//         <TopBarItem icon={<IoNotificationsOutline />} />
//         <TopBarItem icon={<IoMoonOutline />} />
//       </div>
//     </div>
//   );
// }

// export default TopBar;

import { FaBars } from "react-icons/fa";
import { IoNotificationsOutline, IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import TopBarItem from "./TopBarItem";
import { useNavigate } from "react-router-dom";

function TopBar({ showSideBar, setShowSideBar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  function handleToggleSideBar() {
    setShowSideBar((prev) => !prev);
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }
  function handleLogOut() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }

  return (
    <div className="topbar">
      {/* Left Section: Toggle Sidebar & Search */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggleSideBar}
          className="topbar-button"
          title="Toggle Sidebar"
        >
          <FaBars size={24} />
        </button>
        {/* <input
          className="form-control p-2 rounded-md"
          type="text"
          placeholder="Search"
        /> */}
      </div>

      {/* Right Section: Notifications, Dark Mode, Avatar */}
      <div className="flex items-center space-x-6">
        <TopBarItem icon={<IoNotificationsOutline />} />
        <TopBarItem icon={<IoMoonOutline />} />

        {/* Avatar Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white"
            title="User Profile"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span>Admin</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
              <ul>
                {/* <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/profile">Profile</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/settings">Settings</a>
                </li> */}
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer mt-2" onClick={() => handleLogOut()}>
                  <span  >Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
