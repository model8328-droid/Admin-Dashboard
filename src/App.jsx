import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgetpassword";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/forgot-password" element={<ForgotPassword />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/users" element={<Users />} />

<Route path="/profile" element={<Profile />} />

<Route path="/settings" element={<Settings />} />

</Routes>

</BrowserRouter>

);
}

export default App;