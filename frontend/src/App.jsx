import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgetPassword" element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;