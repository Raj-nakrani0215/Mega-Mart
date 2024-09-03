import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import Cart from './Components/Cart';
import SignUpin from './Components/SignUp-In';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Divider } from '@mui/material';

function Layout() {
  return (
    <div>
      <Navbar />
      <Divider orientation="horizontal" flexItem sx={{ mx: 2, borderColor: 'lightGray' }} />
      <Outlet /> 
      <Footer />
    </div>
  );
}


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/SignUpin' element={<SignUpin />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
