import Layout from "./components/layout/Layout";
import Partner from "./pages/Partner/Partner";
import CreateVoucher from "./components/CreateVoucher/CreateVoucher";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";

import './App.css';
import './prismjs.css';
import UserVoucher from "./pages/User/UserVoucher";
import Gift from "./pages/Partner/Gift";
import CreateGiftPartner from "./pages/Partner/CreateGiftPartner";
import Register from "./components/Register/Register";
import DetailVoucher from "./components/DetailVoucher";
import Home from "./components/Home/Home";
import Payment from "./components/Payment";
import Discounts from "./components/Discounts/Discounts";

function App() {
    return (
        <Routes>
            <Route path="/partner/auth" element={<Login/>}/>
            <Route path="/partner/register" element={<Register/>}/>
            <Route path="/partner/" element={<Layout/>}>
                <Route path="main" element={<Partner/>}/>
                <Route path="create-voucher" element={<CreateVoucher/>}/>
                <Route path="voucher/:typeVoucher" element={<UserVoucher/>}/>
                <Route path="voucher" element={<UserVoucher/>}/>
                <Route path="voucher/:typeVoucher/:code" element={<DetailVoucher/>}/>
                <Route path="list-gift-partner" element={<Gift/>}/>
                <Route path="create-gift-partner" element={<CreateGiftPartner/>}/>
            </Route>
            
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user/payment" element={<Payment/>}/>
        </Routes>

    );
}


export default App;
