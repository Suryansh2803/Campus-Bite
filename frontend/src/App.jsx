import { useState } from "react";
import FoodMenu from "./components/FoodMenu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <Navbar />
      <Hero />
      <FoodMenu 
         cartItems={cartItems}
        setCartItems={setCartItems}/>
    </>
  );
}

export default App;
