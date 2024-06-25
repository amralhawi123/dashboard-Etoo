
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 
import "./index.css";  
import { Route, Routes } from "react-router-dom";   
import EcommercePage from "./pages/dashboard/EcommercePage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import MarketingPage from "./pages/dashboard/MarketingPage";
import SideBar from "./Components/uitlity/SideBar";
import OrdersPage from "./pages/Orders/OrdersPage";
import MessagePage from "./pages/message/MessagePage";
import ProductsPage from "./pages/Products/ProductsPage"; 
import AddProductImagesPage from "./pages/Products/AddProductImages";
import OfferPage from "./pages/Offer/OfferPage";
import DeliveryBoysPage from "./pages/Delivery/DeliveryBoysPage";
import ShowOfferProductPage from "./pages/Offer/ShowOfferProductPage";
import MapsPage from "./pages/Map/MapsPage";
import SettingPage from "./pages/Setting/SettingPage";
import WelcomePage from "./pages/Setting/WelcomePage";
import CategoryPage from "./pages/Setting/CategoryPage";
import NavBar from "./Components/uitlity/NavBar";
import AboutPage from "./pages/Setting/AboutPage";
import TransportionPage from "./pages/Setting/TransportionPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() { 
  const [t, i18n] = useTranslation();
  
  const [showMessage,setShowMessage]=useState('')
  const [showNoti,setShowNoti]=useState('')
  const [showside,setShowside] = useState("")
  
  const handleOpen =() => {
  setShowside("mobile-nav")
  document.querySelector(".main-content").classList.remove('full-width')

}
const handleClose =() => {
  setShowside("")
  document.querySelector(".main-content").classList.add('full-width')
}

const handleOpenNoti = ()=>{
  showNoti === "box-block"? setShowNoti(''):
  setShowNoti("box-block")
}

const handleOpenMessage = ()=>{
  showMessage === "box-block"? setShowMessage(''):
  setShowMessage("box-block")
}
const ClickOnAnyPointInPage=()=>{
  setShowMessage('')  
  setShowNoti('')
}
  return (
    <div className="App"> 
      <SideBar showside={showside} />
      <div className="main-content full-width">
        <NavBar handleClose={handleClose}
        showside={showside}
        handleOpen={handleOpen}
         handleOpenNoti={handleOpenNoti} 
         showMessage={showMessage} showNoti={showNoti} handleOpenMessage={handleOpenMessage}/>
        <div onClick={ClickOnAnyPointInPage} className="content-pages">
        <Routes>
          <Route path="/" element={<EcommercePage/>} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products-images/id" element={<AddProductImagesPage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/offer-product/id" element={<ShowOfferProductPage />} />
          <Route path="/delivery" element={<DeliveryBoysPage />} />
          <Route path="/map" element={<MapsPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transportion" element={<TransportionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
