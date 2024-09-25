import Navbar from "./components/Navbar/navbar";
import Home from "./Pages/home";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
