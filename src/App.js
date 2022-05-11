import Layout from "./components/layout/Layout";
import Partner from "./pages/Partner/Partner";
import CreateVoucher from "./components/CreateVoucher/CreateVoucher";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";

import './App.css';
import './prismjs.css';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Partner />}/>
				<Route path="/createvoucher" element={<CreateVoucher />} />
				<Route path="/login" element={<Login />} />

			</Routes>
		</Layout>

	);
}

export default App;
