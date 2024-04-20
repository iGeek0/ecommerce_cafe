import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import ProductDetail from '../pages/products/ProductDetail';
import ProductList from '../pages/products/ProductsList';
import Profile from '../pages/Profile';
function PrivateRoute() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/detail-product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/404" element={<NotFound />} />

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default PrivateRoute;