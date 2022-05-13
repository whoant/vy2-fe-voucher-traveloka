import Layout from "./components/layout/Layout";
import Partner from "./pages/Partner/Partner";
import CreateVoucher from "./components/CreateVoucher/CreateVoucher";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";

import './App.css';
import './prismjs.css';
import UserVoucher from "./pages/User/UserVoucher";
import LoginPartner from "./pages/Partner/LoginPartner";
import Gift from "./pages/Partner/Gift";
import CreateGiftPartner from "./pages/Partner/CreateGiftPartner";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Partner />} />
				<Route path="/createvoucher" element={<CreateVoucher />} />
				<Route path="/login" element={<Login />} />
				<Route path="/loginpartner" element={<LoginPartner />} />
				<Route path="/voucher" element={<UserVoucher />} />
				<Route path="/list	giftpartner" element={<Gift />} />
				<Route path="/creategiftpartner" element={<CreateGiftPartner />} />
			</Routes>
		</Layout>

	);
}

export default App;
