import { useEffect, useState } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initialOptions = {
  clientId:
    "AZJ7rVG8aY2PkdLBCNDKAg13UU_sHLjrb_zP-qLJ-F0xOp4W6mdohswTZQoJMjgzqA_fzwI79GlSQkDU",
  currency: "USD",
  intent: "capture"
};
const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  let loadCart = () => {
    if (localStorage.getItem("cart")) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      setTotal(
        cart.reduce((total, item) => total + item.price * item.quantity, 0)
      );
      setProducts(cart);
    }
  };

  useEffect(() => {
    document.title = "Checkout";
    loadCart();
    setLoading(false);
  }, []);

  let eliminarProducto = (id) => {
    console.log("El id es: ", id);
    // Delete product from cart in local storage if quantity is 1

    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
      if (item._id === id) {
        if (item.quantity === 1) {
          let newCart = cart.filter((item) => item._id !== id);
          localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
          item.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    });
    alert("Producto eliminado del carrito");
    loadCart();
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-md-7">
          {products.map((product) => {
            return (
              <div className="card mb-3" key={product._id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      className="img-fluid rounded-start h-100"
                      alt="test"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <h5 style={{ color: "black" }}>${product.price}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Cantidad: {product.quantity}
                        </small>
                      </p>
                      <div className="text-start">
                        <button
                          className="btn btn-danger btn-sm"
                          type="button"
                          onClick={() => eliminarProducto(product._id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen de compra</h5>
              <p className="card-text">
                Tenemos envios gratuitos, aprovecha y compra nuestros productos.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Subtotal <b> {total} USD</b>
                  </p>
                  <p>
                    Envio <b> 0.00</b>
                  </p>
                  <p>
                    Total <b> {total} USD</b>
                  </p>
                </div>
              </div>
              <PayPalScriptProvider options={initialOptions}>
                <div className="d-block text-center">
                  {loading ? "Cargando..." : <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: "USD",
                              value: total,
                            },
                          },
                        ],
                      });
                    }}
                  />}
                </div>
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
