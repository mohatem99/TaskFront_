import { HashRouter,Route,Routes } from "react-router-dom"
import SettLayout from '../src/layout/SettLayout'
import ProfileSettings from "./pages/ProfileSettings"
import PasswordSettings from "./pages/PasswordSettings"
import AppearanceSettings from "./pages/AppearanceSettings"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
export default function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<SignUp/>} path="signup"></Route>
      <Route element={<SettLayout/>}>
      <Route element={<ProfileSettings/>} path="profilesetting"></Route>
      <Route element={<PasswordSettings/>} path="passwordsetting"></Route>
      <Route element={<AppearanceSettings/>} path="appearancesetting"></Route>
    </Route>
    </Routes>
    </HashRouter>

    </>
  )
}
