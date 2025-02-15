import React, { createContext, useState } from "react"; // Ajout de React ici
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Dashboard/DashboardIndex";
import Header from "./components/Header/Header";
import SidBar from "./components/SidBar/SidBar";

const MyContext = createContext();

export default function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        
        <Header />

        <div className="main d-flex">
          <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
            <SidBar />
          </div>

          <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export { MyContext };
