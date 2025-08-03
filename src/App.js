import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'; 
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import ProductDetail from './Pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './Pages/ProductsList';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="/mens" element={<Shop/>}/>
        <Route path="/women" element={<Shop/>}/>
        <Route path="/kids" element={<Shop/>}/>
        <Route path="/product" element={<ProductsList/>}></Route> 
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LoginSignup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
