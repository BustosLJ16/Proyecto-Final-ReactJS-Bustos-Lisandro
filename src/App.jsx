import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartView from './Views/CartView/CartView.jsx';

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<CartView />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
