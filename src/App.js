import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Category from "./components/Category";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import { AuthContext } from "./contexts/authContext";

export default function App() {
    const [token, setToken] = useState({})

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    )
}