import SidebarData from "./SidebarData.jsx";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar({showSideBar}) {

  return (
    // <div className="sidebar">
    <div className={`sidebar ${showSideBar ? '' : 'collapsed'}`}>
        
        <h1 className="flex justify-center text-white text-xl font-semibold  py-4">Admin</h1>
      {SidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} showSideBar={showSideBar} />
      ))}
    </div>
  );
}

export default Sidebar;
