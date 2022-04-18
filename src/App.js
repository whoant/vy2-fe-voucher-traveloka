import {Route, Routes} from 'react-router-dom'
import SatisticPage from './pages/Satistic';
import CreateVoucher from './pages/CreateVoucher';
import CreateGift from './pages/CreateGift';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
        <Route path='/' element={
          <div>Home</div>
        }/>
        <Route path='/satistic' element={<SatisticPage />}/>
        <Route path='/createvoucher' element={<CreateVoucher />}/>
        <Route path='/createGift' element={<CreateGift />}/>
      </Routes>
  );
}

export default App;
