import { Fragment, useState } from "react";
import { Header } from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart'
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () =>{
    setCartIsShown(true);
  }

  const hideCart = () =>{ 
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
