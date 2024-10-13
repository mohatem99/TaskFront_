import { HashRouter,Route,Routes } from "react-router-dom"
import SettLayout from '../src/layout/SettLayout'
import ProfileSettings from "./pages/ProfileSettings"
import PasswordSettings from "./pages/PasswordSettings"
import AppearanceSettings from "./pages/AppearanceSettings"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<SignUp/>} path="signup"/>
      <Route element={<Dashboard/>} path="dashboard"/>
      <Route element={<SettLayout/>}>
      <Route element={<ProfileSettings/>} path="profilesetting"/>
      <Route element={<PasswordSettings/>} path="passwordsetting"/>
      <Route element={<AppearanceSettings/>} path="appearancesetting"/>
    </Route>
    </Routes>
    </HashRouter>
    <ToastContainer />

    </>
  )
}
