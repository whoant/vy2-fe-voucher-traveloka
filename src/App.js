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
import LayoutHome from "./components/layout/LayoutHome";
import Dashboard from "./components/Dashboard/Dashboard";
import Bonus from "./components/Bonus/Bonus";
import DetailGiftCard from "./components/DetailGiftCard";

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
                <Route path="gift-card" element={<Gift/>}/>
                <Route path="gift-card/:typeVoucher" element={<Gift/>}/>
                <Route path="gift-card/:typeVoucher/:code" element={<DetailGiftCard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="create-gift-partner" element={<CreateGiftPartner/>}/>
            </Route>

            <Route path="/user/" element={<LayoutHome/>}>
                <Route path="discounts/:typeVoucher" element={<Discounts/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="bonus" element={<Bonus/>}/>
                <Route path="bonus/:typeVoucher" element={<Bonus/>}/>
            </Route>
            <Route path="/user/payment/:transactionId" element={<Payment/>}/>
        </Routes>

    );
}


export default App;
