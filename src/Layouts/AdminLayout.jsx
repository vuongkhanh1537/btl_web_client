// AdminLayout.jsx
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar";

const AdminLayout = ({ children, showSideBar, setShowSideBar }) => {
  return (
    <div className="layout-wrapper">
      {showSideBar && <Sidebar />}
      <div className="content">
        <TopBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
