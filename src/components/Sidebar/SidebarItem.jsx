import { useState } from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ item, showSideBar }) {
  const [subnav, setSubnav] = useState(false);


  function showSubNav() {
    setSubnav((subnav) => !subnav);
  }

  if (!showSideBar) {
    return <NavLink 
    to={item.path} className={`sidebar-item`}>{item.icon} 
    
    </NavLink>
  }  
  else if (!item.subNav) {
    return (
      <NavLink to={item.path} className="sidebar-item">
        <span className="sidebar-icon">{item.icon} </span>
        <span className="sidebar-title">{item.title} </span>
      </NavLink>
    );
  } else {
    return (
      
      <>
        <div to={item.path} className="sidebar-item" onClick={showSubNav}>
          <span className="sidebar-icon">{item.icon} </span>
          <span className="sidebar-title">{item.title} </span>
          <span className="arrow-icon">
            {subnav ? item.iconClosed : item.iconOpened}
          </span>
        </div>
        {subnav &&
          item.subNav.map((subItem, index) => (
            <div className="sidebar-subnav" key={index}>
              <NavLink className="sidebar-item" to={subItem.path} key={index}>
                <span className="sidebar-title">{subItem.title} </span>
              </NavLink>
            </div>
          ))}
      </>
    );
  }
}




export default SidebarItem;
