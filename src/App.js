import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ParkingArea from "./pages/ParkingArea";
import Reservation from "./pages/Reservation";
import Booking from "./pages/Booking";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parking" element={<ParkingArea />} />
        <Route path="/reserv" element={<Reservation />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
