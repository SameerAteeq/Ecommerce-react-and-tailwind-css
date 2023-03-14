import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import HomePage from "./pages/homePage/HomePage";
import ProductDetail from "./pages/productDetailpage/ProductDetail";
import WishlistPage from "./pages/wishlistPage/WishlistPage";

function App() {
  return (
    <div className="h-full">
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/carts" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
