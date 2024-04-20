import { useParams, Link } from 'react-router-dom';
import { getProduct } from "../../services/Product.service";
import { useEffect, useState } from "react";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);


    return (
        <div className="container p-5">
            <div className="col-12" key={product.id}>
            <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt='test' />

                <div className="card-body">
                    <h3>${product.price}</h3>
                    <h4 className='card-title'>{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Carrito</Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;