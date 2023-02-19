import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/certificates" element={<Certificates/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;