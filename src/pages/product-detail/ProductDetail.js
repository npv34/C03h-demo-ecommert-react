import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductService from "../../services/product.service";
import {useDispatch} from "react-redux";
import {addCart} from "../../features/cart/cartSlice";

function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [productLast, setProductLast] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {

        Promise.all([ProductService.getProductById(id),
            ProductService.getProductLimit(4, 1) ]).then(res => {
            setProduct(res[0].data)
            setProductLast(res[1].data.products)
        })

    }, []);

    const addProductToCart = (product) => {
        dispatch(addCart(product))
    }

    return (
        <>
            { product && (
                <>
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.images && product.images[0]} alt="..." /></div>
                                <div className="col-md-6">
                                    <div className="small mb-1">SKU: BST-498</div>
                                    <h1 className="display-5 fw-bolder">{ product.title }</h1>
                                    <div className="fs-5 mb-5">
                                        <span>$ {product.price}</span>
                                    </div>
                                    <p className="lead">{ product.description}</p>
                                    <div className="d-flex">
                                        <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => addProductToCart(product)}>
                                            <i className="bi-cart-fill me-1"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5 bg-light">
                        <div className="container px-4 px-lg-5 mt-5">
                            <h2 className="fw-bolder mb-4">Related products</h2>
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                { productLast.length > 0 && productLast.map(item => (
                                    <div className="col mb-5">
                                        <div className="card h-100">

                                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                            <div className="card-body p-4">
                                                <div className="text-center">

                                                    <h5 className="fw-bolder">{ item.title}</h5>

                                                    $ {item.price}
                                                </div>
                                            </div>

                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                </>
            )}

        </>
    )
}

export default ProductDetail;