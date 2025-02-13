import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import SidBar from "./components/SidBar/SidBar";

export default function App() {
  return (
    <BrowserRouter>

        <Header />

        <div className="main d-flex">
          <div className="sidebarWrapper">
            <SidBar />
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>        

    </BrowserRouter>
  );
}