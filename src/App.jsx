import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SideBarComponent } from "./components/layout/SidbarComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import AuthGuard from "./guard/AuthGuard";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Landing />
      </AuthGuard>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  );
}

export default App;
