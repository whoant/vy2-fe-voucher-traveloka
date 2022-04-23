import Layout from "./components/layout/Layout";
import Partner from "./pages/Partner/Partner";
import CreateVoucher from "./components/CreateVoucher/CreateVoucher";

import { Route, Routes } from "react-router-dom";

import './App.css';
import './prismjs.css';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Partner />}/>
				<Route path="/createvoucher" element={<CreateVoucher />} />

			</Routes>
		</Layout>

	);
}

export default App;
