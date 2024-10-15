import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchDetails from "./pages/WatchDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { useState } from "react";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
