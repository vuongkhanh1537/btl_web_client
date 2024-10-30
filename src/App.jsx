import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { HomeProvider } from "./providers/HomeProvider"

function App() {

  return (
    <>
    <HomeProvider>
      <RouterProvider router={router} />
    </HomeProvider>
    </>
  )
}

export default App
