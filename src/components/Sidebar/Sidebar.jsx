import SidebarData from "./SidebarData.jsx";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar({showSideBar}) {

  return (
    // <div className="sidebar">
    <div className={`sidebar ${showSideBar ? '' : 'collapsed'}`}>
        
        <h1 className="sidebar-label">Admin</h1>
      {SidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
