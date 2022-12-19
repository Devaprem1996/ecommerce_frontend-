import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
