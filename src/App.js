
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SingUp' element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
