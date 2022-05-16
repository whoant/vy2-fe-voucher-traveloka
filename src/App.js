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

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Layout/>}>
                <Route path="main" element={<Partner/>}/>
                <Route path="create-voucher" element={<CreateVoucher/>}/>
                <Route path="voucher" element={<UserVoucher/>}/>
                <Route path="list-gift-partner" element={<Gift/>}/>
                <Route path="create-gift-partner" element={<CreateGiftPartner/>}/>
            </Route>

        </Routes>

    );
}


export default App;
