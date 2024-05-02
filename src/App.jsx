
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Bodyname from './Bodyname';  
import Cart from './Cart';
import {CartProvider} from 'react-use-cart';

function App() {
 
  return (
    <>
    <CartProvider>
      <Home />
      <Bodyname />
      <Cart />
     </CartProvider>
    </>
  );
}

export default App
