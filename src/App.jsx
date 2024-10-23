import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartProvider } from './Context/CartContext/CartContext.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx';

function App() {
  return (
  <>
    <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:key' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<CheckOut />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
