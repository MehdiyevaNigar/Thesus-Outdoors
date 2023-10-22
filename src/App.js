import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { GetInTouch } from "./components/GetInTouch";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import ShopAll from "./pages/ShopAll";
import Values from "./pages/Values";
import Login from "./pages/Login";
import LookbookPage from "./pages/LookbookPage";
import axios from "axios";
import ProductDetails from "./pages/ProductDetails";
import BestSellersPage from "./pages/BestSellersPage";
import WeekendBoot from "./pages/WeekendBoot";
import TerrusClog from "./pages/TerrusClog";
import Cart from "./pages/Cart";
import { CartProvider } from "./cartContext";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Button />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/bestsellers" element={<BestSellersPage />} />
          <Route path="/weekend-boot" element={<WeekendBoot />} />
          <Route path="/terrus-clog" element={<TerrusClog />} />
          <Route path="/shop-all" element={<ShopAll />} />
          <Route path="/values" element={<Values />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GetInTouch />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
