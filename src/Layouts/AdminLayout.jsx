// AdminLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar";

const AdminLayout = ({ children}) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="layout-wrapper">
      <Sidebar showSideBar={showSideBar} />
      <div className="content">
        <TopBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
