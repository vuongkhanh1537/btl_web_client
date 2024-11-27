import { FaBars } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import TopBarItem from "./TopBarItem";
function TopBar({ showSideBar, setShowSideBar }) {
  function handleToggleSideBar() {
    setShowSideBar((showSideBar) => !showSideBar);
    console.log('render');
  }

  return (
    <div className="topbar">
      <div className="h-flex">
        {/* <button>
            <FaBars />
          </button> */}
        <div className="topbar-item ">
          <button className="topbar-button" onClick={handleToggleSideBar} title="Toggle Sidebar">
            <div className="topbar-icon">
              <FaBars />
            </div>
          </button>
        </div>

        <input className="form-control" type="text" placeholder="Search" />
      </div>
      <div className="h-flex">
        <TopBarItem icon={<IoNotificationsOutline />} />
        <TopBarItem icon={<IoMoonOutline />} />
      </div>
    </div>
  );
}

export default TopBar;
