import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

    </BrowserRouter>
  );
}