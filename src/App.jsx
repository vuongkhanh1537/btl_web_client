import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { HomeProvider } from "./providers/HomeProvider";
import { AuthProvider } from "./providers/AuthContext";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
      <AuthProvider>
        <HomeProvider>
          <RouterProvider router={router} />
        </HomeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
