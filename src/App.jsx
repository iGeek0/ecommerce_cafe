import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";

function App() {
  return (
    <>
        <Navbar />
        <AppRouter />
        <Footer />
    </>
  );
}

export default App;
