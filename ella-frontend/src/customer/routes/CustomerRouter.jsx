import React from 'react';
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import OrderDetail from "../pages/order/OrderDetail";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "../pages/home/Home";
import Product from "../pages/products/Product";
import SingleProduct from "../pages/products/SingleProduct";
import Cart from "../pages/cart/Cart";
import Payment from "../pages/payment/Payment";
import Order from "../pages/order/Order";

const CustomerRouter = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="ell-name" onClick={() => {navigate("/")}}>ELLA</h1>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:label1/:label2/:label3' element={<Product />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout/:step' element={<Payment />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:1' element={<OrderDetail />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default CustomerRouter