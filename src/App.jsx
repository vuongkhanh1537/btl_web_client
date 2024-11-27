import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { HomeProvider } from "./providers/HomeProvider";
import { AuthProvider } from "./providers/AuthContext";

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
