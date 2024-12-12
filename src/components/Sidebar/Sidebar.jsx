import { useEffect, useState } from "react";
import SidebarData from "./SidebarData.jsx";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar({showSideBar, setShowSideBar}) {
   // State to track screen width
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   // Effect to handle screen size changes
   useEffect(() => {
     // Function to check screen width
     const checkScreenSize = () => {
       setScreenWidth(window.innerWidth);
       if (window.innerWidth < 768) {
        setShowSideBar(false); // Collapse sidebar on small/medium screens
      } else {
        setShowSideBar(true); // Show sidebar on larger screens
      }
     };
 
     // Check screen size on initial render
     checkScreenSize();
 
     // Add event listener to track screen resize
     window.addEventListener("resize", checkScreenSize);
 
     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener("resize", checkScreenSize);
     };
   }, [setShowSideBar]);
 
   // Conditional class based on screen width and showSideBar
   const sidebarClass = `sidebar ${!showSideBar ? "collapsed" : ""}`;
 
  
  
  
  return (
    // <div className="sidebar">
    // <div className={`sidebar ${showSideBar ? '' : 'collapsed'}`}>
        <div className={sidebarClass}>
        <h1 className="flex justify-center text-white text-xl font-semibold  py-4">Admin</h1>
      {SidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} showSideBar={showSideBar} />
      ))}
    </div>
  );
}

export default Sidebar;
