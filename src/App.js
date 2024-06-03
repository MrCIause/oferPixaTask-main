import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./layouts/Layout";
import VIP from "./Pages/VIP";
import VipInfo from "./Pages/VipInfo";
import PIXA from "./Pages/Pixa";
import Register from "./Pages/Register";
import Map1 from "./Pages/Map1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/vip/:rank" element={<VipInfo />} />
          <Route path="/pixa" element={<PIXA />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map1" element={<Map1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
