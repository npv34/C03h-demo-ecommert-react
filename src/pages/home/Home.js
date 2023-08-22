import {useEffect, useState} from "react";
import ProductService from "../../services/product.service";
import {Link} from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAll().then(res => {
            console.log(res.data.products);
            setProducts(res.data.products)
        })
    }, []);

    return (
        <>


            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.length > 0 && products.map(product => (
                            <div key={product.id} className="col mb-5">
                                <div className="card h-100">

                                    <img className="card-img-top" src={ product.images[0] } alt="..." />

                                    <div className="card-body p-4">
                                        <div className="text-center">

                                            <h5 className="fw-bolder">{product.title}</h5>
                                            $ {product.price}
                                        </div>
                                    </div>

                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={'/products/' + product.id}>View options</Link></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home;