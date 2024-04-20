import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ProductDetail from '../pages/products/ProductDetail';
import ProductList from '../pages/products/ProductsList';

function PublicRoute() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/detail-product/:id" element={<ProductDetail />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/404" element={<NotFound />} />

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default PublicRoute;