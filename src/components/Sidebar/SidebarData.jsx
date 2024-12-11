import { MdCreateNewFolder, MdDashboard, MdInventory, MdKeyboardArrowDown, MdKeyboardArrowUp, MdPeople } from "react-icons/md";
import { FaClipboardList, FaRegEdit, FaShoppingCart } from "react-icons/fa";



const SidebarData = [
    {
      title: 'Dashboard',
      path: 'admin/dashboard',
      icon: <MdDashboard />,
      iconClosed: <MdKeyboardArrowUp />,
      iconOpened: <MdKeyboardArrowDown/>,
  
      
    },
    {
      title: 'Products',
      path: 'admin/products',
      icon: <MdInventory /> ,
      iconClosed: <MdKeyboardArrowUp />,
      iconOpened: <MdKeyboardArrowDown />,
  
      subNav: [
        {
          title: 'List',
          path: 'admin/products/list',
          icon: <FaClipboardList />,
          cName: 'sub-nav'
        },
        {
          title: 'Edit',
          path: 'admin/products/edit/:id',
          icon: <FaRegEdit />,
          cName: 'sub-nav'
        },
        {
          title: 'Create',
          path: 'admin/products/create',
          icon: <MdCreateNewFolder />
        }
      ]
    },
    
  
    {
      title: 'Orders',
      path: 'admin/orders',
      icon: <FaShoppingCart />,
  
      iconClosed: <MdKeyboardArrowUp />,
      iconOpened: <MdKeyboardArrowDown />,
  
      subNav: [
        {
          title: 'List',
          path: 'admin/orders/list',
          icon: <FaShoppingCart/>
        },
        // {
        //   title: 'Details',
        //   path: '/orders/detail/:id',
        //   icon: <FaShoppingCart />
        // }
      ]
    },
    {
      title: 'Customers',
      path: 'admin/customers',
      icon: <MdPeople />,
  
      iconClosed: <MdKeyboardArrowUp />,
      iconOpened: <MdKeyboardArrowDown />,
  
      subNav: [
        {
          title: 'List',
          path: 'admin/customers/list',
          icon: <FaShoppingCart/>
        },
        // {
        //   title: 'Details',
        //   path: 'admin/customers/detail',
        //   icon: <FaShoppingCart />
        // }
      ]
    },
    {
      title: 'Promotions',
      path: 'admin/promotions',
      icon: <MdPeople />,
  
      iconClosed: <MdKeyboardArrowUp />,
      iconOpened: <MdKeyboardArrowDown />,
  
      subNav: [
        {
          title: 'List',
          path: 'admin/promotions/list',
          icon: <FaShoppingCart/>
        },
        // {
        //   title: 'Details',
        //   path: 'admin/promotions/detail',
        //   icon: <FaShoppingCart />
        // }
      ]
    },
    
  ];
  
export default SidebarData;