import React, { createContext, useEffect, useState } from "react"; // Ajout de React ici
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Dashboard/DashboardIndex";
import Header from "./components/Header/Header";
import SidBar from "./components/SidBar/SidBar";
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp";
import Products from "./pages/Products/Products";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import Message from "./pages/Message/Message";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

const MyContext = createContext();

export default function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [themeMode, setThemeMode] = useState(true);


  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  },[themeMode]);


  useEffect(()=> {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })


  const openNav=()=>{
    setIsOpenNav(true);
  }


  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSidebarAndHeader !== true && 
          <Header />
        }        

        <div className="main d-flex">
          {
            isHideSidebarAndHeader !== true && 
            <>
              <div className={`sidebarOverlay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}></div>
              <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""} ${isOpenNav===true ? 'open' : ''}`}>
                <SidBar />
              </div>
            </>
          }

          <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/details" element={<ProductDetails />} />
              <Route path="/products/upload" element={<ProductUpload />} />
              <Route path="/message" element={<Message />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export { MyContext };
