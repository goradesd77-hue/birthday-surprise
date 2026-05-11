import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Surprise from "./pages/Surprise";
import Reveal from "./pages/Reveal";


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/surprise" element={<Surprise />} />

        <Route path="/reveal" element={<Reveal />} />
      
      </Routes>

    </BrowserRouter>

  );

}